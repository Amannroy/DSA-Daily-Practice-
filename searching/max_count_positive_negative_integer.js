
function maximumCount(nums) {
    // Initialize variables to count the number of positive and negative integers
    let countpos = 0; // Counter for positive integers
    let countneg = 0; // Counter for negative integers
    
    // Iterate through the elements of the array
    for (let i = 0; i < nums.length; i++) {
        // If the current element is negative, increment countneg
        if (nums[i] < 0) {
            countneg++;
        } else if (nums[i] > 0) { // If the current element is positive, increment countpos
            countpos++;
        }
    }
    
    // Return the maximum count between positive and negative integers using Math.max function
    return Math.max(countneg, countpos);
}

// Example usage:
console.log(maximumCount([-2, -1, -1, 1, 2, 3])); // Output: 3


// Time Complexity: O(n) - linear time complexity, where n is the number of elements in the input array.
// Space Complexity: O(1) - constant space complexity, independent of the input size.