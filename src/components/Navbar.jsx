import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GameContext } from '../context/GameContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Navbar.css';

function Navbar() {
  const { setDifficulty } = useContext(GameContext); // Use Context for difficulty

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/rules">Rules</Link>
            </li>
            <li className="nav-item dropdown">
              <div className="dropdown">
                <button
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  aria-expanded="false"
                >
                  Play
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/game/easy"
                      onClick={() => setDifficulty('easy')}
                    >
                      Easy
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/game/medium"
                      onClick={() => setDifficulty('medium')}
                    >
                      Medium
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/game/hard"
                      onClick={() => setDifficulty('hard')}
                    >
                      Hard
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
