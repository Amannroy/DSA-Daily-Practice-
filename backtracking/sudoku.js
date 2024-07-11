// Define the solveSudoku function that takes a 2D array (board) representing a Sudoku puzzle.
let solveSudoku = function(board) {
    // Define a helper function isValid that checks if placing a number at a given position is valid.
    function isValid(board, row, col, num) {
        // Check if the number already exists in the current row.
        for (let x = 0; x < 9; x++) {
            if (board[row][x] === num) {
                return false;
            }
        }
        // Check if the number already exists in the current column.
        for (let x = 0; x < 9; x++) {
            if (board[x][col] === num) {
                return false;
            }
        }
        // Check if the number already exists in the 3x3 sub-grid.
       
        let startRow = Math.floor(row / 3) * 3;
        // Calculate the starting column of the 3x3 sub-grid.
        let startCol = Math.floor(col / 3) * 3;
        // Iterate through each cell in the 3x3 sub-grid.
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                // Check if the number already exists in the current 3x3 sub-grid.
                if (board[startRow + i][startCol + j] === num) {
                    // If the number is found in the 3x3 sub-grid, return false.
                    return false;
                }
            }
        }
        // If the number is not found in the row, column, and sub-grid, it is valid.
        return true;
    }

    // Define a recursive function solve that solves the Sudoku puzzle using backtracking.
    function solve(board) {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                // If the cell is empty, try placing numbers 1 to 9.
                if (board[row][col] === '.') {
                    for (let num = 1; num <= 9; num++) {
                        // Convert the number to a string as the board contains strings.
                        let char = num.toString();
                        // If placing the number is valid, place it.
                        if (isValid(board, row, col, char)) {
                            board[row][col] = char;
                            // Recursively call solve to place numbers in the next cells.
                            if (solve(board)) {
                                return true;
                            }
                            // Backtrack by removing the number if it doesn't lead to a solution.
                            board[row][col] = '.';
                        }
                    }
                    // If no number from 1 to 9 can be placed, return false.
                    return false;
                }
            }
        }
        // If all cells are filled correctly, return true.
        return true;
    }

    // Call the solve function to solve the Sudoku puzzle.
    solve(board);
    // Return the solved board.
    return board;
}

// Example Sudoku puzzle (0s represent empty cells).
let board = [
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
];

// Call the solveSudoku function and log the solved board.
console.log(solveSudoku(board));
