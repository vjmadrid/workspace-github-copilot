# GitHub Copilot Prompt Examples

Estos ejemplos de prompt pueden ayudarle a obtener mejores resultados de GitHub Copilot al estructurar sus solicitudes de manera efectiva.

## Prompts de Codificación

### Generación de Funciones

```bash
/**
 * Crea una función que valide una contraseña con los siguientes requisitos:
 * - Al menos 8 caracteres
 * - Al menos una letra mayúscula
 * - Al menos una letra minúscula
 * - Al menos un número
 * - Al menos un carácter especial
 * - Sin espacios
 * @param {string} password - El password a validar
 * @returns {boolean} - Si el password es válido
 */
```

### Petición de Explicación de Código

```
// Explica qué hace este código:
const memoize = (fn) => {
  const cache = {};
  return (...args) => {
    const key = JSON.stringify(args);
    if (key in cache) {
      return cache[key];
    }
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
};
```

### Generación de Pruebas

```
// Genera pruebas unitarias para esta función:
function calculateTotalPrice(items, taxRate) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * taxRate;
  return subtotal + tax;
}
```

### Petición de Corrección de Errores

```bash
// This function has a bug. It should return the nth Fibonacci number:
function fibonacci(n) {
  if (n <= 0) return 0;
  if (n == 1) return 1;
  return fibonacci(n) + fibonacci(n - 1);
}
// Fix the bug and explain what was wrong.
```

## Plantillas de un lenguaje específico

### Node.js Example

```bash
/**
 * Crea un endpoint REST API de Express.js que:
 * - Acepte solicitudes POST a /api/users
 * - Valide que el cuerpo de la solicitud tenga campos de correo electrónico y contraseña
 * - Devuelva un error 400 si la validación falla
 * - Cree un nuevo usuario en la base de datos si la validación tiene éxito
 * - Devuelva el usuario creado con un código de estado 201
 */
```

### Python Example

```bash
# Crear una función en Python que:
# 1. Lee un archivo CSV
# 2. Filtra filas basadas en un valor de columna especificado
# 3. Agrupa los datos por otra columna
# 4. Calcula la suma y el promedio para una columna numérica dentro de cada grupo
# 5. Devuelve los resultados como un diccionario
```

### Ejemplo SQL

```bash
-- Crea una consulta SQL que:
-- 1. Muestra las ventas totales por categoría de producto
-- 2. Para los últimos 30 días
-- 3. Solo para clientes con más de 5 compras
-- 4. Ordenado por ventas totales de forma descendente
```

## Trucos Adicionales

1. Usa comentarios detallados para describir exactamente lo que quieres
2. Incluye requisitos o restricciones específicas
3. Proporciona contexto describiendo el problema que estás resolviendo
4. Incluye ejemplos de entrada/salida esperada cuando sea apropiado
5. Divide solicitudes complejas en prompts más pequeños y enfocados