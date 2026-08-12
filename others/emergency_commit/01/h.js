// check leap year
function checkLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

console.log(checkLeapYear(2021));
