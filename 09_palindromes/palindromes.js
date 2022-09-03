const palindromes = function (word) {
    let reverse = word.split('').reverse().join('');
    return reverse === word;
};

// Do not edit below this line
module.exports = palindromes;
