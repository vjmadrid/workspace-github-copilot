---
name: api-design
description: 'Diseño e implementación de APIs REST. Usa este skill cuando necesites crear clientes API, definir contratos REST, añadir resiliencia (circuit breaker, backoff, bulkhead, throttling) o generar DTOs y pruebas de integración.'
argument-hint: 'Proporciona: lenguaje, URL del endpoint, DTOs (opcional), métodos REST requeridos y requisitos de resiliencia.'
---

# API Design Skill

## Cuándo usar
- Crear un cliente o servidor API REST
- Definir DTOs de request/response
- Añadir resiliencia: circuit breaker, bulkhead, throttling, backoff
- Generar pruebas de integración para APIs

## Procedimiento

1. **Recopilar información**: Lenguaje, endpoint URL, métodos HTTP requeridos
2. **Definir contrato**: Interfaces, DTOs, esquema OpenAPI/Swagger
3. **Generar código**: Cliente/servidor funcional con manejo de errores
4. **Resiliencia**: Aplicar patrones si se solicitan (retry, circuit breaker, etc.)
5. **Pruebas**: Generar casos de prueba básicos para los endpoints

## Plantillas disponibles

- [Plantilla REST Client](./assets/rest-client.template)
- [Plantilla OpenAPI](./assets/openapi.template)
- [Plantilla DTO](./assets/dto.template)

## Referencias
- OpenAPI Specification: https://swagger.io/specification/
- Resilience4j (Java): https://resilience4j.readme.io/
