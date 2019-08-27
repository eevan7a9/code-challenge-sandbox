// CHALLENGE TO REVERSE A STRING.
// ex. rat = tar, book = koob

// first solution
function reverseString_sol_1(str) {
  const arrayString = str.split("");
  let reverseArray = [];
  for (let i = 0; i < arrayString.length; i++) {
    const char = arrayString[i];
    reverseArray.unshift(char);
  }
  let reverseString = "";
  for (let x = 0; x < reverseArray.length; x++) {
    const char = reverseArray[x];
    reverseString += char;
  }
  return reverseString;
}
// second solution
function reverseString_sol_2(str) {
  let string = str
    .split("")
    .reverse()
    .join("");
  return string;
}
//  third solution
function reverseString_sol_3(str) {
  let reverse = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    reverse = char + reverse;
  }
  return reverse;
}
// fourth solution
function reverseString_sol_4(str) {
  let reverseString = "";
  for (const char of str) {
    reverseString = char + reverseString;
  }
  return reverseString;
}
// fifth solution
function reverseString_sol_5(str) {
  let reverse = "";
  str.split("").forEach(char => {
    reverse = char + reverse;
  });
  return reverse;
}

const x = reverseString_sol_5("Hello World");
console.log(x);
