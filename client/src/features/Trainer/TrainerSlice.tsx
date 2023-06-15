import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TrainerState } from "./types/TrainerState";
import * as api from "./api";
import { CoachId, Subscribe } from "./types/Subscribe";

const initialState: TrainerState = {
  trenerState: [],
  subscribeState: []
};

export const initTrainer = createAsyncThunk("triner/initTrainer", () =>
  api.initTrainerFeth()
);

export const addSubscribeTr = createAsyncThunk('trainer/addSubscribe', (userId:CoachId)=> 
api.addSubscribe(userId)
)

const trainerSlice = createSlice({
  name: "trainer",
  initialState,
  reducers: {},
  extraReducers(builder) {
    return builder
    .addCase(initTrainer.fulfilled, (state, action) => {
      state.trenerState = action.payload;
    })
    .addCase(addSubscribeTr.fulfilled, (state, action) => {
      state.subscribeState = action.payload;
    });
  },
});

export default trainerSlice.reducer;
