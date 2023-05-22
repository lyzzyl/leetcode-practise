// 2023.5.22 by LYZ
let nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  // // 方法1: indexOf的时间复杂度是O(n),导致下面的代码会超时
  // for(let i in nums) {
  //   if(nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i])) return true
  // }
  // return false

  // // 方法2: 下面这种写法通过了，分析是sort方法的时间复杂度应该是O(nlog2n)? 不是很确定
  // nums.sort()
  // for(let i = 1; i < nums.length; i++) {
  //   if(nums[i] === nums[i-1])
  //     return true
  // }
  // return false

  // // 方法3 创建一个空白数组，用哈希表的思想完成
  // let arr = []
  // for(let i=0; i<nums.length; i++) {
  //   if(arr[nums[i]]) return true;
  //   else arr[nums[i]] = 1
  // }
  // return false;

  // 方法4 在思想上和方法2一致，使用了ES6中的Set
  const set = new Set();
  for (const x of nums) {
    if (set.has(x)) {
      return true;
    }
    set.add(x);
  }
  return false;
};

console.log(containsDuplicate(nums));
