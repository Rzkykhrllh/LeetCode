function arraySign(nums: number[]): number {
  var product = 1;

  for (var i = 0; i < nums.length; i++) {
    product = product * nums[i];
  }

  return product < 0 ? -1 : product > 1 ? 1 : 0;
}
