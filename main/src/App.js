import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Assessment from './Assessment';
import Results from './Results';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/CMMC-Assessment" element={<Assessment/>} />
          <Route path="/results" element={<Results/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
