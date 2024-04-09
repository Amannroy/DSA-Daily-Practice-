
var nextPermutation = function(nums) {
    // Find the first decreasing element from the end
    let i = nums.length - 2;
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }
    
    // If such element exists, find the smallest element to the right of nums[i]
    // that is greater than nums[i]
    if (i >= 0) {
        let j = nums.length - 1;
        while (j >= 0 && nums[j] <= nums[i]) {
            j--;
        }
        // Swap nums[i] and nums[j]
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    
    // Reverse the sub-array to the right of i
    reverse(nums, i + 1);
return nums;
};

// Function to reverse a sub-array from start index to end index
function reverse(nums, start) {
    let end = nums.length - 1;
    while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
    }
}

// Example usage:
let nums = [1, 2, 3];
nextPermutation(nums1);
console.log(nums); // Output: [1, 3, 2]


// Recurrence Relation -> T(n) = T(n-1) + O(n)

//This recurrence relation represents the time complexity of the function, where //T(n) is the time complexity of the function for an array of length n, T(n-1) is //the time complexity for an array of length n-1, and O(n) represents the time //taken by the operations that involve iterating through the array.

//The base case for the recurrence relation is T(1) = O(1), which represents the //time taken to process an array of length 1.


// Time Complexity ->  Time complexity of the nextPermutation function is        //dominated by the operations that involve iterating through the array, which //takes O(n) time. Therefore, the time complexity of the function is O(n).

// Space Complexity -> The nextPermutation function modifies the input array in // place and does not use any additional data structures that grow with the size // of the input. Therefore, the space complexity of the function is O(1), which // means it uses constant extra space.