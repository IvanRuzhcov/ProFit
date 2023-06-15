import { createAsyncThunk } from "@reduxjs/toolkit"
import { Trainer } from "./Trainer"
import { Subscribe } from "./Subscribe"

export type TrainerState ={
    trenerState: Trainer[]
    subscribeState: Subscribe[]
}

