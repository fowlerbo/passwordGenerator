// Assignment code here

var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var userinput = window.prompt("How long do you want your password?");

  var passwordLegth = parseInt(userinput);

  if (isNaN(passwordLegth)) {
    window.alert("This is not a number ");
    return;
  }

  if (passwordLegth < 8 || passwordLegth > 128) {
    window.alert("Password Length must be between 8 and 128 characters");
    return;
  }
  var userWantsNumbers = window.confirm(
    "Would you like to include numbers in your password?"
  );
  var userWantsSymbols = window.confirm(
    "Would you like to include symbols in your password?"
  );
  var userWantslowercase = window.confirm(
    "Would you like to include lowercase letters in your password?"
  );
  var userWantsUppercase = window.confirm(
    "Would you like to include Uppercase letters in your password?"
  );

  var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var symbolList = ["!", "@", "#", "$", "%", "^", "&", "*"];
  var lowercaseList = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  for (var i = 0; i < lowercaseList.length; i++) {
    uppercaseList[i] = lowercaseList[i].toUpperCase();
  }
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
