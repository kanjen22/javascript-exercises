const reverseString = function(string) {
    let l = 0, r = string.length - 1;
    let chars = string.split("");
    while (l < r) {
        tmp = chars[l];
        chars[l] = chars[r];
        chars[r] = tmp;
        l++, r--;
    }
    return chars.join('')
};

// Do not edit below this line
module.exports = reverseString;
