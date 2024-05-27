const pacman = document.querySelector("#pacman");
const gamefield = document.querySelector("#gameField");
const gameFieldWidth = gamefield.clientWidth; // Get gamefield width in pixels
const gameFieldHeight = gamefield.clientHeight; // Get gamefield height in pixels

console.log(gameFieldWidth, gameFieldHeight);

let pacManX = 0; // Initial X position
let pacManY = 0; // Initial Y position
let rotationAngle = 0;
let scaleX = 0;

const movementDistance = 50;

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight") {
    pacManX = pacManX + movementDistance;
    rotationAngle = 0; // Facing right (no rotation)
    scaleX = 1;
  } else if (event.key === "ArrowLeft") {
    pacManX = pacManX - movementDistance;
    rotationAngle = 0;
    scaleX = -1; // Facing left (Flip the image horizontally)
  } else if (event.key === "ArrowUp") {
    pacManY = pacManY - movementDistance;
    rotationAngle = -90; // Facing up (-90deg rotation)
    scaleX = 1;
  } else if (event.key === "ArrowDown") {
    pacManY = pacManY + movementDistance;
    rotationAngle = 90; // Facing down (90deg rotation)
    scaleX = 1;
  }

  pacManX = Math.max(0, Math.min(pacManX, gameFieldWidth - pacman.clientWidth));
  pacManY = Math.max(
    0,
    Math.min(pacManY, gameFieldHeight - pacman.clientHeight)
  );

  console.log(gameFieldWidth, gameFieldHeight);

  // Apply the updated positions to Pacman's style
  pacman.style.transform = `
  translateX(${pacManX}px) 
  translateY(${pacManY}px) 
  rotate(${rotationAngle}deg) 
  scaleX(${scaleX})`;
});

// BONUS - pacman should not move outside the game area
