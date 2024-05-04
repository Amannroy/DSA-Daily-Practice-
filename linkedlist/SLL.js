/**
 * Implementation of a singly linked list in JavaScript.
 * A linked list is a linear data structure where elements are stored in a sequence.
 * Each element points to the next element in the sequence.
 *
 * The Node class represents individual elements in the linked list.
 * Each node contains a data value and a reference (pointer) to the next node.
 *
 * The MyLinkedList class represents the linked list itself.
 * It contains methods for adding, deleting, and accessing elements in the list.
 * Operations include adding elements at the head, tail, or specific index,
 * deleting elements at a specific index, and accessing elements by index.
 *
// Linked List in Javascript

class Node {
  // Constructor for creating a new node with the given data and setting its next pointer to null
  constructor(data) {
    this.data = data; // The data stored in the node
    this.next = null; // Pointer to the next node in the list
  }
}

class LinkedList {
  // Constructor for creating a new linked list
  constructor() {
    this.head = null; // The first node in the list
  }

  // Adds a new node at the beginning of the list
  addFirst(data) {
    const newNode = new Node(data); // Create a new node with the given data
    newNode.next = this.head; // Set the new node's next pointer to the current head
    this.head = newNode; // Update the head of the list to the new node
  }

  // Adds a new node at the end of the list
  addLast(data) {
    const newNode = new Node(data); // Create a new node with the given data

    if (!this.head) { // If the list is empty
      this.head = newNode; // Set the new node as the head
      return;
    }

    let current = this.head; // Start at the head of the list
    while (current.next) { // While there is a next node
      current = current.next; // Move to the next node
    }

    current.next = newNode; // Link the last node to the new node
  }

  // Returns the number of nodes in the list
  size() {
    let count = 0; // Initialize a counter
    let current = this.head; // Start at the head of the list
    while (current) { // While there is a node
      count++; // Increment the counter
      current = current.next; // Move to the next node
    }
    return count; // Return the total count
  }

  // Adds a new node at a specific index in the list
  addAt(index, data) {
    if (index < 0 || index > this.size()) { // If the index is out of bounds
      console.error("Invalid Index"); // Log an error message
      return;
    }

    const newNode = new Node(data); // Create a new node with the given data
    if (index === 0) { // If adding at the beginning of the list
      newNode.next = this.head; // Link the new node to the current head
      this.head = newNode; // Update the head of the list
      return;
    }

    let current = this.head; // Start at the head of the list
    for (let i = 0; i < index - 1; i++) { // Move to the desired index
      current = current.next;
    }

    newNode.next = current.next; // Link the new node to the next node at the target index
    current.next = newNode; // Update the link to point to the new node
  }

  // Removes the first node in the list
  removeTop() {
    if (!this.head) { // If the list is empty
      return;
    }

    this.head = this.head.next; // Move the head to the next node
  }

  // Removes the last node in the list
  removeLast() {
    if (!this.head) { // If the list is empty
      return;
    }

    let current = this.head; // Start at the head of the list
    while (current.next.next) { // While there is a next node after the current one
      current = current.next; // Move to the next node
    }

    current.next = null; // Set the next pointer of the second-to-last node to null
  }

  // Removes a node at a specific index in the list
  removeAt(index) {
    if (index < 0 || index > this.size()) { // If the index is out of bounds
      console.error("Invalid Index"); // Log an error message
      return;
    }

    if (index === 0) { // If removing the first node
      this.head = this.head.next; // Move the head to the next node
      return;
    }

    let current = this.head; // Start at the head of the list
    for (let i = 0; i < index - 1; i++) { // Move to the desired index
      current = current.next;
    }

    if (current.next) { // If there is a next node
      current.next = current.next.next; // Skip over the next node
    }
  }

  // Prints all the data in the list
  print() {
    let current = this.head; // Start at the head of the list
    while (current) { // While there is a node
      console.log(current.data); // Print the data of the current node
      current = current.next; // Move to the next node
    }
  }
}

// Example usage of the LinkedList class
const linkedlist = new LinkedList(); // Create a new linked list

linkedlist.addFirst(5); // Add 5 at the beginning
linkedlist.addFirst(3); // Add 3 at the beginning
linkedlist.addFirst(8); // Add 8 at the beginning
linkedlist.addLast(6); // Add 6 at the end

linkedlist.removeTop(); // Remove the first node

linkedlist.addAt(2, 8); // Add 8 at index 2

linkedlist.removeLast(); // Remove the last node
linkedlist.removeAt(2); // Remove the node at index 2

linkedlist.print(); // Print all nodes
console.log("size = " + linkedlist.size()); // Print the size of the list
