/**
 * -----------------------
 * check palindrome
 * -----------------------
 */

// solution: 01
function isPalindrome(str) {
  const lowerStr = str.toLowerCase();

  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (lowerStr[left] === " ") {
      left++;
      continue;
    }

    if (lowerStr[right] === " ") {
      right--;
      continue;
    }

    if (lowerStr[left] !== lowerStr[right]) return false;

    left++;
    right--;
  }

  return true;
}

const input = "Madam";
const output = isPalindrome(input);
console.log(output);

console.log("\n");

// solution: 02
function checkPalindrome(str) {
  let cleanStr = "";
  let reversedStr = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") cleanStr += str[i].toLowerCase();
  }

  for (let i = cleanStr.length - 1; i >= 0; i--) {
    reversedStr += cleanStr[i];
  }

  return cleanStr === reversedStr;
}

console.log(checkPalindrome("Madam"));
