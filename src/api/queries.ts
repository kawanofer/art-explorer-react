import { useQuery } from "@tanstack/react-query";

import {
  fetchArtworkWithImages,
  fetchArtworkDetail,
  fetchArtworkByArtist,
  fetchDepartments,
  fetchArtworkByDepartment,
} from "./arts";

const FETCH_ARTWORK_WITH_IMAGES = "artworkWithImages";
const FETCH_ARTWORK_DETAIL = "artworkDetail";
const FETCH_ARTWORK_BY_ARTIST = "artworkByArtist";
const FETCH_DEPARTMENTS = "departments";
const FETCH_ARTWORK_BY_DEPARTMENT = "artworkByDepartment";

// Busca todas as obras com imagens
export const useArtworkWithImages = () => {
  return useQuery({
    queryKey: [FETCH_ARTWORK_WITH_IMAGES],
    queryFn: fetchArtworkWithImages,
  });
};

// Busca detalhes de uma obra pelo ID
export const useArtworkDetail = (objectID: number) => {
  return useQuery({
    queryKey: [FETCH_ARTWORK_DETAIL, objectID],
    queryFn: () => fetchArtworkDetail(objectID),
    enabled: !!objectID,
  });
};

// Busca obras por artista
export const useArtworkByArtist = (artist: string) => {
  return useQuery({
    queryKey: [FETCH_ARTWORK_BY_ARTIST, artist],
    queryFn: () => fetchArtworkByArtist(artist),
    enabled: !!artist,
  });
};

// Busca departamentos
export const useDepartments = () => {
  return useQuery({
    queryKey: [FETCH_DEPARTMENTS],
    queryFn: fetchDepartments,
  });
};

// Busca obras por departamento
export const useArtworkByDepartment = (departmentId: number, query: string) => {
  return useQuery({
    queryKey: [FETCH_ARTWORK_BY_DEPARTMENT, departmentId, query],
    queryFn: () => fetchArtworkByDepartment(departmentId, query),
    enabled: !!departmentId && !!query,
  });
};
