import React from "react";
import { Grid } from "@mui/material";
import { isEmpty } from "lodash";

import FavoriteIcon from "../FavoriteIcon";
import useLocalStorage from "../../hooks/useLocalStorage";

import * as S from "./styles";

interface Artwork {
  objectID: number;
  primaryImageSmall: string;
  title: string;
  constituents?: { name: string }[];
  objectDate?: string;
  department?: string;
}

interface ArtsDisplayProps {
  artworks: Artwork[];
  onArtClick: (artwork: Artwork) => void;
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
        {artworks.map((artwork) => (
          <Grid item xs={12} sm={6} md={3} key={artwork.objectID}>
            <S.StyledCard onClick={() => onArtClick(artwork)}>
              <S.StyledCardContent>
                <div style={{ position: "relative" }}>
                  <S.CardMedia
                    src={artwork.primaryImageSmall}
                    alt={artwork.title}
                    onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/placeholder-image.jpg";
                    }}
                  />
                  <S.StyledFavoriteIconContainer>
                    <FavoriteIcon
                      objectID={artwork.objectID}
                      isFavorite={favorites.includes(artwork.objectID)}
                    />
                  </S.StyledFavoriteIconContainer>
                </div>
                {!isEmpty(artwork.title) && (
                  <S.InfoLabel>{artwork.title}</S.InfoLabel>
                )}
                {!isEmpty(artwork.constituents) && (
                  <S.InfoText>
                    {artwork.constituents?.map((c) => c.name).join(", ")}
                  </S.InfoText>
                )}
                {!isEmpty(artwork.objectDate) && (
                  <S.InfoText>{artwork.objectDate}</S.InfoText>
                )}
                {!isEmpty(artwork.department) && (
                  <S.InfoText>{artwork.department}</S.InfoText>
                )}
              </S.StyledCardContent>
            </S.StyledCard>
          </Grid>
        ))}
      </Grid>

      {hasMore && (
        <S.LoadMoreContainer>
          <S.LoadMoreButton
            onClick={onLoadMore}
            disabled={loading}
            variant="contained"
          >
            {loading ? "Carregando..." : "Carregar mais"}
          </S.LoadMoreButton>
        </S.LoadMoreContainer>
      )}
    </S.Container>
  );
}
