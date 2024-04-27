// Define a Node class for the linked list
class Node {
    // Constructor to initialize a new node with data and set next to null
    constructor(data) {
        this.data = data; // Store the data for this node
        this.next = null; // Initialize next to null, indicating no next node yet
    }
}

// Function to detect a cycle in a linked list using Floyd's cycle-finding algorithm
function hasCycle(head) {
    // Initialize two pointers, slow and fast, to the head of the list
    let slow = head;
    let fast = head;

    // If the list is empty or has only one node, there is no cycle
    if (!head || !head.next) return false;

    // Move slow one step at a time and fast two steps at a time
    // This loop continues until fast reaches the end of the list or its next node is null
    while (fast !== null && fast.next !== null) {
        slow = slow.next; // Move slow one step forward
        fast = fast.next.next; // Move fast two steps forward

        // If slow and fast meet, there is a cycle
        if (slow === fast) return true;
    }

    // If the loop ends without meeting, there is no cycle
    return false;
}

// Create a linked list with a cycle by pointing the last node back to the head
const head = new Node(1); // Start with the head node
head.next = new Node(2); // Add the second node
head.next.next = new Node(3); // Add the third node
head.next.next.next = new Node(4); // Add the fourth node
head.next.next.next.next = head; // Create a cycle by pointing the last node back to the head

// Check if there is a cycle in the linked list and print the result
console.log(hasCycle(head)); // Output: true
