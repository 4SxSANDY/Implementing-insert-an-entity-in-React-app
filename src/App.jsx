
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Addbookform from './components/Addbookform';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/addform" element={<Addbookform/>} />

      </Routes>
    </Router>
  );
};

export default App;
