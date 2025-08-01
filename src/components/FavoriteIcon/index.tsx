import React from "react";
import FavoriteNotSelected from "@mui/icons-material/FavoriteBorder";
import FavoriteSelected from "@mui/icons-material/Favorite";
import { IconButton, Tooltip } from "@mui/material";
import useLocalStorage from "../../hooks/useLocalStorage";
import toast from "react-hot-toast";

type FavoriteIconProps = {
  isFavorite: boolean;
  objectId: number;
};

export default function FavoriteIcon({
  isFavorite,
  objectId,
}: FavoriteIconProps) {
  const [favorites, setFavorites] = useLocalStorage<number[]>("favorites", []);

  const handleClickFavorite =
    (action: "add" | "remove") => (event: React.MouseEvent) => {
      event.stopPropagation(); // Prevent card click
      if (action === "add") {
        setFavorites([...favorites, objectId]);
        toast.success("Obra adicionada aos favoritos!");
      } else {
        setFavorites(favorites.filter((id) => id !== objectId));
        toast.success("Obra removida dos favoritos!");
      }
    };

  return isFavorite ? (
    <Tooltip title="Remover dos favoritos">
      <IconButton
        size="small"
        aria-label="Remover dos favoritos"
        onClick={handleClickFavorite("remove")}
      >
        <FavoriteSelected color="error" />
      </IconButton>
    </Tooltip>
  ) : (
    <Tooltip title="Adicionar aos favoritos">
      <IconButton
        size="small"
        aria-label="Adicionar aos favoritos"
        onClick={handleClickFavorite("add")}
      >
        <FavoriteNotSelected />
      </IconButton>
    </Tooltip>
  );
}
