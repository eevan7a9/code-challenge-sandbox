// Reverse an Integer
// ex. 123 to 321

// first solution
function reverseInt_sol_1(int) {
  return (
    parseInt(
      String(int)
        .split("")
        .reverse()
        .join(""),
    ) * Math.sign(int)
  );
}
// second solution
function reverseInt_sol_2(int) {
  let reverse = "";
  for (let i = 0; i < String(int).length; i++) {
    const char = String(int)[i];
    reverse = char + reverse;
  }
  return parseInt((reverse = int >= 0 ? reverse : "-" + reverse));
}
// third solution
function reverseInt_sol_3(int) {
  let reverse = "";
  String(int)
    .split("")
    .forEach(char => (reverse = char + reverse));
  return parseInt(reverse) * Math.sign(int);
}

const x = reverseInt_sol_2(-1234);
const y = reverseInt_sol_2(2234);
console.log(x, y);
