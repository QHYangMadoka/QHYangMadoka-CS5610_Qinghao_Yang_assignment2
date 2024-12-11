import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import '../styles/Grid.css';

// Function to create an empty grid with initial cell states
const createEmptyGrid = (rows, cols) => {
  return Array(rows)
    .fill(null)
    .map(() =>
      Array(cols).fill(null).map(() => ({
        hasMine: false, // Indicates if the cell contains a mine
        revealed: false, // Indicates if the cell has been revealed
        flagged: false, // Indicates if the cell is flagged by the user
        count: 0, // Number of mines in adjacent cells
      }))
    );
};

// Main Grid component, uses forwardRef to expose methods to parent components
const Grid = forwardRef(({ rows, cols, mines }, ref) => {
  // State variables to manage the game
  const [grid, setGrid] = useState(createEmptyGrid(rows, cols));
  const [gameOver, setGameOver] = useState(false);
  const [flagsLeft, setFlagsLeft] = useState(mines);
  const [initialized, setInitialized] = useState(false);
  const [gameResult, setGameResult] = useState('');
  const [timer, setTimer] = useState(0);
  const [isTiming, setIsTiming] = useState(false);

  // Timer logic: Starts or stops the timer based on isTiming state
  useEffect(() => {
    let interval = null;
    if (isTiming) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    } else if (!isTiming && interval) {
      clearInterval(interval);
    }
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [isTiming]);

  // Expose resetGame method to parent components
  useImperativeHandle(ref, () => ({
    resetGame() {
      setGrid(createEmptyGrid(rows, cols)); // Reset the grid
      setGameOver(false); // Reset gameOver state
      setFlagsLeft(mines); // Reset flag count
      setInitialized(false); // Reset initialization state
      setGameResult(''); // Clear game result message
      setTimer(0); // Reset the timer
      setIsTiming(false); // Stop the timer
    },
  }));

  const initializeGrid = (row, col) => {
    const newGrid = createEmptyGrid(rows, cols);

    let minesPlaced = 0;
    // Randomly place mines while avoiding the first clicked cell
    while (minesPlaced < mines) {
      const randomRow = Math.floor(Math.random() * rows);
      const randomCol = Math.floor(Math.random() * cols);

      if (
        !newGrid[randomRow][randomCol].hasMine &&
        !(randomRow === row && randomCol === col)
      ) {
        newGrid[randomRow][randomCol].hasMine = true;
        minesPlaced++;
      }
    }

    // Calculate adjacent mine counts for each cell
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (!newGrid[r][c].hasMine) {
          let count = 0;
          for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
              const newRow = r + i;
              const newCol = c + j;
              if (
                newRow >= 0 &&
                newRow < rows &&
                newCol >= 0 &&
                newCol < cols &&
                newGrid[newRow][newCol].hasMine
              ) {
                count++;
              }
            }
          }
          newGrid[r][c].count = count; // Assign mine count to the cell
        }
      }
    }

    setGrid(newGrid);
    setInitialized(true); // Mark the grid as initialized
    setIsTiming(true); // Start the timer
  };

  // Reveal cells recursively for empty cells
  const revealCells = (newGrid, row, col) => {
    if (
      row < 0 || 
      row >= rows || 
      col < 0 || 
      col >= cols || 
      newGrid[row][col].revealed
    ) {
      return;
    }
  
    const cell = newGrid[row][col];
    cell.revealed = true;
  
    if (cell.count === 0) {
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          revealCells(newGrid, row + i, col + j);
        }
      }
    }
  };

  const handleClick = (row, col) => {
    if (gameOver || grid[row][col].revealed || grid[row][col].flagged) return;

    const newGrid = grid.map((row) => row.map((cell) => ({ ...cell })));
    const cell = newGrid[row][col];

    if (!initialized) {
      initializeGrid(row, col); // Initialize grid on the first click
      return;
    }

    if (cell.hasMine) {
      cell.revealed = true;
      setGrid(newGrid);
      setGameOver(true);
      setIsTiming(false); // Stop the timer
      setGameResult('Game Over! You Lost!');
    } else {
      revealCells(newGrid, row, col);
      setGrid(newGrid);

      const unrevealedCells = newGrid.flat().filter((cell) => !cell.revealed).length;
      if (unrevealedCells === mines) {
        setGameOver(true);
        setIsTiming(false); // Stop the timer
        setGameResult('Game Over! You Won!');
      }
    }
  };

  const handleRightClick = (e, row, col) => {
    e.preventDefault();
    if (gameOver || grid[row][col].revealed) return;

    const newGrid = grid.map((row) => row.map((cell) => ({ ...cell })));
    const cell = newGrid[row][col];

    if (cell.flagged) {
      cell.flagged = false;
      setFlagsLeft(flagsLeft + 1);
    } else {
      if (flagsLeft > 0) {
        cell.flagged = true;
        setFlagsLeft(flagsLeft - 1);
      }
    }

    setGrid(newGrid);
  };

  return (
    <div className="grid-container">
      <div className="status">
        {gameResult && <p className="game-result">{gameResult}</p>}
        <p>Flags Left: {flagsLeft}</p>
        <p>Time: {timer} seconds</p>
      </div>
      <div className="grid" style={{ gridTemplateColumns: `repeat(${cols}, 30px)` }}>
        {grid.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`cell ${cell.revealed ? (cell.hasMine ? 'mine' : 'safe') : ''} ${
                cell.flagged ? 'flagged' : ''
              }`}
              onClick={() => handleClick(rowIndex, colIndex)}
              onContextMenu={(e) => handleRightClick(e, rowIndex, colIndex)}
            >
              {cell.revealed && !cell.hasMine && cell.count > 0 ? (
                <span className={`number-${cell.count}`}>{cell.count}</span>
              ) : ''}
              {cell.revealed && cell.hasMine ? '💣' : ''}
              {!cell.revealed && cell.flagged ? '🚩' : ''}
            </div>
          ))
        )}
      </div>
    </div>
  );
});

export default Grid;
