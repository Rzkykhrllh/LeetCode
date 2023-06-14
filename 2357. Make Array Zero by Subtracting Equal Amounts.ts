function minimumOperations(nums: number[]): number {
  var set = new Set();

  for (var i = 0; i < nums.length; i++) {
    if (nums[i] != 0) set.add(nums[i]);
  }
  return set.size;
}
