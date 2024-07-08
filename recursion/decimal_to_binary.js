function decimalToBinary(n) {
    // Base case: when n is 0 or 1
    if (n === 0) {
        return "0";
    }
    if (n === 1) {
        return "1";
    }

    // Recursive case: divide the number by 2 and get the remainder
    let remainder = n % 2;
    let quotient = Math.floor(n / 2);

    // Concatenate the binary representation of the quotient with the remainder
    return decimalToBinary(quotient) + remainder.toString();
}
console.log(decimalToBinary(11));

// Time Complexity: O(logn)
// Space Complexity: O(logn)