// Assignment Code
var generateBtn = document.querySelector("#generate");


// First, list out variables/arrays
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var number = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var special = ['!', '@', '#', '$', '%', '^', '&', '*', '-', '_', '+', '=', '<', '>', ',', '.', '?'];

console.log(upperCase)
console.log(lowerCase)
console.log(number)
console.log(special)

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }


// add prompt for # of characters
function writePassword() {
  var passwordLength = prompt("How many characters would you like your password to consist of? (Password must be between 8-128 characters)");
  if (passwordLength.length < 8 || passwordLength.length > 128) {
    alert ("Password must be between 8-128 characters.")
  }
  else {
    confirmNumber = confirm("Will your password contain numbers?");
    confirmCharacters = confirm("Will your password contain special characters?");
    confirmUpperCase = confirm("Will your password contain uppercase letters?");
    confirmLowerCase = confirm("Will your password contain lowercase letters?");
  };
  if (confirmNumber === false && confirmCharacters === false && confirmUpperCase === false && confirmLowerCase = false) {
    alert ("You must have a number, special character, uppercase letter, or a lowercase letter!");
  }
}

// only numbers password
else if {}
// only characters password
else if {}
// only uppercase password
else if {}
// only lowercase password
else if {}


// Add event listener to generate button + 'confirm''s //
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var confirmUpperCase;
  var confirmLowerCase;
  var confirmNumber;
  var confirmSpecial;
  var ResultArray = [];

}
