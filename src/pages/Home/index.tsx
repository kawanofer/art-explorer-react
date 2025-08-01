import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

import ArtsDisplay from "../../components/ArtsDisplay";
import DialogDetails from "../../components/Dialog";
import Error from "../../components/Error";
import Loader from "../../components/Loader";
import Pagination from "../../components/Pagination";
import SearchBox from "../../components/SearchBox";
import Title from "../../components/Title";

import { fetchArtworkDetail } from "../../api/arts";
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

  const [currentPage, setCurrentPage] = useState(1);
  const [totalArtworks, setTotalArtworks] = useState(0);
  const itemsPerPage = 15;

  useEffect(() => {
    dispatch(fetchArtworkIds());
  }, [dispatch]);

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        if (!artworkIds) {
          toast.error("Nenhuma obra encontrada com imagens.");
          return;
        }

        setTotalArtworks(artworkIds?.length);

        // Calculate pagination
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const limitedIds = artworkIds.slice(startIndex, endIndex);

        const artworkPromises = limitedIds.map((id: number) =>
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

        dispatch(addDetailArts(validArtworks));

        // Store full artworks data
        setFullArtworks(validArtworks);

        // Map to the format expected by ArtsDisplay component
        const mappedArtworks = validArtworks.map((artwork) => ({
          objectID: artwork.objectID,
          primaryImageSmall: artwork.primaryImageSmall,
          title: artwork.title,
          constituents: artwork.constituents,
          objectDate: artwork.objectDate,
          department: artwork.department,
        }));

        setArtworks(mappedArtworks);
      } catch {
        // Error fetching artworks - silently handle
      }
    };

    fetchArtworks();
  }, [artworkIds, currentPage, dispatch]);

  if (loading) return <Loader />;

  if (error) return <Error message={error} />;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const onSearch = () => {
    // Search functionality to be implemented later
  };

  const totalPages = Math.ceil(totalArtworks / itemsPerPage);

  const handleArtClick = (artwork: ArtworkDisplayProps) => {
    // Find the full artwork data from fullArtworks
    const fullArtwork = fullArtworks.find(
      (item) => item.objectID === artwork.objectID,
    );

    if (!fullArtwork) return;

    const constituents =
      fullArtwork.constituents?.filter(
        (constituent) => constituent.role === "Artist",
      ) || [];

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

  return (
    <S.Container>
      <S.Content>
        <Title>Obras</Title>
        <SearchBox onSearch={onSearch}></SearchBox>
        <ArtsDisplay artworks={artworks} onArtClick={handleArtClick} />
        {artworks.length > 0 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            itemsPerPage={itemsPerPage}
            totalItems={totalArtworks}
          />
        )}
      </S.Content>

      {selectedArt && (
        <DialogDetails
          open={isDialogOpen}
          artDetail={selectedArt}
          onClose={handleCloseDialog}
        />
      )}
    </S.Container>
  );
};

export default Home;
