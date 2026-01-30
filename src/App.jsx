import './App.css';
import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar';
import { HashRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {

  const pageSize = 70;
  const apiKey = '7f4686167a4845a099f174f205ad5233';
  const [progress, setProgress] = useState(0);

  return (
    <Router>
      <Navbar />
      <LoadingBar height={3} color="#f11946" progress={progress} />

      <Routes>
        <Route
          path="/"
          element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="us" category="general" />}
        />
        <Route
          path="/business"
          element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="us" category="business" />}
        />
        <Route
          path="/entertainment"
          element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" />}
        />
        <Route
          path="/health"
          element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="us" category="health" />}
        />
        <Route
          path="/science"
          element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="us" category="science" />}
        />
        <Route
          path="/sports"
          element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="us" category="sports" />}
        />
        <Route
          path="/technology"
          element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="us" category="technology" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
