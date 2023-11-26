# Interactive Color Grid Game

This project is a dynamic, interactive grid-based color game implemented in JavaScript.

## Features

- **Dynamic Grid Creation**: The game dynamically creates a grid of tiles based on the specified number of rows and columns. Each tile is a `div` element styled to fit within the grid.

- **Color Changing Tiles**: When the user clicks and drags the mouse over the tiles, they change color. The color is randomly generated, providing a unique color for each tile.

- **Grid Resizing**: The game includes a resize button that prompts the user to enter a new size for the grid. The grid is then recreated based on the new size.

- **Grid Clearing**: A clear button resets all the tiles to white, providing a fresh start for the user.

## How It Works

The game uses event listeners for mouse down, mouse up, and mouse over events to detect when the user is clicking and dragging the mouse. It also uses the `preventDefault` method to prevent the browser's default drag-and-drop behavior. The code is modular and organized into functions for creating the grid, clearing the grid, and changing the grid size.
