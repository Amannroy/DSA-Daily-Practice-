// Merge Sort function
function mergeSort(arr) {
    // Base case: if the array has only one element, it's already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Find the middle index to split the array into two halves
    const middleIndex = Math.floor(arr.length / 2);

    // Recursively split and sort the left half of the array
    const leftArr = mergeSort(arr.slice(0, middleIndex));

    // Recursively split and sort the right half of the array
    const rightArr = mergeSort(arr.slice(middleIndex));

    // Merge the two sorted halves
    return merge(leftArr, rightArr);
}

// Helper function to merge two sorted arrays
function merge(leftArr, rightArr) {
    // Create an empty array to store the merged result
    const resultArr = [];

    // Initialize two pointers to track the current index of leftArr and rightArr
    let leftIndex = 0;
    let rightIndex = 0;

    // Continue merging until one of the arrays is fully traversed
    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        // Compare the current elements from both arrays
        if (leftArr[leftIndex] < rightArr[rightIndex]) {
            // If the left array element is smaller, add it to the result array
            resultArr.push(leftArr[leftIndex]);
            // Move the left array pointer forward
            leftIndex++;
        } else {
            // If the right array element is smaller, add it to the result array
            resultArr.push(rightArr[rightIndex]);
            // Move the right array pointer forward
            rightIndex++;
        }
    }

    // Once one array is fully traversed, add the remaining elements of the other array
    // Add any remaining elements from the left array
    return resultArr
        .concat(leftArr.slice(leftIndex))
        // Add any remaining elements from the right array
        .concat(rightArr.slice(rightIndex));
}

// Test the mergeSort function with an example array
const array = [9, 6, 8, 4, 2];
console.log(mergeSort(array));  // Output: [2, 4, 6, 8, 9]


// Time Complexity - O(nlog n)
// Space Complexity - O(n)


  // Time Complexity->The time complexity of Merge Sort is O(n log n) in all cases (best, worst, and average) because the algorithm recursively divides the input array into smaller subarrays, sorts them, and then merges them back together. The divide-and-conquer strategy used in Merge Sort results in a time complexity of O(log n) for the splitting and merging operations, and the comparison within the merge operation takes O(n) time, leading to an overall time complexity of O(n log n).
  // pace Complexity->  The space complexity of Merge Sort is O(n) because the algorithm requires additional space to store the temporary arrays during the merge process. As the input array is divided into smaller subarrays, the algorithm needs to allocate memory to store these subarrays, which results in a linear space complexity.
