// Insertion Sort function
function insertionSort(arr) {
  const n = arr.length;

  for (let i = 1; i < n; i++) {
    // n
    const key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      // n
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }

  return arr;
}

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
