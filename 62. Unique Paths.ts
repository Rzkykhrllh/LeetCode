function uniquePaths(m: number, n: number): number {
  var stepCount: Array<Array<number>> = [];

  for (let i = 0; i < m; i++) {
    stepCount[i] = [];
    for (let j = 0; j < n; j++) {
      stepCount[i][j] = 1;
    }
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      stepCount[i][j] = stepCount[i - 1][j] + stepCount[i][j - 1];
    }
  }

  return stepCount[m - 1][n - 1];
}
