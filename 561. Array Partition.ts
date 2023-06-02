function arrayPairSum(nums: number[]): number {
  nums.sort((a, b) => a - b);

  var total = 0;

  for (var i = 0; i < nums.length; i += 2) {
    total += nums[i];
  }

  return total;
}
