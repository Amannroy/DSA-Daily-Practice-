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


// Recurrence Relation-> In this recursive approach, the function reverses the string by appending the first character to the reversed substring of the rest of the string.
//Let n denote the length of the input string.
//The recurrence relation for this function can be represented as:T(n)=T(n−1)+O(1)

// Time Complexity->At each recursive call, the function slices the string and appends a character. Both operations have a time complexity of O(n).
// The function is called n times, where n is the length of the input string.
// Therefore, the overall time complexity is O(n^2).
// Space Complexity -> The space complexity depends on the depth of the recursion stack, which is O(n), as there could be n recursive calls.
// Additionally, each recursive call creates a new string by slicing the input string, which also contributes to the space complexity.
// Therefore, the space complexity is O(n^ 2).