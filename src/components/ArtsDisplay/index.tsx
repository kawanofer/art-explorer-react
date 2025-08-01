import React from "react";
import { Card, CardContent, CardMedia, Box, Grid } from "@mui/material";
import { isEmpty } from "lodash";
import FavoriteIcon from "../FavoriteIcon";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useTheme } from "@mui/material/styles";

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
  const theme = useTheme();

  return (
    <Grid container spacing={3}>
      {artworks.map((artwork) => (
        <Grid item xs={12} sm={6} md={4} key={artwork.objectID}>
          <Card
            sx={{
              maxWidth: "100%",
              cursor: "pointer",
              transition: "transform 0.2s",
              "&:hover": {
                transform: "translateY(-4px)",
              },
            }}
            onClick={() => onArtClick(artwork)}
          >
            <Box sx={{ position: "relative" }}>
              <CardMedia
                component="img"
                height="300"
                image={artwork.primaryImageSmall}
                alt={artwork.title}
                onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                  e.currentTarget.src =
                    "https://via.placeholder.com/400x400?text=No+Image";
                }}
                sx={{ objectFit: "cover" }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                  backgroundColor: theme.palette.background.paper,
                  borderRadius: "50%",
                  padding: "4px",
                  backdropFilter: "blur(4px)",
                  boxShadow: theme.shadows[2],
                }}
              >
                <FavoriteIcon
                  isFavorite={favorites.includes(artwork.objectID)}
                  objectId={artwork.objectID}
                />
              </Box>
            </Box>
            <CardContent>
              <S.InfoLabel>{artwork.title}</S.InfoLabel>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
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
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
