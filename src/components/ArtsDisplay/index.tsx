import React from "react";

import { Button, Grid } from "@mui/material";
import useLocalStorage from "@src/hooks/useLocalStorage";
import { ArtworkDisplayProps } from "@src/types/artwork";

import ArtCard from "./Card";
import * as S from "./styles";

interface ArtsDisplayProps {
  artworks: ArtworkDisplayProps[];
  onArtClick: (artwork: ArtworkDisplayProps) => void;
  onLoadMore?: () => void;
  hasMore?: boolean;
  loading?: boolean;
}

export default function ArtsDisplay({
  artworks,
  onArtClick,
  onLoadMore,
  hasMore = false,
  loading = false,
}: ArtsDisplayProps) {
  const [favorites] = useLocalStorage<number[]>("favorites", []);

  return (
    <S.Container>
      <Grid container spacing={3}>
        <ArtCard
          artworks={artworks}
          onArtClick={onArtClick}
          favorites={favorites}
        />
      </Grid>

      {hasMore && (
        <S.LoadMoreContainer>
          <Button
            disabled={loading}
            size="small"
            onClick={onLoadMore}
            variant="contained"
          >
            {loading ? "Carregando..." : "Carregar mais"}
          </Button>
        </S.LoadMoreContainer>
      )}
    </S.Container>
  );
}
