/**
 * @param {number[]} nums - An array of numbers.
 * @return {number} - The minimum number in the array.
 */
var findMin = function(nums) {
    // Assume the first element is the minimum
    let min = nums[0];
    // Iterate over each element in the array starting from the second element
    for(let i=1; i<nums.length; i++){
        // If a smaller element is found, update the minimum
        if(nums[i] < min){
            min = nums[i];
        }
    }
    // Return the minimum value found
    return min;
};
// Example array of numbers
var nums = [3, 4, 5, 1, 2];

// Call the findMin function with the array
var result = findMin(nums);

// Output the result
console.log(result); // Output: 1


// Time Complexity-> The optimized algorithm has a time complexity of O(n), where n is the number of elements in the array. This is because it iterates over the array once.
// Space Complexity-> The space complexity remains O(1), as the optimized algorithm uses a constant amount of additional space.