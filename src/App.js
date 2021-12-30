import React from 'react';
import logo from './logo.svg';
import './App.css';
import AllRoutes from './Routes/allRoutes';
import { Navbar } from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
