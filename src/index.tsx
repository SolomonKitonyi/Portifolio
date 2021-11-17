import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';

import './index.css';
import App from './App';
import Profile from './components/Profile';

ReactDOM.render(
  <Router>
    <Routes>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/" element={<App />}/>
      </Routes>
  </Router>,
  document.getElementById('root')
);
