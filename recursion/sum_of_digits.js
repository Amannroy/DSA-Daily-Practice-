function sumOfDigits(n) {
    // Base Case: If n is less than 10, return n itself.
    // This is because a single-digit number's sum is the number itself.
    if (n < 10) {
        return n;
    }
    // Recursive Case: If n is 10 or more, calculate the sum of the last digit (n % 10)
    // and the sum of the digits of the number obtained by removing the last digit (n / 10).
    // This is done by recursively calling sumOfDigits with n / 10.
    return n % 10 + sumOfDigits(Math.floor(n / 10));
}

// Call the sumOfDigits function with the argument 98 and log the result.
console.log(sumOfDigits(98)); // Output: 17


// Recurrence Relation

// Time Complexity
// Space Complexity