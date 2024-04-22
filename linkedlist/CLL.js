/**
 * Implementation of a circular linked list in JavaScript.
 * A circular linked list is a variation of a linked list where the last node points back to the first node,
 * creating a circular structure.
 * This allows traversal from any node to any other node in the list.
 *
 * The Node class represents individual elements in the circular linked list.
 * Each node contains a data value and a pointer to the next node.
 *
 * The MyCircularLinkedList class represents the circular linked list itself.
 * It contains methods for adding, deleting, and accessing elements in the list,
 * similar to other linked list implementations.
 *
 * @class
 */
var Node = function(data) {
    // Constructor function for creating a new node.
    // @param {any} data - The value to be stored in the node.
    this.data = data;
    this.next = null; // Pointer to the next node, initially null.
}

var MyCircularLinkedList = function() {
    // Constructor function for creating a new circular linked list.
    this.head = null; // Pointer to the first node, initially null (empty list).
};

/** 
 * Retrieves the element at the specified index in the circular linked list.
 * If the index is out of range, returns -1.
 * @param {number} index - The index of the element to retrieve.
 * @return {number} - The data value of the node at the specified index.
 */
MyCircularLinkedList.prototype.get = function(index) {
    if (this.head == null) return -1; // If list is empty, return -1.
    let i = 0;
    let temp = this.head; // Start from the head of the list.
    // Traverse the list until reaching the specified index or returning to the head.
    do {
        if (i === index) return temp.data; // If index is found, return data value.
        temp = temp.next; // Move to the next node.
        i++;
    } while (temp !== this.head); // Continue until reaching the head again.
    // If index is out of range, return -1.
    return -1;
};

/** 
 * Adds a new node with the given value at the beginning of the circular linked list.
 * @param {number} val - The value to be added to the list.
 * @return {void}
 */
MyCircularLinkedList.prototype.addAtHead = function(val) {
    let newNode = new Node(val); // Create a new node.
    if (this.head == null) { // If list is empty, set new node as head.
        newNode.next = newNode; // Point new node to itself.
    } else {
        newNode.next = this.head; // Point new node to current head.
        let temp = this.head;
        // Traverse to find the last node to update its next pointer.
        while (temp.next !== this.head) {
            temp = temp.next;
        }
        temp.next = newNode; // Update the last node's next pointer to the new node.
    }
    this.head = newNode; // Set new node as the head.
};

/** 
 * Adds a new node with the given value at the end of the circular linked list.
 * @param {number} val - The value to be added to the list.
 * @return {void}
 */
MyCircularLinkedList.prototype.addAtTail = function(val) {
    let newNode = new Node(val); // Create a new node.
    if (this.head == null) { // If list is empty, set new node as head.
        newNode.next = newNode; // Point new node to itself.
        this.head = newNode;
    } else {
        let temp = this.head;
        // Traverse to find the last node to update its next pointer.
        while (temp.next !== this.head) {
            temp = temp.next;
        }
        temp.next = newNode; // Update the last node's next pointer to the new node.
        newNode.next = this.head; // Point new node to the head to create circular structure.
    }
};

/** 
 * Adds a new node with the given value at the specified index in the circular linked list.
 * If the index is greater than the length of the list, the node will be added at the end.
 * @param {number} index - The index at which to add the node.
 * @param {number} val - The value to be added to the list.
 * @return {void}
 */
MyCircularLinkedList.prototype.addAtIndex = function(index, val) {
    if (index <= 0) { // If index is less than or equal to 0, add at head.
        this.addAtHead(val);
        return;
    }
    let newNode = new Node(val); // Create a new node.
    let i = 0;
    let temp = this.head;
    // Traverse to find the node before the specified index.
    while (temp.next !== this.head && i < index - 1) {
        temp = temp.next;
        i++;
    }
    newNode.next = temp.next; // Point new node to the next node.
    temp.next = newNode; // Point previous node to the new node.
};

/** 
 * Deletes the node at the specified index in the circular linked list.
 * If the index is out of range, or the list is empty, do nothing.
 * @param {number} index - The index of the node to be deleted.
 * @return {void}
 */
MyCircularLinkedList.prototype.deleteAtIndex = function(index) {
    if (this.head == null) return; // If list is empty, do nothing.
    if (index === 0) { // If index is 0, delete head node.
        let temp = this.head;
        // Traverse to find the last node to update its next pointer.
        while (temp.next !== this.head) {
            temp = temp.next;
        }
        if (temp === this.head) { // If only one node, set head to null.
            this.head = null;
        } else {
            temp.next = this.head.next; // Update last node's next pointer.
            this.head = this.head.next; // Set head to the next node.
        }
    } else {
        let i = 0;
        let prev = null;
        let temp = this.head;
        // Traverse to find the node at the specified index.
        while (temp.next !== this.head && i < index) {
            prev = temp;
            temp = temp.next;
            i++;
        }
        if (temp !== this.head) { // If node is found, delete it.
            prev.next = temp.next; // Update previous node's next pointer.
        }
    }
};

/** 
 * Your MyCircularLinkedList object will be instantiated and called as such:
 * var obj = new MyCircularLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
