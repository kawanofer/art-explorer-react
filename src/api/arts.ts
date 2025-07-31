import axios from "axios";

const BASE_URL =
  import.meta.env.VITE_BASE_URL || "https://collectionapi.metmuseum.org";

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
  Buscar obras com imagens	GET /public/collection/v1/search?hasImages=true&q=painting
*/
export const fetchArtworkWithImages = async (): Promise<number[]> => {
  try {
    const response = await axios.get(
      `${BASE_URL}/public/collection/v1/search?hasImages=true&q=painting`,
    );
    console.log("ENDPOINT: ", response);
    return response.data.objectIDs;
  } catch (error) {
    console.error("Error fetching artwork IDs:", error);
    return [];
  }
};

/*
  Detalhes de uma obra	GET /public/collection/v1/objects/{objectID}
*/
export const fetchArtworkDetail = async (
  objectID: number,
): Promise<ArtworkDetail | null> => {
  try {
    const response = await axios.get<ArtworkDetail>(
      `${BASE_URL}/public/collection/v1/objects/${objectID}`,
    );
    return response.data;
  } catch (error) {
    console.error(`Error fetching details for objectID ${objectID}:`, error);
    return null;
  }
};

/*
  Buscar por artista/cultura	GET /public/collection/v1/search?artistOrCulture=true&q=van+gogh
*/
export const fetchArtworkByArtist = async (
  artistName: string,
): Promise<ArtworkDetail[] | null> => {
  try {
    const response = await axios.get<{ objectIDs: number[] }>(
      `${BASE_URL}/public/collection/v1/search?artistOrCulture=true&q=${encodeURIComponent(artistName)}`,
    );

    const artworkPromises = response.data.objectIDs.map((id) =>
      axios.get<ArtworkDetail>(
        `${BASE_URL}/public/collection/v1/objects/${id}`,
      ),
    );

    const artworks = await axios.all(artworkPromises);
    return artworks.map((response) => response.data);
  } catch (error) {
    console.error(`Error fetching artworks for artist ${artistName}:`, error);
    return null;
  }
};

/*
  Listar departamentos	GET /public/collection/v1/departments
*/
export const fetchDepartments = async (): Promise<
  { departmentId: number; displayName: string }[] | null
> => {
  try {
    const response = await axios.get<{
      departments: { departmentId: number; displayName: string }[];
    }>(`${BASE_URL}/public/collection/v1/departments`);
    return response.data.departments;
  } catch (error) {
    console.error("Error fetching departments:", error);
    return null;
  }
};

/*
  Buscar por departamento	GET /public/collection/v1/search?departmentId=11&q=portrait
*/
export const fetchArtworkByDepartment = async (
  departmentId: number,
  query: string,
): Promise<ArtworkDetail[] | null> => {
  try {
    const response = await axios.get<{ objectIDs: number[] }>(
      `${BASE_URL}/public/collection/v1/search?departmentId=${departmentId}&q=${encodeURIComponent(query)}`,
    );

    const artworkPromises = response.data.objectIDs.map((id) =>
      axios.get<ArtworkDetail>(
        `${BASE_URL}/public/collection/v1/objects/${id}`,
      ),
    );

    const artworks = await axios.all(artworkPromises);
    return artworks.map((response) => response.data);
  } catch (error) {
    console.error(
      `Error fetching artworks for department ${departmentId}:`,
      error,
    );
    return null;
  }
};
