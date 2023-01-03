export default class Input {
  constructor(snake) {
    document.addEventListener(
      "keypress",
      (event) => {
        var name = event.key;

        if (name == "w" && snake.velocity.y != 1) {
          snake.velocity.x = 0;
          snake.velocity.y = -1;
        }

        if (name == "s" && snake.velocity.y != -1) {
          snake.velocity.x = 0;
          snake.velocity.y = 1;
        }

        if (name == "a" && snake.velocity.x != 1) {
          snake.velocity.x = -1;
          snake.velocity.y = 0;
        }

        if (name == "d" && snake.velocity.x != -1) {
          snake.velocity.x = 1;
          snake.velocity.y = 0;
        }
      },
      false
    );
  }
}
