//String for alphabet characters
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//String for numbers in ascending order
var numbersAscending = "0123456789";
//String for numbers in descending order
var numbersDescending = "9876543210";
//Holds how many passwords to create
var passwordsToCreate = prompt("How many passwords would you like?");
//Holds how long the password is
var passwordLength = prompt("How long should the password be?");
//Holds all the generated passwords
var allPasswords = [];
//Holds the password being currently generated 
//var password = [];
//Holds all randomly generated characters
var allRandomCharacters = [];
//Holds some randomly generated characters 
var randomCharacters = [];
//Write how many passwords are to be generated at what length
document.write("Generating " + passwordsToCreate + " passwords of " + passwordLength + " length each... <hr>"); 

//Random number to use 
var randomNumber = Math.random();
//Print initial values
document.write("</br>" + "Randomly generated number: " + randomNumber + "</br>");
//Multiply to get proper number 
randomNumber *= 100;
//Print new value
document.write("" + "Randomly generated number is now: " + randomNumber + "</br></br>");

//Start generating each password
for(var count = 0; count < passwordsToCreate; ++count) {
   var password = [];
   randomNumber *= 10;
   //Start generating a password
   for(var i = 0; i < passwordLength; ++i) {
      //If the current iteration is even, place a number. Otherwise place a letter
      if(((i % 2) === 0) || i === 0) {
         /* STEPS
         * Generate a random number between 0 and 1
         * Multiply it by 10 to make its value larger than 0
         * Ceil the value to get an integer value
         * If the value is even choose a number from the ascending numbers string
         * Otherwise choose a number from the descending numbers string
         */
         password.push((Math.round((randomNumber * 1)) % 2 === 0) ? numbersAscending.charAt(RandRange(0, numbersAscending.length + 1)) : numbersDescending.charAt(RandRange(0, numbersDescending.length + 1)));
      } else {
         /* STEPS
         * Generate a random number between 0 and 1
         * Multiply it by 10 to make its value larger than 0
         * Ceil the value to get an integer value
         * If the value is even choose a lowercase alphabet
         * Otherwise choose an uppercase alphabet
         */
         password.push((Math.round((randomNumber * 10)) % 2 === 0) ? alphabet.toLowerCase().charAt(RandRange(0, alphabet.length + 1)) : alphabet.toUpperCase().charAt(RandRange(0, alphabet.length + 1)));
      }
   }
   
   //Cut out any whitespace using RegEX
   password = password.filter(function(str) {
       return /\S/.test(str);
   });
   //Add the password to the final array
   allPasswords.push(password.join("").toString());
}

//Print randomly generated characters
for(var i = 0; i < allRandomCharacters.length; i++)
{
   document.write("Random Character " + (i + 1) + ": " + allRandomCharacters[i] + "</br>");
}

//Print every password
for(var i = 0; i < allPasswords.length; i++)
   document.write("Password " + (i + 1) + ": " + allPasswords[i] + " and has a length of: " + allPasswords[i].length + "</br>");

//Helper function for generating random index values between two values
function generateRandomIndex(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

	//Random number between min and max
    function RandRange(min, max) { return (Math.random() * (max - min)) + min; }
	
	//Generates a random number between 0 and 1
    function RandValue() { return Math.random(); }

	//Generate a random integer 
    function RandInt(min, max) { return Math.round(RandRange(min, max)); }
    function RandBinary() { return RandInt(0, 2); }
