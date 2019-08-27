// capitalize letters
// return a string with the first letter of every word to capitalize
// ex. dog is fat = Dog Is Fat

// first solution
function toCapitalize_sol_1(str) {
  let capitalizeWords = [];
  for (let i = 0; i < str.toLowerCase().split(" ").length; i++) {
    const words = str.toLowerCase().split(" ")[i];
    let capitalizeFirstLetter = "";
    for (let i = 0; i < words.split("").length; i++) {
      let letter = words.split("")[i];
      if (i == 0) {
        letter = letter.toUpperCase();
      }
      capitalizeFirstLetter += letter;
    }
    capitalizeWords.push(capitalizeFirstLetter);
  }
  return capitalizeWords.join(" ");
}
// second solution
function toCapitalize_sol_2(str) {
  let capitalFirstChar = [];
  for (let i = 0; i < str.toLowerCase().split(" ").length; i++) {
    const word = str.toLowerCase().split(" ")[i];
    capitalFirstChar.push(word.substr(0, 1).toUpperCase() + word.substr(1));
  }
  return capitalFirstChar.join(" ");
}
// Third Solution
function toCapitalize_sol_3(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(word => word.substr(0, 1).toUpperCase() + word.substr(1))
    .join(" ");
}
const x = toCapitalize_sol_3("dry IcE iS noT");
console.log(x);
