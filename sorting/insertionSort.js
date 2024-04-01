// Insertion Sort function
function insertionSort(arr) {
  // Iterate over the array starting from the second element
  for (let i = 1; i < arr.length; i++) {
    // Store the current element to be inserted
    let insertNumber = arr[i];
    // Initialize the index for the element to be compared with
    let j = i - 1;
    // While the current index is within the array and the element at the current index is greater than the element to be inserted
    while (j >= 0 && arr[j] > insertNumber) {
      // Shift the element at the current index to the right
      arr[j + 1] = arr[j];
      // Decrement the index to compare with the previous element
      j--;
    }
    // Insert the element to be inserted at the correct position
    arr[j + 1] = insertNumber;
  }
  // Return the sorted array
  return arr;
}

// Test the insertionSort function with an example array
console.log(insertionSort([3, 5, 2, 8, 4, 9]));

// Time Complexity : O(n^2) where n is the size of the array due to use of 2 nested loops
// Space Complexity : O(1) (As no external data structure used in this code)

// Stable Sorting -> In this algorithm there is no change of relative position of same element

//  Comparisons directly proportional to n^2
//  Swapping directly proportional to n^2

// Why we use Insertion sort in spite of not having better time complexity than Bubble sort?
// Insertion Sort is an online algorithm, meaning it can sort elements as they are received,
// without needing to have all the data upfront. This is particularly useful in scenarios where data is coming in a stream and needs to be sorted in real-time.
