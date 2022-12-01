//needs global variables
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "0123456789"
var symbols = "!@#$%^&*_-=+"
//dont forget to make a vairable for sting and char string
var charString= "" //assign nothing
var string= ""


// Assignment Code
var generateBtn = document.querySelector("#generate");
//button was totally missing
generateBtn.addEventListener("click", writePassword);

// generatePassword(){
function generatePassword(){
//pw criteria variables
var passwordLength= selectPasswordLength();
var specialChars = selectCharacters();
var lowerChars = selectLowerChars();
var upperChars = selectUpperChars();
var numberChars= selectNumberChars();
//validate the input
validateCharactersSelected(specialChars, lowerChars, upperChars, numberChars);
//establish "character string" within generation function
var charString = createCharsString(specialChars,lowerChars,upperChars,numberChars);
}

//write function for pw length, 8-128}
function selectPasswordLength() {
  while(true) {
    //while true meaning if somethings there
    var passwordLength = prompt("Choose between 8-128.")
    if (passwordLength >= 8 && passwordLength<= 128) {
      return passwordLength;
    }
//prompted to choose length, returns value of something between those numbers
  }
}
//follow through with the different character types
//consider the diff of prompts and confirms.. not the same kinda inputs



//generate pw criteria
//display password on page
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
