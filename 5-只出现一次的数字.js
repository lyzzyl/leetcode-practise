// 2023.5.22 by LYZ
let nums = [4, 1, 2, 1, 2];

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  // //  方法1 不符合线性时间复杂度
  // for(let i of nums) {
  //   if(nums.indexOf(i) === nums.lastIndexOf(i)) return i
  // }
  // 方法2 利用异或的特性
  let num = nums[0];
  for (let i = 1; i < nums.length; i++) {
    num = num ^ nums[i];
  }
  return num;
};

console.log(singleNumber(nums));
