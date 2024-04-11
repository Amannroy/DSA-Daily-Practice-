// Selection Sort function
function selectionSort(arr) {
    // Outer loop to iterate through each element of the array
    for (let i = 0; i < arr.length - 1; i++) {
        // Initialize the minimum index as the current index
        let minIndex = i;
        // Inner loop to find the minimum element in the unsorted part of the array
        for (let j = i + 1; j < arr.length; j++) {
            // If the current element is less than the element at the minimum index
            if (arr[j] < arr[minIndex]) {
                // Update the minimum index
                minIndex = j;
            }
        }
        // Swap the element at the minimum index with the element at the current index
        let temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
    }
    // Return the sorted array
    return arr;
}

// Test the selectionSort function with an example array
console.log(selectionSort([9, 6, 8, 4, 2]));

// Time Complexity : O(n^2) where n is the size of the array due to use of 2 nested loops
// Space Complexity : O(1) (As no external data structure used in this code)

// UnStable Sorting -> In this algorithm there is a chance of change in relative position of same element

//  Comparisons directly proportional to n^2
//  Swapping directly proportional to n because swapping happens outside of inner loop(inside i loop only)