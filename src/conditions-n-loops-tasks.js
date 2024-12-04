/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  let ans;
  if (number >= 0) ans = true;
  else ans = false;
  return ans;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(...args) {
  let max = args[0];
  for (let i = 1; i < args.length; i += 1) {
    if (max < args[i]) max = args[i];
  }
  return max;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  let ans = false;
  if (queen.x === king.x || queen.y === king.y) ans = true;
  else {
    for (let i = 0; i < 8; i += 1) {
      for (let j = 0; j < 8; j += 1) {
        const step = king.x - j;
        if (
          (queen.x === j && queen.y === king.y - step) ||
          (queen.x === j && queen.y === king.y + step)
        ) {
          ans = true;
          break;
        }
      }
    }
  }
  return ans;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  let ans = false;
  if (a > 0 && b > 0 && c > 0) {
    if (
      (a === b && a + b > c) ||
      (b === c && b + c > a) ||
      (a === c && a + c > b)
    )
      ans = true;
  }
  return ans;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let ans = '';
  let numeric;
  const romans = ['I', 'V', 'X'];
  if (num >= 10) {
    const temp = num % 10;
    if (num / 10 > 0) {
      for (let i = 1; i <= num / 10; i += 1) {
        ans += romans[2];
      }
    }
    numeric = temp;
  } else numeric = num;
  switch (numeric) {
    case 1:
    case 2:
    case 3:
      for (let i = 1; i <= numeric; i += 1) {
        ans += romans[0];
      }
      break;
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
      if (numeric < 5) {
        ans += `${romans[0]}${romans[1]}`;
      } else {
        ans += romans[1];
        for (let i = 1; i <= numeric - 5; i += 1) ans += romans[0];
      }
      break;
    case 9:
      ans += `${romans[0]}${romans[2]}`;
      break;
    default:
      ans += '';
  }
  return ans;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  const strings = [
    ['0', 'zero'],
    ['1', 'one'],
    ['2', 'two'],
    ['3', 'three'],
    ['4', 'four'],
    ['5', 'five'],
    ['6', 'six'],
    ['7', 'seven'],
    ['8', 'eight'],
    ['9', 'nine'],
    ['.', 'point'],
    [',', 'point'],
    ['-', 'minus'],
  ];
  let ans = '';
  let i = 0;
  while (i < numberStr.length) {
    switch ([...numberStr][i]) {
      case '0':
        ans += strings[0][1];
        break;
      case '1':
        ans += strings[1][1];
        break;
      case '2':
        ans += strings[2][1];
        break;
      case '3':
        ans += strings[3][1];
        break;
      case '4':
        ans += strings[4][1];
        break;
      case '5':
        ans += strings[5][1];
        break;
      case '6':
        ans += strings[6][1];
        break;
      case '7':
        ans += strings[7][1];
        break;
      case '8':
        ans += strings[8][1];
        break;
      case '9':
        ans += strings[9][1];
        break;
      case '.':
        ans += strings[10][1];
        break;
      case ',':
        ans += strings[11][1];
        break;
      case '-':
        ans += strings[12][1];
        break;
      default:
        ans += '';
        break;
    }
    if (i < numberStr.length - 1) ans += ' ';
    i += 1;
  }
  return ans;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let ans = true;
  const count = str.length - 1;
  for (let i = 0; i < [...str].length; i += 1) {
    if ([...str][i] !== [...str][count - i]) {
      ans = false;
      break;
    }
  }
  return ans;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  let ans = -1;
  for (let i = 0; i < str.length; i += 1) {
    if ([...str][i] === letter) {
      ans = i;
      break;
    }
  }
  return ans;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let ans = false;
  let temp = num;
  while (temp / 10 > 0) {
    if (temp % 10 === digit) {
      ans = true;
      break;
    }
    temp = Math.trunc(temp / 10);
  }
  return ans;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let balance = -1;
  for (let i = 1; i < arr.length - 1; i += 1) {
    let left = 0;
    let right = 0;
    for (let j = 0; j < i; j += 1) {
      left += arr[j];
    }
    for (let j = i + 1; j < arr.length; j += 1) {
      right += arr[j];
    }
    if (left === right) {
      balance = i;
      break;
    }
  }
  return balance;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const matrix = [];
  for (let i = 0; i < size; i += 1) {
    matrix[i] = [];
  }
  let num = 1;
  let i = 0;
  let j = 0;
  let Ist = 0;
  let Ien = size - 1;
  let Jst = 0;
  let Jen = size - 1;
  while (num <= size ** 2) {
    matrix[i][j] = num;
    num += 1;
    if (i === Ist && j < Jen) j += 1;
    else if (j === Jen && i < Ien) i += 1;
    else if (i === Ien && j > Jst) j -= 1;
    else i -= 1;
    if (i === Ist + 1 && j === Jst && Jst !== Jen) {
      Ist += 1;
      Ien -= 1;
      Jst += 1;
      Jen -= 1;
    }
  }
  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 *
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const size = matrix.length;
  const arr = [];
  for (let i = 0; i < size; i += 1) {
    arr[i] = [];
  }
  for (let i = 0; i < size; i += 1) {
    for (let j = 0; j < size; j += 1) {
      arr[i][j] = matrix[size - 1 - j][i];
    }
  }
  const temparr = matrix;
  for (let i = 0; i < size; i += 1) {
    for (let j = 0; j < size; j += 1) {
      temparr[i][j] = arr[i][j];
    }
  }
  return matrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  const leftArr = [];
  const rightArr = [];
  let l = 0;
  let r = 0;
  for (let ind = 0; ind < arr.length; ind += 1) {
    if (ind < middle) {
      leftArr[l] = arr[ind];
      l += 1;
    } else {
      rightArr[r] = arr[ind];
      r += 1;
    }
  }
  function mergeArr(firstArr, secondArr) {
    const sortedArr = arr;
    let i = 0;
    let j = 0;
    let index = 0;
    while (i < firstArr.length && j < secondArr.length) {
      if (firstArr[i] <= secondArr[j]) {
        sortedArr[index] = firstArr[i];
        i += 1;
      } else {
        sortedArr[index] = secondArr[j];
        j += 1;
      }
      index += 1;
    }
    if (i < firstArr.length) {
      while (i < firstArr.length) {
        sortedArr[index] = firstArr[i];
        index += 1;
        i += 1;
      }
    } else {
      while (j < secondArr.length) {
        sortedArr[index] = secondArr[j];
        index += 1;
        j += 1;
      }
    }
    return sortedArr;
  }
  return mergeArr(sortByAsc(leftArr), sortByAsc(rightArr));
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let count = 0;
  let ans = str;
  do {
    count += 1;
    let left = '';
    let right = '';
    for (let i = 0; i < ans.length; i += 2) {
      left += ans[i];
      right += ans[i + 1];
    }
    ans = left + right;
  } while (ans !== str);
  ans = str;
  for (let i = 0; i < iterations % count; i += 1) {
    let left = '';
    let right = '';
    for (let j = 0; j < ans.length; j += 2) {
      left += ans[j];
      right += ans[j + 1];
    }
    ans = left + right;
  }
  return ans;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  let numStr = '';
  const numArr = Array.from(String(number));
  let i = numArr.length - 1;
  while (i > 0 && numArr[i] <= numArr[i - 1]) {
    i -= 1;
  }
  if (i !== 0) {
    const currentInd = i - 1;
    let minInd;
    let min = Math.max(...numArr);
    for (let j = i; j < numArr.length; j += 1) {
      if (
        numArr[j] - numArr[currentInd] > 0 &&
        numArr[j] - numArr[currentInd] < min
      ) {
        min = numArr[j] - numArr[currentInd];
        minInd = j;
      }
    }
    const temp = numArr[currentInd];
    numArr[currentInd] = numArr[minInd];
    numArr[minInd] = temp;
    const leftArr = [];
    const rightArr = [];
    for (let x = 0; x < numArr.length; x += 1) {
      if (x <= currentInd) leftArr.push(numArr[x]);
      else rightArr.push(numArr[x]);
    }

    numStr = leftArr.join('') + rightArr.toSorted((a, b) => a - b).join('');
  }
  return i === 0 ? number : Number(numStr);
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
