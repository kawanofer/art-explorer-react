import React from 'react';

import { render, screen } from '@testing-library/react';

import { ArtworkDisplayProps } from '@src/types/artwork';

import ArtCard from './index';

// Mock do FavoriteIcon
jest.mock('../../FavoriteIcon', () => ({
  __esModule: true,
  default: ({
    objectID,
    isFavorite,
  }: {
    objectID: number;
    isFavorite: boolean;
  }) => (
    <div data-testid={`favorite-icon-${objectID}`} data-favorite={isFavorite}>
      {isFavorite ? '❤️' : '🤍'}
    </div>
  ),
}));

// Mock do motion/react-client
jest.mock('motion/react-client', () => ({
  div: ({ children, ...props }: any) => (
    <div data-testid="motion-div" {...props}>
      {children}
    </div>
  ),
}));

// Mock do lodash isEmpty
jest.mock('lodash', () => ({
  isEmpty: (value: any) => {
    if (value === null || value === undefined || value === '') return true;
    if (Array.isArray(value)) return value.length === 0;
    if (typeof value === 'object') return Object.keys(value).length === 0;
    return false;
  },
}));

// Mock de dados de artwork para testes
const mockArtworks: ArtworkDisplayProps[] = [
  {
    objectID: 1,
    title: 'The Starry Night',
    primaryImageSmall: 'https://example.com/starry-night.jpg',
    constituents: [
      {
        name: 'Vincent van Gogh',
        constituentID: 1,
        role: 'Artist',
        constituentULAN_URL: '',
        gender: 'Male',
        constituentWikidata_URL: '',
      },
    ],
    objectDate: '1889',
    department: 'European Paintings',
    isHighlight: false,
    accessionNumber: '1975.1.194',
    isPublicDomain: true,
    primaryImage: 'https://example.com/starry-night-large.jpg',
    additionalImages: [],
    objectName: 'Painting',
    culture: 'Dutch',
    period: '',
    dynasty: '',
    reign: '',
    portfolio: '',
    artistRole: 'Artist',
    artistPrefix: '',
    artistDisplayName: 'Vincent van Gogh',
    artistDisplayBio: 'Dutch, 1853–1890',
    artistSuffix: '',
    artistAlphaSort: 'Gogh, Vincent van',
    artistNationality: 'Dutch',
    artistBeginDate: '1853',
    artistEndDate: '1890',
    artistGender: '',
    artistWikidata_URL: '',
    artistULAN_URL: '',
    objectURL: 'https://www.metmuseum.org/art/collection/search/436532',
    tags: [],
    objectWikidata_URL: '',
    isTimelineWork: false,
    GalleryNumber: '',
  },
  {
    objectID: 2,
    title: 'Mona Lisa Copy',
    primaryImageSmall: 'https://example.com/mona-lisa.jpg',
    constituents: [
      {
        name: 'Unknown Artist',
        constituentID: 2,
        role: 'Artist',
        gender: 'Unknown',
        constituentULAN_URL: '',
        constituentWikidata_URL: '',
      },
    ],
    objectDate: '16th century',
    department: 'European Paintings',
    isHighlight: true,
    accessionNumber: '1975.1.195',
    isPublicDomain: true,
    primaryImage: 'https://example.com/mona-lisa-large.jpg',
    additionalImages: [],
    objectName: 'Painting',
    culture: 'Italian',
    period: 'Renaissance',
    dynasty: '',
    reign: '',
    portfolio: '',
    artistRole: 'Artist',
    artistPrefix: '',
    artistDisplayName: 'Unknown Artist',
    artistDisplayBio: '',
    artistSuffix: '',
    artistAlphaSort: 'Unknown Artist',
    artistNationality: '',
    artistBeginDate: '',
    artistEndDate: '',
    artistGender: '',
    artistWikidata_URL: '',
    artistULAN_URL: '',
    objectURL: 'https://www.metmuseum.org/art/collection/search/436533',
    tags: [],
    objectWikidata_URL: '',
    isTimelineWork: false,
    GalleryNumber: '',
  },
  {
    objectID: 3,
    title: '', // Título vazio para testar isEmpty
    // ✅ Usar placeholder ou null em vez de string vazia
    primaryImageSmall: 'https://example.com/placeholder.jpg', // ou '/placeholder-image.jpg'
    constituents: [], // Array vazio para testar isEmpty
    objectDate: '',
    department: '',
    isHighlight: false,
    accessionNumber: '1975.1.196',
    isPublicDomain: false,
    primaryImage: '',
    additionalImages: [],
    objectName: 'Sculpture',
    culture: '',
    period: '',
    dynasty: '',
    reign: '',
    portfolio: '',
    artistRole: '',
    artistPrefix: '',
    artistDisplayName: '',
    artistDisplayBio: '',
    artistSuffix: '',
    artistAlphaSort: '',
    artistNationality: '',
    artistBeginDate: '',
    artistEndDate: '',
    artistGender: '',
    artistWikidata_URL: '',
    artistULAN_URL: '',
    objectURL: '',
    tags: [],
    objectWikidata_URL: '',
    isTimelineWork: false,
    GalleryNumber: '',
  },
];

describe('ArtCard Component', () => {
  const mockOnArtClick = jest.fn();
  const mockFavorites = [1]; // Artwork com ID 1 é favorito

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Rendering', () => {
    it('should render all artworks as cards', () => {
      render(
        <ArtCard
          artworks={mockArtworks}
          onArtClick={mockOnArtClick}
          favorites={mockFavorites}
        />
      );

      // Verificar se todos os cards foram renderizados
      expect(screen.getAllByTestId('motion-div')).toHaveLength(3);
    });

    it('should render artwork images with correct src and alt attributes', () => {
      render(
        <ArtCard
          artworks={mockArtworks}
          onArtClick={mockOnArtClick}
          favorites={mockFavorites}
        />
      );

      const firstImage = screen.getByAltText('The Starry Night');
      expect(firstImage).toHaveAttribute(
        'src',
        'https://example.com/starry-night.jpg'
      );

      const secondImage = screen.getByAltText('Mona Lisa Copy');
      expect(secondImage).toHaveAttribute(
        'src',
        'https://example.com/mona-lisa.jpg'
      );
    });

    it('should render artwork titles when not empty', () => {
      render(
        <ArtCard
          artworks={mockArtworks}
          onArtClick={mockOnArtClick}
          favorites={mockFavorites}
        />
      );

      expect(screen.getByText('The Starry Night')).toBeInTheDocument();
      expect(screen.getByText('Mona Lisa Copy')).toBeInTheDocument();

      // Terceiro artwork não tem título, então não deve aparecer
    });
  });
});
