function diStringMatch(s: string): number[] {
  var result = [];
  var counter = -1;

  for (var i = 0; i < s.length; i++) {
    if (s.charAt(i) == "I") {
      counter++;
      result[i] = counter;
    }
  }

  counter++;
  result[s.length] = counter;

  console.log(result);

  for (var i = s.length - 1; i >= 0; i--) {
    if (s.charAt(i) == "D") {
      counter += 1;
      result[i] = counter;
    }
  }

  return result;
}
