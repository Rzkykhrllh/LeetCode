function maxCoins(piles: number[]): number {
  var maxCoins = 0;

  piles.sort((a, b) => a - b);

  var left = 0;
  var right = piles.length - 2;

  while (left < right) {
    maxCoins += piles[right];
    left++;
    right -= 2;
  }

  return maxCoins;
}
