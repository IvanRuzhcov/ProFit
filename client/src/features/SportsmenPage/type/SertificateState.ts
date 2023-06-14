import { Sportsmen } from './Sportsmen';
import { Statistic } from './Statistic';

export type SportsmenState = {
  sportsmenState: Sportsmen[];
  statistic: Statistic[];
  error: string | undefined;
};
