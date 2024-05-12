// 1. Palindrome Linked List
//Input: head = [1,2,2,1]
//Output: true

// let isPalindrome = function(head) {
//     let string1=string2 = "";
//     let node = head;
//     while(node !== null){
//       string1 = `${string1}${node.val}`
//       string2 = `${node.val}${string2}`
//       node = node.next;
//     }
//     return string1 === string2
  
//   };

// 2. Reverse Linked list
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

// let reverseList = function(head) {
//     let prev = null;
//     let curr = head;
//     while(curr !== null){
//       let nextnode = curr.next;
//       curr.next = prev;
//       prev = curr;
//       curr = nextnode;
//     }
//     return prev;
//  };

// 3. Remove Nth Node From End of List 
// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]

// let removeNthFromEnd = function(head,n){
//     let slow = head;
//     let fast = head;
//     for(let i=0;i<n;i++){
//         fast = fast.next;
//     }
//     if(!fast){
//         return head.next;
//     }
//     while(fast.next){
//         fast = fast.next;
//         slow = slow.next;
//     }
//     slow.next = slow.next.next;
//     return head;
// }


// 4. Add two numbers
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// let addTwoNumbers = function(l1,l2){
//     let string1 = "", string2 = "";
//     let temp1 = l1;
//     while(temp1 !== null){
//         string1 = temp1.val.toString() + string1;
//         temp1 = temp1.next;
//     }
//     let temp2 = l2;
//     while(temp2 !== null){
//         string2 = temp2.val.toString() + string2;
//         temp2 = temp2.next;
//     }
//     let sum = (BigInt(string1) + BigInt(string2)).toString().split('').reverse().join('');

//     let dummyHead = new ListNode();
//     let current = dummyHead;

//     for(let digit of sum){
//         current.next = new ListNode(parseInt(digit));
//         current = current.next;
//     }
//     return dummyHead.next;
// }

/*

In the provided code:

Reversing l1 and l2:
Initially, l1 represents 243 and l2 represents 564.
We reverse l1 and l2 to get 342 and 465, respectively.
Calculating the sum:
We add the reversed numbers (342 + 465 = 807).
Reversing the sum:
We reverse the sum to get 708.
Creating the result linked list:
We iterate over the digits of the reversed sum (708).
For each digit, we create a new node in the result linked list.
Here's a bit more detail on creating the result linked list:

We start with a dummy head node.
For each digit in the reversed sum:
We create a new node with that digit.
We link this new node to the previous node.
If it's the first digit, it becomes the new head of the list.
If it's not the first digit, it gets linked as the next node of the previous one.
So, after iterating over all digits, the linked list looks like:


7 -> 0 -> 8
Where:

7 is the head node (most significant digit in the sum).
0 is the second node.
8 is the last node (least significant digit in the sum).
This linked list represents the sum of the reversed numbers 243 and 564, which is 708.
*/

// 5. Delete Node in a Linked List
// Input: head = [4,5,1,9], node = 5
// Output: [4,1,9]
// Explanation: You are given the second node with value 5, the linked list should become 4 -> 1 -> 9 after calling your function.

// let deleteNode = function(node){
//     node.val = node.next.val;
//     node.next = node.next.next;
// }


// 6. Linked List Cycle
// let hasCycle = function(head){
//     let slow = head;
//     let fast = head;

//     if(!head || !head.next) return false;

//     while(fast !== null || fast.next !== null){
//         slow = slow.next;
//         fast = fast.next.next;

//         if(slow === fast) return true;
//     }
//     return false;
// }


// 7. Merge two linked list
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// let mergeTwoLists = function(list1, list2){
//     let curr = new ListNode();
//     let dummy = curr;
//     while(list1 && list2){
//         if(list1.val < list2.val){
//             curr.next = list1;
//             list1 = list1.next;
//         }else{
//         curr.next = list2;
//             list2 = list2.next;
//     }
//     curr = curr.next;
// }
// if(list1){
//     curr.next = list1;
// }
// if(list2){
//     curr.next = list2;
// }
// return dummy.next;
// }

// 8. Intersection of two linked list
// Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
// Output: Intersected at '8'
// Explanation: The intersected node's value is 8 (note that this must not be 0 if the two lists intersect).
// From the head of A, it reads as [4,1,8,4,5]. From the head of B, it reads as [5,6,1,8,4,5]. There are 2 nodes before the intersected node in A; There are 3 nodes before the intersected node in B.
// - Note that the intersected node's value is not 1 because the nodes with value 1 in A and B (2nd node in A and 3rd node in B) are different node references. In other words, they point to two different locations in memory, while the nodes with value 8 in A and B (3rd node in A and 4th node in B) point to the same location in memory.


// let getIntersectionNode = function(headA, headB){
//     let currA = headA;
//     let currB = headB;
//     while(currA !== currB){
//         currA = currA ? currA.next : headB;
//         currB = currB ? currB.next : headA;
//     }
//     return currA;
// }