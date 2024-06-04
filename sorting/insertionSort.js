// Insertion Sort function
function insertionSort(arr) {
    // Iterate over the array starting from the second element (index 1)
    for (let i = 1; i < arr.length; i++) {
        // Store the current element as the value to be inserted in the correct position
        let v = arr[i];
        // Initialize the index for the element to be compared with
        let j = i;
        // Continue comparing the current element with the previous elements
        while (j >= 1 && arr[j - 1] > v) {
            // If the previous element is greater, shift it to the right
            arr[j] = arr[j - 1];
            // Move to the previous element
            j -= 1;
        }
        // Insert the current element in its correct position
        arr[j] = v;
    }
    // Return the sorted array
    return arr;
}

// Example usage
let arr = [5, 4, 1, 3, 2];
console.log(insertionSort(arr));


// Time Complexity : O(n^2) where n is the size of the array due to use of 2 nested loops
// Space Complexity : O(1) (As no external data structure used in this code)

// Stable Sorting -> In this algorithm there is no change of relative position of same element

//  Comparisons directly proportional to n^2
//  Swapping directly proportional to n^2

// Why we use Insertion sort in spite of not having better time complexity than Bubble sort?
// Insertion Sort is an online algorithm, meaning it can sort elements as they are received,
// without needing to have all the data upfront. This is particularly useful in scenarios where data is coming in a stream and needs to be sorted in real-time.
