import React from "react";
import FavoriteNotSelected from "@mui/icons-material/FavoriteBorder";
import FavoriteSelected from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";

type FavoriteIconProps = {
  isFavorite: boolean;
};

export default function FavoriteIcon({ isFavorite }: FavoriteIconProps) {
  return isFavorite ? (
    <IconButton size="small" aria-label="Remover dos favoritos">
      <FavoriteSelected color="error" />
    </IconButton>
  ) : (
    <IconButton size="small" aria-label="Adicionar aos favoritos">
      <FavoriteNotSelected />
    </IconButton>
  );
}
