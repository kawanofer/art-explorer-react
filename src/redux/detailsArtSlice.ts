import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { ArtworkItemsProps } from '../types/artwork';

interface DetailsArtState {
  detailArts: ArtworkItemsProps[] | null;
}

const initialState: DetailsArtState = {
  detailArts: null,
};

const detailsArtSlice = createSlice({
  name: 'detailsArt',
  initialState,
  reducers: {
    setDetailArts(state, action: PayloadAction<ArtworkItemsProps[] | null>) {
      state.detailArts = action.payload;
    },
    addDetailArts(state, action: PayloadAction<ArtworkItemsProps[]>) {
      if (state.detailArts === null) {
        state.detailArts = action.payload;
      } else {
        // Filter out duplicates based on objectID before adding
        const existingIds = new Set(state.detailArts.map(art => art.objectID));
        const newArts = action.payload.filter(
          art => !existingIds.has(art.objectID)
        );
        state.detailArts = [...state.detailArts, ...newArts];
      }
    },
    clearDetailArts(state) {
      state.detailArts = null;
    },
  },
});

export const { setDetailArts, addDetailArts, clearDetailArts } =
  detailsArtSlice.actions;

export default detailsArtSlice.reducer;
