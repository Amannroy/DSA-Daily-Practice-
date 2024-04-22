/**
 * Implementation of a doubly linked list in JavaScript.
 * A doubly linked list is a linear data structure similar to a singly linked list,
 * but with each node having two pointers - one pointing to the next node and
 * another pointing to the previous node.
 * This allows traversal in both forward and backward directions.
 *
 * The Node class represents individual elements in the doubly linked list.
 * Each node contains a data value, a pointer to the next node, and a pointer
 * to the previous node.
 *
 * The MyDoublyLinkedList class represents the doubly linked list itself.
 * It contains methods for adding, deleting, and accessing elements in the list,
 * similar to the singly linked list implementation.
 *
 * @class
 */
var Node = function(data) {
    // Constructor function for creating a new node.
    // @param {any} data - The value to be stored in the node.
    this.data = data;
    this.next = null; // Pointer to the next node, initially null.
    this.prev = null; // Pointer to the previous node, initially null.
}

var MyDoublyLinkedList = function() {
    // Constructor function for creating a new doubly linked list.
    this.head = null; // Pointer to the first node, initially null (empty list).
    this.tail = null; // Pointer to the last node, initially null.
};

/** 
 * Retrieves the element at the specified index in the doubly linked list.
 * If the index is out of range, returns -1.
 * @param {number} index - The index of the element to retrieve.
 * @return {number} - The data value of the node at the specified index.
 */
MyDoublyLinkedList.prototype.get = function(index) {
    let i = 0;
    let temp = this.head; // Start from the head of the list.
    // Traverse the list until reaching the specified index or the end of the list.
    while (i < index && temp != null) {
        i++;
        temp = temp.next; // Move to the next node.
    }
    // If index is out of range, return -1, otherwise return the data value.
    if (temp == null) return -1;
    return temp.data;
};

/** 
 * Adds a new node with the given value at the beginning of the doubly linked list.
 * @param {number} val - The value to be added to the list.
 * @return {void}
 */
MyDoublyLinkedList.prototype.addAtHead = function(val) {
    // If the list is empty, the new node becomes both the head and the tail.
    if (this.head == null) {
        this.head = new Node(val);
        this.tail = this.head;
    } else {
        let n = new Node(val);
        n.next = this.head;
        this.head.prev = n;
        this.head = n;
    }
};

/** 
 * Adds a new node with the given value at the end of the doubly linked list.
 * @param {number} val - The value to be added to the list.
 * @return {void}
 */
MyDoublyLinkedList.prototype.addAtTail = function(val) {
    // If the list is empty, the new node becomes both the head and the tail.
    if (this.tail == null) {
        this.head = new Node(val);
        this.tail = this.head;
    } else {
        let n = new Node(val);
        n.prev = this.tail;
        this.tail.next = n;
        this.tail = n;
    }
};

/** 
 * Adds a new node with the given value at the specified index in the doubly linked list.
 * If the index is greater than the length of the list, the node will be added at the end.
 * @param {number} index - The index at which to add the node.
 * @param {number} val - The value to be added to the list.
 * @return {void}
 */
MyDoublyLinkedList.prototype.addAtIndex = function(index, val) {
    // If the index is less than or equal to 0, add the node at the head.
    if (index <= 0) {
        this.addAtHead(val);
        return;
    }
    let i = 0;
    let temp = this.head;
    // Traverse the list to find the node before the specified index.
    while (i < index - 1 && temp != null) {
        i++;
        temp = temp.next;
    }
    // If the index is out of range, add the node at the end.
    if (temp == null) {
        this.addAtTail(val);
        return;
    }
    let n = new Node(val);
    n.next = temp.next;
    if (temp.next != null) {
        temp.next.prev = n;
    } else {
        // If adding at the end, update the tail pointer.
        this.tail = n;
    }
    temp.next = n;
    n.prev = temp;
};

/** 
 * Deletes the node at the specified index in the doubly linked list.
 * If the index is out of range, or the list is empty, do nothing.
 * @param {number} index - The index of the node to be deleted.
 * @return {void}
 */
MyDoublyLinkedList.prototype.deleteAtIndex = function(index) {
    // If the list is empty, do nothing.
    if (this.head == null) return;
    // If index is less than 0 or greater than or equal to the length, do nothing.
    if (index < 0 || index >= this.size()) return;
    // If index is 0, delete the head node.
    if (index == 0) {
        this.deleteAtHead();
        return;
    }
    // If index is the last element, delete the tail node.
    if (index == this.size() - 1) {
        this.deleteAtTail();
        return;
    }
    let i = 0;
    let temp = this.head;
    // Traverse the list to find the node at the specified index.
    while (i < index && temp != null) {
        i++;
        temp = temp.next;
    }
    // If the node is found, adjust pointers to remove it from the list.
    if (temp != null) {
        temp.prev.next = temp.next;
        temp.next.prev = temp.prev;
        temp.prev = null;
        temp.next = null;
    }
};

/** 
 * Deletes the head node of the doubly linked list.
 * @return {void}
 */
MyDoublyLinkedList.prototype.deleteAtHead = function() {
    // If the list is empty, do nothing.
    if (this.head == null) return;
    // If the list has only one element, set head and tail to null.
    if (this.head == this.tail) {
        this.head = null;
        this.tail = null;
        return;
    }
    this.head = this.head.next;
    this.head.prev = null;
};

/** 
 * Deletes the tail node of the doubly linked list.
 * @return {void}
 */
MyDoublyLinkedList.prototype.deleteAtTail = function() {
    // If the list is empty, do nothing.
    if (this.tail == null) return;
    // If the list has only one element, set head and tail to null.
    if (this.head == this.tail) {
        this.head = null;
        this.tail = null;
        return;
    }
    this.tail = this.tail.prev;
    this.tail.next = null;
};

/** 
 * Calculates the size of the doubly linked list.
 * @return {number} - The number of nodes in the list.
 */
MyDoublyLinkedList.prototype.size = function() {
    let count = 0;
    let temp = this.head;
    // Traverse the list and count the nodes.
    while (temp != null) {
        count++;
        temp = temp.next;
    }
    return count;
};

/** 
 * Your MyDoublyLinkedList object will be instantiated and called as such:
 * var obj = new MyDoublyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
