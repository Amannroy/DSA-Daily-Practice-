function factorial(n) {
    // Base Case: If n is 0, return 1 because the factorial of 0 is 1.
    if (n === 0) {
        return 1;
    }
    // Recursive Case: If n is not 0, return the product of n and the factorial of n - 1.
    // This is the recursive step where the function calls itself with a smaller value of n.
    return n * factorial(n - 1);
}

// Call the factorial function with the argument 4 and log the result.
console.log(factorial(4)); // Output: 24

// Recurrence Relation: T(n) = T(n-1) + O(1)
// Time Complexity: O(n), as each recursive call leads to n multiplications in total.
// Space Complexity: O(n), due to the recursive calls creating a new stack frame for each call. The maximum depth of the recursion is proportional to n.
