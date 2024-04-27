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


// Recurrence Relation-> T(n) = T(n/2) + O(1)
// This relation captures the essence of the function, where the function calls itself with n/2 and performs a constant amount of work (squaring or multiplying) to calculate the final result.

// Time Complexity-> T(n) = aT(n/b) + f(n)
// In our case, a = 1, b = 2, and f(n) = O(1). According to the Master Theorem, since f(n) is a constant, the time complexity is O(n^log_b(a)), which simplifies to O(n).
// Space Complexity->The space complexity of this function is determined by the maximum depth of the recursion tree, which is log(n) because the function divides n by 2 at each level of recursion. Therefore, the space complexity is O(log(n)).
// In summary, the power(x, n) function has a time complexity of O(n) and a space complexity of O(log(n)) due to its divide-and-conquer approach, which significantly reduces the number of recursive calls compared to a naive approach.