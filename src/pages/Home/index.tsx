import React, { useState, useEffect } from "react";
import { useArtworkWithImages } from "../../api/queries";
import { fetchArtworkDetail } from "../../api/arts";

import { isEmpty } from "lodash";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import Pagination from "../../components/Pagination";
import Title from "../../components/Title";
import * as S from "./styles";
import SearchBox from "../../components/SearchBox";
import { Divider } from "@mui/material";
import DialogDetails from "../../components/Dialog";
import toast from "react-hot-toast";

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
  const { data: artworkIds, isLoading, error } = useArtworkWithImages();

  const [artworks, setArtworks] = useState<ArtworkItemsProps[]>([]);
  const [loading, setLoading] = useState(true);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [artSelected, setArtSelected] = useState<ArtworkItemsProps>();

  const [currentPage, setCurrentPage] = useState(1);
  const [totalArtworks, setTotalArtworks] = useState(0);
  const itemsPerPage = 12;

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        setLoading(true);

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
      } finally {
        setLoading(false);
      }
    };

    fetchArtworks();
  }, [artworkIds, currentPage]);

  if (loading || isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error message={error.message} />;
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const onSearch = async (query: string, searchType: string) => {
    console.log("Search query: ", query);
    console.log("Search type: ", searchType);
  };

  const totalPages = Math.ceil(totalArtworks / itemsPerPage);

  const handleDetailsClick = (artwork: ArtworkItemsProps) => {
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
        <Divider sx={{ margin: "20px 0" }} />
        <S.ArtworkGrid>
          {artworks.map((artwork) => (
            <S.ArtworkCard
              key={artwork.objectID}
              onClick={() => handleDetailsClick(artwork)}
            >
              <S.ImageContainer>
                <S.ArtworkImage
                  src={artwork.primaryImageSmall}
                  alt={artwork.title}
                  onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                    e.currentTarget.src =
                      "https://via.placeholder.com/400x400?text=No+Image";
                  }}
                />
              </S.ImageContainer>
              <S.CardContent>
                <S.ArtworkTitle>{artwork.title}</S.ArtworkTitle>
                <S.InfoContainer>
                  {!isEmpty(artwork.constituents) && (
                    <S.InfoText>
                      {artwork.constituents.map((artist, index) => (
                        <span key={index}>
                          {artist.name}
                          <br />
                        </span>
                      ))}
                    </S.InfoText>
                  )}
                  {!isEmpty(artwork.objectDate) && (
                    <S.InfoText>{artwork.objectDate}</S.InfoText>
                  )}
                  {!isEmpty(artwork.department) && (
                    <S.InfoText>{artwork.department}</S.InfoText>
                  )}
                </S.InfoContainer>
              </S.CardContent>
            </S.ArtworkCard>
          ))}
        </S.ArtworkGrid>
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
