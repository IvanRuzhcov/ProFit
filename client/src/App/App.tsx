import React from 'react';
import './App.css';
import { RegisterPage } from '../features/auth/RegisterPage'

function App():JSX.Element {
  return (
    <div className="App">
    <RegisterPage/>
    </div>
  );
}

export default App;
