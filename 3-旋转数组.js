// 2023.5.21
let nums = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
// let nums = [-1,-100,3,99]
// let k = 2;

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  // // 方法1
  // for (let i = 0; i < k; i++) {
  //   let num = nums.pop();
  //   nums.unshift(num);
  // }
  // return nums;
  // // 方法2
  // let nums1 = [];
  // for(let i = 0; i < nums.length; i++) { // 把nums复制给nums1，而不能直接nums1=nums
  //   nums1[i] = nums[i]
  // }
  // // nums1 = nums.slice(0, nums.length) // 等同于上面的for循环
  // // nums1 = nums.concat(); // 同上
  // for (let i = 0; i < nums.length; i++) {
  //   nums[(i + k) % nums.length] = nums1[i]
  // }
  // return nums;
  // 方法3 
  let num = k % nums.length;
  nums.reverse();
  let nums1 = nums.slice(0, num);
  let nums2 = nums.slice(num);
  nums1.reverse();
  nums2.reverse();
  nums1 = nums1.concat(nums2)
  for(let i = 0; i<nums.length; i++) nums[i]=nums1[i]
  // 直接采用下面的方式提交会出错，经过分析原因在于下面的方式相当于改变了nums的引用，原数组nums还是处于第32行的状态
  // nums= nums1.concat(nums2)
  return nums
};

console.log(rotate(nums, k))