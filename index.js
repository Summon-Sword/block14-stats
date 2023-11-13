// === DO NOT EDIT THIS REGION ===
// Read the comments to understand how the program is structured.

// Prompt the user for a list of integers separated by commas.
const userInputString = prompt(
  "Please enter some integers separated by commas.",
  "1,2,3,4,5"
);

// Split the string of numbers into an array of strings.
const stringArray = userInputString.split(",");

// Convert the array of strings into an array of numbers.
const numbers = [];
for (let i = 0; i < stringArray.length; i++) {
  const str = stringArray[i];
  const number = parseInt(str);
  numbers.push(number);
}

// Peform some calculations on the numbers.
console.log(numbers);
console.log(`You have given ${getLength(numbers)} numbers.`);
console.log(`The sum of your numbers is ${getSum(numbers)}.`);
console.log(`The mean of your numbers is ${getMean(numbers)}.`);
console.log(`The smallest of your numbers is ${getMin(numbers)}.`);
console.log(`The largest of your numbers is ${getMax(numbers)}.`);
console.log(`The range of your numbers is ${getRange(numbers)}.`);
console.log(`The even numbers you gave are ${getEvens(numbers)}.`);
console.log(`The odd numbers you gave are ${getOdds(numbers)}.`);

// === EDIT THE CODE BELOW ===
// Complete the functions below to make the program work!

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the length of the array
 */

/* It would probably be better to use .length but I assume the point of this assingment is to use loops.  In retrospect the (of) operator is basicly a .length function anyway.*/
function getLength(numbers) {
  let count = 0;
  /* I've been told you odn't need to initlize but I like to */
  for (let number of numbers) {
    count++; // Increment count for each number in the array
  }
  return count;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the sum of the numbers
 */
function getSum(numbers) {
    let sum = 0; 
    /* I've been told you odn't need to initlize but I like to */
    for (let number of numbers) {
      sum += number;
    }
    return sum;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the mean of the numbers
 */
function getMean(numbers) {
    let sum = getSum(numbers); // Reuse the getSum function
    let count = getLength(numbers); // Reuse the getLength function
    return sum / count;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the smallest of the numbers
 */
function getMin(numbers) {
    let min = Infinity;
    // I didn't know you could do this, but conceptually it's setting the intial value at a infiitly big number. this means that any number lower than infity, will now be the lowest number.  I think techically you could use some sort function and just return the first value in the array.
    for (let number of numbers) {
      if (number < min) {
        min = number;
      }
    }
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the largest of the numbers
 */
function getMax(numbers) {
    // same as above but reversed could sort the array and return the last value: numbers -1.
    let max = -Infinity;
    for (let number of numbers) {
      if (number > max) {
        max = number;
      }
    }
    return max;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the range of the numbers (max - min)
 */
function getRange(numbers) {
    let max = getMax(numbers); // Reuse the getMax function
    let min = getMin(numbers); // Reuse the getMin function
    return max - min;
    // again or sort array and take the last element and first element and find the difference.
}

/**
 * // why are numbers always declaired as paramenter before a function. I guess each param is specific to the fuction that follows it? I'm not really familar with param
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the even numbers in the array
 */
function getEvens(numbers) {
    let evens = [];
    // declaring an array
    for (let number of numbers) {
      if (number % 2 === 0) {
        evens.push(number);
      }
    // Adding (pushing) values into the evens array. 
    }
    return evens;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the odd numbers in the array
 */
function getOdds(numbers) {
    let odds = [];
    for (let number of numbers) {
      if (number % 2 !== 0) {
        odds.push(number);
      }
    }
    return odds;
}
