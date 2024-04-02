function min_array(n) {
    // Base Case: If the array has only one element, return that element.
    // This is because the minimum of a single-element array is the element itself.
    if (n.length === 1) {
        return n[0];
    }
    // Recursive Case: If the array has more than one element, find the minimum of the rest of the array.
    // This is done by recursively calling min_array with the array excluding the first element.
    let min = min_array(n.slice(1));
    // Compare the first element of the array with the minimum of the rest of the array.
    // If the first element is less than the minimum, return the first element.
    // Otherwise, return the minimum of the rest of the array.
    if (n[0] < min) {
        return n[0];
    }
    return min;
}

// Call the min_array function with the array [3,5,1,2,9] and log the result.
console.log(min_array([3,5,1,2,9])); // Output: 1


// Recurrence Relation

// Time Complexity
// Space Complexity