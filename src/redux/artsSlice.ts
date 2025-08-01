import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { fetchArtworkWithImages } from "../api/arts";

interface ArtsState {
  artworkIds: number[];
  loading: boolean;
  error: string | null;
}

const initialState: ArtsState = {
  artworkIds: [],
  loading: false,
  error: null,
};

export const fetchArtworkIds = createAsyncThunk<number[]>(
  "arts/fetchArtworkWithImages",
  async (_, { rejectWithValue }) => {
    try {
      const ids = await fetchArtworkWithImages();
      console.log("Fetched artwork IDs:", ids);
      return ids || [];
    } catch (error: any) {
      return rejectWithValue(error.message || "Erro ao buscar IDs das obras");
    }
  },
);

const artsSlice = createSlice({
  name: "arts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArtworkIds.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchArtworkIds.fulfilled,
        (state, action: PayloadAction<number[]>) => {
          state.loading = false;
          state.artworkIds = action.payload;
        },
      )
      .addCase(fetchArtworkIds.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default artsSlice.reducer;
