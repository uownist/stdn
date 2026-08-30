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

console.log("\n");

// reverse string
function reversString(str) {
  let revStr = "";

  for (const char of str) {
    revStr = char + revStr;
  }

  return revStr;
}

console.log(reversString("uownist"));
