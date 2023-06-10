function partitionLabels(s: string): number[] {
  var lastOccurance = [];

  for (var i = 0; i < s.length; i++) {
    var last = i;

    for (var j = i + 1; j < s.length; j++) {
      if (s[i] === s[j]) {
        last = j;
      }
    }
    lastOccurance.push(last);
  }

  console.log(lastOccurance);

  var lastIndex = -1;
  var result = [];
  var maxOccur = -1;

  for (var i = 0; i < lastOccurance.length; i++) {
    maxOccur = Math.max(maxOccur, lastOccurance[i]);

    if (i == maxOccur) {
      console.log(i);
      result.push(i - lastIndex);
      lastIndex = i;
      maxOccur = -1;
    }
  }

  return result;
}
