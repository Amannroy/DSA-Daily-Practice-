// Function to find the kth missing positive integer in a sorted array.
function kthMissingPositive(arr, k) {
    let count = 0; // Initialize a counter to keep track of the missing positive integers found so far
    
    // Iterate through the elements of the array
    for (let i = 0; i < arr.length; i++) {
        // Check if the current element is less than or equal to the target positive integer plus the count of missing positive integers found so far
        if (arr[i] <= k + count) {
            count++; // Increment the count if a missing positive integer is found within the range
        }
    }
    
    return k + count; // Return the sum of the target positive integer and the count of missing positive integers found
}

// Example usage:
console.log(kthMissingPositive([2, 3, 4, 7, 11], 5)); // Output: 9


// Time Complexity: O(n)
// Explanation: The function iterates through the entire input array 'arr' once using a for loop, performing a constant number of operations for each element. The number of operations scales linearly with the size of the input array 'arr', making the time complexity O(n).

// Space Complexity: O(1)
// Explanation: The function uses a single variable 'count' to keep track of the number of missing positive integers. Since this variable does not grow with the size of the input array, the space complexity remains constant, O(1), regardless of the input size.
