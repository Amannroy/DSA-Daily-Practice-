// Peak Element
function peakElement(nums){
    let left = 0; // Initialize left pointer
    let right = nums.length - 1; // Initialize right pointer
    while(left < right){ // Continue until left pointer is less than right pointer
        let mid  = Math.floor(left + (right - left) / 2); // Calculate mid pointer
        if(nums[mid] > nums[mid+1]){ // If current element is greater than next element
            right = mid; // Move right pointer to mid
        }else{
            left = mid+1; // Move left pointer to mid+1
        }
    }
    return left; // Return left pointer
}
console.log(peakElement([1,4,2,6,7,3,8])); // Output the index of peak element

// Time Complexity: O(log n) - where n is the number of elements in the input array
// Space Complexity: O(1) - constant space used
