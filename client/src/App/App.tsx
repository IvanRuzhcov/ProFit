import React, { useEffect } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import './App.css';
import { useSelector } from 'react-redux';
import Registration from '../features/auth/Registration';
import TrainerPersonalPage from '../features/Trainer/TrainerPersonalPage';
import Login from '../features/auth/Login';
import NavBar from '../features/navbar/NavBar';
import { RootState, useAppDispatch } from '../store';
import { verification } from '../features/auth/authSlice';
import SportsmenPage from '../features/SportsmenPage/SportsmenPage';
import MainPage from '../features/MainPage/MainPage';

import Chart from '../features/SportsmenPage/ChartBar';
import TrenerList from '../features/Trainer/TrenerList';
import TrainerBlog from '../features/Trainer/TrainerBlog';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const authChecked = useSelector(
    (state: RootState): boolean => state.auth.authChecked
  );

  useEffect(() => {
    dispatch(verification());
  }, [dispatch]);

  if (!authChecked) {
    return (
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<MainPage />}/>
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path='/trainerpage' element={<TrainerPersonalPage />} />
        <Route path='/myPage' element={ <SportsmenPage />} />
        <Route path='/allCoach' element={<TrenerList />}/>
        <Route path='/trainerPageeee/:id' element={<TrainerBlog />}/>
      </Routes>
    </>
  );
}

export default App;
