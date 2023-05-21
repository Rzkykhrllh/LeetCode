function longestPalindrome(s: string): number {
  var obj = {};

  for (var i = 0; i < s.length; i++) {
    if (!(s[i] in obj)) {
      obj[s[i]] = 1;
    } else {
      obj[s[i]]++;
    }
  }

  var total = 0;
  var odd = 0;
  for (var key in obj) {
    total += obj[key];
    if (obj[key] % 2 == 1) {
      odd = 1;
      total -= 1;
    }
  }

  return total + odd;
}
