// Reverse an Integer
// ex. 123 to 321

// first solution
function reverseInt(int) {
  let reverse = String(int)
    .split("")
    .reverse()
    .join("");
  return reverse;
}

const x = reverseInt(1234);
console.log(x);
