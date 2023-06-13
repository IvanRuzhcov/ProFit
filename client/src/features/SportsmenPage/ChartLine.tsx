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
import { useSelector } from 'react-redux';
import { Line } from 'react-chartjs-2';
import styles from './styles.module.css';
import { addStatisticsChart } from './SportsmenSlice';
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
    year: 2009,
    userGain: 70000,
    userLost: 853,
  },
  {
    id: 3,
    year: 2009,
    userGain: 70000,
    userLost: 853,
  },
  {
    id: 3,
    year: 2009,
    userGain: 70000,
    userLost: 853,
  },
  
];

function ChartLine(): JSX.Element {
  const [weight, setWeight] = useState(0);
  const dispatch = useAppDispatch();

  const statistic = useSelector((state: RootState) => state.user.statistic)

  const [userData, setUserData] = useState({
    labels: statistic.map((data) => data.user_id_param),
    datasets: [
      {
        label: 'Users Gained',
        data: statistic.map((data) => data.weight),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  });

  

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
        <Line data={userData} options={options} />
      </div>
      <form onSubmit={handleAddInputChart}>
        <div className="">
          <div>
            <input
              type="number"
              onChange={(event) => setWeight(Number(event.target.value))}
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
