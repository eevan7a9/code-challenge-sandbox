// Fizz buzz
// Write a program that prints all the numbers from 1 to 100.
//  for multiples of 3, instead of the number, print "fizz",
// for multiples of 5 print "buzz",
// for numbers which are multiples of both 3 and 5, print fizzbuzz
function fizzBuzz() {
  let numHolder = [];
  for (let i = 1; i < 101; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      numHolder.push("FizzBuzz");
    } else if (i % 3 == 0) {
      numHolder.push("Fizz");
    } else if (i % 5 == 0) {
      numHolder.push("Buzz");
    } else {
      numHolder.push(i);
    }
  }
  return numHolder;
}
const x = fizzBuzz();
console.log(x);
