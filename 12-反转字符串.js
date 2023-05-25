// 2023.5.25 by LYZ

// 输入：s = ["h","e","l","l","o"]
// 输出：["o","l","l","e","h"]
s = ["h","e","l","l","o"]

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  // // 方法一：二分法
  // let temp
  // const num = Math.floor(s.length/2)
  // for(let i=0; i<num; i++ ) {
  //   temp = s[i]
  //   s[i]=s[s.length-1-i]
  //   s[s.length-1-i] = temp
  // }
  // return s

  // 方法二 双指针法
  let l = 0;
  let r = s.length - 1;
  while(l < r) {
      [s[l], s[r]] = [s[r], s[l]];
      l++;
      r--;
  }
  return s;
};
console.log(reverseString(s))