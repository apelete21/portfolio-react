import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css';
import Home from './pages/Home';
import Skills from './pages/Skills'
import Portfolio from './pages/Portfolio'
import About from './pages/About'
import Contact from './pages/Contact'
import Menu from './components/Menu';
import TopBar from './components/TopBar';
import Animation from './components/Animation';
import Popup from './components/Popup';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <TopBar />
      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='/' element={<Popup />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/about' element={<About  />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Menu />
    </React.StrictMode>
  </BrowserRouter>
);
