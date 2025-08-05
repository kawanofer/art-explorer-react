export interface constituentsProps {
  name: string;
  role: string;
  constituentID: number;
  constituentULAN_URL: string;
  constituentWikidata_URL: string;
  gender: string;
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
  constituents?: constituentsProps[];
  additionalImages: string[];
  department: string;
  objectDate: string;
  objectID: number;
  primaryImage: string;
  primaryImageSmall: string;
  title: string;
}

export interface ArtworkDetailProps {
  additionalImages: string[];
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
