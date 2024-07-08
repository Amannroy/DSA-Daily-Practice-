// Function to get the summary ranges from the given array
let summaryRanges = function(nums) {
    // Initialize an empty array to store the ranges
    let ranges = [];

    // Loop through each number in the array
    for(let i = 0; i < nums.length; i++) {
        // Set the starting point of the current range
        let start = nums[i];

        // Continue to the next number as long as it's consecutive
        while(i + 1 < nums.length && nums[i] + 1 === nums[i + 1]) {
            i++;
        }

        // If the start is not equal to the current number, it's a range
        if(start !== nums[i]) {
            // Push the range in the format "start->end" to the ranges array
            ranges.push(start + "->" + nums[i]);
        } else {
            // If the start equals the current number, it's a single number range
            // Convert the number to a string and push it to the ranges array
            ranges.push(String(start));
        }
    }

    // Return the array of ranges
    return ranges;
};

// Example usage
// Given array [0,1,2,4,5,7], the expected output is ["0->2","4->5","7"]
console.log(summaryRanges([0, 1, 2, 4, 5, 7]));
