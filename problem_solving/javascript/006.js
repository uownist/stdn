// check palindrome
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
