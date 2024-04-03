function reverseString(str) {
    // Base Case: If the string is empty, return an empty string
    if (str === '') {
        return '';
    }
    // Recursive Case: Reverse the string by slicing from the second character to the end
    // and appending the first character to the end of the result
    return reverseString(str.substr(1)) + str.charAt(0);
}

// Example usage
console.log(reverseString("3467")); // Output: "7643"


// Recurrence Relation

// Time Complexity
// Space Complexity