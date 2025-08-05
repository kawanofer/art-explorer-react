import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import toast from 'react-hot-toast';

import useLocalStorage from '@src/hooks/useLocalStorage';

import FavoriteIcon from './index';

// Mock das dependências
jest.mock('react-hot-toast', () => ({
  success: jest.fn(),
}));

jest.mock('@src/hooks/useLocalStorage', () => ({
  __esModule: true,
  default: jest.fn(),
}));

// Mock dos ícones do MUI
jest.mock('@mui/icons-material/Favorite', () => ({
  __esModule: true,
  default: ({ color }: { color: string }) => (
    <div data-testid="favorite-selected" data-color={color}>
      ❤️
    </div>
  ),
}));

jest.mock('@mui/icons-material/FavoriteBorder', () => ({
  __esModule: true,
  default: ({ color }: { color: string }) => (
    <div data-testid="favorite-not-selected" data-color={color}>
      🤍
    </div>
  ),
}));

describe('FavoriteIcon Component', () => {
  const mockSetFavorites = jest.fn();
  const mockUseLocalStorage = useLocalStorage as jest.MockedFunction<
    typeof useLocalStorage
  >;
  const mockToastSuccess = toast.success as jest.Mock;
  const user = userEvent.setup();

  beforeEach(() => {
    jest.clearAllMocks();
    mockUseLocalStorage.mockReturnValue([[], mockSetFavorites]);
  });

  describe('Rendering Tests', () => {
    it('should render favorite icon when isFavorite is true', () => {
      render(<FavoriteIcon isFavorite={true} objectID={123} />);

      expect(screen.getByTestId('favorite-selected')).toBeInTheDocument();
      expect(
        screen.queryByTestId('favorite-not-selected')
      ).not.toBeInTheDocument();
    });

    it('should render not favorite icon when isFavorite is false', () => {
      render(<FavoriteIcon isFavorite={false} objectID={123} />);

      expect(screen.getByTestId('favorite-not-selected')).toBeInTheDocument();
      expect(screen.queryByTestId('favorite-selected')).not.toBeInTheDocument();
    });
  });

  describe('Add to Favorites Functionality', () => {
    it('should add artwork to favorites when not favorite', async () => {
      mockUseLocalStorage.mockReturnValue([[], mockSetFavorites]);

      render(<FavoriteIcon isFavorite={false} objectID={123} />);

      const button = screen.getByRole('button');
      await user.click(button);

      expect(mockSetFavorites).toHaveBeenCalledWith([123]);
      expect(mockToastSuccess).toHaveBeenCalledWith(
        'Obra adicionada aos favoritos!'
      );
    });

    it('should add to existing favorites list', async () => {
      mockUseLocalStorage.mockReturnValue([[456, 789], mockSetFavorites]);

      render(<FavoriteIcon isFavorite={false} objectID={123} />);

      const button = screen.getByRole('button');
      await user.click(button);

      expect(mockSetFavorites).toHaveBeenCalledWith([456, 789, 123]);
      expect(mockToastSuccess).toHaveBeenCalledWith(
        'Obra adicionada aos favoritos!'
      );
    });
  });

  describe('Remove from Favorites Functionality', () => {
    it('should remove artwork from favorites when favorite', async () => {
      mockUseLocalStorage.mockReturnValue([[123, 456, 789], mockSetFavorites]);

      render(<FavoriteIcon isFavorite={true} objectID={456} />);

      const button = screen.getByRole('button');
      await user.click(button);

      expect(mockSetFavorites).toHaveBeenCalledWith([123, 789]);
      expect(mockToastSuccess).toHaveBeenCalledWith(
        'Obra removida dos favoritos!'
      );
    });

    it('should remove from single item favorites list', async () => {
      mockUseLocalStorage.mockReturnValue([[123], mockSetFavorites]);

      render(<FavoriteIcon isFavorite={true} objectID={123} />);

      const button = screen.getByRole('button');
      await user.click(button);

      expect(mockSetFavorites).toHaveBeenCalledWith([]);
      expect(mockToastSuccess).toHaveBeenCalledWith(
        'Obra removida dos favoritos!'
      );
    });
  });

  describe('LocalStorage Integration', () => {
    it('should use correct localStorage key', () => {
      render(<FavoriteIcon isFavorite={false} objectID={123} />);

      expect(mockUseLocalStorage).toHaveBeenCalledWith('favorites', []);
    });
  });
});
