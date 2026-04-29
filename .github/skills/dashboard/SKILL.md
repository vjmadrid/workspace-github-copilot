---
name: dashboard
description: 'Creación de dashboards interactivos a partir de datos CSV o JSON. Usa este skill cuando necesites visualizar datos en gráficos (barras, líneas, pastel) en HTML de un solo archivo o como componente React.'
argument-hint: 'Proporciona: datos de entrada (CSV/JSON), tipo de gráfico y formato de salida (HTML o React).'
---

# Dashboard Skill

## Cuándo usar
- Visualizar datos CSV o JSON en gráficos
- Crear un dashboard interactivo rápido
- Exportar como HTML autónomo o componente React

## Procedimiento

1. **Analizar datos**: Estructura del CSV/JSON, columnas relevantes
2. **Preguntar al usuario**: Tipo de gráfico, columnas a visualizar, formato de salida
3. **Generar código**: HTML con Chart.js o React con Recharts
4. **Estilizar**: Tailwind CSS si se solicita
5. **Incluir instrucciones**: Cómo previsualizar el resultado

## Opciones de salida

| Formato | Tecnología |
|---------|------------|
| HTML single-file | Chart.js + Tailwind CSS |
| React component | Recharts |

## Tipos de gráfico soportados
- Barras (bar)
- Líneas (line)
- Pastel (pie/doughnut)
- Área (area)
- Dispersión (scatter)
