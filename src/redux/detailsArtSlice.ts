import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ArtworkDetail {
  objectID: number;
  title: string;
  primaryImage: string;
  primaryImageSmall: string;
  artistDisplayName?: string;
  artistPrefix?: string;
  artistRole?: string;
  objectDate?: string;
  dimensions?: string;
  department?: string;
  objectURL?: string;
  additionalImages?: string[];
  constituents?: {
    name: string;
    role: string;
  }[];
  medium?: string;
}

interface DetailsArtState {
  detailArts: ArtworkDetail[] | null;
}

const initialState: DetailsArtState = {
  detailArts: null,
};

const detailsArtSlice = createSlice({
  name: "detailsArt",
  initialState,
  reducers: {
    setDetailArts(state, action: PayloadAction<ArtworkDetail[] | null>) {
      state.detailArts = action.payload;
    },
    addDetailArts(state, action: PayloadAction<ArtworkDetail[]>) {
      if (state.detailArts === null) {
        state.detailArts = action.payload;
      } else {
        // Filter out duplicates based on objectID before adding
        const existingIds = new Set(state.detailArts.map(art => art.objectID));
        const newArts = action.payload.filter(art => !existingIds.has(art.objectID));
        state.detailArts = [...state.detailArts, ...newArts];
      }
    },
    clearDetailArts(state) {
      state.detailArts = null;
    },
  },
});

export const { setDetailArts, addDetailArts, clearDetailArts } = detailsArtSlice.actions;

export default detailsArtSlice.reducer;
