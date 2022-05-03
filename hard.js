function matchBrackets(word) {
    // If the string includes '{' and '}' or '[' and ']' at the same time, then console.log TRUE
    if(word.includes('{') && word.includes('}') || word.includes('[') && word.includes(']')) {
        console.log(true) 
    } else {
        console.log(false) 
    };
};

matchBrackets('[curls]');
matchBrackets('{word]');