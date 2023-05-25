// 2023.5.25 by LYZ

const s = "leetcode"

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  // 方法1
  for(let i = 0; i<s.length;i++) {
    if(s.indexOf(s[i]) === s.lastIndexOf(s[i])) return i
  }
  return -1

  // // 方法2 这种方法错了，只能识别奇数次的元素，而不是唯一
  // const m = new Set()
  // for(let i = 0; i<s.length; i++) {
  //   if(m.has(s[i])) m.delete(s[i])
  //     else m.add(s[i])
  // }
  // for(let i = 0; i<s.length; i++) {
  //   if(m.has(s[i])) return i
  // }
  // return 0
};

console.log(firstUniqChar(s))