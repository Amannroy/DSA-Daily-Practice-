//1. Print only the positive elements in an array.

// const arr = [1, -2, 3, -4, 5, -6, 7, -8, 9, -10];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//         console.log(arr[i]);
//     }
// }
// Output-> 1 3 5 7 9

//2. Find the index of the first occurrence of a specific value in an array.
// function findIndex(arr,target){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i] === target){
//             return i;
//         }
//     }
//     return -1;
// }
// console.log(findIndex([1,2,43,54,6,76],6)); // Output-> 4


//3.Count the number of times a specific value appears in an array.

// const arr = [1,2,2,3,4,5,7,8,8,9];
// count=0;
// target=8;
// for(let i=0;i<arr.length;i++){
//     if(arr[i] === target){
//         count++;
//     }
// }
// console.log(count) // Output->2

// Important
// 2 sum
// function twoSum(nums,target){
//     for(let i=0;i<nums.length;i++){
//         for(let j=i+1;j<nums.length;j++){
//             if(nums[i] + nums[j] === target){
//                 return [i,j];
//             }
//         }
//     }
// }
// console.log(twoSum([2,7,11,15],9)); // Output->[0,1]

// Time Complexity->O(n^2), where n is the length of the nums array. This is because the function uses nested loops to iterate over each pair of elements in the array
// Space Complexity->O(1) because the function uses only a constant amount of extra space regardless of the size of the input array. 


// Using Hash Map
