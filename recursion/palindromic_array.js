function palindrome(x) {
    let str = x.toString(); // Convert the number to a string

    // Base Case: If the number is negative, it's not a palindrome
    if (x < 0) {
        return false;
    }
    // Base Case: If the string has 0 or 1 character, it's a palindrome
    if (str.length <= 1) {
        return true;
    }
    // If the first and last characters are not the same, it's not a palindrome
    if (str[0] !== str[str.length - 1]) {
        return false;
    }
    // Recursively check the substring excluding the first and last characters
    return palindrome(str.slice(1, -1));
}

// Example usage
console.log(palindrome("1221")); // Output: true


// Recurrence Relation-> T(n)=T(n−2)

// Time Complexity-> At each step of the recursion, the function removes two characters from the string and compares the remaining substring.
// The time complexity can be expressed as O(n/2), where n is the length of the string.
// in Big O notation, we drop the constant factor, so the time complexity is O(n).
// Space Complexity-> The space complexity is O(n), where n is the length of the input string.