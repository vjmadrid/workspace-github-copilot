/**
 * Implementaciones de la secuencia de Fibonacci
 * Diferentes enfoques: recursivo, iterativo, memoización y generador
 */

/**
 * Implementación recursiva básica de Fibonacci
 * Nota: Ineficiente para números grandes debido a la recalculación repetida
 * @param {number} n - Posición en la secuencia de Fibonacci
 * @returns {number} El número de Fibonacci en la posición n
 */
function fibonacciRecursive(n) {
    if (n < 0) {
        throw new Error('El número debe ser no negativo');
    }
    
    if (n <= 1) {
        return n;
    }
    
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

/**
 * Implementación iterativa de Fibonacci (más eficiente)
 * Complejidad temporal: O(n), Complejidad espacial: O(1)
 * @param {number} n - Posición en la secuencia de Fibonacci
 * @returns {number} El número de Fibonacci en la posición n
 */
function fibonacciIterative(n) {
    if (n < 0) {
        throw new Error('El número debe ser no negativo');
    }
    
    if (n <= 1) {
        return n;
    }
    
    let a = 0;
    let b = 1;
    
    for (let i = 2; i <= n; i++) {
        const temp = a + b;
        a = b;
        b = temp;
    }
    
    return b;
}

/**
 * Implementación con memoización para optimizar la recursión
 * Complejidad temporal: O(n), Complejidad espacial: O(n)
 * @param {number} n - Posición en la secuencia de Fibonacci
 * @param {Map} memo - Cache para almacenar resultados calculados
 * @returns {number} El número de Fibonacci en la posición n
 */
function fibonacciMemoized(n, memo = new Map()) {
    if (n < 0) {
        throw new Error('El número debe ser no negativo');
    }
    
    if (n <= 1) {
        return n;
    }
    
    if (memo.has(n)) {
        return memo.get(n);
    }
    
    const result = fibonacciMemoized(n - 1, memo) + fibonacciMemoized(n - 2, memo);
    memo.set(n, result);
    
    return result;
}

/**
 * Generador de secuencia de Fibonacci
 * Permite generar la secuencia de forma lazy
 * @param {number} limit - Límite máximo de términos a generar
 * @yields {number} Siguiente número en la secuencia de Fibonacci
 */
function* fibonacciGenerator(limit = Infinity) {
    let a = 0;
    let b = 1;
    let count = 0;
    
    while (count < limit) {
        yield a;
        [a, b] = [b, a + b];
        count++;
    }
}

/**
 * Genera un array con los primeros n números de Fibonacci
 * @param {number} n - Cantidad de números a generar
 * @returns {number[]} Array con la secuencia de Fibonacci
 */
function fibonacciSequence(n) {
    if (n < 0) {
        throw new Error('El número debe ser no negativo');
    }
    
    if (n === 0) return [];
    if (n === 1) return [0];
    
    const sequence = [0, 1];
    
    for (let i = 2; i < n; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    
    return sequence;
}

// Ejemplos de uso
if (require.main === module) {
    console.log('=== Ejemplos de uso de Fibonacci ===\n');
    
    const n = 10;
    
    console.log(`Fibonacci(${n}) - Recursivo:`, fibonacciRecursive(n));
    console.log(`Fibonacci(${n}) - Iterativo:`, fibonacciIterative(n));
    console.log(`Fibonacci(${n}) - Memoizado:`, fibonacciMemoized(n));
    
    console.log('\nPrimeros 15 números de Fibonacci:');
    console.log(fibonacciSequence(15));
    
    console.log('\nUsando generador (primeros 10):');
    const fibGen = fibonacciGenerator(10);
    const generatedSequence = [...fibGen];
    console.log(generatedSequence);
    
    // Comparación de rendimiento
    console.log('\n=== Comparación de rendimiento ===');
    const testN = 35;
    
    console.time('Recursivo');
    fibonacciRecursive(testN);
    console.timeEnd('Recursivo');
    
    console.time('Iterativo');
    fibonacciIterative(testN);
    console.timeEnd('Iterativo');
    
    console.time('Memoizado');
    fibonacciMemoized(testN);
    console.timeEnd('Memoizado');
}

module.exports = {
    fibonacciRecursive,
    fibonacciIterative,
    fibonacciMemoized,
    fibonacciGenerator,
    fibonacciSequence
};