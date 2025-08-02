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
}

export default function ArtsDisplay({
  artworks,
  onArtClick,
}: ArtsDisplayProps) {
  const [favorites] = useLocalStorage<number[]>("favorites", []);

  return (
    <Grid container spacing={3}>
      {artworks.map((artwork) => (
        <Grid item xs={12} sm={6} md={3} key={artwork.objectID}>
          <S.Card onClick={() => onArtClick(artwork)}>
            <S.CardWrapper>
              <div style={{ position: "relative" }}>
                <S.CardMedia
                  src={artwork.primaryImageSmall}
                  alt={artwork.title}
                  onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                    e.currentTarget.src =
                      "https://via.placeholder.com/400x400?text=No+Image";
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                  }}
                >
                  <S.StyledFavoriteIconContainer>
                    <FavoriteIcon
                      isFavorite={favorites.includes(artwork.objectID)}
                      objectId={artwork.objectID}
                    />
                  </S.StyledFavoriteIconContainer>
                </div>
              </div>

              <S.InfoLabel>{artwork.title}</S.InfoLabel>
              {!isEmpty(artwork.constituents) && (
                <S.InfoText>
                  {(artwork.constituents ?? []).map((artist, index) => (
                    <span key={index}>
                      {artist.name}
                      {index < (artwork.constituents?.length ?? 0) - 1 && (
                        <br />
                      )}
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
            </S.CardWrapper>
          </S.Card>
        </Grid>
      ))}
    </Grid>
  );
}
