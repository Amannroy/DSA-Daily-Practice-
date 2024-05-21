// 1. Reverse a string
function reverseWords(s) {
    // Trim the input string to remove leading and trailing spaces
    s = s.trim();
    
    // Split the string by spaces into an array of words, filtering out any empty strings caused by multiple spaces
    const words = s.split(/\s+/);
    
    // Use a stack to reverse the order of words
    const stack = [];
    for (let word of words) {
        stack.push(word);
    }
    
    // Pop words from the stack and join them with a single space
    let reversedString = '';
    while (stack.length > 0) {
        reversedString += stack.pop() + ' ';
    }
    
    // Trim the final result to remove any trailing space and return
    return reversedString.trim();
}

// Example usage:
const input = "  the sky   is blue  ";
const output = reverseWords(input);
console.log(output);  // Output: "blue is sky the"


// 2. Valid Parenthesis

function isValid(s) {
    // Initialize an empty stack to keep track of opening brackets
    let stack = [];

    // Loop through each character in the string
    for (let i = 0; i < s.length; i++) {
        let char = s[i]; // Get the current character

        // If the character is an opening bracket, push it onto the stack
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        }
        // If the character is a closing bracket
        else if (char === ')' || char === ']' || char === '}') {
            // If the stack is empty (no opening bracket to match with), return false
            if (isEmpty(stack)) {
                return false;
            }
            // Pop the top element from the stack (the most recent unmatched opening bracket)
            const top = stack.pop();
            // Check if the popped element matches the current closing bracket
            if ((char === ')' && top !== '(') ||
                (char === '}' && top !== '{') ||
                (char === ']' && top !== '[')) {
                // If it doesn't match, the string is invalid
                return false;
            }
        }
    }

    // After processing all characters, if the stack is empty, all brackets were properly matched
    return isEmpty(stack);
}

// Helper function to check if the stack is empty
function isEmpty(stack) {
    return stack.length === 0;
}

// Test the function with an example string
const string1 = "([{}])";
console.log(isValid(string1)); // Output: true

// 3. Min Stack

var MinStack = function() {
    this.stack = [];
    this.minStack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    // Push value onto the main stack
    this.stack.push(val);
    // If minStack is empty or val is less than or equal to the top of minStack, push val onto minStack
    if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
        this.minStack.push(val);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    // If the top of stack is equal to the top of minStack, pop from minStack
    if (this.stack[this.stack.length - 1] === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
    }
    // Pop from the main stack
    this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    // Return the top element of the main stack
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    // Return the top element of the minStack (the minimum element)
    return this.minStack[this.minStack.length - 1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */


// 4. 