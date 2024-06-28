// Define a class named Queue to represent a queue data structure
class Queue {
    // Constructor to initialize the queue as an empty array
    constructor(){
        this.queue = [];
    }

    // Method to add an element to the end of the queue
    enqueue(element){
        this.queue.push(element);
    }

    // Method to remove an element from the front of the queue
    dequeue(){
        // Check if the queue is empty before attempting to remove an element
        if(this.isEmpty()){
            return "Underflow, cannot perform dequeue"; // Return an error message if the queue is empty
        }
        return this.queue.shift(); // Remove and return the first element in the queue
    }

    // Method to check if the queue is empty
    isEmpty(){
        return this.size() === 0; // Return true if the queue length is 0, otherwise false
    }

    // Method to return the front element of the queue without removing it
    front(){
        // Check if the queue is empty before attempting to access the front element
        if(this.isEmpty()){
            return "No elements in the Queue"; // Return an error message if the queue is empty
        }
        return this.queue[0]; // Return the first element in the queue
    }

    // Method to return the size of the queue
    size(){
        return this.queue.length; // Return the length of the queue array
    }

    // Method to print all elements of the queue
    printQueue(){
        let queueString = ""; // Initialize an empty string to build the queue representation
        for(let i=0; i<this.size(); i++){ // Iterate through the queue elements
            queueString += this.queue[i] + ","; // Append each element followed by a comma to the string
        }
        console.log("Queue:" + queueString); // Print the queue string to the console
    }
}

// Create an instance of the Queue class
const myQueue = new Queue();

// Enqueue elements into the queue
myQueue.enqueue(5);
myQueue.enqueue(46);
myQueue.enqueue(786);

// Dequeue elements from the queue
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();

// Attempt to dequeue from an empty queue and print the result
console.log(myQueue.dequeue());

// Print the front element of the queue
console.log(myQueue.front());
