// Assignment Code
var generateBtn = document.querySelector("#generate");

//function to run random values for the password
function randomInt(min,max) {
  if(!max) {
    max = min
    min = 0
  }
  
  var rand = Math.random();
  return Math.floor(rand*max)
}

function getranditem(list) {
  return list[randomInt(list.length)]
}

function generatePassword() {

  //first prompt for the length of the password criteria
  var user = window.prompt("How long do you want your password to be?");
  
  //converting the string from the previous input into an integer
  var passwordlength = parseInt(user);
  
  // Alerts if the user does not include a number or selects a number outside of 8 and 128
  if (isNaN(passwordlength)) {
    window.alert("That is not a number.");
    return
  }  

  if (passwordlength < 8 || passwordlength > 128) {
    window.alert("Password must be between 8 and 128 letters");
    return
  }
  
  //confirmation windws of other password criteria
  var useruppercase = window.confirm("Would you like uppercase letters in your password?");
  var userlowercase = window.confirm("Would you like lowercase letters in your password?");
  var usersymbols = window.confirm("Would you like to symbols in your password?");
  var usernumbers = window.confirm("Would you like to numbers in your password?");

  //createded lists of options to help recognize possible inputs
  var listofsymbols = ["~" , "!" , "@" , "#" , "$" , "%" , "^" , "&" , "*" , "(" , ")" , "-"];
  var listofnumbers = ["0" , "1" , "2", "3" , "4" , "5" , "6" , "7", "8" , "9"];
  var listoflower = ["a" , "b" , "c" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t" , "u" , "v" , "w" , "x" , "y" , "z"];
  var listofupper = [];

  var all = [];


  // created a for loop to make it easier to write out all the upper case letters instead of individually writing them all out
  for (var i= 0; i < listoflower.length; i++) {
    listofupper[i] = listoflower[i].toUpperCase();
  }

//if user inputs confirms that they want numbers, symbols, lower/upper case letters, the password will then include the nputs from the previous lists 
  
  if (usersymbols === true) {
  all.push(listofsymbols);
  }

  if (usernumbers === true) {
    all.push(listofnumbers);
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

//for loop to run the whole length of the password from what the user requested to then generate the whole password
 for (var i = 0; i < passwordlength; i++) {
  var rlist = getranditem(all);
  var rchar = getranditem(rlist);
  generatePassword = generatePassword + rchar;
 }

 return generatePassword
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

//conditional statement so that if user decides to 'cancel' from the the first prompt, the display at the webpage does not show 'undefined'
  if (!password) {
    return
  }
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
