// Assignment code here

//establish variables to store password preferences
// character numbers | special characters | lower case | uppercase |
var characterNumbers = '1234567890';
var characterSpecial = '~!@#$%^&*()_-+=[{]}?><.,"';
var characterUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var characterLower = 'abcdefghijklmnopqrstuvwxyz';
var generateBtn = document.querySelector("#generate");
var confirmLength = '';


window.alert('To begin generating a random password, click "OK" then the red "Generate Password" button below') 
function writePassword() {
var possibleChoices = '';
var randomPassword = '';
//ask user how many characters they want the password to contain
var confirmLength = window.prompt ("How many characters would you like to include?");

//password must be at least 8 characters and no more than 128
//if character length is NOT between 8-128 notify user to pick again
    if (confirmLength < 7 || confirmLength > 129){
    alert ("Password must contain at least 8 characters. Please select 8-128 characters.");
        return;
    }
    //ask user if they want special characters
var pickSpecial = confirm(("Would you like to include special characters?"));

//ask user if they want numeric characters
var pickNum = confirm(("Would you like to include numbers?"));

//ask user if they want uppercase characters
var pickUpper = confirm(("Would you like to include uppercase letters?"));

//ask user if they want lowercase characters
var pickLower = confirm(("Would you like to include lowercase letters?"));

//make sure user picked at least one of the above parameters (if statements)
if (pickSpecial == false &&
    pickNum == false &&
    pickUpper == false &&
    pickLower == false
    ){
    window.alert ('Please select at least one preference for password criteria.');
    return;}

//get choices from user to then put possible choices together

if (pickSpecial == true){
    possibleChoices += characterSpecial
} 
if (pickNum == true){
    possibleChoices += characterNumbers
}
if(pickUpper == true){
    possibleChoices += characterUpper
}
if(pickLower == true){
    possibleChoices += characterLower
}
for (var i = 0; i < confirmLength; i++){
    randomPassword += possibleChoices.charAt(Math.floor(Math.random() * possibleChoices.length));
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
  var passwordText = document.querySelector("#password");
  passwordText.value = randomPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);