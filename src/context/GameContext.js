import React, { createContext, useState } from 'react';

// Create the GameContext
export const GameContext = createContext();

// Create the provider component
export const GameProvider = ({ children }) => {
  const [difficulty, setDifficulty] = useState('easy'); // Default difficulty

  return (
    <GameContext.Provider value={{ difficulty, setDifficulty }}>
      {children}
    </GameContext.Provider>
  );
};
