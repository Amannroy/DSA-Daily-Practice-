class Node {
    constructor(data) {
        this.data = data; // Initialize node with data
        this.next = null; // Initialize next pointer as null
    }
}

class LinkedList {
    constructor() {
        this.head = null; // Initialize the head of the linked list as null
    }

    // Method to insert a new node at the end of the linked list
    insert(data) {
        let newNode = new Node(data); // Create a new node with the given data
        if (!this.head) {
            this.head = newNode; // If the list is empty, set the new node as the head
        } else {
            let current = this.head; // Start from the head of the list
            while (current.next) {
                current = current.next; // Traverse to the end of the list
            }
            current.next = newNode; // Add the new node at the end
        }
    }

    // Method to remove duplicates from the linked list
    removeDuplicates() {
        let current = this.head; // Start from the head of the list
        while (current) { // Loop through each node in the list
            let runner = current; // Set a runner pointer starting from current node
            while (runner.next) { // Loop through all subsequent nodes
                if (runner.next.data === current.data) {
                    // If the data of the next node is equal to the data of the current node
                    runner.next = runner.next.next; // Skip the next node (remove duplicate)
                } else {
                    runner = runner.next; // Move the runner to the next node
                }
            }
            current = current.next; // Move the current pointer to the next node
        }
    }

    // Method to print the linked list
    printList() {
        let current = this.head; // Start from the head of the list
        let result = []; // Array to store elements of the linked list
        while (current) { // Loop through each node in the list
            result.push(current.data); // Push the data of the current node to the array
            current = current.next; // Move to the next node
        }
        console.log(result.join(' ')); // Print the linked list elements as a string
    }
}

// Example usage:
let list = new LinkedList(); // Create a new linked list instance
list.insert(1); // Insert elements into the linked list
list.insert(2);
list.insert(3);
list.insert(2);
list.insert(4);
list.insert(1);

console.log("Original linked list:");
list.printList(); // Output the original linked list

list.removeDuplicates(); // Remove duplicates from the linked list

console.log("\nLinked list after removing duplicates:");
list.printList(); // Output the linked list after removing duplicates
