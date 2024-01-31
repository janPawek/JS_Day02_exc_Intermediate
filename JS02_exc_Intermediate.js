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
//   -------------------------------------

// JavaScript Day 02 Excercises: Intermediate: 2. Average Grade : Make a function that will accept 3 parameters, which are the grades from Math, Physics and English. then make the calculation and print them on the screen. Make sure that the variables are numbers.

// E.g. If you put the following grades 3, 4, 5 the result should be:

// Sum:12

// Average: 4
// filename: calculateGrades.js

// Write a function called calculateGrades
function calculateGrades(math, physics, english) {
    // Check if the provided grades are valid numbers
    if (typeof math === 'number' && typeof physics === 'number' && typeof english === 'number') {
      // Calculate the sum and average of the grades
      const sum = math + physics + english;
      const average = sum / 3;
  
      // Print the results
      console.log(`Sum: ${sum}`);
      console.log(`Average: ${average}`);
    } else {
      // Print an error message if any of the grades is not a valid number
      console.log('Invalid input. Please provide valid numeric grades.');
    }
  }
  
  // Example usage
  const mathGrade = 3;
  const physicsGrade = 4;
  const englishGrade = 5;
  
  calculateGrades(mathGrade, physicsGrade, englishGrade);
//   In this example, the calculateGrades function takes three parameters (math, physics, and english), checks if they are valid numbers, calculates the sum and average, and prints the results. The example usage demonstrates how to use the function with specific grades and prints the calculated sum and average to the console.
  
// -----------------------------------------

