// 2023.5.23 by LYZ
let nums = [0, 1, 0, 3, 12];

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let count = 0
  let temp
  for(let i = 0; i <nums.length; i++) {
    if(nums[i] !== 0) {
      temp = nums[i-count]
      nums[i-count] = nums[i]
      nums[i] = temp
    } else count++
  }
  return nums
};

console.log(moveZeroes(nums))