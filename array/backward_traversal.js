//1.Print the elements of an array in reverse order (using a backward loop)
// const arr = [1,2,3,4,5,8,2,4,7,90,44];
// let max = arr[arr.length-1];
// for(let i=arr.length-2; i>=0; i--){
//     if(arr[i] > max){
//         max = arr[i];
//     }
// }
// console.log(max) //Output->90

// 2.i. Find the highest (or maximum) element in an array from the back.

// const arr = [44,3,24,56,67,78,64];
// let max = arr[arr.length-1];
// for(let i=arr.length-2;i>=0;i--){
//     if(arr[i] > max){
//         max = arr[i]
//     }
// }
// console.log(max) //Output-> 78

// 2.ii. From front finding maximum
// const arr = [34,56,67,56,41];
// let max = arr[0];
// for(let i=1;i<arr.length;i++){
//     if(arr[i]> max){
//         max = arr[i]
//     }
// }
// console.log(max) //Output-> 67


//3.i.Count the number of even numbers in an array, iterating backward.
// const arr = [1,2,3,4,5,6,7,8];
// let count = 0;
// for(let i=arr.length-1;i>=0;i--){
//     if(arr[i] % 2 === 0){
//         count++;
//     }
// }
// console.log(count) // Output-> 4

// ii.Using filter method
// const arr = [1,2,3,4,5,6,7,8,9,10];
// const evenNumbers = arr.filter(num => num % 2 === 0);
// console.log(evenNumbers) // Output-> [ 2, 4, 6, 8, 10 ]

// iii.Using for loop to get all even numbers in an array
// const arr = [1,2,3,4,5,6,7,8,9,10];
// let result = [];
// for(let i=0; i<arr.length;i++){
//     if(arr[i] % 2 === 0){
//         result.push(arr[i]);
//     }
// }
// console.log(result) //Output->[ 2, 4, 6, 8, 10 ]


// Important
// Remove Duplicates from Sorted Array
// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]

// function removeDuplicate(nums){
//     if(nums.length === 0){
//         return 0;
//     }
//     let uniqueElements = 0;
//     for(let i=0;i<nums.length;i++){
//         if(nums[i] !== nums[uniqueElements]){
//             uniqueElements++;
//             nums[uniqueElements] = nums[i];
//         }
//     }
//     return uniqueElements+1;
// }
// console.log(removeDuplicate([1,1,2])) // Output->2

// Time Complexity-> The time complexity of the removeDuplicate function is O(n), where n is the length of the input array nums. This is because the function iterates through the array once with a single loop.

// Space Complexity-> The space complexity is O(1), as the function operates in-place without using any extra space that scales with the size of the input array. The only additional space used is for a constant number of variables (uniqueElements, i), regardless of the size of the input array. Therefore, the space complexity is constant.