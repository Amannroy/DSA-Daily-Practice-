class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    // Method to add an element to the top of the stack
    push(data) {
        const newNode = new Node(data);
        if (this.top === null) {
            this.top = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.size++;
    }

    // Method to remove the top element from the stack
    pop() {
        if (this.isEmpty()) {
            return "Stack is Empty. Can't perform pop.";
        }
        const poppedNode = this.top;
        this.top = this.top.next;
        this.size--;
        return poppedNode.data;
    }

    // Method to return the top element of the stack without removing it
    peek() {
        if (this.isEmpty()) {
            return "Stack is Empty. Can't perform peek.";
        }
        return this.top.data;
    }

    // Method to check if the stack is empty
    isEmpty() {
        return this.size === 0;
    }

    // Method to get the size of the stack
    getSize() {
        return this.size;
    }

    // Method to traverse and print the stack elements
    traverse() {
        let current = this.top;
        while (current !== null) {
            console.log(current.data);
            current = current.next;
        }
    }
}
// Create a new instance of the Stack class
const stack = new Stack();

// Add elements to the stack
stack.push(10);
stack.push(69);
stack.push(420);

// Traverse and print the stack elements
stack.traverse(); // Output: 420, 69, 10

// Remove elements from the stack and print them
console.log(stack.pop()); // Output: 420
console.log(stack.pop()); // Output: 69
console.log(stack.pop()); // Output: 10

// Attempt to pop from an empty stack
console.log(stack.pop()); // Output: "Stack is Empty. Can't perform pop."

// Attempt to peek at the top element of an empty stack
console.log(stack.peek()); // Output: "Stack is Empty. Can't perform peek."

// Check if the stack is empty
console.log(stack.isEmpty()); // Output: true

// Print the size of the stack after all elements have been popped
console.log(stack.getSize()); // Output: 0
