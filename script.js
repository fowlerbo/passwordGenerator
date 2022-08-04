// Assignment code here

var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var userinput = window.prompt("How long do youi want your password?");

  var passwordLegth = parseInt(userinput);

  if (isNaN(passwordLegth)) {
    window.alert("This is not a number ");
    return;
  } else {
    window.alert("This is a valid number");
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
