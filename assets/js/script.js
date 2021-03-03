// Assignment code here
// Create Arrays for each character types
var lowerCase =[]
var upperCase =[]
var numeric =["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var special =[]

function generatePassword() {
var passLength = prompt("How Many Characters Do You Want?")
if (passLength <8 || passLength >128){
  alert("Password Must Be Between 8 and 128")
  return
}
var askLowerCase = confirm("Would You Like to Use Lower Case?")

var askNumeric = confirm("Would You Like to Use Numbers?")

var askUpperCase = confirm("Would You Like to Use Upper Case?")

var askSpecial = confirm("Would You Like to Use Special Characters?")

if (askLowerCase === false && askNumeric === false && askUpperCase === false && askSpecial === false){
  alert("Must Select at Least One!")
  return
}
var characters = []
var finalPassword = []
for (var i = 0; i <passLength; i++){

if (askNumeric === true) {
var numericIndex = Math.floor(Math.random()*numeric.length)
var numericElement = numeric[numericIndex]
characters.push(numericElement)
console.log(characters)
}

if (askLowerCase === true) {
  var lowerCaseIndex = Math.floor(Math.random()*lowerCase.length)
  var lowerCaseElement = lowerCase[lowerCaseIndex]
  characters.push(lowerCaseElement)
  console.log(characters)
  }

  if (askUpperCase === true) {
    var upperCaseIndex = Math.floor(Math.random()*upperCase.length)
    var upperCaseElement = upperCase[upperCaseIndex]
    characters.push(upperCaseElement)
    console.log(characters)
    }

    if (askSpecial === true) {
      var specialIndex = Math.floor(Math.random()*special.length)
      var specialElement = special[specialIndex]
      characters.push(specialElement)
      console.log(characters)
      }
      var characterIndex = Math.floor(Math.random()*characters.length)
      var characterElement = characters[characterIndex]
      finalPassword.push(characterElement)
    }
return finalPassword.join("")
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
