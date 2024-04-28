// Define a Stack class
class Stack {
    constructor() {
       // Initialize an empty array to represent the stack
       this.stack = [];
    }
   
    // Method to add an element to the top of the stack
    push(element) {
       this.stack.push(element);
    }
   
    // Method to remove the top element from the stack
    pop() {
       // Check if the stack is empty
       if (this.isEmpty()) {
         // If it is, return a message indicating the stack is empty
         return "Stack is Empty. Can't perform pop.";
       }
       // Otherwise, remove and return the top element
       return this.stack.pop();
    }
   
    // Method to return the top element of the stack without removing it
    peek() {
       // Check if the stack is empty
       if (this.isEmpty()) {
         // If it is, return a message indicating the stack is empty
         return "Stack is Empty. Can't perform peek.";
       }
       // Otherwise, return the top element
       return this.stack[this.size() - 1];
    }
   
    // Method to check if the stack is empty
    isEmpty() {
       // Return true if the stack size is 0, otherwise false
       return this.size() === 0;
    }
   
    // Method to get the size of the stack
    size() {
       // Return the length of the stack array
       return this.stack.length;
    }
    // Method to traverse and print the stack elements
    traverse() {
      // while (!this.isEmpty()) {
      //     console.log(this.pop());
      // }
      
      for(let i=0; i<this.size(); i++){
          console.log(this.stack[i]);
      }
  }
   
    // Method to print the stack elements
    printStack() {}
   }
   
   // Create a new instance of the Stack class
   const stack = new Stack();
   
   // Add elements to the stack
   stack.push(10);
   stack.push(69);
   stack.push(420);
   
   console.log(stack.traverse());
   // Print the size of the stack
   console.log(stack.size()); // Output: 3
   
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
   console.log(stack.size()); // Output: 0
   