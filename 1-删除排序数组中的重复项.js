// 2023.5.21
let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]; // 升序数组
let k = 0; // 输出前k个

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let k = 0;
  if (!nums.length) return 0;
  if (nums.length === 1) return 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      k++;
      nums[k] = nums[i];
    }
  }
  return k + 1;
};

console.log(removeDuplicates(nums));
console.log(nums);
