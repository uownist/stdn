// remove duplicates
function removeDuplicates(arr) {
  const unique = [];

  for (const n of arr) {
    if (!unique.includes(n)) unique.push(n);
  }

  return unique;
}

console.log(removeDuplicates([5, 2, 6, 5, 8, 9, 9, 8]));
