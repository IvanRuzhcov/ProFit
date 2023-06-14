import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TrainerState } from "./types/TrainerState";
import * as api from "./api";

const initialState: TrainerState = {
  trenerState: [],
};

export const initTrainer = createAsyncThunk("triner/initTrainer", () =>
  api.initTrainerFeth()
);

const trainerSlice = createSlice({
  name: "trainer",
  initialState,
  reducers: {},
  extraReducers(builder) {
    return builder.addCase(initTrainer.fulfilled, (state, action) => {
      state.trenerState = action.payload;
    });
  },
});

export default trainerSlice.reducer;
