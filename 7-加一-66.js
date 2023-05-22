// 2023.5.22 by LYZ
let digits = [9, 9, 9, 9];

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] !== 9) {
      digits[i]++;
      break;
    } else if (i != 0) {
      digits[i] = 0;
    } else {
      digits[i] = 0;
      digits.unshift(1)
    }
  }
  return digits;
};

console.log(plusOne(digits));
