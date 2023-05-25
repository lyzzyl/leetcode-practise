// 2023.5.25 by LYZ

let x = -123;

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  // 方法一
  // let str = x.toString()
  // let arr = str.split('')
  // let num
  // if(arr[0] === '-') {
  //   let l = 1;
  //   let r = arr.length - 1;
  //   while(l < r) {
  //       [arr[l], arr[r]] = [arr[r], arr[l]];
  //       l++;
  //       r--;
  //   }
  //   arr.shift()
  //   num = -Number(arr.join(''))
  // }
  // else {
  //   let l = 0;
  //   let r = arr.length - 1;
  //   while(l < r) {
  //       [arr[l], arr[r]] = [arr[r], arr[l]];
  //       l++;
  //       r--;
  //   }
  //   num = Number(arr.join(''))
  // }
  // if( num >= Math.pow(2,31)) return 0
  // if(num < -Math.pow(2,31)) return 0
  // return num

  // 方法2
  // let rev = 0;
  // while (x !== 0) {
  //   // 弹出 x 的末尾数字 digit
  //   const digit = x % 10;
  //   x = ~~(x / 10);
  //   // 将数字 digit 推入 rev 末尾
  //   rev = rev * 10 + digit;
  //   if (rev < Math.pow(-2, 31) || rev > Math.pow(2, 31) - 1) {
  //     return 0;
  //   }
  // }
  // return rev;

  // 方法3
  // 解题思路
  // result * 10 + x % 10 取出末位 x % 10（负数结果还是负数，无需关心正负），拼接到 result 中。
  // x / 10 去除末位，| 0 强制转换为32位有符号整数。
  // 通过 | 0 取整，无论正负，只移除小数点部分（正数向下取整，负数向上取整）。
  // result | 0 超过32位的整数转换结果不等于自身，可用作溢出判断。
  let result = 0;
  while (x !== 0) {
    result = result * 10 + (x % 10);
    x = (x / 10) | 0;
  }
  return (result | 0) === result ? result : 0;
};

console.log(reverse(x));
