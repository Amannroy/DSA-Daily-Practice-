class Stack {
    constructor() {
        this.stack = [];
    }

    // Method to add an element to the top of the stack
    push(element) {
        this.stack.push(element);
    }

    // Method to remove and return the element from the top of the stack
    pop() {
        if (this.isEmpty()) {
            return "Stack is Empty. Can't perform pop";
        }
        return this.stack.pop();
    }

    // Method to return the element at the top of the stack without removing it
    peek() {
        if (this.isEmpty()) {
            return "Stack is Empty. Can't perform peek";
        }
        return this.stack[this.size() - 1];
    }

    // Method to check if the stack is empty
    isEmpty() {
        return this.size() === 0;
    }

    // Method to return the size of the stack
    size() {
        return this.stack.length;
    }

    // Method to traverse and print all elements in the stack
    traverse() {
        for (let i = 0; i < this.size(); i++) {
            console.log(this.stack[i]);
        }
    }
}

// Create a new stack object
const stack = new Stack();

// Add elements to the stack
stack.push(10);
stack.push(20);
stack.push(30);

// Print all elements in the stack
console.log("Elements in the stack:");
stack.traverse();

// Print the size of the stack
console.log("Size of the stack:", stack.size());

// Remove and print elements from the stack
console.log("Popping elements from the stack:");
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop()); // Trying to pop from an empty stack

// Print the element at the top of the stack without removing it
console.log("Element at the top of the stack:", stack.peek());

// Check if the stack is empty
console.log("Is the stack empty?", stack.isEmpty());

// Print the size of the stack
console.log("Size of the stack:", stack.size());
