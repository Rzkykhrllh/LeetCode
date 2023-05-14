function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  var m = obstacleGrid.length;
  var n = obstacleGrid[0].length;

  var stepCount: Array<Array<number>> = [];

  for (let i = 0; i < m; i++) {
    stepCount[i] = [];
    for (let j = 0; j < n; j++) {
      stepCount[i][j] = 0;
    }
  }

  stepCount[0][0] = !obstacleGrid[0][0] ? 1 : 0;
  // console.log(stepCount)

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (!obstacleGrid[i][j]) {
        if (i > 0)
          if (!obstacleGrid[i - 1][j]) stepCount[i][j] += stepCount[i - 1][j];

        if (j > 0)
          if (!obstacleGrid[i][j - 1]) stepCount[i][j] += stepCount[i][j - 1];
      }
    }
  }

  // console.log(stepCount)

  return stepCount[m - 1][n - 1];
}
