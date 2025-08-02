import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3001";

interface ArtworkDetail {
  objectID: number;
  title: string;
  artistDisplayName: string;
  objectDate: string;
  medium: string;
  department: string;
  primaryImage: string;
  primaryImageSmall: string;
  objectURL: string;
}

/*
  Buscar obras com imagens  GET /api/artworks/search/images
*/
export const fetchArtworkWithImages = async (
  query: string = "painting",
): Promise<number[]> => {
  try {
    const response = await axios.get(
      `${BASE_URL}/api/artworks/search/images?q=${encodeURIComponent(query)}`,
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching artwork IDs:", error);
    return [];
  }
};

/*
  Detalhes de uma obra  GET /api/artworks/:objectID
*/
export const fetchArtworkDetail = async (
  objectID: number,
): Promise<ArtworkDetail | null> => {
  try {
    const response = await axios.get<ArtworkDetail>(
      `${BASE_URL}/api/artworks/${objectID}`,
    );
    return response.data;
  } catch (error) {
    console.error(`Error fetching details for objectID ${objectID}:`, error);
    return null;
  }
};

/*
  Buscar por artista/cultura  GET /api/artworks/search/artist?q=van+gogh
*/
export const fetchArtworkByArtist = async (
  artistName: string,
): Promise<ArtworkDetail[] | null> => {
  try {
    const response = await axios.get<ArtworkDetail[]>(
      `${BASE_URL}/api/artworks/search/artist?q=${encodeURIComponent(artistName)}`,
    );
    return response.data;
  } catch (error) {
    console.error(`Error fetching artworks for artist ${artistName}:`, error);
    return null;
  }
};

/*
  Listar departamentos  GET /api/departments
*/
export const fetchDepartments = async (): Promise<
  { departmentId: number; displayName: string }[] | null
> => {
  try {
    const response = await axios.get<
      {
        departmentId: number;
        displayName: string;
      }[]
    >(`${BASE_URL}/api/departments`);
    return response.data;
  } catch (error) {
    console.error("Error fetching departments:", error);
    return null;
  }
};

/*
  Buscar por departamento GET /api/artworks/search/department?departmentId=11&q=portrait
*/
export const fetchArtworkByDepartment = async (
  departmentId: number,
): Promise<ArtworkDetail[] | null> => {
  try {
    const response = await axios.get<ArtworkDetail[]>(
      `${BASE_URL}/api/artworks/search/department?departmentId=${departmentId}`,
    );
    console.log(`Fetched ${response} artworks for department ${departmentId}`);
    return response.data;
  } catch (error) {
    console.error(
      `Error fetching artworks for department ${departmentId}:`,
      error,
    );
    return null;
  }
};
