import { SportsmenState } from './type/SertificateState';
import { Sportsmen } from './type/Sportsmen';
import StatisticLineChart from './type/StatisticLineCart';

export async function apiInitSportsmen(): Promise<Sportsmen[]> {
  const res = await fetch('/api/auth/verification');
  if (res.status >= 400) {
    const { error } = await res.json();
    throw error;
  }
  return res.json();
}


export async function addStatisticsChartFetch(
  data: StatisticLineChart
): Promise<SportsmenState> {
  const res = await fetch('/api/sportsman', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (res.status >= 400) {
    const { error } = await res.json();
    throw error;
  }
  const result = await res.json();
  console.log(result);
  
}
