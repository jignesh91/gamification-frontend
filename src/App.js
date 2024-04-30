import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Leaderboard from './components/Leaderboard';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            {/* Setup a Route that captures tenantId from the URL */}
            <Route path="/leaderboard/:tenantId" element={<Leaderboard />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
