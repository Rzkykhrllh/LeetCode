function minTimeToType(word: string): number {
  var prevChar = "a";
  var total = word.length;

  for (var i = 0; i < word.length; i++) {
    var currChar = word[i];

    total += Math.min(
      Math.abs(prevChar.charCodeAt(0) - currChar.charCodeAt(0)),
      prevChar.charCodeAt(0) < currChar.charCodeAt(0)
        ? prevChar.charCodeAt(0) - currChar.charCodeAt(0) + 26
        : currChar.charCodeAt(0) - prevChar.charCodeAt(0) + 26
    );

    prevChar = currChar;
  }

  return total;
}
