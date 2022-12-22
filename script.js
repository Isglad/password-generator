// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Prompt user to type password length and store the answer in passwordLength variable
var passwordLength = prompt("How many characters would you like your password to contain?");

// Create a function that checks if the passwordLength is valid
function checkPasswordLength(){
  // if passwordLength >= 8 and passwordLength <= 128, 
  if (passwordLength >= 8 && passwordLength <= 128){
    confirmCharacterType()
  }
  // if passwordLength < 8, alert "password must be at least 8 characters"
  else if (passwordLength < 8){
    alert("password must be at least 8 characters");
  }
  // else if passworldLength > 128, alert Password length must be less than 129 characters.
  else if (passwordLength > 128){
    alert("Password length must be less than 129 characters.");
  }
  // else, alert invalid password and ask the user to enter a valid number
  else{
    alert("Invalid input. Please enter a number between 8 and 128")
  }
  return;
}

// Create a variable that stores selected characters 
var characterType = [];


// Create a function that confirms character types
function confirmCharacterType(){
  // click ok to include special characters.
  var specialCharacter = confirm("Click ok to confirm special characters please.")
  // if user clicks ok, then add special character to characterType.
  if (specialCharacter){
    characterType.push(specialCharacter);
  } 
  //click ok to include numeric characters.
  var numericCharacter = confirm("Click ok to confirm numeric character please.")
  // if user clicks ok, then add numericCharacter to characterType.
  if (numericCharacter){
    characterType.push(numericCharacter);
  }
  // click ok to include lowercase characters.
  var lowercaseCharacter = confirm("Click ok to confirm lowercase please.")
  //  if user clicks ok, then add lowercase to characterType.
  if (lowercaseCharacter){
    characterType.push(lowercaseCharacter)
  }
  // click ok to include uppercase
  var uppercaseCharacter = confirm("Click ok to confirm uppercase please.")
  // if user click ok, then add uppercase to characterType
  if (uppercaseCharacter){
    characterType.push(uppercaseCharacter)
  }
  return;
}
 

// Create a function that generates random uppercase letters
function randomUpperCase(){
  var upperCaseLetters = [];
  for (var i = 0; i <= passwordLength; i++){
    var randomCharCode = Math.floor(Math.random() * (90 - 65 + 1)) + 65;
    var randomChar = String.fromCharCode(randomCharCode);
    upperCaseLetters.push(randomChar)
  }
  return;
}
console.log(randomUpperCase())


// Create a variable for random lowercase letters
var randomLowercase = [];

// Create a variable for random special characters
var randomSpecial = [];

// Create a variable for random numeric characters
var randomNumeric = [];



      
// Create a function that check if user selected a password character type
function isCharacterType(){
  if (!characterType){
    alert("You must select at least one character type")
  }
  // if user confirmed password character type, randomly generate a password
  else {

  }
}     


  