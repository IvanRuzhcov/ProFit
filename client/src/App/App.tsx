import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Registration from '../features/auth/Registration';
import { RegisterPage } from '../features/auth/RegisterPage';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/registration" element={<RegisterPage/>} />
    </Routes>
  );
}

export default App;
