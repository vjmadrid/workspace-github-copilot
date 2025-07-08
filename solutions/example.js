function calculateSum(var1, var2) {
    // Enter your code here
    const sum = var1 + var2;
    return sum;
}

console.log('*** Ejemplos de calculateSum ***');
console.log(calculateSum(0, 0)); // Expected output: 0
console.log(calculateSum(0, 3)); // Expected output: 3
console.log(calculateSum(1, 2)); // Expected output: 3
console.log(calculateSum(10, 20)); // Expected output: 30
console.log(calculateSum(3, -3)); // Expected output: 0

// Una función que calcule la resta de dos números
function calculateDifference(a, b) {
    // Enter your code here
    return a - b;
}

console.log('*** Ejemplos de calculateDifference ***');
console.log(calculateDifference(5, 3)); // Expected output: 2
console.log(calculateDifference(10, 20)); // Expected output: -10
console.log(calculateDifference(0, 0)); // Expected output: 0

// Function name: calculateAverage
// Function arguments: numbers (array)
// Return type of the function: number
function calculateAverage(numbers) {
    // Enter your code here
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}