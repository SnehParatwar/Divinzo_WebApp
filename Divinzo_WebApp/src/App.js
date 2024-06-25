import React from 'react';
import './App.css';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Admin_Router from './router/Admin_Router';
import Cust_Router from './router/Cust_Router';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/h' element={<Admin_Router />} />
          <Route path='/' element={<Cust_Router />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
