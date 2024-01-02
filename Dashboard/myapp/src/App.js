import React from 'react'; 
import Home from './components/Home';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Signup from './components/Signup';
import './Assests/css/dashboard.css';
import {Route, Routes} from 'react-router-dom'; 

function App() {
  return (
      <Routes>
        <Home/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} /> 
        </Routes>
  );
};

export default App;