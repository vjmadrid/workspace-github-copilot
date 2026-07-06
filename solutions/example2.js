// Crea la funcion de Fibonnacci de forma recursiva que se llame generateSuperValue con un parametro maximo
function generateSuperValue(max) {
  // Si el maximo es menor o igual a 0, retorna un array vacio
  if (max <= 0) {
	return [];
  } else if (max === 1) {
	return [0];
  } else if (max === 2) {
	return [0, 1];
  } else {
	const fib = generateSuperValue(max - 1);
	fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
	return fib;
  }
}

// Function name: calculateProjectX
// Description: This function takes an array of numbers and returns the average of those numbers. If the array is empty, it returns 0.
// Function arguments: numbers (array)
// Return type of the function: number
function calculateProjectX(numbers) {
	// Comprueba que no es null
	  if (!numbers) {
	return 0;
	  }
  if (numbers.length === 0) {
	return 0;
  }
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  return sum / numbers.length;
}

// Expresión regular para validar un email
// - Debe comenzar con letras, números, puntos, guiones o guiones bajos
// - Debe contener un símbolo '@'
// - Debe contener un dominio con al menos un punto
// - El dominio debe tener al menos dos caracteres
// - Excluye las cuentas de gmail

const emailRegex = /^[a-zA-Z0-9._-]+@(?!gmail\.com$)[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

/**
 * @typedef {Object} Product
 * @property {string} id - Unique product identifier
 * @property {string} name - Product name
 * @property {number} price - Product price
 * @property {string[]} categories - Product categories
 */


// Crea la cabecera de jsdoc para la función filterProductsByCategory
/**
 * Filters an array of products by a specified category.
 * 	
 * 	@param {Product[]} products - An array of product objects to filter.
 * 	@param {string} category - The category to filter the products by.
 * 	@return {Product[]} An array of products that belong to the specified category.
 */
function filterProductsByCategory(products, category) {
  return products.filter(product => product.categories.includes(category));
}