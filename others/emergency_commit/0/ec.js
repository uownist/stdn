/**
 * =====================
 * monday, june 01
 * =====================
 */
function freqName(names) {
  const freqUsers = {};

  for (const n of names) {
    console.log(n);
  }
}

freqName(["shahed", "wahid", "rachem kaka"]);

console.log("\n"); // create a new empty line for better understanding

function sumOfOddNumsInOneToHundreed() {
  let sum = 0;

  for (let i = 1; i <= 50; i++) {
    if (i % 2 !== 0) {
      sum += i;
    }
  }

  return sum;
}

console.log(sumOfOddNumsInOneToHundreed());

/**
 * =====================
 * monday, june 01
 * =====================
 */

console.log("\n"); // create a new empty line for better understanding

/**
 * =====================
 * monday, june 02
 * =====================
 */
function onlyEven(arr) {
  for (const n of arr) {
    if (n % 2 === 0) {
      console.log(n);
    }
  }
}
onlyEven([5, 6, 8, 47, 89]);

function onlyOdd(arr) {
  for (const n of arr) {
    if (n % 2 !== 0) {
      console.log(n);
    }
  }
}
onlyOdd([5, 6, 8, 47, 89]);

console.log("\n"); // create a new empty line for better understanding

function onlyEven() {
  for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}
onlyEven();
/**
 * =====================
 * monday, june 02
 * =====================
 */

/**
 * ====================
 * tuesday, june 09
 * ====================
 */
function loopUsers(users) {
  for (const u of users) {
    console.log(u);
  }
}

loopUsers(["shahed", "ownist", "jihad kaka", "rachel kaka", "tomzid kaka"]);
/**
 * ====================
 * tuesday, june 09
 * ====================
 */

console.log("\n"); // create a new empty line for better understanding

/**
 * ====================
 * friday, june 12
 * ====================
 */
function cToF(c) {
  return (c * 9) / 5 + 32;
}

console.log(cToF(25));
/**
 * ====================
 * tuesday, june 09
 * ====================
 */

console.log("\n"); // create a new empty line for better understanding

/**
 * ====================
 * wednesday, june 17
 * ====================
 */
function printOneToHundred() {
  for (let i = 1; i <= 100; i++) {
    console.log(i);
  }
}

printOneToHundred();
/**
 * ====================
 * wednesday, june 17
 * ====================
 */

console.log("\n"); // create a new empty line for better understanding

/**
 * ====================
 * thursday, june 18
 * ====================
 */
function sumOfEvenNumbers() {
  let totalSum = 0;

  for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
      totalSum += i;
    }
  }

  return totalSum;
}

console.log(sumOfEvenNumbers());
/**
 * ====================
 * thursday, june 18
 * ====================
 */

console.log("\n"); // create a new empty line for better understanding

/**
 * ====================
 * friday, june 19
 * ====================
 */
function printTenTimesMyName() {
  for (let i = 1; i <= 10; i++) {
    console.log(`${i}. ownist`);
  }
}

printTenTimesMyName();
/**
 * ====================
 * friday, june 19
 * ====================
 */

console.log("\n"); // create a new empty line for better understanding

/**
 * ====================
 * saturday, june 20
 * ====================
 */
function printAllKakas(kakas) {
  for (const k of kakas) {
    console.log(k);
  }
}

printAllKakas(["shahed", "ownist", "rachel", "jihad", "tomjid"]);
/**
 * ====================
 * saturday, june 20
 * ====================
 */

console.log("\n"); // create a new empty line for better understanding

/**
 * ====================
 * sunday, june 21
 * ====================
 */
function countFiveIncrement() {
  for (let i = 10; i <= 50; i += 5) {
    console.log(i);
  }
}

countFiveIncrement();
/**
 * ====================
 * sunday, june 21
 * ====================
 */

console.log("\n"); // create a new empty line for better understanding

/**
 * ====================
 * monday, june 22
 * ====================
 */
function printEvenAndOddNumbersBetweenOneToFifty() {
  for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
      console.log(`${i} is even`);
    } else {
      console.log(`${i} is odd`);
    }
  }
}

printEvenAndOddNumbersBetweenOneToFifty();
/**
 * ====================
 * monday, june 22
 * ====================
 */

console.log("\n"); // create a new empty line for better understanding

/**
 * ====================
 * tuesday, june 23
 * ====================
 */
function practiceBreakFunction() {
  for (let i = 1; i <= 10; i++) {
    if (i === 5) break;
    console.log(i);
  }
}

practiceBreakFunction();
/**
 * ====================
 * tuesday, june 23
 * ====================
 */

console.log("\n"); // create a new empty line for better understanding

/**
 * ====================
 * wednesday, june 24
 * ====================
 */
function practiceContinueFunction() {
  for (let i = 1; i <= 10; i++) {
    if (i === 5 || i === 7 || i === 9) continue;
    console.log(i);
  }
}

practiceContinueFunction();
/**
 * ====================
 * wednesday, june 24
 * ====================
 */

console.log("\n"); // create a new empty line for better understanding

/**
 * ====================
 * monday, june 29
 * ====================
 */
function countEvenNumbersBasedOnUser(countStart, countEnd) {
  for (let i = countStart; i <= countEnd; i++) {
    if (i % 2 === 0) console.log(i);
  }
}

countEvenNumbersBasedOnUser(12, 22);
/**
 * ====================
 * monday, june 29
 * ====================
 */

console.log("\n"); // create a new empty line for better understanding

/**
 * ====================
 * tuesday, july 7
 * ====================
 */
function totalSumArrayOfNumbers(arr) {
  let sum = 0;

  for (const num of arr) {
    sum += num;
  }

  return sum;
}

console.log(totalSumArrayOfNumbers([5, 2, 4, 8]));
/**
 * ====================
 * tuesday, july 7
 * ====================
 */

console.log("\n"); // create a new empty line for better understanding

/**
 * ====================
 * thursday, july 9
 * ====================
 */
function totalSumOfOddNumbersBetweenOneToFifty() {
  let sum = 0;

  for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }

  console.log(sum);
}
/**
 * ====================
 * thursday, july 9
 * ====================
 */

console.log("\n"); // create a new empty line for better understanding

/**
 * ====================
 * friday, july 10
 * ====================
 */
function printOneToTen() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}

printOneToTen();
/**
 * ====================
 * friday, july 10
 * ====================
 */

console.log("\n"); // create a new empty line for better understanding

/**
 * ====================
 * saturday, july 11
 * ====================
 */
function printMyTeammateNames(teammate) {
  for (const name of teammate) {
    console.log(name);
  }
}

printMyTeammateNames(["rachel kaka", "jihad kaka", "tomjid kaka", "and me"]);
/**
 * ====================
 * saturday, july 11
 * ====================
 */

console.log("\n"); // create a new empty line for better understanding

/**
 * ====================
 * sunday, july 19
 * ====================
 */
function reverseAnArrayList(arr) {
  return arr.reverse();
}

console.log(reverseAnArrayList(["shahed", "uownist", "anifa"]));
/**
 * ====================
 * sunday, july 19
 * ====================
 */

console.log("\n"); // create a new empty line for better understanding

/**
 * ====================
 * thursday, july 23
 * ====================
 */
function sumOfArrayNums(arrNums) {
  let sum = 0;

  for (const num of arrNums) {
    sum += num;
  }

  return sum;
}

console.log(sumOfArrayNums([5, 2, 3, 6, 9]));
/**
 * ====================
 * thursday, july 23
 * ====================
 */

console.log("\n"); // create a new empty line for better understanding

/**
 * ====================
 * friday, july 24
 * ====================
 */
function revArrNames(arr) {
  return arr.reverse();
}

console.log(revArrNames(["ownist", "shahed", "kaka"]));
/**
 * ====================
 * friday, july 24
 * ====================
 */

console.log("\n"); // create a new empty line for better understanding

/**
 * ====================
 * sunday, july 26
 * ====================
 */
function printOneToTen() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}

printOneToTen();
/**
 * ====================
 * sunday, july 26
 * ====================
 */

console.log("\n"); // create a new empty line for better understanding

/**
 * ====================
 * wednesday, july 29
 * ====================
 */
function printUserSays(userNum) {
  for (let i = 1; i <= userNum; i++) {
    console.log(i);
  }
}

printUserSays(32);
/**
 * ====================
 * wednesday, july 29
 * ====================
 */
