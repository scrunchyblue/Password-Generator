// Assignment Code
var generateBtn = document.querySelector("#generate");


// First, list out variables/arrays
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var number = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var special = ['!', '@', '#', '$', '%', '^', '&', '*', '-', '_', '+', '=', '<', '>', ',', '.', '?'];

var choices = [false,false,false,false]

console.log(upperCase)
console.log(lowerCase)
console.log(number)
console.log(special)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

 }


// add prompt for # of characters
function generatePassword() {
  var passwordLength = prompt("How many characters would you like your password to consist of? (Password must be between 8-128 characters)");
  console.log("passwordlength =" + passwordLength)
  if (passwordLength < 8 || passwordLength > 128) {
    alert ("Password must be between 8-128 characters.")
  }
  else {
    choices[0] = confirm("Will your password contain uppercase letters?");
    choices[1] = confirm("Will your password contain lowercase letters?");
    choices[2] = confirm("Will your password contain numbers?");
    choices[3] = confirm("Will your password contain special characters?");
  };
  //if (confirmNumber === false && confirmCharacters === false && confirmUpperCase === false && confirmLowerCase = false)
  
  if(choices[0] === false && choices[1] === false && choices[2] === false && choices[3] ===false) {
     alert ("You must have a number, special character, uppercase letter, or a lowercase letter!");
  }
   else {
     var possibleCharset=[];
     if(choices[0]=== true){
       possibleCharset = possibleCharset.concat(upperCase)
     }
     if(choices[1]=== true){
      possibleCharset = possibleCharset.concat(lowerCase)
     }
     if(choices[2]=== true){
        possibleCharset = possibleCharset.concat(number)
     }
     if(choices[3]=== true){
      possibleCharset = possibleCharset.concat(special)
     }
     // add other two ifs
    
     // now have array of possible characters, generate password     
    pwd=""
    for(var i =0; i < passwordLength; i++){
      //picks a random character's index from possible characters array
      randomCharacter = Math.floor((Math.random() * possibleCharset.length))
      console.log(possibleCharset[randomCharacter])
      pwd += possibleCharset[randomCharacter]
    }
    // console.log(pwd)
    return pwd
     
     
     //for (var i = 0; i <passwordLength; i++ ){

// =====================
      //  index = Math.floor((Math.random() * 4))
      //  if(choices[index] == true){
      //    if( index === 0){
      //      upperLetter = Math.floor((Math.random() * upperCase.length()))
      //      pwd += upperCase[upperLetter]
      //     }   
      }
}
  // pwd=""
  //for letter  loop ( length of password):
  // each letter letter add a character to the string from one of the arrays

// // only numbers password
// else if {}
// // only characters password
// else if {}
// // only uppercase password
// else if {}
// // only lowercase password
// else if {}


// Add event listener to generate button + 'confirm''s //
generateBtn.addEventListener("click", writePassword);