import React from 'react';
import '../styles/Homepage.css';
import githubLogo from '../pics/github_logo.png';
import wikiLogo from '../pics/wiki_logo.png';
import minesweeperLogo from '../pics/minesweeper_logo.png';

const Homepage = () => {
  return (
    <div className="homepage">
      <h1>Welcome to Minesweeper</h1>
      <p>This is Project 2 for CS5610: Web Development, created by Qinghao Yang.</p>
      <h2>About This Website</h2>
      <p>
        This website is a simple implementation of the classic Minesweeper game. 
        It includes the following pages:
      </p>
      <ul>
        <li>
          <strong>Homepage:</strong> Provides an overview of the project and useful links.
        </li>
        <li>
          <strong>Rules Page:</strong> Explains the rules of Minesweeper and how to play.
        </li>
        <li>
          <strong>Game Page:</strong> Allows you to play Minesweeper at three difficulty levels:
          Easy, Medium, and Hard. You can select the difficulty from the navigation bar.
        </li>
      </ul>
      <h2>Tips</h2>
      <p>
        If you encounter any issues with the grid while playing the game, simply click the 
        <strong> Reset Game </strong> button to fix the bug and restart the game.
      </p>
      <h2>Links</h2>
      <p>Here are some useful links related to this project:</p>
      <ul>
        <li>
          <a 
            href="https://github.com/QHYangMadoka/QHYangMadoka-CS5610_Qinghao_Yang_assignment2" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img src={githubLogo} alt="GitHub logo" className="link-logo" />
            Project GitHub Repository
          </a>
        </li>
        <li>
          <a 
            href="https://en.wikipedia.org/wiki/Minesweeper_(video_game)" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img src={wikiLogo} alt="Wikipedia logo" className="link-logo" />
            Minesweeper Wikipedia Page
          </a>
        </li>
        <li>
          <a 
            href="https://minesweeper.online/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img src={minesweeperLogo} alt="Minesweeper logo" className="link-logo" />
            Another Minesweeper Website
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Homepage;
