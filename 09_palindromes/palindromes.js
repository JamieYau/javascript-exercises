const palindromes = function (word) {
    //remove punctuation
    word = word.replace(/[^\w\s\']|_/g, "");
    console.log(word);
    
    //reverse word
    let reverse = word.split('').reverse().join('');
    return reverse === word;
};

// Do not edit below this line
module.exports = palindromes;
