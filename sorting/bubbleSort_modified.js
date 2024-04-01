// Bubble Sort function
function bubbleSort(arr) {
    let noSwaps;
    // Outer loop to iterate through each element of the array
    for (let i = 0; i < arr.length; i++) {
        noSwaps = true;  // No swaps will be made in this iteration
        // Inner loop to compare adjacent elements
        for (let j = 0; j < arr.length - i - 1; j++) {
            // If the current element is greater than the next element
            if (arr[j] > arr[j + 1]) {
                noSwaps = false; // A swap was made, so set the flag to false
                // Swap the elements
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
         // If no swaps were made in this iteration, the array is sorted
    if(noSwaps) break;
   
    }
   
    // Return the sorted array
    return arr;
}

// Testing the bubbleSort function with an example array
console.log(bubbleSort([1,8,4,5]));


// Time Complexity : O(n^2) where n is the size of the array due to use of 2 nested loops
// Space Complexity : O(1) (As no external data structure used in this code)

// Stable Sorting -> In this algorithm there is no change of relative position of same element

//  Comparisons directly proportional to n^2
//  Swapping directly proportional to n^2

// Modified bubble sort is mainly used for sorted and nearly sorted array(Best Case)
// TC->O(n) for best case