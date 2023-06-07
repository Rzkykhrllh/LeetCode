function maximizeSum(nums: number[], k: number): number {
  var maxNum = 0;

  for (var i = 0; i < nums.length; i++) {
    maxNum = maxNum < nums[i] ? nums[i] : maxNum;
  }

  var total = maxNum * k;
  for (var i = 0; i < k; i++) {
    total += i;
  }

  return total;
}
