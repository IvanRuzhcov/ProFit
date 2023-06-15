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
import { useSelector } from 'react-redux';
import { Bar } from 'react-chartjs-2';
import styles from './SportsmenPage.module.css';
import { RootState, useAppDispatch } from '../../store';
import { addStatisticsChartBar, chartBarInit } from './SportsmenSlice';

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

  const dataCharts = useSelector((state: RootState) => state.user.chartbar);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        ticks: {
          color: 'rgb(255, 155, 112)',
          // Изменение размера шрифта для оси Y
          font: {
            size: 15, // Установите желаемый размер шрифта
          },
        },
      },
      x: {
        ticks: {
          color: 'rgb(255, 155, 112)',
          // Изменение размера шрифта для оси Y
          font: {
            size: 15, // Установите желаемый размер шрифта
          },
        },
      },
    },
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
    labels: dataCharts.map((data) => {
      const dateObject = new Date(data.createdAt);
      const day = dateObject.getDate();
      const month = dateObject.getMonth() + 1;
      if (month < 10) {
        return `${day}.0${month}`;
      }
      return `${day}.${month}`;
    }),
    datasets: [
      {
        label: 'Время тренировки',
        data: dataCharts.map((data) => data.time
        ),
        borderColor: ['rgb(246, 130, 81)'],
        borderWidth: 2,
        backgroundColor: 'rgba(246, 130, 81, 0.3)',
        
      },
    ],
  };

  useEffect(() => {
    dispatch(chartBarInit());
  }, [dispatch]);

  const handleAddInputChart: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const times = time.replace(/:/g, '.');
    dispatch(addStatisticsChartBar({ time: times }));
  };

  return (
    <>
      <div className={styles.container_BarChart}>
        <Bar data={dataChart} options={options} />
      </div>
      <div className={styles.formBar_container} >
      <form onSubmit={handleAddInputChart}>
        <div>
          <div>
            <input
              type="time"
              placeholder="Продолжительность тренировки"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
          <br />
          <div>
            <button type="submit">Отправить</button>
          </div>
        </div>
      </form>
      </div>
    </>
  );
}

export default ChartBar;
