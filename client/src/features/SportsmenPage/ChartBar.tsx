import React, { useState } from 'react';
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

const UserData = [
  {
    id: 1,
    year: 2006,
    userGain: 80000,
    userLost: 823,
  },
  {
    id: 2,
    year: 2008,
    userGain: 80300,
    userLost: 893,
  },
  {
    id: 3,
    year: 2008,
    userGain: 70000,
    userLost: 853,
  },
];

function ChartBar(): JSX.Element {
  const [userData, setUserData] = useState('');

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
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: 'Ваш вес',
        data: UserData.map((data) => data.userGain),
        borderColor: ['rgb(255, 139, 51)'],
        borderWidth: 1,
        backgroundColor: 'rgba(246, 130, 81, 0.3)',
      },
    ],
  };

  return (
    <div className={styles.container_BarChart}>
      <Bar data={dataChart} options={options} />
    </div>
  );
}

export default ChartBar;
