function diagonalSum(mat: number[][]): number {
  var total = 0;

  // Primary
  for (var i = 0; i < mat.length; i++) total += mat[i][i];

  // Secondary
  for (var i = 0; i < mat.length; i++) total += mat[i][mat.length - i - 1];

  var mid = Math.floor(mat.length / 2);
  if (mat.length % 2 == 1) total -= mat[mid][mid];

  return total;
}
