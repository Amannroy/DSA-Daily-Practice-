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

    // Method to reverse the linked list
    reverse() {
        let prev = null; // Initialize prev pointer as null
        let curr = this.head; // Start from the head of the list
        while (curr) {
            let nextNode = curr.next; // Save the next node in the list
            curr.next = prev; // Reverse the pointer to the previous node
            prev = curr; // Move prev pointer to current node
            curr = nextNode; // Move curr pointer to next node
        }
        this.head = prev; // Update the head of the list to the last node (prev)
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
list.insert(4);
list.insert(5);

console.log("Original linked list:");
list.printList(); // Output the original linked list

list.reverse(); // Reverse the linked list

console.log("\nReversed linked list:");
list.printList(); // Output the reversed linked list
