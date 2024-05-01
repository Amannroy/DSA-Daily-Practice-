// Define a function to solve Tower of Hanoi problem
function towerOfHanoi(n, source, auxiliary, destination) {
    // Base case: If there is only one disk, move it from source to destination
    if (n === 1) {
        console.log(`Move disk ${n} from ${source} to ${destination}`);
        return;
    }

    // Move n-1 disks from source to auxiliary using destination as temporary storage
    towerOfHanoi(n - 1, source, destination, auxiliary);

    // Move the largest disk from source to destination
    console.log(`Move disk ${n} from ${source} to ${destination}`);

    // Move the n-1 disks from auxiliary to destination using source as temporary storage
    towerOfHanoi(n - 1, auxiliary, source, destination);
}

// Example usage:
const numberOfDisks = 3;
const source = 'A';
const auxiliary = 'B';
const destination = 'C';

console.log(`Steps to solve Tower of Hanoi problem with ${numberOfDisks} disks:`);
towerOfHanoi(numberOfDisks, source, auxiliary, destination);
