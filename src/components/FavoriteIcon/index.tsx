import React from "react";
import FavoriteNotSelected from "@mui/icons-material/FavoriteBorder";
import FavoriteSelected from "@mui/icons-material/Favorite";
import { IconButton, Tooltip } from "@mui/material";

type FavoriteIconProps = {
  isFavorite: boolean;
  onClickFavorite?: (action: 'add' | 'remove') => void;
};

export default function FavoriteIcon({ isFavorite, onClickFavorite }: FavoriteIconProps) {

  return isFavorite ? (
    <Tooltip title="Remover dos favoritos">
      <IconButton size="small" aria-label="Remover dos favoritos" onClick={() => onClickFavorite?.('remove')}>
        <FavoriteSelected color="error" />
      </IconButton>
    </Tooltip>
  ) : (
    <Tooltip title="Adicionar aos favoritos">
      <IconButton size="small" aria-label="Adicionar aos favoritos" onClick={() => onClickFavorite?.('add')}>
        <FavoriteNotSelected />
      </IconButton>
    </Tooltip>
  );
}