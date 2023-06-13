import { Sportsmen, SportsmenUp } from "./Sportsmen"

export type SportsmenState ={
    sportsmenState: Sportsmen[], 
    updateSportsmen:SportsmenUp[]
    error: undefined | string
}