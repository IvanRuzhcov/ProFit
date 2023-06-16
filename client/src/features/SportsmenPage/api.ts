import { SportsmenState } from './type/SportsmenState';
import { Sportsmen } from './type/Sportsmen';
import StatisticLineChart from './type/StatisticLineCart';
import { ChartBar, Statistic } from './type/Statistic';
import StatisticBarChart from './type/StatisticBarCart';
import { Subscribe } from './type/Subscribe';

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

  return result;
}

export async function chartInitFetch(): Promise<Statistic[]> {
  const res = await fetch('api/sportsman');
  const data = await res.json();
  return data;
}

export async function chartInitBarFetch(): Promise<ChartBar[]> {
  const res = await fetch('api/chartbar');
  const data = await res.json();
  return data;
}

export async function addStatisticsChartBarFetch(
  data: StatisticBarChart
): Promise<SportsmenState> {
  const res = await fetch('/api/chartbar', {
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

  return result;
}

export async function initSubscription(): Promise<Subscribe[]> {
  const res = await fetch('/api/sportsman/subscription')
  const result = await res.json();
  return result;
}

export const changeAvatarSportsmanFetch = async (
  obj: FormData
): Promise<Sportsmen> => {
  const res = await fetch(`/api/sportsman`, { method: 'PUT', body: obj });
  const data = await res.json();
  return data;
};

