// JavaScript Day 02 Excercises: Intermediate: 1. Capitalize :
// Aufgabe: Write an anonymous JavaScript function to capitalize only the first letter of a string. The function accepts only one string argument.

// E.g. If we pass the following string 'i am a web developer' we should get the message 'I am a web developer'

// Hint: Check JavaScript String charAt() Method
// filename: capitalizeFirstLetter.js

// Anonymous function to capitalize the first letter of a string
const capitalizeFirstLetter = function(str) {
    // Check if the string is not empty
    if (str && typeof str === 'string') {
      // Capitalize the first letter using charAt() and toUpperCase()
      const capitalizedString = str.charAt(0).toUpperCase() + str.slice(1);
  
      // Return the capitalized string
      return capitalizedString;
    } else {
      // Return an error message if the input is invalid
      return 'Invalid input. Please provide a non-empty string.';
    }
  };
  
  // Example usage
  const inputString = 'i am a web developer';
  const result = capitalizeFirstLetter(inputString);
  
  console.log(result);
//   In this example, the capitalizeFirstLetter function is assigned to a variable as an anonymous function. It uses the charAt(0) method to get the first letter of the string, converts it to uppercase using toUpperCase(), and then concatenates it with the rest of the string using slice(1). The example usage demonstrates how to use the function with a specific string and prints the result to the console.
  