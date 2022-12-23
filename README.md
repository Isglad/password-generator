# Password Generator

## Technology Used 

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
| HTML    | [https://developer.mozilla.org/en-US/docs/Web/HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) | 
| CSS     | [https://developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)      |   
| Git | [https://git-scm.com/](https://git-scm.com/)     |    
| JavaScript   | [https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)    |

## Description

[Visit the Deployed Site](https://isglad.github.io/password-generator/)

This password generator application enables you to create a random strong and secure password. Simply specify the length of the password you want and at least any additional requirements such as lowercase, uppercase, special or numeric characters and then the password generator will create a unique password for you.


## Table of Contents

- [Code Refactor Example](#code-refactor-example)
- [Usage](#usage)
- [Learning Points](#learning-points)
- [Author Info](#author-info)
- [Credits](#credits)
- [License](#license)

## Code Refactor Example

```js
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);

```

The above generatePassword function needs to be created in order to have the generateBtn to generate a random password. 

```js
function generatePassword(){
  var lenPassword = passwordLength();
  if (lenPassword >= 8 && lenPassword <= 128){
    var characterType = confirmCharacterType(lenPassword);
    var newPassword = randomCharacters(characterType,lenPassword);
    return newPassword;
  }
  else{
    alert ("Please try again. Enter a number between 8 and 128.")
    return;
  }
}
```
The generatePassword function will now be executed and will generate a random password.

## Usage

To use the password generator application, follow these steps:

1. Open the password generator application in your prefered browser.
2. Click on "Generate Password" red button.
3. Provide the length of the password you want, this length must be between 8 and 128 long.
4. Select at least one criteria to include in the password (including lowercase, uppercase, numeric, and/or special characters).
5. Once all prompts are answered, a password matching selected criteria will be displayed to the page.

## Learning Points

- Creating and using global and local variables.
- Creating a function.
- Calling a function to perform certain tasks.
- Using console.log to debug code.
- Using querySelector() method to reference to an element from html document.
- Using addEventListener() method to perform some tasks when a button is pressed.
- Using prompt() method for a user input information.
- Using confirm() method to display a dialog box with a message, an OK button, and a Cancel button.
- Using alert() method to display an alert box with a message and an OK button.
- Using if, else, and else if conditional statements to perform different actions based on different conditions.
- Using different Data Types depending on what you want to achieve.
- Etc.

## Author Info

```md
### Gladys Ange Isingizwe

* [Email](gladyisingizwe@gmail.com)
* [LindeIn](www.linkedin.com/in/gladys-isingizwe)
* [Github]()https://github.com/Isglad
```

## Credits

Collabortors on this project are instructional staff, TAs and winter cohort 2022 of the University of Calfornia Berkeley Coding Bootcamp.

## License

Please refer to the LICENSE in the repo.