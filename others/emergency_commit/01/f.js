// find smallest number
function findSmallestNumber(arrNums) {
  let small = arrNums[0];

  for (const n of arrNums) {
    if (n < small) {
      small = n;
    }
  }

  return small;
}

console.log(findSmallestNumber([20, 54, 9, 45, 8]));
