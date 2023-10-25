const fibonacci = function(n) {
    if (n < 0) {
        return "OOPS";
    }
    let fib = [1, 1]
    if (n <= 2) {
        return fib[n - 1];
    }
    for (let i = 2; i < n; i++) {
        fib.push(fib[fib.length - 1] + fib[fib.length - 2])
    }
    return fib[fib.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
