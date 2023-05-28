function maxProfit(prices: number[]): number {
  var currentProfit = 0;
  var minBuy = prices[0];

  for (var i = 0; i < prices.length; i++) {
    if (minBuy > prices[i]) minBuy = prices[i];
    if (currentProfit < prices[i] - minBuy) currentProfit = prices[i] - minBuy;
  }

  return currentProfit;
}
