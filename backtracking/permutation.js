// Function to generate all permutations of an array
function permutation(nums) {
    // Initialize an empty array to store the results
    let result = [];
    // Call the helper function to start the permutation process
    permuteHelper(nums, 0, result);
    // Return the array of all permutations
    return result;
}

// Helper function to perform the actual permutation
function permuteHelper(nums, start, result) {
    // Base case: if the start index is equal to the length of the array,
    // it means we have reached the end of a permutation, so we add it to the result
    if (start === nums.length) {
        // Use slice to create a copy of the current permutation and add it to the result
        result.push(nums.slice());
        return;
    }
    // Iterate over the array starting from the current index
    for (let i = start; i < nums.length; i++) {
        // Swap the element at the start index with the current element
        [nums[start], nums[i]] = [nums[i], nums[start]];
        // Recursively call the helper function for the next index
        permuteHelper(nums, start + 1, result);
        // Swap back the elements to restore the original array for the next iteration
        [nums[start], nums[i]] = [nums[i], nums[start]];
    }
}

// Example usage
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
