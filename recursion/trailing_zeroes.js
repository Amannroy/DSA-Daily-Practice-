function trailingZeroes(n){
    // Base Case: If n is less than 5, there are no trailing zeroes.
    if(n < 5){
        return 0;
    }
    // Recursive Case: Count the number of trailing zeroes by dividing n by 5 and adding the result to the count of trailing zeroes in the quotient.
    return Math.floor(n/5) + trailingZeroes(Math.floor(n/5));
}

console.log(trailingZeroes(10)); // Output: 2

// Recurrence Relation: T(n) = T(n/5) + O(1)
// Where T(n) represents the time taken to compute the number of trailing zeroes in n.

// Time Complexity: O(log n), as the function divides n by 5 in each recursive call until n is less than 5.
// Space Complexity: O(log n), as the function creates a new stack frame for each recursive call, and the maximum depth of the recursion is proportional to log₅ n.
