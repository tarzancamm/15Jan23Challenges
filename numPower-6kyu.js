// Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p

// we want to find a positive integer k, if it exists, such that the sum of the digits of n taken to the successive powers of p is equal to k * n.
// In other words:

// Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

// If it is the case we will return k, if not return -1.

// Note: n and p will always be given as strictly positive integers.


const digPow = (n, p) => {
    let arr = n.toString().split('')
    let newNums = []
    let power = p

    for (let i = 0; i < arr.length; i++) {
        newNums.push(Math.pow(arr[i], power))
        power++
    }

    let sum = newNums.reduce((a, b) => a + b)
    if (Number.isInteger(sum / n)) {
        return sum /n
    } else {
        return -1
    }
}


console.log(digPow(89, 1))
console.log(digPow(46288, 3))