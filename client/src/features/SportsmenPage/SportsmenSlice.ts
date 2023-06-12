import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { SportsmenState } from './type/SertificateState';
import StatisticLineChart from './type/StatisticLineCart'
import * as api from './api';

const initialState: SportsmenState = {
  sportsmenState: [],
  statistic: []
};

// export const initSportsmen = createAsyncThunk(
//   'sportsman/initSportsmen',
//   async () => {
//     const newSportsmen = await apiInitSportsmen();
//     if (!newSportsmen) {
//       throw new Error('Не найдено');
//     }
//     return newSportsmen;
//   }
// );

export const addStatisticsChart = createAsyncThunk(
  'sportsman/addStatisticsChart',
  (data: StatisticLineChart) => api.addStatisticsChartFetch(data)
);

const sportsmenSlice = createSlice({
  name: 'sportsman',
  initialState,
  reducers: {},
  extraReducers(builder) {
    return builder
    // .addCase(initSportsmen.fulfilled, (state, action) => {
    //   state.sportsmenState = action.payload;
    //   console.log(action.payload);
    // })
    .addCase(addStatisticsChart.fulfilled, (state, action) => {
      state.statistic = action.payload.statistic

      
    })
  },
});
export default sportsmenSlice.reducer;
