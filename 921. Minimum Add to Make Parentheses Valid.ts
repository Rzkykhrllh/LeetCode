function minAddToMakeValid(s: string): number {
  var l = 0;
  var r = 0;

  for (var i = 0; i < s.length; i++) {
    if (s[i] == "(") l++;
    else if (l > 0) l--;
    else r++;
  }

  return l + r;
}
