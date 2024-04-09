// Define a function named "subsets" which takes an array of numbers as input
function subsets(nums){
    // Initialize an empty array called "result" to store the subsets
    let result = [];
    // Initialize an empty array called "temp" to store temporary subsets
    let temp = [];
    // Define a nested function named "recursiveSubsets" to find subsets recursively
    function recursiveSubsets(nums, i){
        // If we have explored all numbers in the array, i.e., reached the end of the array
        if(i === nums.length){
            // Add the current subset (a copy of "temp" array) to the "result" array
            return result.push([...temp]);
        }
        // Include the current number (nums[i]) in the current subset
        temp.push(nums[i]);
        // Recursively explore subsets with the current number included and move to the next number
        recursiveSubsets(nums, i + 1);
        // Exclude the current number from the current subset
        temp.pop();
        // Recursively explore subsets with the current number excluded and move to the next number
        recursiveSubsets(nums, i + 1);
    }
    // Start exploring subsets from the beginning of the array (i = 0)
    recursiveSubsets(nums, 0);
    // Return the array containing all the subsets
    return result;
}
// Call the "subsets" function with an array [1, 2, 3] and log the result to the console
console.log(subsets([1, 2, 3]));


// Recurrence Relation-> T(n) = 2T(n-1) + O(1)
// Let's assume n is the length of the input array nums.
// At each step of the recursion, we make two recursive calls: one including the current number in the subset and one excluding it.
// The recurrence relation can be represented as T(n) = 2T(n-1) + O(1), where O(1) represents the constant time operations like pushing and popping elements from arrays.

// Time Complexity-> O(2^n). By repeatedly expanding the recurrence relation, we find that T(n) = O(2^n), where n is the length of the input array.
// Thus, the time complexity of the algorithm is exponential in terms of the size of the input.
// Space Complexity-> O(2^n). In each recursive call, a new subset is created and stored in the temp array.
// Since we explore all possible subsets, the space complexity is also exponential, O(2^n).
// Additionally, the recursion stack also contributes to the space complexity, but it's limited to O(n) in this case, where n is the length of the input array.