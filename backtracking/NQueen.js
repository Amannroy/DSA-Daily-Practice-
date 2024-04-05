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


// Recurrence Relation

// Time Complexity
// Space Complexity