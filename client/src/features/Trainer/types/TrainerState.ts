import { Trainer } from "./Trainer"
import { Subscribe } from "./Subscribe"
import { FileTrainer } from "./FileTrainer"

export type TrainerState ={
    trenerState: Trainer[]
    subscribeState: Subscribe[]
    files:FileTrainer[]
}

