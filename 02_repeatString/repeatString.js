const repeatString = function(word, num) {
    let answer = "";
    while (num > 0) {
        answer += word;
        num--;
    }
    return answer;
};

// Do not edit below this line
module.exports = repeatString;
