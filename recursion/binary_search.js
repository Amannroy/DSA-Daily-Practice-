function binarySearch(arr, target, start = 0, end = arr.length - 1) {
    // Base Case: If the start index is greater than the end index,
    // it means we've checked all elements and the target is not in the array.
    if (start > end) {
        return -1; // Return -1 to indicate the target is not found.
    }
    // Calculate the middle index of the current search range.
    let mid = Math.floor((start + end) / 2);
    // If the target is found at the middle index, return the index.
    if (arr[mid] === target) {
        return mid;
    }
    // If the target is less than the middle element, search the left half of the array.
    else if (arr[mid] > target) {
        return binarySearch(arr, target, start, mid - 1);
    }
    // If the target is greater than the middle element, search the right half of the array.
    else {
        return binarySearch(arr, target, mid + 1, end);
    }
}

// Example usage:
console.log(binarySearch([2, 4, 5, 6, 7, 8, 98, 567], 567)); // Output: 7


// Recurrence Relation->  T(n)=T(2n)+O(1)
//Where:
// T(n) represents the time taken to perform a binary search on an array of size 
// T(n/2) represents the time taken to perform a binary search on half of the array.
// O(1) represents the constant time taken for comparisons and other basic operations within each recursive call.
// Time Complexity-> O(logn), where n is the number of elements in the array. This is because, with each recursive call, the search space is halved. As a result, the time complexity grows logarithmically with the size of the input array.
// Space Complexity-> O(logn), where n is the number of elements in the array. This is due to the recursive nature of the algorithm, which leads to the creation of a new stack frame for each recursive call. Since the maximum depth of the recursion is proportional to the logarithm of the input size, the space complexity is logarithmic.