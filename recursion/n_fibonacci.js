function fibonacci(n) {
    // Base Case: If n is 0 or 1, return n.
    if (n <= 1) {
        return n;
    }
    // Recursive Case: If n is greater than 1, return the sum of the Fibonacci of n-1 and n-2.
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Function to print the Fibonacci sequence up to the nth term.
function printFibonacciSequence(n) {
    let result = []
    for (let i = 0; i < n; i++) {
        result.push(fibonacci(i));
    }
    return result;
}

// Call the printFibonacciSequence function with the argument 6 to print the Fibonacci sequence up to the 6th term.
console.log(printFibonacciSequence(6)); // [0, 1, 1, 2, 3, 5]


// Recurrence Relation-> T(n)=T(n−1)+T(n−2)+O(1), where T(n) represents the time taken to compute the nth Fibonacci number.

// Time Complexity-> the total number of function calls grows exponentially with n. Therefore, the time complexity is exponential, specifically O(2^n)
// Space Complexity->Since there are n levels of recursion in the worst case, the space complexity is proportional to n, i.e., O(n)
