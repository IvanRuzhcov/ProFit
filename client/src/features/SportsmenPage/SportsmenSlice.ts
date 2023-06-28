import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { SportsmenState } from './type/SportsmenState';
import StatisticLineChart from './type/StatisticLineCart';
import * as api from './api';
import StatisticBarChart from './type/StatisticBarCart';
const initialState: SportsmenState = {
  sportsmenState: [],
  statistic: [],
  chartbar: [],
  subscribe: { coach: [] },
  error: '',
};

export const addStatisticsChart = createAsyncThunk(
  'sportsman/addStatisticsChart',
  (data: StatisticLineChart) => api.addStatisticsChartFetch(data)
);

export const chartInit = createAsyncThunk('sportsman/init', () =>
  api.chartInitFetch()
);

export const chartBarInit = createAsyncThunk('sportsman/initBar', () =>
  api.chartInitBarFetch()
);

export const addStatisticsChartBar = createAsyncThunk(
  'sportsman/addStatisticsChartBar',
  (data: StatisticBarChart) => api.addStatisticsChartBarFetch(data)
);
export const initSubscr = createAsyncThunk('sportsman/initSubscr', () =>
  api.initSubscription()
);

// export const changeAvatar = createAsyncThunk(
//   'sportsman/changeAvatar',
//   (obj: FormData) => api.changeAvatarSportsmanFetch(obj)
// );

const sportsmenSlice = createSlice({
  name: 'sportsman',
  initialState,
  reducers: {},
  extraReducers(builder) {
    return builder
      .addCase(addStatisticsChart.fulfilled, (state, action) => {
        state.statistic = action.payload.statistic;
      })
      .addCase(addStatisticsChart.rejected, (state, action) => {
        state.error = action.error.message;
      })

      .addCase(addStatisticsChartBar.fulfilled, (state, action) => {
        state.chartbar = action.payload.chartbar;
      })
      .addCase(addStatisticsChartBar.rejected, (state, action) => {
        state.error = action.error.message;
      })

      .addCase(chartInit.fulfilled, (state, action) => {
        state.statistic = action.payload;
      })
      .addCase(chartInit.rejected, (state, action) => {
        state.error = action.error.message;
      })

      .addCase(chartBarInit.fulfilled, (state, action) => {
        state.chartbar = action.payload;
      })
      .addCase(chartBarInit.rejected, (state, action) => {
        state.error = action.error.message;
      })

      .addCase(initSubscr.fulfilled, (state, action) => {
        if (state.subscribe.coach)
          state.subscribe.coach = state.subscribe?.coach
            ? action.payload
            : undefined;
      });
  },
});
export default sportsmenSlice.reducer;
