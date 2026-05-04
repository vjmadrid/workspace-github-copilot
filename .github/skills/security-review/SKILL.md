---
name: security-review
description: 'Revisión de código desde la perspectiva de seguridad OWASP. Usa este skill cuando necesites auditar código en busca de vulnerabilidades, configuraciones inseguras, exposición de secretos o fallos de autenticación.'
argument-hint: 'Proporciona el código o módulo a revisar y el contexto (web, API, script, etc.)'
---

# Security Review Skill

## Cuándo usar
- Auditar código antes de un despliegue o PR
- Detectar vulnerabilidades OWASP Top 10
- Revisar manejo de secretos, autenticación o sesiones
- Validar configuraciones de seguridad

## Procedimiento

1. **Contextualizar**: Entender el tipo de aplicación y superficie de ataque
2. **Revisar entradas de usuario**: Validación, sanitización, SQL injection, XSS
3. **Autenticación y sesiones**: Tokens, contraseñas, expiración
4. **Secrets**: Sin hardcoded credentials, uso de variables de entorno o vaults
5. **Dependencias**: Versiones con CVEs conocidos
6. **Reporte**: Lista de hallazgos con severidad y solución propuesta

## OWASP Top 10 (referencia rápida)
- A01: Broken Access Control
- A02: Cryptographic Failures
- A03: Injection
- A04: Insecure Design
- A05: Security Misconfiguration
- A06: Vulnerable Components
- A07: Auth Failures
- A08: Software/Data Integrity Failures
- A09: Logging/Monitoring Failures
- A10: SSRF
