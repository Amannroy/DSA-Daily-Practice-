// Function to implement Counting Sort
function countSort(inputArr) {
    // Find the maximum value in the input array
    // This is used to determine the size of the count array
    let M = Math.max(...inputArr);

    // Create a new array of size M+1, initialized with zeros
    // This array will be used to count the occurrence of each number in the input array
    let countArr = new Array(M + 1).fill(0);

    // Iterate over the input array to count the occurrence of each number
    for (let num of inputArr) {
        // Increment the count for the current number
        countArr[num] += 1;
    }

    // Calculate the prefix sum of the count array
    // This step transforms the count array into a cumulative count array
    // Each element at index i in the count array now represents the total count of numbers up to i
    for (let i = 1; i <= M; i++) {
        countArr[i] += countArr[i - 1];
    }

    // Create the output array
    // This array will hold the sorted numbers
    let outArr = new Array(inputArr.length).fill(0);

    // Iterate over the input array in reverse order
    // This is done to maintain stability in the sorting process
    for (let i = inputArr.length - 1; i >= 0; i--) {
        // Place each number in the input array into the output array based on its count
        // The position is determined by the value of countArr[inputArr[i]] - 1
        // This ensures that each number is placed in its correct sorted position
        outArr[countArr[inputArr[i]] - 1] = inputArr[i];
        // Decrement the count for the current number to ensure it's not counted again
        countArr[inputArr[i]] -= 1;
    }

    // Return the sorted array
    return outArr;
}

console.log(countSort([3, 5, 2, 8, 4, 9]));

// Time Complexity : The worst-case time complexity of Counting Sort is O(n+k). The algorithm iterates through the input array once to count the occurrences of each element and then iterates through the range of input values to place the elements in their correct positions in the sorted array.
// Space Complexity : The space complexity of Counting Sort is O(n+k). This is because the algorithm requires additional space for the count array (of size 'k') and the output array (of size 'n').