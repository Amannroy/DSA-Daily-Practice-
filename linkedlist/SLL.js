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
 * @class
 */
var Node = function(data) {
    // Constructor function for creating a new node.
    // @param {any} data - The value to be stored in the node.
    this.data = data;
    this.next = null; // Pointer to the next node, initially null.
}

var MyLinkedList = function() {
    // Constructor function for creating a new linked list.
    this.head = null; // Pointer to the first node, initially null (empty list).
};

/** 
 * Retrieves the element at the specified index in the linked list.
 * If the index is out of range, returns -1.
 * @param {number} index - The index of the element to retrieve.
 * @return {number} - The data value of the node at the specified index.
 */
MyLinkedList.prototype.get = function(index) {
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
 * Adds a new node with the given value at the beginning of the linked list.
 * @param {number} val - The value to be added to the list.
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    // If the list is empty, the new node becomes the head.
    // Otherwise, adjust pointers to make the new node the head.
    if (this.head == null) {
        this.head = new Node(val);
    } else {
        let n = new Node(val);
        n.next = this.head;
        this.head = n;
    }
};

/** 
 * Adds a new node with the given value at the end of the linked list.
 * @param {number} val - The value to be added to the list.
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    // If the list is empty, the new node becomes the head.
    // Otherwise, traverse the list to find the last node and append the new node.
    if (this.head == null) {
        this.head = new Node(val);
    } else {
        let temp = this.head;
        while (temp.next != null) {
            temp = temp.next;
        }
        let n = new Node(val);
        temp.next = n;
    }
};

/** 
 * Adds a new node with the given value at the specified index in the linked list.
 * If the index is greater than the length of the list, the node will not be added.
 * @param {number} index - The index at which to add the node.
 * @param {number} val - The value to be added to the list.
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    // If the list is empty and the index is not 0, do nothing.
    if (this.head == null && index != 0) return;
    // If the list is empty and the index is 0, add the new node as the head.
    if (this.head == null) {
        this.head = new Node(val);
        return;
    }
    // If index is 0, add the new node at the head.
    if (index == 0) {
        this.addAtHead(val);
        return;
    }
    let i = 0;
    let prev = null;
    let curr = this.head;
    // Traverse the list to find the node before the specified index.
    while (i < index && curr != null) {
        i++;
        prev = curr;
        curr = curr.next;
    }
    // If the index is out of range, do nothing.
    if (i != index) return;
    let n = new Node(val);
    prev.next = n;
    n.next = curr;
};

/** 
 * Deletes the node at the specified index in the linked list.
 * If the index is out of range, or the list is empty, do nothing.
 * @param {number} index - The index of the node to be deleted.
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    // If the list is empty, do nothing.
    if (this.head == null) return;
    // If index is 0, delete the head node.
    if (index == 0) {
        this.deleteAtHead();
        return;
    }
    let i = 0;
    let prev = null;
    let nodeToBeDel = this.head;
    // Traverse the list to find the node before the specified index.
    while (i < index && nodeToBeDel != null) {
        prev = nodeToBeDel;
        nodeToBeDel = nodeToBeDel.next;
        i++;
    }
    // If the index is out of range, do nothing.
    if (i != index) return;
    // If the node to be deleted is found, adjust pointers to remove it from the list.
    if (nodeToBeDel == null) return;
    let newNext = nodeToBeDel.next;
    prev.next = newNext;
    nodeToBeDel.next = null; // Disconnect the deleted node from the list.
};

/** 
 * Deletes the head node of the linked list.
 * @return {void}
 */
MyLinkedList.prototype.deleteAtHead = function() {
    // If the list is empty, do nothing.
    if (this.head == null) return;
    // Update the head pointer to the next node and disconnect the current head.
    let nextHead = this.head.next;
    let nodeToBeDelete = this.head;
    this.head = nextHead;
    nodeToBeDelete.next = null;
}

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
