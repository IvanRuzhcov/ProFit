import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { SportsmenState } from './type/SertificateState';
import StatisticLineChart from './type/StatisticLineCart'
import * as api from './api';

const initialState: SportsmenState = {
  sportsmenState: [],
  statistic: [],
  error: ''
};

export const addStatisticsChart = createAsyncThunk(
  'sportsman/addStatisticsChart',
  (data: StatisticLineChart) => api.addStatisticsChartFetch(data)
);

export const chartInit = createAsyncThunk(
  'sportsman/init',
  () => api.chartInitFetch()
 );

 

const sportsmenSlice = createSlice({
  name: 'sportsman',
  initialState,
  reducers: {},
  extraReducers(builder) {
    return builder
    .addCase(addStatisticsChart.fulfilled, (state, action) => {
      state.statistic = action.payload.statistic
    })
    .addCase(addStatisticsChart.rejected, (state, action) => {
      state.error = action.error.message
    })
    .addCase(chartInit.fulfilled, (state, action) => {
      console.log(action.payload)
      state.statistic = action.payload
    })
    .addCase(chartInit.rejected, (state, action) => {
      state.error = action.error.message
    })
  },
});
export default sportsmenSlice.reducer;
