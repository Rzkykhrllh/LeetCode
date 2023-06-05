function balancedStringSplit(s: string): number {
  var l = 0;
  var r = 0;
  var total = 0;

  for (var i = 0; i < s.length; i++) {
    if (s[i] == "L") l++;
    if (s[i] == "R") r++;

    if (l == r) {
      l = 0;
      r = 0;
      total++;
    }
  }

  return total;
}
