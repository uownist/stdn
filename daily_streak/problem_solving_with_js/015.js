// hs items in an array
function hasItems(arr, item) {
  return arr.includes(item);
}

console.log(hasItems(["a", "b"], "b"));

console.log("\n");

// join with dash
function joinWithDash(arr) {
  return arr.join("-");
}

console.log(joinWithDash(["s", "h", "a"]));
