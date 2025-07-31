import React, { useState, useEffect } from "react";
import { fetchArtworkWithImages, fetchArtworkDetail } from "../../api";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import Pagination from "../../components/Pagination";
import * as S from "./styles";

interface ArtworkDetail {
  objectID: number;
  title: string;
  artistDisplayName: string;
  objectDate: string;
  medium: string;
  department: string;
  primaryImage: string;
  primaryImageSmall: string;
  objectURL: string;
}

const Home = () => {
  const [artworks, setArtworks] = useState<ArtworkDetail[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalArtworks, setTotalArtworks] = useState(0);
  const itemsPerPage = 12;

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        setLoading(true);
        const artworkIds = await fetchArtworkWithImages();
        console.log("ArtworkIds: ", artworkIds);

        setTotalArtworks(artworkIds.length);

        // Calculate pagination
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const limitedIds = artworkIds.slice(startIndex, endIndex);

        console.log("LimitedIds: ", limitedIds);

        const artworkPromises = limitedIds.map((id) => fetchArtworkDetail(id));
        const artworkResults = await Promise.all(artworkPromises);

        // Filter out null results and artworks without images
        const validArtworks = artworkResults.filter(
          (artwork): artwork is ArtworkDetail =>
            artwork !== null && artwork.primaryImageSmall !== "",
        );

        console.log("VALID ARTWORKS: ", validArtworks);
        setArtworks(validArtworks);
      } catch (err) {
        setError("Failed to fetch artworks");
      } finally {
        setLoading(false);
      }
    };

    fetchArtworks();
  }, [currentPage]);

  if (loading) {
    return <Loader message="Loading artworks..." />;
  }

  if (error) {
    return <Error message={error} />;
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(totalArtworks / itemsPerPage);

  return (
    <S.Container>
      <S.Content>
        <S.Title>Obras</S.Title>
        <S.ArtworkGrid>
          {artworks.map((artwork) => (
            <S.ArtworkCard key={artwork.objectID}>
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
                  <S.InfoText>
                    <S.InfoLabel>Artist:</S.InfoLabel>{" "}
                    {artwork.artistDisplayName}
                  </S.InfoText>
                  <S.InfoText>
                    <S.InfoLabel>Date:</S.InfoLabel> {artwork.objectDate}
                  </S.InfoText>
                  <S.InfoText>
                    <S.InfoLabel>Medium:</S.InfoLabel> {artwork.medium}
                  </S.InfoText>
                  <S.InfoText>
                    <S.InfoLabel>Department:</S.InfoLabel> {artwork.department}
                  </S.InfoText>
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
    </S.Container>
  );
};

export default Home;
