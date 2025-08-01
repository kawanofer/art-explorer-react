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
import type { RootState, AppDispatch } from "../../redux/store";

import * as S from "./styles";

interface constituentsProps {
  name: string;
  role: string;
}

interface ArtworkItemsProps {
  additionalImages: string[];
  constituents: constituentsProps[];
  artistDisplayName: string;
  artistPrefix: string;
  department: string;
  dimensions: string;
  medium: string;
  objectDate: string;
  objectID: number;
  objectURL: string;
  primaryImage: string;
  primaryImageSmall: string;
  title: string;
}

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { artworkIds, loading, error } = useSelector(
    (state: RootState) => state.arts,
  );

  const [artworks, setArtworks] = useState<ArtworkItemsProps[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [artSelected, setArtSelected] = useState<ArtworkItemsProps>();

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

        setArtworks(validArtworks);
      } catch (err) {
        console.error("Error fetching artworks:", err);
      }
    };

    fetchArtworks();
  }, [artworkIds, currentPage]);

  if (loading) return <Loader />;

  if (error) return <Error message={error} />;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const onSearch = async (query: string, searchType: string) => {
    console.log("Search query: ", query);
    console.log("Search type: ", searchType);
  };

  const totalPages = Math.ceil(totalArtworks / itemsPerPage);

  const handleArtClick = (artwork: ArtworkItemsProps) => {
    const constituents = artwork.constituents.filter(
      (constituent) => constituent.role === "Artist",
    );

    const artworkFilteredByConstituents = { ...artwork, constituents };

    setArtSelected(artworkFilteredByConstituents);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setArtSelected(undefined);
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

      {artSelected && (
        <DialogDetails
          open={isDialogOpen}
          artDetail={artSelected}
          onClose={handleCloseDialog}
        />
      )}
    </S.Container>
  );
};

export default Home;
