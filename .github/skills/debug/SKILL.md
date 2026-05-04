---
name: debug
description: 'Depuración sistemática de bugs y errores. Usa este skill cuando tengas un comportamiento inesperado, error en consola, test fallando o necesites reproducir y analizar un bug paso a paso.'
argument-hint: 'Proporciona: código problemático, comportamiento esperado, comportamiento actual y mensajes de error o traza.'
---

# Debug Skill

## Cuándo usar
- Error inesperado en tiempo de ejecución
- Test que falla sin motivo aparente
- Comportamiento diferente al esperado
- Necesidad de analizar una traza de error

## Procedimiento

1. **Reproducir el error**: Identificar pasos exactos para reproducirlo
2. **Analizar la traza**: Leer el stack trace de arriba hacia abajo
3. **Hipótesis**: Formular posibles causas raíz
4. **Inspeccionar**: Variables, estado, entradas y salidas en el punto del error
5. **Aplicar fix**: La solución más simple y segura
6. **Verificar**: Que el fix resuelve el problema sin introducir nuevos errores

## Herramientas recomendadas
- Terminal para ejecutar el código y capturar output
- Breakpoints y debugger del editor
- Logs estructurados para trazabilidad
- Tests de regresión tras el fix
