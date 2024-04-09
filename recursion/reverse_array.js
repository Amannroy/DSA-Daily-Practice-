function reverseArray(arr) {
    // Base Case: If the array is empty, return an empty array
    if (arr.length === 0) {
        return [];
    }
    // Recursive Case: Remove the last element from the array and append it to the beginning
    return [arr.pop()].concat(reverseArray(arr));
}

// Example usage
console.log(reverseArray([1, 2, 3, 4, 5])); // Output: [5, 4, 3, 2, 1]



// Recurrence Relation-> In this recursive approach, the function reverses the string by appending the first character to the reversed substring of the rest of the string.
//Let n denote the length of the input string.
//The recurrence relation for this function can be represented as:T(n) = T(n-1) + O(1)
// This recurrence relation represents the time complexity of the function. The function makes a recursive call to itself with n-1 elements, and then performs a constant amount of work (removing the last element and concatenating it with the result).

// Time Complexity->The time complexity of the reverseArray function is O(n), where n is the number of elements in the array. This is because the function performs a constant amount of work for each element in the array.
// Space Complexity -> the space complexity of the reverseArray function is O(n), where n is the number of elements in the array. This is because the function uses a stack frame for each recursive call, and in the worst case, the depth of the recursion is equal to the number of elements in the array.
