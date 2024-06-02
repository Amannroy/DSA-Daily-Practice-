let searchRange = function(nums, target) {
    // Function to find the leftmost (starting) index of the target
    const findLeftIndex = (nums, target) => {
        let left = 0;
        let right = nums.length - 1;
        let leftIndex = -1;
        
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            
            if (nums[mid] === target) {
                leftIndex = mid; // update leftIndex when target is found
                right = mid - 1; // continue searching on the left side
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        return leftIndex;
    };
    
    // Function to find the rightmost (ending) index of the target
    const findRightIndex = (nums, target) => {
        let left = 0;
        let right = nums.length - 1;
        let rightIndex = -1;
        
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            
            if (nums[mid] === target) {
                rightIndex = mid; // update rightIndex when target is found
                left = mid + 1; // continue searching on the right side
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        return rightIndex;
    };
    
    // Find the left and right indices using binary search
    const leftIndex = findLeftIndex(nums, target);
    const rightIndex = findRightIndex(nums, target);
    
    return [leftIndex, rightIndex];
};

// Test cases
console.log(searchRange([5,7,7,8,8,10], 8)); // Output: [3,4]
console.log(searchRange([5,7,7,8,8,10], 6)); // Output: [-1,-1]
console.log(searchRange([], 0)); // Output: [-1,-1]
