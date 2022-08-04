// Assignment code here

var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var userinput = window.prompt("How long do youi want your password?");

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
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
