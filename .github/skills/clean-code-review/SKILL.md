---
name: clean-code-review
description: 'Revisión y refactorización de código aplicando principios Clean Code y SOLID. Usa este skill cuando necesites mejorar la legibilidad, reducir la complejidad ciclomática, eliminar code smells o aplicar principios SOLID.'
argument-hint: 'Proporciona el código a revisar y el objetivo (legibilidad, complejidad, SOLID, etc.)'
---

# Clean Code Review Skill

## Cuándo usar
- Revisar código en busca de code smells
- Refactorizar funciones largas o clases con múltiples responsabilidades
- Aplicar principios SOLID (SRP, OCP, LSP, ISP, DIP)
- Eliminar duplicidad (DRY) o complejidad innecesaria (KISS, YAGNI)

## Procedimiento

1. **Analizar el código**: Identificar code smells, violaciones SOLID y complejidad
2. **Categorizar problemas**: Nombrado, funciones largas, acoplamiento, duplicación
3. **Proponer refactorización**: Con explicación del principio aplicado
4. **Aplicar cambios**: De forma incremental y segura
5. **Verificar**: Que la lógica se mantiene intacta tras la refactorización

## Checklist
- [ ] Nombres descriptivos para variables, funciones y clases
- [ ] Funciones con una sola responsabilidad (SRP)
- [ ] Sin duplicación de lógica (DRY)
- [ ] Sin anidamiento profundo (max 2-3 niveles)
- [ ] Sin efectos secundarios inesperados
- [ ] Código abierto a extensión, cerrado a modificación (OCP)
