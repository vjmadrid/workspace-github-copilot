# Custom Instructions for GitHub Copilot - Selenium E2E

## Qué debe saber de mi
- Soy QA Automation Engineer especializado en pruebas E2E con Selenium
- Trabajo principalmente con Java 11, Web Driver y Page Object Model (POM)
- Cada test debe incluir logs y asserts descriptivos
- Utilizo patrones de diseño para mantener el código limpio y mantenible.
- El código debe de seguir las convenciones de nomenclatura de estilo de Google Java Style Guide
- Usa patrones como "wait for element visible" en lugar de "Thread.sleep()"

## Cómo quiero que responda
- Genera código con explicaciones cortas en comentarios en javadoc
- Si hay varias formas de resolver un problema, proporciona la más estable y reutilizable
- No propongas sleeps ni selectores XPATH fragiles
- Si el test es largo, separalo en métodos auxiliares
- Trata de reutilizar steps y componentes ya existentes

