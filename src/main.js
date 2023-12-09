import AudioController from "./audio";
import Grid from "./grid";
import Input from "./input";
import Snake from "./snake";

const canva = document.getElementById("gameCanvas");
const ctx = canva.getContext("2d");

const grid = new Grid({ rows: 20, collums: 20 });
const audioController = new AudioController();
const snake = new Snake(grid, audioController);

const score = document.getElementById("score");
const button = document.getElementById("restartButton");

new Input(snake);

function update() {
  const gameOver = snake.update();
  if (gameOver) return true;

  score.innerHTML = `Score: ${(snake.body.length - 1) * 100}`;

  grid.draw(ctx);
  return false;
}

const gameLoop = setInterval(() => {
  const gameOver = update();

  if (gameOver) {
    clearInterval(gameLoop);
    onGameOver();
  }
}, 10000 / 60);

const onGameOver = () => {
  const title = document.getElementById("itemTitle");
  title.innerHTML = "Game Over";

  button.classList.remove("hide");
};

button.addEventListener("click", () => {
  location.reload();
});
