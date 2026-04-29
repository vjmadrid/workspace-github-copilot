---
name: test-writing
description: 'Generación de pruebas unitarias e integrales de alta calidad. Usa este skill cuando necesites crear tests para un módulo, función o clase, aumentar la cobertura o cubrir casos límite y edge cases.'
argument-hint: 'Proporciona el código a probar y el framework preferido (Jest, JUnit, PyTest, etc.)'
---

# Test Writing Skill

## Cuándo usar
- Crear pruebas para una función, clase o módulo
- Aumentar la cobertura de tests
- Cubrir edge cases y casos de error
- Generar tests de regresión tras un bug fix

## Procedimiento

1. **Analizar el código**: Entender la función, sus entradas, salidas y efectos secundarios
2. **Identificar casos**: Happy path, edge cases, errores esperados
3. **Estructura**: Usar Arrange / Act / Assert
4. **Nombrar tests**: Descriptivos, que documenten la intención
5. **Generar código**: Tests idiomáticos para el framework elegido
6. **Verificar**: Que los tests pasan y la cobertura mejora

## Checklist
- [ ] Happy path cubierto
- [ ] Casos límite (null, vacío, máximo/mínimo)
- [ ] Errores y excepciones
- [ ] Sin lógica duplicada del código bajo prueba
- [ ] Nombres de test descriptivos
- [ ] Tests independientes entre sí

## Frameworks soportados
- JavaScript/TypeScript: Jest, Vitest, Mocha
- Python: PyTest, unittest
- Java: JUnit 5, Mockito
