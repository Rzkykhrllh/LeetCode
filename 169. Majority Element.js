/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }

  let majority = nums[0];
  for (const [key, value] of map) {
    if (value > map.get(majority)) {
      majority = key;
    }
  }

  return majority;
};