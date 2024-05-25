// Define a function to solve Tower of Hanoi problem
function towerOfHanoi(n, source, auxiliary, destination) {
    let movesCount = 0; // Initialize movesCount to 0

    // Define a helper function to recursively move disks and update movesCount
    function moveDisks(count, from, to) {
        console.log(`Move disk ${count} from ${from} to ${to}`); // Print the move
        movesCount++; // Increment the movesCount
    }

    // Base case: If there is only one disk, move it from source to destination
    if (n === 1) {
        moveDisks(n, source, destination);
        return movesCount; // Return the total movesCount
    }

    // Move n-1 disks from source to auxiliary using destination as temporary storage
    movesCount += towerOfHanoi(n - 1, source, destination, auxiliary);

    // Move the largest disk from source to destination
    moveDisks(n, source, destination);

    // Move the n-1 disks from auxiliary to destination using source as temporary storage
    movesCount += towerOfHanoi(n - 1, auxiliary, source, destination);

    return movesCount; // Return the total movesCount
}

// Example usage:
const numberOfDisks = 3;
const source = 'A';
const auxiliary = 'B';
const destination = 'C';

console.log(`Steps to solve Tower of Hanoi problem with ${numberOfDisks} disks:`);
const totalMoves = towerOfHanoi(numberOfDisks, source, auxiliary, destination);
console.log(`Total moves required: ${totalMoves}`);
