import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Registration from '../features/auth/Registration';
import Login from '../features/auth/Login';
import NavBar from '../features/navbar/NavBar';
import { useAppDispatch } from '../store';
import { verification } from '../features/auth/authSlice';

function App(): JSX.Element {
  const dispatch =useAppDispatch()

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);


  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
