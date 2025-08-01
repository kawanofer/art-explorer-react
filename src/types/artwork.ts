export interface constituentsProps {
  name: string;
  role: string;
}

export interface ArtworkItemsProps {
  additionalImages: string[];
  constituents?: constituentsProps[];
  artistDisplayName: string;
  artistPrefix: string;
  department: string;
  dimensions: string;
  medium: string;
  objectDate: string;
  objectID: number;
  objectURL: string;
  primaryImage: string;
  primaryImageSmall: string;
  title: string;
}

export interface ArtworkDisplayProps {
  objectID: number;
  primaryImageSmall: string;
  title: string;
  constituents?: { name: string }[];
  objectDate?: string;
  department?: string;
}

export interface ArtworkDetailProps {
  additionalImages: string[];
  constituents: constituentsProps[];
  artistDisplayName: string;
  artistPrefix: string;
  department: string;
  dimensions: string;
  medium: string;
  objectDate: string;
  objectID: number;
  objectURL: string;
  primaryImage: string;
  primaryImageSmall: string;
  title: string;
}
