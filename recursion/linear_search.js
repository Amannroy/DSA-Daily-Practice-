function linearSearch(arr, target, index = 0) {
    // Base Case: If the index is greater than or equal to the array's length,
    // it means we've checked all elements and the target is not in the array.
    if (index >= arr.length) {
        return -1; // Return -1 to indicate the target is not found.
    }
    // If the current element at the index matches the target,
    // return the index of the target.
    if (arr[index] === target) {
        return index;
    }
    // If the current element does not match the target,
    // recursively call the function with the next index.
    return linearSearch(arr, target, index + 1);
}

// Example usage:
console.log(linearSearch([1, 4, 6, 7, 8, 45, 78], 7)); // Output: 3


// Recurrence Relation

// Time Complexity
// Space Complexity