function matrixScore(grid: number[][]): number {
  function flip(index: number, row: boolean = true) {
    if (row) {
      for (var i = 0; i < grid[0].length; i++) {
        if (grid[index][i] == 1) grid[index][i] = 0;
        else grid[index][i] = 1;
      }
    } else {
      for (var i = 0; i < grid.length; i++) {
        if (grid[i][index] == 1) grid[i][index] = 0;
        else grid[i][index] = 1;
      }
    }
  }

  console.log(grid.length, grid[0].length);

  // Flipping the first column
  for (var i = 0; i < grid.length; i++) {
    if (grid[i][0] != 1) flip(i);
  }

  // Flip the rest
  for (var i = 0; i < grid[0].length; i++) {
    var count = 0;

    for (var j = 0; j < grid.length; j++) {
      if (grid[j][i] == 1) count++;
    }

    console.log(i, count, grid.length / 2);

    if (count < grid.length / 2) flip(i, false);
  }

  // Count the matrix
  var total = 0;
  for (var i = 0; i < grid.length; i++) {
    var count = 0;
    var decimal = 0;
    var power = -1;

    for (var j = grid[0].length - 1; j >= 0; j--) {
      power++;

      if (grid[i][j] == 1) {
        decimal += Math.pow(2, power);
      }
    }
    total += decimal;
  }

  return total;
}
