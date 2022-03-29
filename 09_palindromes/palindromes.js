const palindromes = function (text) {

    let punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~\ ';

    // remove punctuation
    text = text.toLowerCase();
    let rawLetters = text.split('');
    let cleanLetters = rawLetters.filter(function(letter) {
        return punctuation.indexOf(letter) === -1;
    })
    console.log(cleanLetters);

    for (let i = 0; i < Math.floor(cleanLetters.length / 2); i++) {
        let leftLetter = cleanLetters[i]
        let rightLetter = cleanLetters[cleanLetters.length-1-i]
        if (leftLetter !== rightLetter) {
            return false;
        }
    }
    return true;


};




// Do not edit below this line
module.exports = palindromes;
