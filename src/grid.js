export default class Grid {
  grid = [];

  rowSize = 0;
  colSize = 0;

  food = {
    x: 10,
    y: 10,
  };

  CELLSIZE = 30;

  constructor({ rows, collums }) {
    for (let i = 0; i < rows; i++) {
      this.grid.push(Array(collums).fill("0"));
    }

    this.generateFood();
  }

  getPixel({ row, col }) {
    return {
      x: col * 30,
      y: row * 30,
    };
  }

  draw(ctx) {
    this.grid.forEach((row, rowIndex) => {
      row.forEach((value, colIndex) => {
        const { x, y } = this.getPixel({ row: rowIndex, col: colIndex });

        let color = "";

        switch (value) {
          case "f":
            color = "rgb(163, 3, 75)";
            break;
          case "0":
            color = "black";
            break;
          case "s":
            color = "white";
            break;
          case "h":
            color = "rgb(201, 197, 201)";
            break;
        }

        ctx.fillStyle = color;
        ctx.fillRect(x, y, this.CELLSIZE, this.CELLSIZE);
      });
    });
  }

  changeItem({ row, col, item = "0" }) {
    this.grid[row - 1][col - 1] = item;
  }

  generateFood() {
    const row = Math.floor(Math.random() * this.grid.length) + 1;
    const col = Math.floor(Math.random() * this.grid[0].length) + 1;

    if (this.grid[row - 1][col - 1] != "0") {
      this.generateFood();
      return;
    }

    this.food = { x: col, y: row };

    this.changeItem({ row, col, item: "f" });
  }

  show() {
    console.table(this.grid);
  }
}
