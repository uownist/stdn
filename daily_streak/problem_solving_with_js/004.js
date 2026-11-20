// summ of array numbers

function sumArray(nums) {
  let totalSum = 0;

  for (const num of nums) {
    totalSum += num;
  }

  return totalSum;
}

const input = [1, 2, 3, 4];
const output = sumArray(input);
console.log(`total sum of arrays numbers "${input}" are: ${output}`);
