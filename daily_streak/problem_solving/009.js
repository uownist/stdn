// find first unique char
function firstUniqueChar(str) {
  const lowerStr = str.toLowerCase();
  const frequency = {};

  for (const char of lowerStr) {
    if (frequency[char]) {
      frequency[char] += 1;
    } else {
      frequency[char] = 1;
    }
  }

  for (const char of lowerStr) {
    if (frequency[char] === 1) return char;
  }

  return null;
}

const input = "swiss";
const output = firstUniqueChar(input);
console.log(output);
