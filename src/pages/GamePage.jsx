import React, { useRef } from 'react';
import Grid from '../components/Grid';

const GamePage = ({ rows, cols, mines }) => {
  const gridRef = useRef();

  const handleReset = () => {
    if (gridRef.current) {
      gridRef.current.resetGame();
    }
  };

  return (
    <div className="game-page">
      <h1>Minesweeper</h1>
      <button onClick={handleReset} className="reset-button">
        Reset Game
      </button>
      <Grid ref={gridRef} rows={rows} cols={cols} mines={mines} />
    </div>
  );
};

export default GamePage;
