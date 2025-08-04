import React from "react";

import { Grid } from "@mui/material";
import { ArtworkDisplayProps } from "@src/types/artwork";
import { isEmpty } from "lodash";
import * as motion from "motion/react-client";

import FavoriteIcon from "../../FavoriteIcon";
import * as S from "../styles";

interface ArtCardProps {
  artworks: ArtworkDisplayProps[];
  onArtClick: (artwork: ArtworkDisplayProps) => void;
  favorites: number[];
}

export default function ArtCard({
  artworks,
  onArtClick,
  favorites,
}: ArtCardProps) {
  return (
    <>
      {artworks.map((artwork) => (
        <Grid item xs={12} sm={6} md={3} key={artwork.objectID}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1.1 }}>
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
                <br />
                {!isEmpty(artwork.objectDate) && (
                  <S.InfoText>{artwork.objectDate}</S.InfoText>
                )}
                {!isEmpty(artwork.department) && (
                  <S.InfoText>{artwork.department}</S.InfoText>
                )}
              </S.StyledCardContent>
            </S.StyledCard>
          </motion.div>
        </Grid>
      ))}
    </>
  );
}
