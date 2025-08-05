import React from 'react';

import FavoriteSelected from '@mui/icons-material/Favorite';
import FavoriteNotSelected from '@mui/icons-material/FavoriteBorder';
import { IconButton, Tooltip } from '@mui/material';
import toast from 'react-hot-toast';

import useLocalStorage from '@src/hooks/useLocalStorage';

type FavoriteIconProps = {
  isFavorite: boolean;
  objectID: number;
};

export default function FavoriteIcon({
  isFavorite,
  objectID,
}: FavoriteIconProps) {
  const [favorites, setFavorites] = useLocalStorage<number[]>('favorites', []);

  const handleClickFavorite = (event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent card click

    if (isFavorite) {
      // Remove from favorites
      const updatedFavorites = favorites.filter(id => id !== objectID);
      setFavorites(updatedFavorites);
      toast.success('Obra removida dos favoritos!');
    } else {
      // Add to favorites (check if not already exists to avoid duplicates)
      if (!favorites.includes(objectID)) {
        const updatedFavorites = [...favorites, objectID];
        setFavorites(updatedFavorites);
        toast.success('Obra adicionada aos favoritos!');
      }
    }
  };

  return (
    <Tooltip
      title={isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
    >
      <IconButton
        size="small"
        aria-label={
          isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'
        }
        onClick={handleClickFavorite}
      >
        {isFavorite ? (
          <FavoriteSelected color="error" />
        ) : (
          <FavoriteNotSelected color="info" />
        )}
      </IconButton>
    </Tooltip>
  );
}
