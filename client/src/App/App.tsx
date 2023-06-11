import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Registration from '../features/auth/Registration';
import Login from '../features/auth/Login';
import MainPage from '../features/MainPage/MainPage';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/registration" element={<Registration />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
}

export default App;
