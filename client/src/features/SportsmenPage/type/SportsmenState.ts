import { Sportsmen } from './Sportsmen';
import { ChartBar, Statistic } from './Statistic';

export type SportsmenState = {
  sportsmenState: Sportsmen[];
  statistic: Statistic[];
  chartbar: ChartBar[]
  error: string | undefined
};
