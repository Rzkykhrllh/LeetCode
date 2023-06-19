function maxSatisfaction(satisfaction: number[]): number {
  var served = [];
  var notServed = [];

  var asc = (a, b) => a - b;
  var des = (a, b) => b - a;

  function calculate(arr: number[]): number {
    var total = 0;

    for (var i = 0; i < arr.length; i++) {
      total += (i + 1) * arr[i];
    }

    return total;
  }

  for (var i = 0; i < satisfaction.length; i++) {
    if (satisfaction[i] > 0) served.push(satisfaction[i]);
    else notServed.push(satisfaction[i]);
  }

  served.sort(asc);
  notServed.sort(des);
  var bestScore = calculate(served);

  for (var i = 0; i < notServed.length; i++) {
    served.unshift(notServed[i]);

    var currScore = calculate(served);

    if (currScore < bestScore) break;
    else bestScore = currScore;
  }

  return bestScore;
}
