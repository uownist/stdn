// frequency count
function countFrequency(arr) {
  const count = {};

  for (const char of arr) {
    if (count[char]) {
      count[char] += 1;
    } else {
      count[char] = 1;
    }
  }

  return count;
}

const input = ["a", "b", "a", "c", "a"];
const output = countFrequency(input);
console.log(output);
