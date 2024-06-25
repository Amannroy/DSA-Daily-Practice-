function mergeSort(arr) {
  // O(log n)
  // base case
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);

  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  // O(n)
  let sortedArr = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }

  return [...sortedArr, ...left, ...right];
}

// Time Complexity - O(nlog n)
// Space Complexity - O(n)
console.log(mergeSort([8, 3, 5, 4, 7, 6, 1, 2]));

  // TIme Complexity->The time complexity of Merge Sort is O(n log n) in all cases (best, worst, and average) because the algorithm recursively divides the input array into smaller subarrays, sorts them, and then merges them back together. The divide-and-conquer strategy used in Merge Sort results in a time complexity of O(log n) for the splitting and merging operations, and the comparison within the merge operation takes O(n) time, leading to an overall time complexity of O(n log n).
  // pace Complexity->  The space complexity of Merge Sort is O(n) because the algorithm requires additional space to store the temporary arrays during the merge process. As the input array is divided into smaller subarrays, the algorithm needs to allocate memory to store these subarrays, which results in a linear space complexity.
