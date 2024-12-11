import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import GamePage from './pages/GamePage';
import RulesPage from './pages/RulesPage';

function App() {
  return (
    <>
      <Navbar /> {/* 确保导航栏固定显示 */}
      <div className="content"> {/* 为内容预留导航栏空间 */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/game/:difficulty" element={<GamePage />} />
          <Route path="/rules" element={<RulesPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
