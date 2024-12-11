import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Import Navbar
import GamePage from './pages/GamePage';
import RulesPage from './pages/RulesPage';
import Homepage from './pages/Homepage';
import { GameProvider } from './context/GameContext'; // Import GameProvider
import './styles/styles.css';

ReactDOM.render(
  <React.StrictMode>
    <GameProvider>
      <Router>
        <Navbar /> {/* Navbar is now wrapped by GameProvider */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/rules" element={<RulesPage />} />
          <Route path="/game/easy" element={<GamePage rows={8} cols={8} mines={10} />} />
          <Route path="/game/medium" element={<GamePage rows={16} cols={16} mines={40} />} />
          <Route path="/game/hard" element={<GamePage rows={16} cols={30} mines={99} />} />
        </Routes>
      </Router>
    </GameProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
