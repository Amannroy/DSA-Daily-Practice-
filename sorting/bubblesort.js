// Bubble Sort function
function bubbleSort(arr) {
    // Outer loop to iterate through each element of the array
    for (let i = 0; i < arr.length; i++) {
        // Inner loop to compare adjacent elements
        for (let j = 0; j < arr.length - i - 1; j++) {
            // If the current element is greater than the next element
            if (arr[j] > arr[j + 1]) {
                // Swap the elements
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    // Return the sorted array
    return arr;
}

// Testing the bubbleSort function with an example array
console.log(bubbleSort([4, 3, 2, 6, 1]));


// Time Complexity : O(n^2) where n is the size of the array due to use of 2 nested loops
// Space Complexity : O(1) (As no external data structure used in this code)

// Stable Sorting -> In this algorithm there is no change of relative position of same element

//  Comparisons directly proportional to n^2
//  Swapping directly proportional to n^2