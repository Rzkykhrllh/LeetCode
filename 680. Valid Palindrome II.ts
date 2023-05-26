function validPalindrome(s: string): boolean {
  function PolindromeCheck(s: string): boolean {
    var reversedS = "";

    for (let i = s.length - 1; i >= 0; i--) {
      reversedS += s[i];
    }

    return reversedS === s;
  }

  if (PolindromeCheck(s)) return true;

  var l = 0;
  var r = s.length - 1;

  var newS1 = "";
  var newS2 = "";

  while (l <= r) {
    if (s[l] == s[r]) {
      l++;
      r--;
    } else {
      newS1 = s.slice(0, l) + s.slice(l + 1);
      newS2 = s.slice(0, r) + s.slice(r + 1);

      return PolindromeCheck(newS1) || PolindromeCheck(newS2);
    }
  }

  return true;
}
