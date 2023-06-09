// Question 1: Create a function that will convert Fahrenheit to Celsius
function fahrenheitToCelsius( valueInFarenheit ) {

  let valueInCelsius = (5 / 9) * (valueInFarenheit - 32);

  return valueInCelsius;
}

// Question 1: Test cases
console.log(fahrenheitToCelsius(32) + "C"); // Output: 0C
console.log(fahrenheitToCelsius(212) + "C"); // Output: 100C


// Question 2: Calculate average of array of numbers
function findAverage (array) {
  let sum = 0;

  for (let counter = 0; counter < array.length; counter++) {
      sum = sum + array[counter];
  }

  let average = sum / array.length;

  return average;
}

// Question 2: Test Cases 
console.log(findAverage([1, 2, 3, 4, 5, 6])); // Output: 3.5
console.log(findAverage([5, 2, 7, 4, 4, 8])) // Output: 5


// Question 3: create a function that check if a number n, is divisible by two number x & y. All inputs are positive, non-zero digits. 
function isDivisible ( number, firstDivider, secondDivider ) {

  if (number % firstDivider == 0) {
      console.log(`${number} is divisible by ${firstDivider},`);
  }else {
      console.log(`${number} is not divisible by ${firstDivider},`);
  }

  if (number % secondDivider == 0) {
      console.log(`${number} is divisible by ${secondDivider}`);
  }else {
      console.log(`${number} is not divisible by ${secondDivider}`);
  }
}

// Question 3: Test Cases
isDivisible(15, 3, 5);  // Output: 15 is divisible by 3, 15 is divisible by 5
isDivisible(24, 3, 6);  // Output: 24 is divisible by 3, 24 is divisible by 6


// Question 4: create a function that will output the first Hundred prime numbers
function primeNumber (num){
    let i = 2, squareRoot = Math.sqrt(num)
    while(i <= squareRoot) {
      if(num % i === 0){
              i++
              return false
          }
      i++
    }
      return num > 1
  }
  
  function outputPrimeNumbers (){
      for(let number = 0; number <= 100; number++) {
        if(primeNumber(number)){
            console.log(`${number} is a prime number`) 
        }
    } 
  }
  
 // Question 4: Test Case
 outputPrimeNumbers(); 
// Output: 
// 2 is a prime number
// 3 is a prime number
// 5 is a prime number
// 7 is a prime number
// 11 is a prime number
// 13 is a prime number
// 17 is a prime number
// 19 is a prime number
// 23 is a prime number
// 29 is a prime number
// 31 is a prime number
// 37 is a prime number
// 41 is a prime number
// 43 is a prime number
// 47 is a prime number
// 53 is a prime number
// 59 is a prime number
// 61 is a prime number
// 67 is a prime number
// 71 is a prime number
// 73 is a prime number
// 79 is a prime number
// 83 is a prime number
// 89 is a prime number
// 97 is a prime number
  

// Question 5: create a function that will return a boolean specifying if a number is a prime number.
  function isPrimeNumber (number){
      if(primeNumber(number)){
          return true;;
      } else {
        return false
      }
  } 
  
 // Question 5: Test Cases
 console.log(isPrimeNumber(5)); // Output: true
 console.log(isPrimeNumber(8)); // Output: false
  

// Question 6: create a function that receives an array of numbers of divesrse numbers and returns an array containing only postive numbers.
function getPositiveNumbers(numbers) {
  return numbers.filter(number => number > 0); 
}

// Question 6: Test Cases
console.log(getPositiveNumbers([1, 2, 3, -5, 4, -3]));  // Output: [ 1, 2, 3, 4 ]
console.log(getPositiveNumbers([4, -2, 5, -5, -4, -3]));  // Output: [ 4, 5 ]


/* Question 7:  write a program that prints the numbers from 1 to 100. but for multiples of 3 prints "fizz" instead of the number and for the multiples of 5
 prints "Buzz". for numbers which are multiples of both 3 and 5 prints "FizzBuzz" */.
 function fizzBuzz(){
    for(let number = 1; number <= 100; number++){
        
        if(number % 3 === 0 && number % 5 === 0) {
          console.log('FizzBuzz');
        }
        if(number % 3 === 0) {
          console.log('Fizz')
        }
        if(number % 5 === 0 ) {
          console.log('Buzz')
        } else {
          console.log(number);
        }
    }
  }
  
// Question 7: Test Case
fizzBuzz();  //Output: 1 2 Fizz 3 4 Buzz Fizz 6 7 8 Fizz 9 Buzz 11 Fizz 12 13 14 FizzBuzz Fizz Buzz 16 17 Fizz 18 19 Buzz Fizz 21 22 23 Fizz 24 Buzz 
// 26 Fizz 27 28 29 FizzBuzz Fizz Buzz 31 32 Fizz 33 34 Buzz Fizz 36 37 38 Fizz 39 Buzz 41 Fizz 42 43 44 FizzBuzz Fizz Buzz 46 47 Fizz 48 49 Buzz 
// Fizz 51 52 53 Fizz 54 Buzz 56 Fizz 57 58 59 FizzBuzz Fizz Buzz 61 62 Fizz 63 64 Buzz Fizz 66 67 68 Fizz 69 Buzz 71 Fizz 72 73 74 FizzBuzz 
// Fizz Buzz 76 77 Fizz 78 79 Buzz Fizz 81 82 83 Fizz 84 Buzz 86 Fizz 87 88 89 FizzBuzz Fizz Buzz 91 92 Fizz 93 94 Buzz Fizz 96 97 98 Fizz 99 Buzz


/* Qestion 8 the marketing team is spending way too much time typing in hashtags. lets create a hashtag generator for them, our hashtag generator will 
meet the folliwing criteria;
 . It must start with a hash symbol, #
 . Ignore all spaces in the input
 . All words must have their first letter capitalized.
 . If the final result is going to be longer than 140 characters, it should return false.
 . If the input or result is an emppty string, it should return false.
 */
function generateHashtag(input) {
  // Check if the input or result is an empty string
  if (input.trim() === "") {
    return false;
  }

  // Split the input string into an array of words
  const words = input.split(" ");
  let hashtag = "#"; // Start the hashtag with #

  // Iterate over each word and capitalize the first letter
  words.forEach(word => {
    // Trim any leading or trailing spaces
      word.trim()  

      // Ignore empty words & capitalize the first letter and concatenate with the rest of the word
      if (word !== "") {  
      hashtag += word.charAt(0).toUpperCase() + word.slice(1);
    }
    })

  // Check if the generated hashtag is longer than 140 characters
  if (hashtag.length > 140) {
    return false;
  }

  return hashtag; // Return the generated hashtag
}

// Question 8: Test Cases
console.log(generateHashtag("the marketing team")); // Output: "#TheMarketingTeam"
console.log(generateHashtag("hello world"));  // Output: "#HelloWorld"
console.log(generateHashtag(""));  // Output: false
console.log(generateHashtag(" ".repeat(141)));  // Output: false
