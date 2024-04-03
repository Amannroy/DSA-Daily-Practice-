function power(x, n) {
    // Base Case 1: If n is 0, return 1.
    // This is because any number raised to the power of 0 is 1.
    if (n == 0) {
        return 1;
    }
    // Base Case 2: If n is 1, return x.
    // This is because any number raised to the power of 1 is the number itself.
    if (n == 1) {
        return x;
    }
    // Recursive Case: If n is greater than 1, calculate the power of x to the n/2.
    // This is done by recursively calling power with x and n/2.
    let mid = Math.floor(n / 2);
    let y = power(x, mid);
    // Calculate the final result by squaring y if n is even, or by multiplying y by x if n is odd.
    // This is because x^n = (x^(n/2))^2 if n is even, and x^n = x * (x^(n/2))^2 if n is odd.
    let final_result = y * y;
    
    if (n % 2 === 0) {
        return final_result;
    } else {
        return final_result * x;
    }
}

// Call the power function with the arguments 2 and 4 and log the result.
console.log(power(2, 5)); // Output: 16


// Recurrence Relation

// Time Complexity
// Space Complexity