const repeatString = function(word, num) {
    let answer = "";
    if (num < 0) {
        return "ERROR";
    }
    while (num > 0) {
        answer += word;
        num--;
    }
    return answer;
};

// Do not edit below this line
module.exports = repeatString;
