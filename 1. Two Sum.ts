function twoSum(nums: number[], target: number): number[] {
  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        var arr = [];
        arr.push(i);
        arr.push(j);
        return arr;
      }
    }
  }
}
