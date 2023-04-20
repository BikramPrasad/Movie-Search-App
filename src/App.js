import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MovieDetail from './MovieDetail';

import Home from './Home';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail/:imdbID' element={<MovieDetail />} />
      </Routes>
    </div>
  );
};

export default App;
