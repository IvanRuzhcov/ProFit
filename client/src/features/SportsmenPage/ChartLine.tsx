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
import { Line } from 'react-chartjs-2';
import styles from './styles.module.css';

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
    year: 2007,
    userGain: 80300,
    userLost: 893,
  },
  {
    id: 3,
    year: 2008,
    userGain: 70000,
    userLost: 853,
  },
  {
    id: 3,
    year: 2008,
    userGain: 70000,
    userLost: 853,
  },
  {
    id: 1,
    year: 2006,
    userGain: 80000,
    userLost: 823,
  },
];

function ChartLine(): JSX.Element {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      { label: 'Users Gained', data: UserData.map((data) => data.userGain) },
    ],
  });




  return (
    <div className="">
      <Line data={userData} />
    </div>
  );
}

export default ChartLine;
