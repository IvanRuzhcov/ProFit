import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Registration from '../features/auth/Registration';
import TrainerPersonalPage from '../features/Trainer/TrainerPersonalPage';

function App(): JSX.Element {
  return (
    <div>
      <TrainerPersonalPage />
      <Routes>
        <Route path="/registration" element={<Registration />} />
        {/* <Route path='/trainer/:trainerLogin' element={<TrainerPersonalPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
