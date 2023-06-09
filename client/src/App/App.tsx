import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Registration from '../features/auth/Registration';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/registration" element={<Registration />} />
    </Routes>
  );
}

export default App;
