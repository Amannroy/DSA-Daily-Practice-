// Define the solveNQueens function that takes an integer n as input, representing the size of the chessboard.
let solveNQueens = function(n) {
    // Initialize a 2D array (board) of size n x n, filled with '.' representing empty cells.
    const board = new Array(n).fill(null).map(() => new Array(n).fill('.'));
    // Initialize an empty array (result) to store the solutions.
    const result = [];
   
    // Define a helper function couldPlace that checks if a queen can be placed at a given position (row, col) without being attacked by any other queen.
    function couldPlace(row, col) {
       // Loop through each row to check if there's a queen in the same column.
       for (let i = 0; i < n; i++) {
         // If a queen is found in the same column, return false.
         if (board[i][col] === 'Q') {
           return false;
         }
       }
       // Loop through the upper diagonal to check if there's a queen in the same diagonal.
       for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
         // If a queen is found in the same diagonal, return false.
         if (board[i][j] === 'Q') {
           return false;
         }
       }
       // Loop through the lower diagonal to check if there's a queen in the same diagonal.
       for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
         // If a queen is found in the same diagonal, return false.
         if (board[i][j] === 'Q') {
           return false;
         }
       }
       // If no queen is found in the same row, column, or diagonal, return true.
       return true;
    }
   
    // Define a recursive function backtrack that places queens on the board using backtracking.
    function backtrack(row = 0) {
       // Base case: If all queens are placed, add the current board configuration to the result array.
       if (row === n) {
         // Convert the board to a string representation and add it to the result array.
         const temp = board.map((x) => x.join(''));
         result.push(temp);
         return;
       }
       // For each column in the current row, try placing a queen.
       for (let col = 0; col < n; col++) {
         // If a queen can be placed at the current position, place it.
         if (couldPlace(row, col)) {
           board[row][col] = 'Q';
           // Recursively call backtrack to place queens in the next row.
           backtrack(row + 1);
           // Backtrack by removing the queen from the current position.
           board[row][col] = '.';
         }
       }
    }
   
    // Start the backtracking process from the first row.
    backtrack();
    // Return the result array containing all valid board configurations.
    return result;
}
   
// Call the solveNQueens function with n = 4 and log the result to the console.
console.log(solveNQueens(4));


// Recurrence Relation->T(n) = n * T(n-1) + O(n^2)
// This recurrence relation represents the time complexity of the function. The function makes n recursive calls to itself with n-1 elements, and then performs a constant amount of work (checking if a queen can be placed and updating the board) for each of the n elements.
// T(n) = n * T(n-1) + O(n^2)
// T(n-1) = (n-1) * T(n-2) + O((n-1)^2)
// T(n-2) = (n-2) * T(n-3) + O((n-2)^2)
// ...
// T(2) = 2 * T(1) + O(2^2)
// T(1) = 1 * T(0) + O(1^2)
// T(0) = 0
// Adding these up, we get:

// T(n) = n * (n-1) * (n-2) * ... * 1 + O(n^2) + O((n-1)^2) + O((n-2)^2) + ... + O(1^2)
// T(n) = n! + O(n^2)
// Time Complexity -> Time complexity is O(n!), where n is the number of elements in the array. This is because the function generates all possible permutations of the array, which is a factorial operation.
// Space Complexity -> The space complexity of the solveNQueens function is O(n), where n is the number of elements in the array. This is because the function uses a stack frame for each recursive call, and in the worst case, the depth of the recursion is equal to the number of elements in the array.





// Simplified Explanation:
// Define Function to Solve N-Queens:

// We have a function called solveNQueens that helps us solve the N-Queens problem.
// Initialize the Chessboard and Result Array:

// We create a chessboard with empty cells represented by . and store it in a variable called board.
// We also create an empty array called result to store our solutions.
// Check If a Queen Can Be Placed:

// We have a helper function called couldPlace that checks if we can safely place a queen at a given position on the board.
// It checks if there are no other queens in the same column or diagonals.
// Backtracking to Find Solutions:

// We have a function called backtrack that tries to place queens on the board using backtracking.
// It starts from the first row and tries placing queens in each column, checking if it's safe to do so.
// If placing a queen in a particular position leads to a conflict, it backtracks and tries the next column.
// Base Case:

// If we've successfully placed all queens (reached the end of the board), we add the current board configuration to our list of solutions.
// Start the Backtracking Process:

// We start the backtracking process by calling the backtrack function initially with the first row.
// Return the Result:

// Once the backtracking process is complete, we return the result array containing all valid board configurations.
// Example with N = 4:

// For example, if we want to solve the N-Queens problem for a 4x4 board, the function will find and return all possible ways to place 4 queens on the board without attacking each other.
// Simplified Summary:
// We have a function to solve the N-Queens problem.
// It creates a chessboard and tries to place queens on it.
// It uses backtracking to explore all possible configurations.
// Once it finds all solutions, it returns them.
// This code essentially helps us find all the different arrangements of queens on a chessboard such that no two queens can attack each other.