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
import { Line } from 'react-chartjs-2';
import styles from './styles.module.css';
import { addStatisticsChart, chartInit } from './SportsmenSlice';
import { RootState, useAppDispatch } from '../../store';

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

function ChartLine(): JSX.Element {
  const [weight, setWeight] = useState(0);
  const dispatch = useAppDispatch();

  const statistic = useSelector((state: RootState) => state.user.statistic.slice(-30));


  const dataChart = {
    labels: statistic.map((data) => {
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
        label: 'Ваш вес',
        data: statistic.map((data) => data.weight),
        borderColor: 'rgb(246, 130, 81)',
        backgroundColor: 'rgba(246, 130, 81, 0.3)',
      },
    ],
  };

  useEffect(() => {
    dispatch(chartInit());
  }, []);

  const handleAddInputChart: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    dispatch(addStatisticsChart({ weight }));
  };

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

  return (
    <>
      <div className={styles.container_lineChart}>
        <Line data={dataChart} options={options} />
      </div>
      <form onSubmit={handleAddInputChart}>
        <div className="">
          <div>
            <input
              type="number"
              onChange={(event) => setWeight(Number(event.target.value))}
              min = "1" 
              max = "250"
              step="any"
            />
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

export default ChartLine;