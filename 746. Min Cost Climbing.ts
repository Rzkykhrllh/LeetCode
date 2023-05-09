function minCostClimbingStairs(cost: number[]): number {
  var minCost: Array<number> = [];

  for (var i = 0; i <= cost.length; i++) minCost.push(-1);
  minCost[0] = 0;
  minCost[1] = 0;

  function dpFunction(currentStair: number): number {
    if (currentStair > 1 && minCost[currentStair] == -1)
      minCost[currentStair] = Math.min(
        dpFunction(currentStair - 1) + cost[currentStair - 1],
        dpFunction(currentStair - 2) + cost[currentStair - 2]
      );

    return minCost[currentStair];
  }

  return dpFunction(cost.length);
}
