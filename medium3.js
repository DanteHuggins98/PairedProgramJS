// MEDIUM (3)
// Write a function that takes in two numbers and determines the largest positive integer that divides the two 
// numbers without a remainder. 
// // Example 1:
// Input: gcd_two_numbers(336,360)
// Output: 24
// Example 2:
// Input: gcd_two_numbers(78,126)
// Output: 6

function gcd_two_numbers(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number')) 
      return false;
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
      var a = y;// redeclaring a different varialble
      y = x % y;
      x = a;
    }
    return x;
  }
console.log(gcd_two_numbers(33, 360))