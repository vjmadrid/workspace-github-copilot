

// Genera JSDocpara la función fibonacci

/**
 * Generates the Fibonacci sequence up to the n-th term
 * @param {number} n - The number of terms to generate (must be a non-negative integer not greater than 100)
 * @returns {string} A string representation of the Fibonacci sequence up to n terms, separated by commas
 * @throws {Error} If n is negative, zero or greater than 100
 */
function fibonacci(n) {
    // Valida que la entrada no sea nula o negativa
    if (n == null || n < 0) {
        throw new Error("Input must be a non-negative integer.");
    }
    // Valida que la entrada no sea mayor de 100
    if (n > 100) {
        throw new Error("Input must not be greater than 100.");
    }
    const sequence = [];
    for (let i = 0; i < n; i++) {
        if (i === 0) {
            sequence.push(0);
        } else if (i === 1) {
            sequence.push(1);
        } else {
            sequence.push(sequence[i - 1] + sequence[i - 2]);
        }
    }
    // Genera la salida como una cadena de texto separada por comas
    return sequence.join(", ");
}

// Ejemplo de uso:
console.log(fibonacci(10)); // "0, 1, 1, 2, 3, 5, 8, 13, 21, 34"


/**
 * @typedef {Object} Product
 * @property {string} id - Unique product identifier
 * @property {string} name - Product name
 * @property {number} price - Product price
 * @property {string[]} categories - Product categories
 */

/**
 * Filters products by a specific category
 * @param {Product[]} products - Array of product objects
 * @param {string} category - Category to filter by
 * @returns {Product[]} Filtered product array
 */
function filterProductsByCategory(products, category) {
    if (!Array.isArray(products)) {
        throw new Error("Invalid input: products must be an array.");
    }
    if (typeof category !== "string") {
        throw new Error("Invalid input: category must be a string.");
    }
    return products.filter(product => product.categories.includes(category));
}
