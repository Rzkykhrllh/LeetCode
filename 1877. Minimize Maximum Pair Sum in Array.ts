function minPairSum(nums: number[]): number {
  nums.sort(function (a, b) {
    return b - a;
  });
  var pairSum = [];
  var n = nums.length;

  for (var i = 0; i < n / 2; i++) {
    pairSum.push(nums[i] + nums[n - i - 1]);
  }

  console.log(nums);
  console.log(pairSum);

  return Math.max(...pairSum);
}
