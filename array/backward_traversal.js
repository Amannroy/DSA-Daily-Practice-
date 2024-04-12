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

