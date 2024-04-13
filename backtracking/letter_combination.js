var letterCombinations = function(digits) {
    // Check if the input 'digits' is an empty string
    if (digits.length === 0) return [];

    // Mapping of digits to their corresponding letters
    const map = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z']
    };

    // Initialize an empty array to store the final result
    let result = [];

    // Call the 'backtrack' function with the initial arguments
    backtrack(map, digits, "", result);

    // Return the final result array
    return result;
};

function backtrack(map, digits, combination, result) {
    // If the 'digits' string is empty, we have a complete combination
    if (digits.length === 0) {
        // Add the current combination to the 'result' array
        result.push(combination);
        return;
    }

    // Get the first digit from the 'digits' string
    let digit = digits[0];

    // Get the letters corresponding to the current digit
    let letters = map[digit];

    // Iterate through the letters and recursively call 'backtrack'
    for (let i = 0; i < letters.length; i++) {
        backtrack(map, digits.slice(1), combination + letters[i], result);
    }
}

console.log(letterCombinations("23"));

// Recurrence Relation -> T(n) = n * T(n-1) + O(1)
// where n is the length of the digits string. This is because the function //explores all possible combinations of letters for each digit, and for each //digit, it makes n recursive calls.

// Time Complexity -> The time complexity of the letterCombinations function is //O(n * 3^n).
// Reason: The backtrack function explores all possible combinations of letters, //which grows exponentially with the length of the digits string (i.e., 3^n). //Additionally, the function needs to iterate through the n digits, which //contributes the n factor to the time complexity. 

// Space Complexity -> The space complexity of the letterCombinations function is also O(n * 3^n).
// Reason: The function needs to store all the intermediate combinations (which require O(n * 3^n) space), during the recursive calls, as well as the final result (which also requires O(n * 3^n) space), leading to an overall space complexity of O(n * 3^n).
