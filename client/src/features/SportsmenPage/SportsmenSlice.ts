import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SportsmenState } from "./type/SertificateState";
import { apiInitSportsmen } from "./api";

const initialState:SportsmenState = {
    sportsmenState: []
}

export const initSportsmen = createAsyncThunk(
    'sportsmen/initSportsmen' , 
    async () => {
        const newSportsmen = await apiInitSportsmen();
        if(!newSportsmen){
            throw new Error('Не найдено')
        }
        return newSportsmen
    }
)

const sportsmenSlice = createSlice({
    name: 'sportsmen',
    initialState,
    reducers:{},
    extraReducers(builder){
        return builder
        .addCase(initSportsmen.fulfilled, (state, action )=> {
            state.sportsmenState = action.payload
            console.log(action.payload);
            
        })
    }
})
export default sportsmenSlice.reducer;