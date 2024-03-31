// Function to perform Bubble Sort on an array
function bubbleSort(arr) {
    // Get the length of the array
    var len = arr.length;
    // Variable to track if any swapping occurred in the current pass
    var isSwapped;

    // Outer loop to iterate over each element of the array
    for (var i = 0; i < len; i++) {
        isSwapped = false; // Reset the flag for each pass

        // Inner loop to compare adjacent elements and swap them if they are in the wrong order
        for (var j = 0; j < (len - i - 1); j++) {
            // If the current element is greater than the next element, swap them
            if (arr[j] > arr[j + 1]) {
                // Swap the elements
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                // Set the flag to true indicating that a swap occurred
                isSwapped = true;
            }
        }

        // If no swaps occurred in the inner loop, the array is already sorted, and we can break out of the outer loop
        if (!isSwapped) {
            break;
        }
    }

    // Return the sorted array
    return arr;
}


var arr = [243, 45, 23, 356, 3, 5346, 35, 5];
console.log(bubbleSort(arr)); // Output: [3, 5, 23, 35, 45, 243, 356, 5346]

//The time complexity of Bubble Sort is O(n^2)
//The space complexity of Bubble Sort is O(1)
