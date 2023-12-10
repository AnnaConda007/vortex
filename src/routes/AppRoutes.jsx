import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Home';  

function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/:etag' element={<HomePage />} />
    </Routes>
  );
}

export default AppRoutes;
