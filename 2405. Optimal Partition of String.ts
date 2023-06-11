function partitionString(s: string): number {
  var nextOccurance = [];

  for (var i = 0; i < s.length; i++) {
    var nearest = 999999;

    for (var j = i + 1; j < s.length; j++) {
      if (s[i] === s[j]) {
        nearest = j;
        break;
      }
    }
    nextOccurance.push(nearest);
  }

  console.log(nextOccurance);

  var result = 1;
  var minOccur = 999999;

  for (var i = 0; i < nextOccurance.length; i++) {
    console.log(i, s[i], ":", minOccur, nextOccurance[i]);
    minOccur = Math.min(minOccur, nextOccurance[i]);

    if (i + 1 == minOccur) {
      console.log("Split: ", i, s[i]);
      result++;
      minOccur = 999999;
    }
  }

  return result;
}

// Idea: Check when the nearest occurance of the char from current_start to current_index, if the nearest occurance == i+1, then split
