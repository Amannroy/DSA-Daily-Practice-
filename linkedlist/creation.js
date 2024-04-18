//1. How to create class Node

// In this ES6 version, the Node class is defined with a constructor that initializes data and next. The setNext and getNext methods are defined directly within the class body, making the code more readable and concise.

/*
Constructor: The constructor function is a special method for creating and initializing an object created with a class. It takes one parameter, data, which represents the data stored in the node. The constructor initializes the data property with the passed value and sets the next property to null, indicating that this node does not link to any other node yet.
setNext Method: This method allows you to set the next node in the list. It takes one parameter, node, which is the node to be linked to the current node. The method assigns the passed node to the next property of the current node.
getNext Method: This method returns the next node in the list. It does not take any parameters and simply returns the value of the next property of the current node.*/

// Defining a class named Node
class Node{
    // Constructor function that initializes a new Node object
    constructor(data){
        // Assigning the passed data to the data property of the Node object
    this.data = data;
    // Initialize the next property to null, indicatingthe end of the list
    this.next = null;
}

// Method to set the next node in the list
setNext(node){
    // Assigning the passed node to the next property of th current Node object
    this.next = node;
}

// Method to get the next node in the list
getNext(){
    //Returning the next node of the current Node object
    return this.next;
}
}


//2. Linked List class that will manage the nodes. This class will have methods to add nodes, remove nodes, and display the list

// Defining the linkedlist class
class LinkedList{
    // Constructor function to initialize a new linkedlist object
    constructor(){
        // Initializing the head to the list to null, indicating an empty list
        this.head = null;
        // Initializing the size of the list to 0
        this.size = 0;
    }
    // Method to add an element at the end of the list
    add(element){
        // Create a new Node with the given element
           let node = new Node(element);
           // Declaring a variable to hold the current node during traversal
           let current;
           // Checking if the list is empty(head is null)
           if(this.head === null){
            // If empty, set the head to the new node
            this.head = node;
           }else{
            // If not empty, traverse to the end of the list
            current = this.head;
            while(current.next){
                current = current.next;
            }
            // Linking the last node to the new node
            current.next = node;
           }
           // Incrementing the size of the list
           this.size++;
    }

    //Method to insert an element at a specific position
    insertAt(element,index){
        // Checking if the index is valid
        if(index < 0 || index > this.size){
            // If not, log an error message
            return console.log("Please enter a valid index,");
        }
        // Creating a new Node with the given element
        let node = new Node(element);
        // Declaring variables to hold the current and previous nodes during traversal
        let curr, prev;
        // Starting the traversal from the head
        curr = this.head;
        // Checking if inserting at the beginning of the list
        if(index === 0){
            // If so, setting the new node's next to the current head(This ensures new node points to the current head)
            node.next = this.head;
            // Updating the head to the new node(This makes the new node the new head of the list)
            this.head = node;
        }else{
            // If not, traverse to the desired position
            let it = 0;// Initializing an iterator to keep track of the current position
            while(it < index){
                // Continuing traversing until reaching the desired index
                it++; // Incrementing the iterator to move closer to the desired index
                prev = curr; // Updating the previous node reference to the current node before moving to the next node
                curr = curr.next; // Moving to the next node in the linked list
            }
            // Linking the new node to the new node
            node.next = curr; // Linking the new node to the current node by setting the next pointer t the current node's next

            // Linking the previous node to the new node
            prev.next = node; // updating the next pointer of the previous node to point to the new node, effectively inserting the new node into the linked list
        }



    }



    removeFrom(index){


    }
}




