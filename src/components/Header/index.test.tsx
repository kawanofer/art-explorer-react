import React from 'react';

import { fireEvent, render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Header from './index';

// Mock do logo SVG
jest.mock('../../assets/logo.svg', () => 'mocked-logo.svg');

// Mock do ThemeToggle
jest.mock('../ThemeToggle', () => ({
  __esModule: true,
  default: () => <div data-testid="theme-toggle">Theme Toggle</div>,
}));

// Mock do useNavigate
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

// Wrapper com MemoryRouter para testes (mais adequado)
const renderWithRouter = (
  component: React.ReactElement,
  initialEntries = ['/']
) => {
  return render(
    <MemoryRouter initialEntries={initialEntries}>{component}</MemoryRouter>
  );
};

describe('Header Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Rendering', () => {
    it('should render mobile menu button', () => {
      renderWithRouter(<Header />);

      const mobileMenuButton = screen.getByText('☰');
      expect(mobileMenuButton).toBeInTheDocument();
    });

    it('should render navigation links with correct href attributes', () => {
      renderWithRouter(<Header />);

      const obrasLink = screen.getAllByText('Obras')[0].closest('a');
      const favoritasLink = screen.getAllByText('Favoritas')[0].closest('a');

      expect(obrasLink).toHaveAttribute('href', '/');
      expect(favoritasLink).toHaveAttribute('href', '/favorites');
    });

    it('should render desktop navigation specifically', () => {
      renderWithRouter(<Header />);

      const desktopNav = screen.getByTestId('desktop-nav');
      expect(within(desktopNav).getByText('Obras')).toBeInTheDocument();
      expect(within(desktopNav).getByText('Favoritas')).toBeInTheDocument();
    });

    it('should render mobile navigation specifically', () => {
      renderWithRouter(<Header />);

      const mobileNav = screen.getByTestId('mobile-nav');
      expect(within(mobileNav).getByText('Obras')).toBeInTheDocument();
      expect(within(mobileNav).getByText('Favoritas')).toBeInTheDocument();
    });
  });

  describe('Logo Functionality', () => {
    it('should navigate to home when logo is clicked', () => {
      renderWithRouter(<Header />);

      const logoSection = screen.getByText('Art Explorer').closest('div');
      fireEvent.click(logoSection!);

      expect(mockNavigate).toHaveBeenCalledWith('/');
    });
  });

  describe('Navigation Links', () => {
    it('should render correct number of navigation items', () => {
      renderWithRouter(<Header />);

      // Verificar desktop navigation
      const obrasLinks = screen.getAllByText('Obras');
      const favoritasLinks = screen.getAllByText('Favoritas');

      // Pelo menos um link de cada (desktop navigation)
      expect(obrasLinks.length).toBeGreaterThanOrEqual(1);
      expect(favoritasLinks.length).toBeGreaterThanOrEqual(1);
    });

    it('should have proper accessibility attributes', () => {
      renderWithRouter(<Header />);

      const logo = screen.getByAltText('Art Explorer Logo');
      expect(logo).toHaveAttribute('alt', 'Art Explorer Logo');
    });
  });
});
