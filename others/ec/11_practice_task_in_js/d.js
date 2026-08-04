// array sum
function arraySum(arr) {
  let sum = 0;

  for (const n of arr) {
    sum += n;
  }

  return `${arr} total sum of numbers are: ${sum}`;
}

console.log(arraySum([5, 2, 6, 8, 9]));
