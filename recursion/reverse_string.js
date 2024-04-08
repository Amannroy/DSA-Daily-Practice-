function reverseString(s) {
    // Helper function to reverse the string recursively
    function reverseHelper(l, r) {
        // Base case: If the left index is greater than or equal to the right index,
        // it means we've reached the middle of the string or the end, so we return.
        if (l >= r) {
            return;
        }
        
        // Swap the characters at the left and right indices
        let temp = s[l];
        s[l] = s[r];
        s[r] = temp;

        // Recursively call the helper function for the next pair of characters
        reverseHelper(l + 1, r - 1);
    }
    
    // Call the helper function with the initial left and right indices
    reverseHelper(0, s.length - 1);
    
    // Join the reversed array of characters back into a string and return it
    return s.join('');
}

// Example usage
console.log(reverseString(["h", "e", "l", "l", "o"])); // Output: "olleh"


// Recurrence Relation-> T(n)=T(n−2)

// Time Complexity->  The time complexity is O(n).
// Space Complexity-> The space complexity is O(1).