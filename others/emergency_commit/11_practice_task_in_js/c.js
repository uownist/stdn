// find maximum number
function findMax(x, y, z) {
  let largest = 0;

  if (x > y && x > z) {
    largest = x;
  } else if (y > x && y > z) {
    largest = y;
  } else {
    largest = z;
  }

  return `largest number between ${x}, ${y} and ${z} is = ${largest}`;
}

console.log(findMax(5, 8, 45));
