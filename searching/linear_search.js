// Search in Rotated Sorted Array

// Function to perform a linear search on an array of numbers
var search = function(nums, target) {
    // Iterate over each element in the array
    for(let i=0; i<nums.length; i++){
        // Check if the current element is equal to the target
        if(nums[i] === target){
            // If the target is found, return its index
            return i;
        }
    }
    // If the target is not found after checking all elements, return -1
    return -1;
};

// Example array of numbers
let nums = [4, 5, 6, 7, 0, 1, 2];
// Target number to search for
let target = 0;

// Call the search function with the array and target
let result = search(nums, target);

// Output the result
console.log(result); // Output: 4

// Time Complexity-> The time complexity of this algorithm is O(n), where n is the number of elements in the array. This is because, in the worst-case scenario, the algorithm needs to check every element in the array to determine if the target is present.
// Space Complexity-> The space complexity of this algorithm is O(1), which means it uses a constant amount of additional space. This is because the algorithm only uses a fixed amount of space to store the input array and the target number, regardless of the size of the input array.
