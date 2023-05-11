function deleteAndEarn(nums: number[]): number {
  var occurance: number[] = [];
  var newNums: number[] = [];
  var maxPoints: number[] = [];

  for (var i = 0; i <= 10000; i++) {
    occurance.push(0);
    maxPoints.push(0);
  }

  for (var i = 0; i < nums.length; i++) {
    if (occurance[nums[i]] == 0) newNums.push(nums[i]);
    occurance[nums[i]]++;
  }

  // Base Case
  maxPoints[0] = 0;
  maxPoints[1] = 1 * occurance[1];

  // Iterative
  for (var i = 2; i <= 10000; i++) {
    // maxPoints[i] = Math.max(maxPoints[i-1], maxPoints[i-2]+sortedNums[i]*occurance[sortedNums[i]])
    maxPoints[i] = Math.max(
      maxPoints[i - 1],
      maxPoints[i - 2] + i * occurance[i]
    );
  }

  // console.log(maxPoints)
  return maxPoints[10000];
}
