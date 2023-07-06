import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loading from './components/splash screen/Loading';
import Header from './components/header/Header'
import Home from './pages/home/Home'
import About from './pages/about/About';
import Queue from './pages/queue/Queue';
import List from './pages/queue/List';
import Talon from './pages/talon/Talon';
import Registr from './pages/regist/Registr';
import Auth from './pages/auth/Auth';
import PersonalArea from './pages/personalArea/PersonalArea';
function App() {
  return (
    <div>
        
        <Routes>
          <Route path="/" element={<div><Loading /></div>} />
          <Route path="/Home" element={<div><Home /></div>} />
          <Route path="/About" element={<div><About /></div>} />
          <Route path="/Queue" element={<div><Queue /></div>} />
          <Route path="/Talon" element={<div><Talon /></div>} />
          <Route path="/Registr" element={<div><Registr /></div>} />
          <Route path="/Auth" element={<div><Auth /></div>} />
          <Route path="/PersonalArea" element={<div><PersonalArea /></div>} />
        </Routes>
    </div>
  );
}

export default App;
