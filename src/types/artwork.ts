export interface constituentsProps {
  name: string;
  role: string;
}

export interface ArtworkItemsProps {
  additionalImages: string[];
  artistDisplayName: string;
  artistPrefix: string;
  constituents?: constituentsProps[];
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
  constituents?: { name: string }[];
  department?: string;
  objectDate?: string;
  objectID: number;
  primaryImageSmall: string;
  title: string;
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
