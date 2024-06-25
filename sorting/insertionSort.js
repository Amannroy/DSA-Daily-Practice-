// Insertion Sort function
// Insertion Sort
function insertionSort(nums) {
    // Iterate over the array starting from the second element (index 1)
    for (let i = 1; i < nums.length; i++) {
        // Store the current element as the key to be inserted
        let key = nums[i];
        // Initialize j to the index before i
        let j = i - 1;
        // Move elements of nums[0..i-1], that are greater than key, to one position ahead
        // of their current position
        while (j >= 0 && nums[j] > key) {
            // Shift the element at index j to index j+1
            nums[j + 1] = nums[j];
            // Decrement j to compare key with the next element on the left
            j--;
        }
        // Place the key at its correct position in the sorted subarray
        nums[j + 1] = key;
    }
    // Return the sorted array
    return nums;
}

// Test the insertionSort function with the given array and print the result
console.log(insertionSort([29, 10, 14, 37, 14, 33, 8, 11]));


// Best Case Time Complexity = O(n)
// Worst Case Time Complexity = O(n^2)
// Average Case Time Complexity = O(n^2)
// Space Complexity = O(1)

// Stable Sorting -> In this algorithm there is no change of relative position of same element

//  Comparisons directly proportional to n^2
//  Swapping directly proportional to n^2

// Why we use Insertion sort in spite of not having better time complexity than Bubble sort?
// Insertion Sort is an online algorithm, meaning it can sort elements as they are received,
// without needing to have all the data upfront. This is particularly useful in scenarios where data is coming in a stream and needs to be sorted in real-time.
