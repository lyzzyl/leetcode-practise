// 2023.5.22 by LYZ
let nums1 = [4, 9, 5],
  nums2 = [9, 4, 9, 8, 4];

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  // 方法1
  return nums1.filter(function(num) {
    for(let j = 0; j<nums2.length; j++) {
      if(nums2[j] === num) {
        nums2.splice(j, 1)
        return true
      }
    }
    return false
  })
  // // 方法2 判断nums1和nums2的长短
  // let nums = [];
  // let temp1, temp2 = [];
  // if (nums1.length > nums2.length) {
  //   temp1 = nums2;
  //   temp2 = nums1;
  // } else {
  //   temp1 = nums1;
  //   temp2 = nums2;
  // }
  // for (let i = 0; i < temp1.length; i++) {
  //   for (let j = 0; j < temp2.length; j++) {
  //     if (temp1[i] === temp2[j]) {
  //       nums.push(temp1[i]);
  //       temp2.splice(j, 1);
  //       break;
  //     }
  //   }
  // }
  // return nums;
};

console.log(intersect(nums1, nums2))