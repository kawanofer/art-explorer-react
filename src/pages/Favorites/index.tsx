import React, { useState, useEffect } from "react";
import * as S from "./styles";
import Title from "../../components/Title";
import useLocalStorage from "../../hooks/useLocalStorage";
import ArtsDisplay from "../../components/ArtsDisplay";
import Loader from "../../components/Loader";
import DialogDetails from "../../components/Dialog";

import { fetchArtworkDetail } from "../../api/arts";
import type {
  ArtworkItemsProps,
  ArtworkDisplayProps,
  ArtworkDetailProps,
} from "../../types/artwork";

function Favorites() {
  const [favorites] = useLocalStorage<number[]>("favorites", []);
  const [artworks, setArtworks] = useState<ArtworkDisplayProps[]>([]);
  const [fullArtworks, setFullArtworks] = useState<ArtworkItemsProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedArt, setSelectedArt] = useState<ArtworkDetailProps>();

  useEffect(() => {
    const fetchFavoriteArtworks = async () => {
      if (favorites.length === 0) {
        setArtworks([]);
        setFullArtworks([]);
        return;
      }

      setLoading(true);
      try {
        const artworkPromises = favorites.map((id: number) =>
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
        // Error fetching favorite artworks - silently handle
      } finally {
        setLoading(false);
      }
    };

    fetchFavoriteArtworks();
  }, [favorites]);

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

  if (loading) {
    return (
      <S.Container>
        <S.Content>
          <Loader />
        </S.Content>
      </S.Container>
    );
  }

  if (favorites.length === 0) {
    return (
      <S.Container>
        <S.Content>
          <Title>Nenhuma obra favoritada ainda.</Title>
        </S.Content>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <S.Content>
        <Title>Favoritos ({artworks.length})</Title>
        <ArtsDisplay artworks={artworks} onArtClick={handleArtClick} />
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
}

export default Favorites;
