/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let new_nums = []
    
    for (let i = 0; i < nums.length; i++) {
        index = (i - k + nums.length) % nums.length;
        new_nums.push(nums[index]);
    }

    return new_nums;
};