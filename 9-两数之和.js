// 2023.5.23 by LYZ
let nums = [2, 7, 11, 15],
  target = 9

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // //方法一 时间复杂度太慢了
  // let arr = []
  // for (let i = 0; i < nums.length; i++) {
  //   if (nums.lastIndexOf((target - nums[i])) && nums.lastIndexOf((target - nums[i])) > i) {
  //     arr[0] = i;
  //     arr[1] = nums.lastIndexOf((target - nums[i]));
  //   }
  // }
  // return arr;
  // // 方法2
  // let arr = [];
  // let nums1 = [];
  // for(let i = 0; i<nums.length;i++) {
  //   if((nums1[target-nums[i]] || nums1[target-nums[i]]===0)) {
  //     arr[0]=nums1[target-nums[i]];
  //     arr[1]=i
  //   }
  //   nums1[nums[i]]=i;
  // }
  // return arr;
  // 方法3 使用map 思路和方法2一致
  let map = new Map();
  for (let i = 0; i<nums.length;i++) {
    temp = target-nums[i];
    if(map.has(temp)) return [map.get(temp),i];
    map.set(nums[i], i)
  }
};

console.log(twoSum(nums, target))