// Challenge Validate if it's a Palindrome
// aw word or phrase that reads the same even if you reverse it
// ex. madam === madam

// first solution
function isPalindrome_sol_1(str) {
  let reverse = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    reverse = char + reverse;
  }
  return reverse === str;
}
// second solution
function isPalindrome_sol_2(str) {
  return (
    str
      .split("")
      .reverse()
      .join("") == str
  );
}
// third solution
function isPalindrome_sol_3(str) {
  let reverse = "";
  str.split("").forEach(char => {
    reverse = char + reverse;
  });
  return reverse === str;
}

const x = isPalindrome_sol_3("madam");
const y = isPalindrome_sol_3("dog");
console.log(x, y);
