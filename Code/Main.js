//String for alphabet characters
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//String for numbers in ascending order
var numbersAscending = "0123456789";
//String for numbers in descending order
var numbersDescending = "9876543210";
//Holds how long the password
var passwordLength = prompt("How long should the password be?");
//Empty array to hold characters of the password
var password = [];
//Generate random
var randomNumber = Math.random() * 10;

document.write("The length of the password is " + passwordLength + " and the password generated is: ");

for(var i = 0; i < passwordLength; i++)
{
   randomNumber *= 10;
   //If even, then number, else character
   if((i % 2) === 0)
   {
      //password[i] = numbersAscending.charAt(generateRandomIndex(0, numbersAscending.length));
      password.push((Math.floor((randomNumber)) % 2 === 0) ? numbersAscending.charAt(generateRandomIndex(0, numbersAscending.length)) : numbersDescending.charAt(generateRandomIndex(0, numbersAscending.length)));
   } else {
      //password[i] = alphabetLowerCase.charAt(generateRandomIndex(0, alphabetLowerCase.length));
      password.push((Math.floor((randomNumber)) % 2 === 0) ? alphabet.toLowerCase().charAt(generateRandomIndex(0, alphabet.length)) : alphabet.toUpperCase().charAt(generateRandomIndex(0, alphabet.length)));
   }
}

password = password.filter(function(str) {
    return /\S/.test(str);
});

document.write(password.join('').toString());

function generateRandomIndex(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
