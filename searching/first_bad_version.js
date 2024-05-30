/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * This function takes an `isBadVersion` function as input and returns a function 
 * that finds the first bad version out of a given number of versions.
 *
 * @param {function} isBadVersion() - A function that determines if a version is bad.
 * @return {function} - A function that finds the first bad version given the total number of versions.
 */
var solution = function(isBadVersion) {
    /**
     * This inner function uses binary search to efficiently find the first bad version.
     *
     * @param {integer} n - The total number of versions.
     * @return {integer} - The version number of the first bad version.
     */
    return function(n) {
        let left = 1;  // Initialize the left pointer to the first version
        let right = n; // Initialize the right pointer to the last version
        while (left < right) { // Continue the search while the range is valid
            let mid = Math.floor(left + (right - left) / 2); // Find the middle point
            if (isBadVersion(mid)) { // If the middle version is bad
                right = mid; // Narrow the search to the left half (including mid)
            } else { // If the middle version is not bad
                left = mid + 1; // Narrow the search to the right half (excluding mid)
            }
        }
        return left; // When left meets right, it is the first bad version
    };
};
