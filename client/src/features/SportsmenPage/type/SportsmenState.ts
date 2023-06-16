import { Sportsmen } from './Sportsmen';
import { ChartBar, Statistic } from './Statistic';
import { Subscribe } from './Subscribe';

export type SportsmenState = {
  sportsmenState: Sportsmen[];
  statistic: Statistic[];
  chartbar: ChartBar[]
  subscribe: Subscribe[]
  error: string | undefined
};
