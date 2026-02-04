/**
 * Calcula el n-ésimo número de Fibonacci.
 * @param {number} n - La posición en la secuencia de Fibonacci (>= 0).
 * @returns {number} El valor de Fibonacci en la posición n.
 */
function fibonacci(n) {
	if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
		throw new Error('El parámetro debe ser un entero no negativo');
	}
	if (n === 0) return 0;
	if (n === 1) return 1;
	let a = 0, b = 1;
	for (let i = 2; i <= n; i++) {
		const temp = a + b;
		a = b;
		b = temp;
	}
	return b;
}

module.exports = fibonacci;
