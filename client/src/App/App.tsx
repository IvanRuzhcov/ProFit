import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { CircularProgress, Stack } from '@mui/material';
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
import { imitComments, initTrainer } from '../features/Trainer/TrainerSlice';
import Footer from '../features/Footer/Footer';
import Page404 from '../features/404/Page404';
import { initSubscr } from '../features/SportsmenPage/SportsmenSlice';
import { initComment } from '../features/Trainer/api';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const authChecked = useSelector(
    (state: RootState): boolean => state.auth.authChecked
  );

  useEffect(() => {
    dispatch(verification());
    dispatch(initTrainer());
    dispatch(initSubscr());
    dispatch(imitComments());
  }, [dispatch]);


  if (!authChecked) {
    return (
      <div className="spinner-border text-primary" role="status">
        <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
          <CircularProgress disableShrink color="warning" size={80} />
        </Stack>
      </div>
    );
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/trainerpage" element={<TrainerPersonalPage />} />
        <Route path="/allCoach" element={<TrenerList />} />
        <Route path="/trainerBlog/:id" element={<TrainerBlog />} />
        <Route path="/sportsmanpage" element={<SportsmenPage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
