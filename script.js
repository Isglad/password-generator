// Global variables
var lenPassword = 0;

const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const specialCharacters= "~@#$%^&*/{>?]{";
const numericCharacters = "0123456789"

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


// function that prompt user to enter password length
function passwordLength(){
  var userPasswordLength = prompt("How many  characters would you like your password to contain?");
  if(userPasswordLength){
    return userPasswordLength;
  }else{
    alert("You must specify your password length.");
    return;
  }
}

// Create a function that confirms character types
function confirmCharacterType(lenPassword){
  // Create a variable that stores selected characters 
  var characterType = "";
  var password = parseInt(lenPassword);

  // click ok to include special characters.
  var specialCharacter = confirm("Click ok to confirm special characters please.")
  // if user clicks ok, then add special character to characterType.
  if (specialCharacter){
    characterType += (randomCharacters(specialCharacters, password));
  }

  //click ok to include numeric characters.
  var numericCharacter = confirm("Click ok to confirm numeric character please.")
  // if user clicks ok, then add numericCharacter to characterType.
  if (numericCharacter){
    characterType += (randomCharacters(numericCharacters, password));
  }

  // click ok to include lowercase characters.
  var lowercaseCharacter = confirm("Click ok to confirm lowercase please.")
  //  if user clicks ok, then add lowercase to characterType.
  if (lowercaseCharacter){
    characterType += (randomCharacters(lowerCaseLetters, password));
  }
  
  // click ok to include uppercase
  var uppercaseCharacter = confirm("Click ok to confirm uppercase please.")
  // if user click ok, then add uppercase to characterType
  if (uppercaseCharacter){
    characterType += (randomCharacters(upperCaseLetters, password));
  }

  if (characterType.length == 0){
    alert("You must select at least one character type"); 
  }
  return characterType;
}

// function that generate random characters according to user password length
function randomCharacters(types, length){
  var char = types;
  var randomPass = " ";
  for (var i = 0; i < length; i++){
    var temp = Math.floor(Math.random()*types.length);
    randomPass += char[temp];
  }
  return randomPass;
}

// function that generates a random password
function generatePassword(){
  var lenPassword = passwordLength();
  if (lenPassword >= 8 && lenPassword <= 128){
    var characterType = confirmCharacterType(lenPassword);
    var newPassword = randomCharacters(characterType,lenPassword);
    return newPassword;
  }
  else{
    alert ("Please try again. Enter a number between 8 and 128 ")
    return;
  }
}