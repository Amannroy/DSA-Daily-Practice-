// Binary Search

/**
 * @param {number[]} nums - A sorted array of numbers.
 * @param {number} target - The number to search for.
 * @return {number} - The index of the target in the array, or -1 if the target is not found.
 */
var search = function(nums, target) {
    // Initialize the left and right pointers to the start and end of the array
    let left = 0;
    let right = nums.length - 1;

    // Continue the search as long as the left pointer is less than or equal to the right pointer
    while (left <= right) {
        // Calculate the middle index
        let mid = Math.floor((left + right) / 2);

        // Check if the middle element is the target
        if (nums[mid] === target) {
            // If the target is found, return its index
            return mid;
        } else if (nums[mid] < target) {
            // If the target is greater than the middle element, move the left pointer to the right of the middle
            left = mid + 1;
        } else {
            // If the target is less than the middle element, move the right pointer to the left of the middle
            right = mid - 1;
        }
    }

    // If the target is not found after checking all possible locations, return -1
    return -1;
};

// Example sorted array of numbers
var nums = [1, 2, 3, 4, 5, 6, 7];
// Target number to search for
var target = 5;

// Call the search function with the array and target
var result = search(nums, target);

// Output the result
console.log(result); // Output: 4
