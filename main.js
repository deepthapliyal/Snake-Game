// Get the canvas element
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Set up the snake
let snake = {
  x: 10,
  y: 10,
  dx: 10,
  dy: 0,
  cells: []
};

// Set up the food
let food = {
  x: 0,
  y: 0
};

// Initialize the game
function init() {
  // Set the initial snake position and length
  snake.cells = [];
  for (let i = 0; i < 4; i++) {
    snake.cells.push({ x: snake.x - i, y: snake.y });
  }

  // Generate the first food
  generateFood();

  // Start the game loop
  setInterval(gameLoop, 100);
}

// Generate a new food location
function generateFood() {
  food.x = Math.floor(Math.random() * canvas.width / 10) * 10;
  food.y = Math.floor(Math.random() * canvas.height / 10) * 10;
}

// Update the game state
function update() {
  // Move the snake
  snake.x += snake.dx;
  snake.y += snake.dy;

  // Check for collisions with the walls
  if (snake.x < 0 || snake.x >= canvas.width || snake.y < 0 || snake.y >= canvas.height) {
    gameOver();
    return;
  }

  // Check for collisions with the food
  if (snake.x === food.x && snake.y === food.y) {
    // Grow the snake
    snake.cells.push({ x: snake.x, y: snake.y });

    // Generate new food
    generateFood();
  }

  // Move the snake's body
  snake.cells.unshift({ x: snake.x, y: snake.y });
  snake.cells.pop();
}

// Render the game on the canvas
function render() {
  // Clear the canvas
  ctx.clearRect

// Clear the canvas
ctx.fillStyle = "#ddd";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Draw the food
ctx.fillStyle = "red";
ctx.fillRect(food.x, food.y, 10, 10);

// Draw the snake
ctx.fillStyle = "green";
snake.cells.forEach(cell => {
ctx.fillRect(cell.x, cell.y, 10, 10);
});
}

// The main game loop
function gameLoop() {
update();
render();
}

// Handle keyboard input
document.addEventListener("keydown", event => {
switch (event.keyCode) {
case 37: // Left arrow
snake.dx = -10;
snake.dy = 0;
break;
case 38: // Up arrow
snake.dx = 0;
snake.dy = -10;
break;
case 39: // Right arrow
snake.dx = 10;
snake.dy = 0;
break;
case 40: // Down arrow
snake.dx = 0;
snake.dy = 10;
break;
}
});

// End the game
function gameOver() {
clearInterval(gameLoop);
alert("Game over!");
}

// Start the game
init();