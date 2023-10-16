const repeatString = function(string, n) {
    let res = '';
    while (n > 0) {
        res += string;
        n--;
    }
    return (n < 0) ? 'ERROR' : res
};

// Do not edit below this line
module.exports = repeatString;
