import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  BarElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  PointElement,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ChartLine from './ChartLine';
import styles from './SportsmenPage.module.css';
import { RootState, useAppDispatch } from '../../store';
import { addStatisticsChartBar, chartBarInit } from './SportsmenSlice';
import { useSelector } from 'react-redux';

ChartJS.register(
  BarElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  PointElement
);


function ChartBar(): JSX.Element {
  const [time, setTime] = useState('');
  const dispatch = useAppDispatch();

  const dataCharts = useSelector((state: RootState) => state.user.chartbar)
  

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
      },
    },
  };

  

  const dataChart = {
    labels: dataCharts.map((data) => data.time),
    datasets: [
      {
        label: 'Время тренировки',
        data: dataCharts.map((data) => data.time),
        borderColor: ['rgb(255, 139, 51)'],
        borderWidth: 1,
        backgroundColor: 'rgba(246, 130, 81, 0.3)',
      },
    ],
  };

  useEffect(() => {
    dispatch(chartBarInit());
  }, []);

  const handleAddInputChart: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    dispatch(addStatisticsChartBar({ time }));
  };

  return (
    <>
      <div className={styles.container_BarChart}>
        <Bar data={dataChart} options={options} />
      </div>
      <form onSubmit={handleAddInputChart}>
        <div className="">
          <div>
          <input type="text" placeholder='Продолжительность тренировки' value={time} onChange={(e) => setTime(e.target.value)}/>
          </div>
          <br />
          <div>
            <button type="submit">Отправить</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default ChartBar;
