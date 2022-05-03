// // EASY (2)
// Create a function that checks an array for prime numbers then inserts any pimes into a new array.
// Example 1:
// Input: numArray = [1,2,3,4,5,6,7,8,9,10]
// Output: primeArray = [2,3,5,7]
// Example 2:
// Input: numArray = [10, 18, 19, 29, 33, 35, 47, 66, 83]
// Output: primeArray = [19 ,29 ,47 , 83]

let array1 = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
checkPrime 
array1.forEach((number) => {
  let isPrime = checkPrime(number);
  if (isPrime) {
    console.log(`${number} is a prime number!`);
  } else {
    console.log(`${number} ISN'T a prime number`);
  }
});
