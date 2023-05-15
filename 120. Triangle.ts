function minimumTotal(triangle: number[][]): number {
  var memo: Array<Array<number>> = [];

  for (var i = 0; i < triangle.length; i++) {
    memo.push([]);
    for (var j = 0; j < triangle.length; j++) {
      memo[i].push(99999);
    }
  }

  memo[0][0] = triangle[0][0];

  for (var i = 1; i < triangle.length; i++) {
    for (var j = 0; j < triangle[i].length; j++) {
      var x = 999;
      var y = 999;

      if (j > 0) x = memo[i - 1][j - 1];
      if (j < triangle[i].length - 1) y = memo[i - 1][j];

      memo[i][j] = triangle[i][j] + Math.min(x, y);
    }
  }

  var mostMin = 999;

  for (var i = 0; i < triangle.length; i++) {
    mostMin = Math.min(mostMin, memo[triangle.length - 1][i]);
  }

  return mostMin;
}
