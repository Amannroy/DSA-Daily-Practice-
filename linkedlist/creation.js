// How to create class Node

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
    // Initiaize the next property to null, indicatingthe end of the list
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
