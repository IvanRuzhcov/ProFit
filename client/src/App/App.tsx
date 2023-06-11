import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useSelector } from 'react-redux';
import Registration from '../features/auth/Registration';
import Login from '../features/auth/Login';
import NavBar from '../features/navbar/NavBar';
import { RootState, useAppDispatch } from '../store';
import { verification } from '../features/auth/authSlice';


function App(): JSX.Element {
  const dispatch =useAppDispatch()
  const authChecked = useSelector((state: RootState): boolean =>
  state.auth.authChecked);

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
    <NavBar/>
    <Routes>
      <Route path="/registration" element={<Registration />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    </>
  );
}

export default App;
