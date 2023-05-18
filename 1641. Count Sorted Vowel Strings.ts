function countVowelStrings(n: number): number {
  var memo: Array<Array<number>> = [];
  var m = n + 1;
  var n = 5;

  for (var i = 0; i < m; i++) {
    memo.push([]);
    for (var j = 0; j < n; j++) {
      memo[i].push(0);
    }
  }

  // Base
  for (var i = 0; i < n; i++) {
    memo[0][i] = 1;
  }

  for (var i = 1; i < m; i++) {
    var prevRow = 0;

    for (var j = 0; j < n; j++) {
      for (var k = j; k < n; k++) {
        memo[i][j] += memo[i - 1][k];
      }
    }
  }

  return memo[m - 1][0];
}
