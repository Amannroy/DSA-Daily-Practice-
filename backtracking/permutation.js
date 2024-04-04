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


// Recurrence Relation

// Time Complexity
// Space Complexity