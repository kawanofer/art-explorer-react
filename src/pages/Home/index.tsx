import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "@mui/material";

import ArtsDisplay from "../../components/ArtsDisplay";
import DialogDetails from "../../components/Dialog";
import Error from "../../components/Error";
import Loader from "../../components/Loader";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import SearchBox from "../../components/SearchBox";
import Title from "../../components/Title";

import {
  fetchArtworkDetail,
  fetchArtworkByArtist,
  fetchArtworkByDepartment,
} from "../../api/arts";
import { fetchArtworkIds } from "../../redux/artsSlice";
import { addDetailArts } from "../../redux/detailsArtSlice";
import type { RootState, AppDispatch } from "../../redux/store";
import type {
  ArtworkItemsProps,
  ArtworkDisplayProps,
  ArtworkDetailProps,
} from "../../types/artwork";

import * as S from "./styles";

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { artworkIds, loading, error } = useSelector(
    (state: RootState) => state.arts,
  );

  const [artworks, setArtworks] = useState<ArtworkDisplayProps[]>([]);
  const [fullArtworks, setFullArtworks] = useState<ArtworkItemsProps[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedArt, setSelectedArt] = useState<ArtworkDetailProps>();
  const [loadingMore, setLoadingMore] = useState(false);
  const [isSearchMode, setIsSearchMode] = useState(false);
  const [searching, setSearching] = useState(false);

  const [displayedCount, setDisplayedCount] = useState(15);
  const itemsPerLoad = 15;

  useEffect(() => {
    if (!isSearchMode) {
      dispatch(fetchArtworkIds());
    }
  }, [dispatch, isSearchMode]);

  useEffect(() => {
    if (isSearchMode) return; // Don't load default artworks in search mode

    const fetchArtworks = async () => {
      if (!artworkIds || artworkIds.length === 0) {
        return;
      }

      setLoadingMore(true);

      try {
        // Get IDs for current display count
        const limitedIds = artworkIds.slice(0, displayedCount);

        // Filter out already loaded artworks
        const alreadyLoadedIds = fullArtworks.map(
          (artwork) => artwork.objectID,
        );
        const newIds = limitedIds.filter(
          (id) => !alreadyLoadedIds.includes(id),
        );

        if (newIds.length === 0) {
          setLoadingMore(false);
          return;
        }

        // Fetch artwork details for new IDs
        const artworkPromises = newIds.map((id: number) =>
          fetchArtworkDetail(id),
        );

        const artworkResults = await Promise.all(artworkPromises);

        // Filter out null results and artworks without images
        const validArtworks = artworkResults.filter(
          (artwork): artwork is ArtworkItemsProps =>
            artwork !== null &&
            typeof artwork.primaryImageSmall === "string" &&
            artwork.primaryImageSmall !== "",
        );

        // Add to Redux store
        dispatch(addDetailArts(validArtworks));

        // Merge with existing artworks
        const updatedFullArtworks = [...fullArtworks, ...validArtworks];
        setFullArtworks(updatedFullArtworks);

        // Map to the format expected by ArtsDisplay component
        const mappedArtworks: ArtworkDisplayProps[] = updatedFullArtworks.map(
          (artwork) => ({
            objectID: artwork.objectID,
            primaryImageSmall: artwork.primaryImageSmall,
            title: artwork.title,
            constituents: artwork.constituents,
            objectDate: artwork.objectDate,
            department: artwork.department,
          }),
        );

        setArtworks(mappedArtworks);
      } catch (error) {
        console.error("Error fetching artworks:", error);
        toast.error("Erro ao carregar as obras de arte");
      } finally {
        setLoadingMore(false);
      }
    };

    fetchArtworks();
  }, [artworkIds, displayedCount, dispatch, isSearchMode]);

  // Show loading if fetching artwork IDs or searching
  if (loading || searching) return <Loader />;

  if (error) return <Error message={error} />;

  if (!isSearchMode && (!artworkIds || artworkIds.length === 0)) {
    return <Error message="Nenhuma obra encontrada com imagens." />;
  }

  const handleLoadMore = () => {
    if (isSearchMode) {
      // In search mode, we don't support load more
      return;
    }
    setDisplayedCount((prev) => prev + itemsPerLoad);
  };

  const hasMore =
    !isSearchMode && artworkIds && displayedCount < artworkIds.length;

  const onSearch = async (
    query: string,
    searchType: string,
    selectedDepartment: number,
  ) => {
    // Reset states
    setArtworks([]);
    setFullArtworks([]);
    setIsSearchMode(true);
    setSearching(true);

    debugger;
    try {
      let searchResults = [];

      if (searchType === "artist") {
        if (!query.trim()) {
          setIsSearchMode(false);
          setSearching(false);
          return;
        }

        searchResults = await fetchArtworkByArtist(query.trim());
      } else if (searchType === "department") {
        if (!selectedDepartment) {
          setIsSearchMode(false);
          setSearching(false);
          return;
        }

        searchResults = await fetchArtworkByDepartment(selectedDepartment);
      }

      if (searchResults && searchResults.length > 0) {
        console.log("1 Search by department:", searchResults.length);

        // Store as fullArtworks
        setFullArtworks(searchResults as ArtworkItemsProps[]);

        // Map to display format
        const mappedArtworks: ArtworkDisplayProps[] = searchResults.map(
          (artwork) => ({
            objectID: artwork.objectID,
            primaryImageSmall: artwork.primaryImageSmall,
            title: artwork.title,
            constituents: artwork.constituents,
            objectDate: artwork.objectDate,
            department: artwork.department,
          }),
        );

        console.log("3 Mapped artworks:", mappedArtworks.length);
        setArtworks(mappedArtworks);

        // Add to Redux store
        dispatch(addDetailArts(searchResults as ArtworkItemsProps[]));

        toast.success(`${searchResults.length} obra(s) encontrada(s)`);
      } else {
        setArtworks([]);
        setFullArtworks([]);
        toast.info("Nenhuma obra encontrada para esta busca");
      }
    } catch (error) {
      console.error("Search error:", error);
      toast.error("Erro ao realizar a busca");
      setIsSearchMode(false);
    } finally {
      setSearching(false);
    }
  };

  const handleBackToDefault = () => {
    setIsSearchMode(false);
    setDisplayedCount(15);
    setArtworks([]);
    setFullArtworks([]);
  };

  const handleArtClick = (artwork: ArtworkDisplayProps) => {
    // Find the full artwork data from fullArtworks
    const fullArtwork = fullArtworks.find(
      (item) => item.objectID === artwork.objectID,
    );

    if (!fullArtwork) {
      toast.error("Erro ao carregar detalhes da obra");
      return;
    }

    // Filter constituents to show only artists, ensuring we have a valid array
    const constituents =
      fullArtwork.constituents?.filter(
        (constituent) => constituent.role === "Artist",
      ) || [];

    // Create artwork for dialog with guaranteed constituents array
    const artworkForDialog: ArtworkDetailProps = {
      ...fullArtwork,
      constituents: constituents,
    };

    setSelectedArt(artworkForDialog);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedArt(undefined);
  };

  const shouldShowEmptySearch = isSearchMode && artworks.length === 0;

  return (
    <S.Container>
      <S.Content>
        <Title>Obras</Title>
        <SearchBox onSearch={onSearch} />

        {isSearchMode && (
          <S.SearchInfo>
            <span>
              Resultados da busca ({artworks.length} obra(s) encontrada(s))
            </span>
            <Button variant="outlined" onClick={handleBackToDefault}>
              Voltar para todas as obras
            </Button>
          </S.SearchInfo>
        )}

        {shouldShowEmptySearch ? (
          <Error message="Nenhuma obra encontrada para esta busca." />
        ) : (
          artworks.length > 0 && (
            <ArtsDisplay
              artworks={artworks}
              onArtClick={handleArtClick}
              onLoadMore={handleLoadMore}
              hasMore={hasMore}
              loading={loadingMore}
            />
          )
        )}
      </S.Content>

      {selectedArt && (
        <DialogDetails
          open={isDialogOpen}
          artDetail={selectedArt}
          onClose={handleCloseDialog}
        />
      )}
      {/* Scroll to Top Button */}
      <ScrollToTopButton />
    </S.Container>
  );
};

export default Home;
