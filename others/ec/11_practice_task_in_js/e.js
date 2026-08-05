// reverse a string
function revStr(str) {
  let rev = "";

  for (const char of str) {
    rev = char + rev;
  }

  return rev;
}

console.log(revStr("hello world"));
