import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';

import './index.css';
import App from './App';
import Profile from './components/Profile';
import Stacks from './components/Stacks';
import Interests from './components/Interests';

ReactDOM.render(
  <Router>
    <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/stacks" element={<Stacks/>}/>
        <Route path="/interests" element={<Interests/>}/>
      </Routes>
  </Router>,
  document.getElementById('root')
);
