// Define a Node class for the linked list
class Node {
    constructor(data) {
        this.data = data; // Store the data for this node
        this.next = null; // Initialize next to null, indicating no next node yet
    }
}

// Function to detect a cycle in a linked list
function hasCycle(head) {
    let slow = head; // Slow pointer moves one step at a time
    let fast = head; // Fast pointer moves two steps at a time

    // If the list is empty or has only one node, there is no cycle
    if (!head || !head.next) return false;

    // Move slow one step at a time and fast two steps at a time
    while (fast !== null && fast.next !== null) {
        slow = slow.next; // Move slow one step forward
        fast = fast.next.next; // Move fast two steps forward

        // If slow and fast meet, there is a cycle
        if (slow === fast) return true;
    }

    // If the loop ends without meeting, there is no cycle
    return false;
}

// Function to find the starting point of the loop
function findLoopStart(head) {
    let slow = head;
    let fast = head;

    // Find the loop node using Floyd's cycle detection algorithm
    while (fast !== null && fast.next !== null) {
        slow = slow.next; // Move slow one step forward
        fast = fast.next.next; // Move fast two steps forward

        // If slow and fast meet, there is a cycle
        if (slow === fast) break;
    }

    // If there is no cycle, return null
    if (fast === null || fast.next === null) return null;

    // Move slow back to the head
    slow = head;

    // Move both pointers one step at a time until they meet
    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }

    // The node at which slow and fast meet is the starting point of the loop
    return slow;
}

// Example usage
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = head; // Create a cycle by pointing the last node back to the head

console.log(hasCycle(head)); // Output: true
console.log(findLoopStart(head).data); // Output: 1
