// Define a function named "permutation" which takes an array of numbers as input
function permutation(nums) {
    // Initialize an empty array called "result" to store the permutations
    let result = [];

    // Define a nested helper function named "permuteHelper" to generate permutations recursively
    function permuteHelper(nums, start, result) {
        // If we have processed all elements, i.e., start index reaches the end of the array
        if (start === nums.length) {
            // Add a copy of the current permutation (nums) to the "result" array
            return result.push([...nums]);
        }
        // Iterate over the array elements starting from the current "start" index
        for (let i = start; i < nums.length; i++) {
            // Swap the current element with the element at the "start" index
            [nums[start], nums[i]] = [nums[i], nums[start]];
            // Recursively call permuteHelper with the next start index (start + 1)
            permuteHelper(nums, start + 1, result);
            // Backtrack by swapping the elements back to their original positions
            [nums[start], nums[i]] = [nums[i], nums[start]];
        }
    }
    // Start the permutation generation process from the first element (index 0)
    permuteHelper(nums, 0, result);
    // Return the array containing all the permutations
    return result;
}

// Call the "permutation" function with an array [1, 2, 3] and log the result to the console
console.log(permutation([1, 2, 3]));



// Recurrence Relation->Recursive Case: T(n) = n * T(n-1) + O(1)
// This recurrence relation represents the time complexity of the function. The function makes n recursive calls to itself with n-1 elements, and then performs a constant amount of work (swapping elements and adding the permutation to the result).
// T(n) = n * T(n-1) + O(1)
// T(n-1) = (n-1) * T(n-2) + O(1)
// T(n-2) = (n-2) * T(n-3) + O(1)
// ...
// T(2) = 2 * T(1) + O(1)
// T(1) = 1 * T(0) + O(1)
// T(0) = 0
// Adding these up, we get:

// T(n) = n * T(n-1) + n * (n-1) * T(n-2) + n * (n-1) * (n-2) * T(n-3) + ... + O(n^2)
// T(n) = n * (n-1) * (n-2) * ... * 1 + O(n^2)
// Time Complexity -> Time complexity is O(n!), where n is the number of elements in the array. This is because the function generates all possible permutations of the array, which is a factorial operation.
// The first part of the equation represents the number of permutations of n elements, which is n! (n factorial). The second part, O(n^2), represents the time complexity of the swapping and adding operations, which are performed for each permutation.
// Space Complexity-> The space complexity of the permutation function is O(n), where n is the number of elements in the array. This is because the function uses a stack frame for each recursive call, and in the worst case, the depth of the recursion is equal to the number of elements in the array.
