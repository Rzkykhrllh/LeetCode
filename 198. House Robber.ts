function rob(nums: number[]): number {
  var maxMoney: Array<number> = [];

  for (var i = 0; i <= nums.length; i++) maxMoney.push();

  // Base Case
  maxMoney[0] = nums[0];
  maxMoney[1] = Math.max(nums[0], nums[1]);

  for (var i = 2; i < nums.length; i++)
    maxMoney[i] = Math.max(maxMoney[i - 1], maxMoney[i - 2] + nums[i]);

  return maxMoney[nums.length - 1];
}
