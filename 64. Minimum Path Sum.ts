function minPathSum(grid: number[][]): number {
  var m = grid.length;
  var n = grid[0].length;

  var minPath: Array<Array<number>> = [];

  for (var i = 0; i < m; i++) {
    minPath.push([]);
    for (var j = 0; j < n; j++) {
      minPath[i].push(0);
    }
  }

  function dpFunction(x: number, y: number): number {
    if (minPath[x][y] !== 0) return minPath[x][y];

    if (x == 0 && y == 0) minPath[x][y] = grid[x][y];
    else if (x == 0) minPath[x][y] = grid[x][y] + dpFunction(x, y - 1);
    else if (y == 0) minPath[x][y] = grid[x][y] + dpFunction(x - 1, y);
    else
      minPath[x][y] =
        grid[x][y] + Math.min(dpFunction(x, y - 1), dpFunction(x - 1, y));

    return minPath[x][y];
  }

  return dpFunction(m - 1, n - 1);
}
