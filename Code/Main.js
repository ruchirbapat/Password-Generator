//String for alphabet characters
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//String for numbers in ascending order
var numbersAscending = "0123456789";
//String for numbers in descending order
var numbersDescending = "9876543210";
//Holds how many passwords to create
var passwordsToCreate = prompt("How many passwords would you like?");
//Holds how long the password
var passwordLength = prompt("How long should the password be?");
//Holds all the generated passwords
var allPasswords = [];
//Holds the password being currently generated 
var password = [];
//Write how many passwords are to be generated at what length
document.write("Generating " + passwordsToCreate + " passwords of " + passwordLength + " length each... <hr>"); 

//Start generating each password
for(var count = 0; count < passwordsToCreate; ++count) {
   //Reset the current password
   password = []; 
   //Start generating a password
   for(var i = 0; i < passwordLength; ++i) {
      //If the current iteration is even, place a number. Otherwise place a letter
      if((i % 2) === 0) {
         /* STEPS
         * Generate a random number between 0 and 1
         * Multiply it by 10 to make its value larger than 0
         * Ceil the value to get an integer value
         * If the value is even choose a number from the ascending numbers string
         * Otherwise choose a number from the descending numbers string
         */
         password.push((Math.ceil((Math.random() * 10)) % 2 === 0) ? numbersAscending.charAt(generateRandomIndex(0, numbersAscending.length)) : numbersDescending.charAt(generateRandomIndex(0, numbersAscending.length)));
      } else {
         /* STEPS
         * Generate a random number between 0 and 1
         * Multiply it by 10 to make its value larger than 0
         * Ceil the value to get an integer value
         * If the value is even choose a lowercase alphabet
         * Otherwise choose an uppercase alphabet
         */
         password.push((Math.ceil((Math.random() * 10)) % 2 === 0) ? alphabet.toLowerCase().charAt(generateRandomIndex(0, alphabet.length)) : alphabet.toUpperCase().charAt(generateRandomIndex(0, alphabet.length)));
      }
   }
   //Cut out any whitespace using RegEX
   password = password.filter(function(str) {
       return /\S/.test(str);
   });
   //Add the password to the final array
   allPasswords.push(password.join("").toString());
}

//Print every password
for(var i = 0; i < allPasswords.length; i++)
   document.write("Password " + (i + 1) + ": " + allPasswords[i] + " and has a length of: " + allPasswords[i].length + "</br>");

//Helper function for generating random index values between two values
function generateRandomIndex(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
