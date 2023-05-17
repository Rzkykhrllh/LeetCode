function maximalSquare(matrix: string[][]): number {
  var memo: Array<Array<number>> = [];
  var m = matrix.length;
  var n = matrix[0].length;

  for (var i = 0; i < m; i++) {
    memo.push([]);
    for (var j = 0; j < n; j++) {
      memo[i].push(0);
    }
  }

  var maxValue = 0;
  for (var i = 0; i < m; i++) {
    if (matrix[i][0] == "1") {
      memo[i][0] = 1;
      maxValue = 1;
    }
  }

  for (var i = 0; i < n; i++) {
    if (matrix[0][i] == "1") {
      memo[0][i] = 1;
      maxValue = 1;
    }
  }

  for (var i = 1; i < m; i++) {
    for (var j = 1; j < n; j++) {
      if (matrix[i][j] == "1") {
        memo[i][j] =
          Math.min(memo[i - 1][j], memo[i - 1][j - 1], memo[i][j - 1]) + 1;
      }

      maxValue = Math.max(maxValue, memo[i][j]);
    }
  }

  return maxValue * maxValue;
}
