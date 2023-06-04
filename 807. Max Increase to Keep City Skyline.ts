function maxIncreaseKeepingSkyline(grid: number[][]): number {
  var maxVertical = [];
  var maxHorizontal = [];

  for (var i = 0; i < grid.length; i++) {
    var newVerticalMax = 0;
    var newHorizontalMax = 0;

    for (var j = 0; j < grid.length; j++) {
      newVerticalMax = Math.max(newVerticalMax, grid[i][j]);
      newHorizontalMax = Math.max(newHorizontalMax, grid[j][i]);
    }

    maxVertical.push(newVerticalMax);
    maxHorizontal.push(newHorizontalMax);
  }

  var total = 0;

  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid.length; j++) {
      total += Math.min(maxVertical[i], maxHorizontal[j]) - grid[i][j];
    }
  }

  return total;
}
