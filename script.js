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

//spcialChar confirm
function selectCharacters() {
  var specialChars = confirm("Specials?")
  return specialChars;
}
//lowerChar Confirm
function selectLowerChars() {
  var lowerChars = confirm("Lowercase letters?")
  return lowerChars;
}
//upperChar confirm
function selectUpperChars() {
  var upperChars = confirm("Uppercase letters?")
  return upperChars;
}
//numberChar confirm
function selectNumberChars() {
  var numberChar = confirm("Numbers?")
  return numberChar;
}

//make sure user picks at least one
// validation?

function validateCharactersSelected(specialChars, lowerChars, upperChars, numberChars) {
  if (!specialChars && !numberChars && !lowerChars && !upperChars){
    alert("HEY, you must pick one");
    //this reads, if you didnt pick anything you will be alerted to pick something
    writePassword()
  }
}

//a function to bring the strings together
function createCharsString(specialChars,lowerChars,upperChars,numberChars) {
  //concat would make most sense here to add to charstrings
  if (specialChars) {
    possibleChars = charString.concat(symbols)
    charString = possibleChars;
  }
  //do the same for the other types
  if (lowerChars) {
    possibleChars = charString.concat(lowercase)
    charString = possibleChars;
  }
  if (upperChars) {
    possibleChars = charString.concat(uppercase)
    charString = possibleChars;
  }
  if (numberChars) {
    possibleChars = charString.concat(numbers)
    charString = possibleChars;
  }
  //return here
  return charString
}


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
