function arrayElements(arr) {
    // Base Case: If the array is empty, return to stop the recursion.
    // This is because there are no more elements to print.
    if (arr.length === 0) {
        return;
    }
    // Print the first element of the array.
     console.log(arr[0]);
    // Recursive Case: Call arrayElements with the rest of the array (excluding the first element).
    // This is done by slicing the array from the second element onwards.
    arrayElements(arr.slice(1));
}

// Call the arrayElements function with the array [1,4,3,6,8,7] to print each element.
console.log(arrayElements([1,4,3,6,8,7]));


// Recurrence Relation

// Time Complexity
// Space Complexity