# Buenas practicas para testing


## Configurar la petición

Se debería de proporcionar la siguiente información a GitHub Copilot Chat para generar los test:

* El archivo o componente objetivo a probar
* El framework de pruebas preferido
* Cualquier patrón o convención de pruebas específica
* Requisitos de cobertura
* Consideraciones especiales de pruebas

Se debería de estructurar la solicitud de la siguiente manera:

* Comenzar con el alcance ("Genera pruebas unitarias para...")
* Especificar el framework ("usando xUnit/Jest/NUnit/JUnit/pyTest...")
* Mencionar cualquier patrón ("siguiendo el patrón AAA...")
* Incluir casos especiales ("asegúrate de cubrir casos límite...")

Ejemplo de prompt:

```bash
Genera pruebas unitarias para UserService.py usando pyTest. Incluye pruebas para todos los métodos públicos y sigue nuestro patrón existente de Arrange-Act-Assert.
```

Ejemplo de prompt con más detalle:

```bash
Generate unit tests for the UserService class with mocked dependencies. Include happy path and error scenarios, and ensure we're testing all payment methods.

Use the xUnit framework and follow our existing test structure.
```

## Flujo de trabajo recomendado

* Paso 1: Refinamiento Iterativo
  * Empezar una covertura de tests básica
  * Solicitar casos adicionales
  * Pedir casos límite específicos
  * Ajustar las aserciones

* Paso 2: Análisis de Cobertura
  * Pedir a Copilot que analice las brechas de cobertura
  * Solicitar pruebas para escenarios no cubiertos
  * * Verificar rutas críticas

* Paso 3: Mantenimiento de Pruebas


## Tecnicas avanzadas

* Generating Test Suites: Solicitar a GitHub Copilot Chat que genere un conjunto completo de pruebas para un módulo o componente específico, cubriendo diferentes casos de uso y escenarios.
* Testing Edge Cases: Solicitar a GitHub Copilot Chat que genere pruebas para casos límite o escenarios poco comunes, asegurando que el código maneje adecuadamente situaciones inesperadas.
* Mocking Dependencies: Pedir a GitHub Copilot Chat que genere pruebas unitarias que utilicen mocks para simular dependencias externas, permitiendo pruebas más aisladas y controladas.
* Data-Driven Testing: Solicitar a GitHub Copilot Chat que genere pruebas basadas en datos, donde se proporcionen diferentes conjuntos de datos para validar el comportamiento del código bajo diversas condiciones.
* Configurar test de integración: Pedir a GitHub Copilot Chat que genere pruebas de integración que verifiquen la interacción entre diferentes componentes o servicios, asegurando que funcionen correctamente en conjunto.
* Behavior-Driven Development (BDD): Solicitar a GitHub Copilot Chat que genere pruebas siguiendo el enfoque de BDD, utilizando un lenguaje natural para describir el comportamiento esperado del sistema y las pruebas correspondientes.

## Tructos de Troubleshooting

Si los tests generados son demasiado básicos

* Solicitar casos de prueba más específicos
* Pedir cobertura de casos límite
* Especificar criterios de validación

Si los tests carecen de contexto

* Proporcionar más información sobre el proyecto
* Referenciar patrones de prueba existentes
* Especificar dependencias y requisitos de mocking

Si los tests necesitan refinamiento

* Solicitar mejoras específicas
* Pedir mejoras específicas
* Solicitar aserciones adicionales
* Especificar escenarios de error

## Checklist

✅ Comenzar con objetivos de prueba claros
✅ Especificar el framework y los patrones de prueba
✅ Incluir casos de prueba positivos y negativos
✅ Solicitar la generación de mocks para dependencias
✅ Verificar casos límite y manejo de errores
✅ Mantener la consistencia con las pruebas existentes
✅ Include cleanup and tear-down logic
✅ Document test assumptions and requirements
