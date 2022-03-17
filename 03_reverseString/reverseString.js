const reverseString = function(string) {

    let reversed = '';

    // use a for loop that will run using the length of the string and reverse it using the inline counter from the for loop
    for (let i = string.length; i > 0; i--) {
        reversed += string[i-1];
    }

    return reversed;

};

// Do not edit below this line
module.exports = reverseString;
