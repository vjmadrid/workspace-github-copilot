/**
 * Calcula la serie de Fibonacci hasta el n-ésimo término.
 * @param {number} n - Número de términos a generar (entero positivo).
 * @returns {number[]} - Array con los términos de la serie de Fibonacci.
 * @throws {Error} - Si n no es un entero positivo.
 *
 * Ejemplo:
 *   fibonacci(5); // [0, 1, 1, 2, 3]
 */
function fibonacci(n) {
  if (!Number.isInteger(n) || n <= 0) {
    throw new Error("El parámetro 'n' debe ser un entero positivo.");
  }
  const serie = [0, 1];
  for (let i = 2; i < n; i++) {
    serie.push(serie[i - 1] + serie[i - 2]);
  }
  return serie.slice(0, n);
}

// Ejemplo de uso
try {
  const n = 10;
  console.log(`Serie de Fibonacci (${n} términos):`, fibonacci(n));
} catch (error) {
  console.error("Error:", error.message);
}