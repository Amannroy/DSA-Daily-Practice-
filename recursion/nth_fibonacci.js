function fibonacci(n) {
    // Base Case: If n is 0 or 1, return n.
    // This is because the Fibonacci sequence starts with 0 and 1.
    if (n === 0 || n === 1) {
        return n;
    }
    // Recursive Case: If n is greater than 1, return the sum of the Fibonacci of n-1 and n-2.
    // This is the recursive step where the function calls itself with two smaller values of n.
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Call the fibonacci function with the argument 5 and log the result.
console.log(fibonacci(5)); // Output: 5


// Recurrence Relation-> T(n)=T(n−1)+T(n−2)+O(1)

// Time Complexity-> The total number of function calls grows exponentially with n. Therefore, the time complexity is exponential, specifically O(2^n)
// Space Complexity-> Since there are n levels of recursion in the worst case, the space complexity is proportional to n, i.e., O(n)
