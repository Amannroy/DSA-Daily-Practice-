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


// Recurrence Relation

// Time Complexity
// Space Complexity