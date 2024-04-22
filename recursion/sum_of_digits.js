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


// Recurrence Relation-> T(n)=T([n/10]) + O(1), This means the time taken to compute the sum of digits of n is the time taken to compute the sum of digits of [n/10] plus a constant time operation.

// Time Complexity->  Time complexity can be expressed as O(log n) where n is the input number.
// Space Complexity-> The space complexity is O(log n) due to the maximum depth of the recursion stack.