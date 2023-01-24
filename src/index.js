import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Router, Route } from 'react-router'
import './index.css';
import Home from './pages/Home';
import Menu from './components/Menu';
import TopBar from './components/TopBar';
import Animation from './components/Animation';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <TopBar/>
      <Home/>
    <Menu/> */}
    <Animation/>
  </React.StrictMode>
);
