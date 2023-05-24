function findContentChildren(g: number[], s: number[]): number {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  var i = 0;
  var j = 0;
  var count = 0;

  while (i < g.length && j < s.length) {
    if (s[j] >= g[i]) {
      i++;
      j++;
      count++;
    } else {
      j++;
    }
  }

  return count;
}
