import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TrainerState } from './types/TrainerState';
import * as api from './api';
import { CoachId } from './types/Subscribe';
import { uploadUrlTrainer } from '../auth/authSlice';
import { Comments } from './types/Comments';

const initialState: TrainerState = {
  trenerState: [],
  subscribeState: [],
  files: [],
  comments: [],
};

export const initTrainer = createAsyncThunk('triner/initTrainer', () =>
  api.initTrainerFeth()
);

export const addSubscribeTr = createAsyncThunk(
  'trainer/addSubscribe',
  (userId: CoachId) => api.addSubscribe(userId)
);

export const initPost = createAsyncThunk(
  'trainer/addSubscribe',
  (userId: CoachId) => api.addSubscribe(userId)
);

export const addComments = createAsyncThunk(
  'commetns/addComments',
  (comments: Comments) => api.addComents(comments)
);

export const imitComments = createAsyncThunk('commetns/initComents', () =>
  api.initComment()
);

const trainerSlice = createSlice({
  name: 'trainer',
  initialState,
  reducers: {},
  extraReducers(builder) {
    return builder
      .addCase(initTrainer.fulfilled, (state, action) => {
        state.trenerState = action.payload;
      })
      .addCase(addSubscribeTr.fulfilled, (state, action) => {
        state.subscribeState = action.payload;
      })
      .addCase(uploadUrlTrainer.fulfilled, (state, action) => {
        state.files = [...state.files, action.payload];
      })
      .addCase(addComments.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(imitComments.fulfilled, (state, action) => {
        state.comments = action.payload;
      });
  },
});

export default trainerSlice.reducer;
