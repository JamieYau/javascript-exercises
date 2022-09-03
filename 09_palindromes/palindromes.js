const palindromes = function (word) {
    //remove punctuation, spaces & makes word lowercase
    word = word.replace(/[\W_]/g, "").replace(" ", "").toLowerCase();
    console.log(word);
    //reverse word
    let reverse = word.split('').reverse().join('');
    return reverse === word;
};

// Do not edit below this line
module.exports = palindromes;
