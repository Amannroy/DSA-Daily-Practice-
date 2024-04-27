// Define a Node class for the linked list
class Node {
    // Constructor to initialize a new node with data and set next to null
    constructor(data) {
        this.data = data; // Store the data for this node
        this.next = null; // Initialize next to null, indicating no next node yet
    }
}

// Function to find the middle element of a linked list
function findMiddle(head) {
    // Initialize two pointers, slow and fast, to the head of the list
    let slow = head;
    let fast = head;
    
    // Move slow one step at a time and fast two steps at a time
    // This loop continues until fast reaches the end of the list or its next node is null
    while (fast !== null && fast.next !== null) {
        slow = slow.next; // Move slow one step forward
        fast = fast.next.next; // Move fast two steps forward
    }
    // When the loop ends, slow will be pointing to the middle element of the list
    return slow.data; // Return the data of the middle node
}

// Create a linked list with five nodes
const head = new Node(1); // Start with the head node
head.next = new Node(2); // Add the second node
head.next.next = new Node(3); // Add the third node
head.next.next.next = new Node(4); // Add the fourth node
head.next.next.next.next = new Node(5); // Add the fifth node

// Find and print the middle element of the linked list
console.log(findMiddle(head)); // Output: 3
