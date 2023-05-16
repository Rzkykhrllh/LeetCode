function minFallingPathSum(matrix: number[][]): number {
  var memo: Array<Array<number>> = [];

  for (var i = 0; i < matrix.length; i++) {
    memo.push([]);
    for (var j = 0; j < matrix.length; j++) {
      memo[i].push(99999999);
    }
  }

  for (var i = 0; i < matrix.length; i++) {
    memo[0][i] = matrix[0][i];
  }

  for (var i = 1; i < matrix.length; i++) {
    for (var j = 0; j < matrix.length; j++) {
      var x = 99999999;
      var y = 99999999;

      if (j > 0) x = memo[i - 1][j - 1];
      if (j < matrix.length - 1) y = memo[i - 1][j + 1];

      memo[i][j] = matrix[i][j] + Math.min(x, y, memo[i - 1][j]);
    }
  }

  var mostMin = 99999999;
  for (var i = 0; i < matrix.length; i++) {
    mostMin = Math.min(mostMin, memo[matrix.length - 1][i]);
  }

  return mostMin;
}
