//needs global variables
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "0123456789"
var symbols = "!@#$%^&*_-=+"
//dont forget to make a vairable for sting and char string
var charString= "" //assign nothing
var str= ""


// Assignment Code
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", generatePassword);

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
var CharString = createCharsString(specialChars,lowerChars,upperChars,numberChars);
var password = generatePassword(passwordLength, CharString);
var passwordText = document.querySelector("#password");
passwordText.value= password;
}


//write function for pw length, 8-128}
function selectPasswordLength() {
  while (true) {
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
    alert("HEY, you must pick one.");
    //this reads, if you didnt pick anything you will be alerted to pick something
    generatePassword()
}
}

//a function to bring the strings together
function createCharsString(specialChars, lowerChars, upperChars, numericChars) {
  if (specialChars) {
    possibleChars = charString.concat(symbols)
    charString = possibleChars;
  }
  if (numberChars) {
    possibleChars = charString.concat(numbers)
    charString = possibleChars;
  }
  if (lowerChars) {
    possibleChars = charString.concat(lowercase)
    charString = possibleChars;
  }
  if (upperChars) {
    possibleChars = charString.concat(uppercase)
    charString = possibleChars;
  }
  return charString
}
//still spits out undefined

function generatePassword(length, characters) { 
  var str = "" 
   for (var i = 0; i <= length; i++) {
     var index = Math.floor(Math.random() * characters.length);
     str += characters[index];
   }
   return str.join;
  }