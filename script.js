// Assignment Code
//needs global variables
var generateBtn = document.querySelector("#generate");

// adding function generatePassword(){
function generatePassword(){
  console.log("Button totally pressed");

//prompt user for pw criteria
//password legnth 8 <128
// run the char list

//validate the input
//generate pw criteria
//display password on page

  return "Generated password is here"
}
//}
//wheres the values?

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
//here
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
