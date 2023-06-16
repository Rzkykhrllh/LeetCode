function maxIceCream(costs: number[], coins: number): number {
  costs.sort((a, b) => a - b);

  var count = 0;

  for (var i = 0; i < costs.length; i++) {
    if (coins >= costs[i]) {
      count++;
      coins -= costs[i];
    }
  }

  console.log(costs);

  return count;
}
