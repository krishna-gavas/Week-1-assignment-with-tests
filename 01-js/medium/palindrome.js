/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function lowerToUpperCase(char) {
  let AsciiChar = char.charCodeAt(0);
  if (AsciiChar >= 97 && AsciiChar <= 122)
    AsciiChar = AsciiChar - 32;
  return AsciiChar;
}

function isPalindrome(str) {
  str = str.split(' ').join('');
  str = str.replace(/[^\w\s]|_/g, '');
  const len = str.length;

  for (let i = 0; i < (len / 2); i++) {
    let charA = lowerToUpperCase(str[i]);
    let charB = lowerToUpperCase(str[len-1-i]);
    if (charA != charB)
      return false;
  }
  return true;
}

module.exports = isPalindrome;
