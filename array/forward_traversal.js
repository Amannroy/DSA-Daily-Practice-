//1.Print all elements of an array in their original order.
// const arr = [1,2,3,4,5];
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i])
// }
//Output-> 1
// 2
// 3
// 4
// 5
 

//2.Find the sum of all elements in an array.
// const arr = [1,2,3,4,5];
// let sum = 0;
// for(let i=0; i<arr.length;i++){
//     sum += arr[i]
// }
// console.log(sum)// 15


//3.Print the elements of an array in reverse order (without using built-in reverse functions).
// const arr = [1,2,3,4,5]
// for(let i=arr.length-1; i>=0; i--){
//     console.log(arr[i])
// }
//Output
// 5
// 4
// 3
// 2
// 1


// Important
// Maximum Subarray(Kadane's Algorithm)
//[-2,1,-3,4,-1,2,1,-5,4]

function subArray(nums) {
    let sum = 0; // Variable to store the sum of the current subarray
    let max = nums[0]; // Variable to store the maximum sum encountered so far
    
    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]; // Update sum by adding the current element
        
        // Update max if the current sum is greater
        if (sum > max) {
            max = sum;
        }
        
        // Reset sum to 0 if it becomes negative
        if (sum < 0) {
            sum = 0;
        }
    }
    
    // Return the maximum sum found
    return max;
}

// Test cases
console.log(subArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Output: 6
console.log(subArray([5, 4, -1, 7, 8])); // Output: 23

// Time Complexity: O(n), where n is the length of the input array nums. 
//                  The function iterates through the array once.
// Space Complexity: O(1). The function uses a constant amount of extra space.