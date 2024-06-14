// src/AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './components/Home';
// import About from './components/About';
import Header from './components/header/header';

const AppRouter = () => (
  <Router>
    <Routes>
      
      <Route path="/" element={<Header />} />
    </Routes>
  </Router>
);

export default AppRouter;
