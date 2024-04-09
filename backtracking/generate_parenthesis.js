function generateParenthesis(n){
    let result = []; // Initialize an array to store the result

    // Define a recursive function to generate valid combinations
    function generateResult(leftCount, rightCount, current){
        // Base case: when both left and right parentheses are exhausted
        if(leftCount === n && rightCount === n){
            result.push(current); // Add the current combination to the result
            return;
        }
        
        // Add left parenthesis if we have remaining left parentheses to use
        if(leftCount < n){
            generateResult(leftCount + 1, rightCount, current + '('); // Recursively call the function with one more left parenthesis
        }
        
        // Add right parenthesis if it can match with a left parenthesis
        if(rightCount < leftCount){
            generateResult(leftCount, rightCount + 1, current + ')'); // Recursively call the function with one more right parenthesis
        }
    }
    
    generateResult(0, 0, ''); // Start the recursive process with initial counts and an empty string
    
    return result; // Return the result containing all valid combinations
}

console.log(generateParenthesis(3)); // Call the function with n=3 and print the result

// Recurrence Relation-> T(n) = 2T(n-1)
// Let T(n) represent the time complexity of the function for an input of size n.
// The recurrence relation can be represented as T(n) = 2T(n-1), as at each step, we have two recursive calls.
// The base case occurs when both leftCount and rightCount are equal to n
// Time Complexity->  The time complexity is O(2^n), where n is the number of pairs of parentheses.
// At each step of the recursion, we make two recursive calls, leading to an exponential growth in the number of function calls.
// Space Complexity-> The space complexity is O(n), where n is the number of pairs of parentheses.
// In the worst case, the recursion depth is 2n due to the two recursive calls made at each step.
