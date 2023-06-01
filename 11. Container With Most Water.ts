function maxArea(height: number[]): number {
  var maxVolume = 0;
  var l = 0;
  var r = height.length - 1;

  while (l < r) {
    maxVolume = Math.max(maxVolume, (r - l) * Math.min(height[l], height[r]));

    if (height[l] < height[r]) l++;
    else r--;
  }

  return maxVolume;
}
