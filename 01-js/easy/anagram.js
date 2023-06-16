/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

// Function to convert character to Ascii code as well as convert lower case alphabets to upper case
function lowerToUpperCase(char) {
  let AsciiChar = char.charCodeAt(0);

  if(AsciiChar >= 97 && AsciiChar <= 122)
    AsciiChar = AsciiChar - 32;

  return AsciiChar;
}

function isAnagram(str1, str2) {
  const len1 = str1.length;
  const len2 = str2.length;

  // If length of both strings is not equal, they can't be anagram
  if(len1 != len2)
    return false;

  numOfAscii = 256;

  // Create two empty arrays of size 256, initialized to 0
  let chars1 = Array(numOfAscii).fill(0);
  let chars2 = Array(numOfAscii).fill(0);

  for(let i=0; i<len1; i++){
    let charA = lowerToUpperCase(str1[i]);
    let charB = lowerToUpperCase(str2[i]);
    chars1[charA]++;
    chars2[charB]++;
  }
  
  for(let j=0; j<numOfAscii; j++){
    // If length of any charater differs, then strings are not anagram
    if(chars1[j] != chars2[j])
      return false
  }
  return true;
}

module.exports = isAnagram;
