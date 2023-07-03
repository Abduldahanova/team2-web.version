import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loading from './components/splash screen/Loading';
import Header from './components/header/Header'
import Home from './pages/home/Home'
import About from './pages/about/About';
function App() {
  return (
    <div>
        
        <Routes>
          <Route path="/" element={<div><Loading /></div>} />
          <Route path="/Home" element={<div><Home /></div>} />
          <Route path="/About" element={<div><About /></div>} />
        </Routes>
    </div>
  );
}

export default App;
