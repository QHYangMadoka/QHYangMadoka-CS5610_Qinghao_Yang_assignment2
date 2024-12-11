import React from 'react';
import beginnerImg from '../pics/beginner.png';
import intermediateImg from '../pics/intermediate.png';
import expertImg from '../pics/expert.png';
import '../styles/RulesPage.css';

const RulesPage = () => {
  return (
    <div className="rules-page">
      <div className="rules-content">
        <h1>Minesweeper Rules</h1>
        <p>
          A game of Minesweeper is set on a grid made up of cells, with a number of mines
          randomly placed on the board (the size and number of mines is based on the difficulty - 
          see below). To win, you need to find all of the safe spaces on the board that <strong>DO NOT</strong>{' '}
          have mines. The player does this by using their mouse to click on the grid squares.
        </p>
        <h2>Gameplay</h2>
        <p>
          Clicking on a square reveals 2 states:
        </p>
        <ul>
          <li>
            <strong>A number:</strong>{' '}
            Indicates how many cells around the selected cell (vertically, 
            horizontally, or diagonally) contain mines. A cell with <strong>NO bombs</strong>{' '}
            around it may be represented as either a <strong>0</strong> or an empty cell.
          </li>
          <li>
            <strong>A bomb!</strong>{' '}
            This indicates that the user has lost. You may represent this with 
            a symbol (like an X or something else) or with some art.
          </li>
        </ul>
        <h2>Game Over States</h2>
        <p>
          At the top of the screen:
        </p>
        <ul>
          <li>If the player finds all safe cells: <strong>“Game over! You Won!”</strong></li>
          <li>If the player clicks on a bomb: <strong>“Game over! You lost!”</strong></li>
        </ul>
        <h2>Reset Button</h2>
        <p>
          At the top of the screen, there is a reset button that starts a new game of Minesweeper.
          This randomizes the location of the mines on the board and resets the state.
        </p>
        <h2>Difficulty Levels</h2>
        <p>
          From the header, users can select 3 levels of difficulty, each corresponding to different 
          rules and a different URL:
        </p>
        <ul>
          <li>
            <strong>Easy:</strong> URL ends with <code>/game/easy</code>. The board size is 
            <strong> 8 X 8</strong> with <strong>10 mines</strong>.
          </li>
          <li>
            <strong>Medium:</strong> URL ends with <code>/game/medium</code>. The board size is 
            <strong> 16 X 16</strong> with <strong>40 mines</strong>.
          </li>
          <li>
            <strong>Hard:</strong> URL ends with <code>/game/hard</code>. The board size is 
            <strong> 30 X 16</strong> with <strong>99 mines</strong>.
          </li>
        </ul>
      </div>
      <div className="rules-images">
        <img src={beginnerImg} alt="Beginner level demo" />
        <img src={intermediateImg} alt="Intermediate level demo" />
        <img src={expertImg} alt="Expert level demo" />
      </div>
    </div>
  );
};

export default RulesPage;

