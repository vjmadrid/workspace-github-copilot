---
name: prompt-design
description: 'Diseño y mejora de prompts para LLMs. Usa este skill cuando necesites redactar un prompt efectivo, mejorar uno existente, aplicar técnicas de prompt engineering (few-shot, role-setting, constraints) o diagnosticar por qué un prompt no funciona.'
argument-hint: 'Proporciona el prompt original, el objetivo deseado y el contexto de la tarea.'
---

# Prompt Design Skill

## Cuándo usar
- Crear un prompt desde cero para un LLM
- Mejorar un prompt que no da los resultados esperados
- Aplicar técnicas avanzadas de prompt engineering
- Adaptar prompts para diferentes modelos (GPT, Claude, Gemini)

## Procedimiento

1. **Analizar el prompt original**: Claridad, especificidad, contexto
2. **Identificar problemas**: Ambigüedad, falta de contexto, instrucciones contradictorias
3. **Aplicar técnicas**:
   - Role-setting: "Eres un experto en..."
   - Few-shot: Incluir ejemplos de input/output
   - Constraints: Delimitar formato, longitud, idioma
   - Chain-of-thought: Pedir razonamiento paso a paso
4. **Reescribir**: Versión mejorada del prompt
5. **Explicar**: Qué cambió y por qué funciona mejor

## Técnicas de Prompt Engineering

| Técnica | Cuándo usar |
|---------|-------------|
| Role-setting | Necesitas un tono o expertise específico |
| Few-shot | El modelo necesita ejemplos del formato esperado |
| Chain-of-thought | Tareas de razonamiento complejo |
| Constraints | Controlar formato, longitud o idioma |
| Decomposition | Dividir tareas complejas en pasos |
