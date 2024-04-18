function mergeSort(arr) {
    // Base Case: If the array has 1 or 0 elements, it's already sorted
    if (arr.length <= 1) {
      return arr;
    }
  
    // Find the middle index of the array
    let mid = Math.floor(arr.length / 2);
  
    // Divide the array into two halves
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
  
    // Recursively sort the left and right halves
    mergeSort(left);
    mergeSort(right);
  
    // Merge the sorted halves
    merge(left, right, arr);
  
    // Return the sorted array
    return arr;
  }
  
  function merge(left, right, arr) {
    // Initialize indices for the left, right, and merged arrays
    let i = 0;
    let j = 0;
    let k = 0;
  
    // Merge elements from the left and right arrays into the original array
    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        arr[k] = left[i];
        i++;
      } else {
        arr[k] = right[j];
        j++;
      }
      k++;
    }
  
    // Copy the remaining elements of the left array, if any
    while (i < left.length) {
      arr[k] = left[i];
      i++;
      k++;
    }
  
    // Copy the remaining elements of the right array, if any
    while (j < right.length) {
      arr[k] = right[j];
      j++;
      k++;
    }
  }
  
  // Call the mergeSort function with the example array
  console.log(mergeSort([9, 1, 8, 5, 4, 3, 2]));

  // TIme Complexity->The time complexity of Merge Sort is O(n log n) in all cases (best, worst, and average) because the algorithm recursively divides the input array into smaller subarrays, sorts them, and then merges them back together. The divide-and-conquer strategy used in Merge Sort results in a time complexity of O(log n) for the splitting and merging operations, and the comparison within the merge operation takes O(n) time, leading to an overall time complexity of O(n log n).
  // pace Complexity->  The space complexity of Merge Sort is O(n) because the algorithm requires additional space to store the temporary arrays during the merge process. As the input array is divided into smaller subarrays, the algorithm needs to allocate memory to store these subarrays, which results in a linear space complexity.