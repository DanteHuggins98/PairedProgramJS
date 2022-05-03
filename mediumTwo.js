function anagramChecker(firstString, secondString) {

    // What does the variable x and y mean? ================================================= //
    // 1. First the space between the words, in the string, will be removed
    // e.g (This is a string) -> (Thisisastring)

    // 2. Next it will convert all letters in to lowercase letters. This will make sure it's not case sensitive

    // 3. Then it will split each individial character into its own string, and all those strings will be in an Array
    // e.g (apple) -> ['a','p','p','l','e']

    let x = firstString.replace(/ /g, "").toLowerCase().split('');
    let y = secondString.replace(/ /g, "").toLowerCase().split('');

    // What does condition inside this if else statement mean? ============================== //
    // 1. The charcters in the 'X' and 'Y' Array will in alphabetical order.

    // 2. Then it will convert the 'X' and 'Y' Array in to a 'X' and 'Y' string.
    // e.g ['b','a','c','e','d'] -> ['a','b','c','d','e'] -> 'abcde'
    
    // 3. If both strings are the same, then it will return true. Else it return false
    if (x.sort().join('') == y.sort().join('')) {
        console.log(true)

    } else {
        console.log(false)
    }
}

anagramChecker('anagram', 'margana');

function anagramChecker(firstString, secondString) {

    let x = firstString.replace(/ /g, "").toLowerCase().split('');
    let y = secondString.replace(/ /g, "").toLowerCase().split('');

    if (x.sort().join('') == y.sort().join('')) {
        console.log(true)

    } else {
        console.log(false)
    }
}

anagramChecker('anagram', 'margana');