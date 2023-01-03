export default class Snake {
  velocity = {
    x: 1,
    y: 0,
  };

  head = {
    x: 2,
    y: 1,
  };

  body = [];

  tail = {
    x: 1,
    y: 1,
  };

  constructor(grid) {
    this.grid = grid;
  }

  checkCollision() {
    if (this.head.x < 1 || this.head.x > 20) {
      return true;
    }

    if (this.head.y < 1 || this.head.y > 20) {
      return true;
    }

    if (
      this.body.some((part) => part.x == this.head.x && part.y == this.head.y)
    ) {
      return true;
    }

    return false;
  }

  checkFood() {
    if (this.head.x == this.grid.food.x && this.head.y == this.grid.food.y) {
      this.grid.changeItem({ col: this.grid.food.x, row: this.grid.food.y });
      this.grid.generateFood();

      this.body.push({ x: this.tail.x, y: this.tail.y });
      console.log(this.body);
    }
  }

  update() {
    if (this.checkCollision()) {
      console.log("Game over");
      return true;
    }

    this.grid.changeItem({ col: this.tail.x, row: this.tail.y });
    this.grid.changeItem({ col: this.head.x, row: this.head.y });

    this.body.forEach((part) => {
      this.grid.changeItem({ col: part.x, row: part.y, item: "0" });
    });

    this.body[0] = { x: this.head.x, y: this.head.y };

    let lastPart = this.body[this.body.length - 1];

    for (let i = this.body.length - 1; i > 0; i--) {
      this.body[i] = this.body[i - 1];
    }

    this.tail = lastPart;

    this.head.x += this.velocity.x;
    this.head.y += this.velocity.y;

    this.grid.changeItem({ col: this.head.x, row: this.head.y, item: "h" });
    this.grid.changeItem({ col: this.tail.x, row: this.tail.y, item: "s" });

    this.body.forEach((part) => {
      this.grid.changeItem({ col: part.x, row: part.y, item: "s" });
    });

    this.checkFood();

    return false;
  }
}
