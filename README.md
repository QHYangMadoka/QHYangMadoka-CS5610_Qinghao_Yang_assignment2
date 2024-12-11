# Minesweeper Game

## Website URL
[Visit the Minesweeper Game](https://placeholder-for-deployed-site.com)

---

## Project Overview

This project is a React implementation of the classic Minesweeper game, completed as part of the CS5610: Web Development course. The game includes various features such as state management, React principles, and bonus functionalities.

---

## Features and Completion Status

### Correct Views and Good Styling
The project satisfies the requirement of having at least three views:
1. **Homepage**:
   - Displays the game name, project information, and useful links.
   - URL: `/`
2. **Game Page**:
   - Allows the user to play Minesweeper with three difficulty levels: Easy, Medium, and Hard.
   - Each difficulty is accessible via:
     - `/game/easy`: 8x8 grid with 10 mines.
     - `/game/medium`: 16x16 grid with 40 mines.
     - `/game/hard`: 30x16 grid with 99 mines.
3. **Rules Page**:
   - Explains the rules of Minesweeper, the game objective, and the various states of the tiles.
   - URL: `/rules`

The project includes consistent and responsive styling across all pages using CSS and React Bootstrap.

---

### State Management
This project uses React state management effectively:
- **Global State**:
  - Implemented using a Context provider to manage shared state across components.
- **Local State**:
  - Used via `useState` for component-specific data such as game progress and grid updates.

---

### Demonstrating Proper React Principles
The project adheres to React best practices:
- **Components**:
  - Includes at least four React components: `Navbar`, `Homepage`, `GamePage`, and `Grid`.
- **Props**:
  - The `Grid` component receives props (`rows`, `cols`, `mines`) from the parent `GamePage`.
- **Nested Components**:
  - `Grid` is nested within `GamePage`, and `Navbar` is rendered globally.
- **State Communication**:
  - Data flows between child and parent components through state and Context without using direct callback functions.

---

### Bonus Points

#### Safe First Turn (2pts)
- The first click on the grid is guaranteed to be safe, ensuring no mines are present at the clicked location. This functionality dynamically adjusts mine placement on the first click.

#### Flag Bomb Function (3pts)
- Users can flag cells suspected to contain bombs:
  - **Right-click** or **Shift + click** flags or unflags a cell.
  - A counter tracks the number of flags used relative to the total number of mines.
  - Flags serve as visual indicators and do not affect gameplay mechanics.

#### Auto Clear (5pts)
- Clicking on a cell with `0` adjacent bombs recursively clears all neighboring empty cells until non-zero cells are reached. This behavior mimics standard Minesweeper rules.

---









