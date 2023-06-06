//1 Convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) * (5 / 9);
    return celsius;
  }
  
  const temperatureInFahrenheit = 120;
  const temperatureInCelsius = fahrenheitToCelsius(temperatureInFahrenheit);
  console.log(temperatureInCelsius); // Output: 48.8

//2 Calculate average of numbers in an array of.
function findAverage() {
    
    let sum = 0;
    array = [4,5,23,11,44,12]
    for (let counter = 0; counter < array.length; counter++) {
        sum = sum + array[counter];
    }

    let average = sum / array.length;

    console.log(average);   
    return average; 
}

//3 create a function that check if a number n, is divisible by two number x & y. All inputs are positive, non-zero digits.
    function isDivisible(n, x, y) {
        return n % x === 0 && n % y === 0;
      }
      
      const n = 60;
      const x = 12;
      const y = 6;
      
      console.log(isDivisible(n, x, y)); // Output: true

//4 create a function that will output the first Hundred Prime Numbers () {
    function checkPrime(num) {
        if (num < 2) {
          return 0;
        } else {
          let x = Math.floor(num / 2);
          for (let j = 2; j <= x; j++) {
            if (num % j === 0) {
              return 0;
            }
          }
        }
        return 1;
      }
      
      let a = 1, b = 100;
      for (let i = a; i <= b; i++) {
        if (checkPrime(i)) {
          console.log(i);
        }
      }


//5 create a function that will return a boolean specifying if a number is a prime number.

function isPrimeNumber (number) {
    if (number < 2) {
        return (`${number} is not a prime number`);
    }
    
    for (let i = 2; i < number; i++){
        if (number % i == 0) {
            return (`${number} is not a prime number`);
        }
    }

    return (`${number} is a prime number`);
}
 const result = isPrimeNumber(3);
 console.log(result);


//6 create a function that receives an array of numbers of divesrse numbers and returns an array containing only postive numbers.

function getPositiveNumbers(numbers) {
    return numbers.filter(number => number > 0);
  }
  
  const numbers = [-2, 5, 0, -8, 10, -3, 15];
  const positiveNumbers = getPositiveNumbers(numbers);
  console.log(positiveNumbers);
  // Output: [5, 10, 15]

/*7 write a program that prints the numbers from 1 to 100. but for multiples of 3 prints "fizz" instead of the number and for the multiples of 5
 prints "Buzz". for numbers which are multiples of both 3 and 5 prints "FizzBuzz".*/
 
 for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }

/*8 the marketing team is spending way too much time typing in hashtags. lets create a hashtag generator for them, our hashtag generator will 
meet the folliwing criteria;
 . It must start with a hash symbol, #
 . Ignore all spaces in the input
 . All words must have their first letter capitalized.
 . If the final result is going to be longer than 140 characters, it should return false.
 . If the input or result is an emppty string, it should return false.
 */

 function generateHashtag(input) {
    // Check for empty input or result
    if (!input || input.trim() === "") {
      return false;
    }
  
    // Remove spaces and split the input into words
    const words = input.trim().split(" ");
  
    // Capitalize the first letter of each word and join them
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    const hashtag = "#" + capitalizedWords.join("");
  
    // Check if the final result exceeds 140 characters
    if (hashtag.length > 140) {
      return false;
    }
  
    return hashtag;
  }
  console.log(generateHashtag("hello world")); // Output: "#HelloWorld"
  console.log(generateHashtag("  welcome  to  openai   ")); // Output: "#WelcomeToOpenai"
  console.log(generateHashtag("")); // Output: false
  console.log(generateHashtag(" ".repeat(150))); // Output: false
