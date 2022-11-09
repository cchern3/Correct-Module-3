// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt(min,max) {
  var rand = Math.random();
  return Math.floor(rand*max)
}

function getranditem(list) {
  return list[randomInt(0, list.length - 1)]
}



function generatePassword() {

  var user = window.prompt("How long do you want your password to be?");
  
  var passwordlength = parseInt(user);
  
  if (isNaN(passwordlength)) {
    window.alert("That is not a number.");
    return
  }  

  if (passwordlength < 8 || passwordlength > 128) {
    window.alert("Password must be between 8 and 128 letters");
    return
  }
  
  var usernumbers = window.confirm("Would like to numbers in your password?");
  var usersymbols = window.confirm("Would like to symbols in your password?");
  var userlowercase = window.confirm("Would like lowercase letters in your password?");
  var useruppercase = window.confirm("Would like uppercase letters in your password?");

  var listofnumbers = ["0" , "1" , "2", "3" , "4" , "5" , "6" , "7", "8" , "9"];
  var listofsymbols = ["~" , "!" , "@" , "#" , "$" , "%" , "^" , "&" , "*" , "(" , ")" , "-"];
  var listoflower = ["a" , "b" , "c" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t" , "u" , "v" , "w" , "x" , "y" , "z"];
  var listofupper = [];

  var all = [];

  for (var i= 0; i < listoflower.length; i++) {
    listofupper[i] = listoflower[i].toUpperCase();
  }

  if (usernumbers === true) {
    all.push(listofnumbers);
  }

  if (usersymbols === true) {
    all.push(listofsymbols);
  }

  if (userlowercase === true) {
    all.push(listoflower);
  }

  if (useruppercase === true) {
    all.push(listofupper);
 }

 if (all.length === 0) {
  all.push(listoflower);
 }

var generatePassword = "";

 for (var i = 0; i <passwordlength; i++) {
  var randomlist = getranditem(all);
  var randomchar = getranditem(randomlist);
  generatePassword += randomchar
 }

 return generatePassword
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (!password) {
    return
  }
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
