import React, { useEffect } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import "./App.css";
import { useSelector } from "react-redux";
import Registration from "../features/auth/Registration";
import TrainerPersonalPage from "../features/Trainer/TrainerPersonalPage";
import Login from "../features/auth/Login";
import NavBar from "../features/navbar/NavBar";
import { RootState, useAppDispatch } from "../store";
import { verification } from "../features/auth/authSlice";
import SportsmenPage from "../features/SportsmenPage/SportsmenPage";
import MainPage from "../features/MainPage/MainPage";


import Chart from "../features/SportsmenPage/ChartBar";
import TrenerList from "../features/Trainer/TrenerList";
import TrainerBlog from "../features/Trainer/TrainerBlog";
import { initTrainer } from "../features/Trainer/TrainerSlice";
import Footer from '../features/Footer/Footer';
import Page404 from "../features/404/Page404";


function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const authChecked = useSelector(
    (state: RootState): boolean => state.auth.authChecked
  );

  useEffect(() => {
    dispatch(verification());
    dispatch(initTrainer());
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
        <Route path="/" element={<MainPage />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/trainerpage" element={<TrainerPersonalPage />} />
        <Route path="/allCoach" element={<TrenerList />} />
        <Route path="/trainerBlog/:id" element={<TrainerBlog />} />
        <Route path="/sportsmanpage" element={<SportsmenPage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
