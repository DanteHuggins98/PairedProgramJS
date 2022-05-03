// MEDIUM (1)
// Create a Function Called “vowelChecker” that takes in a single argument (x) and logs weather or not the input 
// is a vowel
// Example 1:
// Input: vowelChecker(‘b’)
// Output: ‘This is not a vowel’
// Example 2:
// Input: vowelChecker(‘a’)
// // Output: ‘This is a vowel’
// var vowelChecker = function(letter) {

function compare (a, b) {
  y = a.split("").sort();
  z = b.split("").sort();
  for (i=0; i<y.length; i++) {
    if(y.length===z.length) {
      if (y[i]===z[i]){
        console.log(a + " and " + b + " are anagrams!");
        break;
      }
      else {
        console.log(a + " and " + b + " are not anagrams.");
        break;
      }
    }
    else {
      console.log(a + " has a different amount of letters than " + b);
    }
    break;
  }
}

compare("mary", "arms");