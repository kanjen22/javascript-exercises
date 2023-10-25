const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const sum = function (nums) {
    return nums.reduce((total, num) => {
        return total + num;
    }, 0)
};

const multiply = function (nums) {
    return nums.reduce((total, num) => {
        return total * num;
    }, 1);
};

const power = function (a, b) {
    return a ** b;
};

const factorial = function (n) {
    let res = 1;
    while (n > 0) {
        res *= n;
        n--;
    }
    return res
};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial
};
