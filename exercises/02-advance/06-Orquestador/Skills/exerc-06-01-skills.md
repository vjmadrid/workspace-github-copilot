# Skills en el Sistema Agentico de GitHub Copilot

Este ejercicio muestra cómo las **Skills** amplían y especializan el comportamiento de los agentes, convirtiendo instrucciones genéricas en procedimientos reutilizables y precisos.

---

## Objetivo

Comprender qué son las Skills, cómo se estructuran y cómo los agentes las invocan para mejorar la calidad y consistencia de sus respuestas.

Crear una Skill propia y observar la diferencia de comportamiento de un agente con y sin ella.

---

## ¿Qué es una Skill?

Una Skill es un fichero Markdown (`.md`) colocado en `.github/skills/<nombre>/SKILL.md` que define:

- **Cuándo usarse**: condiciones que activan la skill
- **Procedimiento**: pasos concretos a seguir
- **Referencias**: recursos, plantillas o documentación adicional

Los agentes la invocan mediante el frontmatter con el campo `description` o referenciándola en su prompt con `#nombre-skill`.

```
.github/
└── skills/
    ├── api-design/
    │   └── SKILL.md
    ├── clean-code-review/
    │   └── SKILL.md
    ├── security-review/
    │   └── SKILL.md
    ├── test-writing/
    │   └── SKILL.md
    ├── debug/
    │   └── SKILL.md
    ├── explainer/
    │   └── SKILL.md
    ├── prompt-design/
    │   └── SKILL.md
    └── dashboard/
        └── SKILL.md
```

---

## Estructura de una Skill

```markdown
---
name: nombre-skill
description: 'Descripción breve. Cuándo debe usarse esta skill.'
argument-hint: 'Qué información necesita el agente para ejecutarla.'
---

# Título de la Skill

## Cuándo usar
- Caso de uso 1
- Caso de uso 2

## Procedimiento
1. Paso 1
2. Paso 2
3. Paso 3

## Checklist (opcional)
- [ ] Verificación 1
- [ ] Verificación 2

## Referencias
- Enlace o recurso relevante
```

---

## Tareas

### Parte 1 — Exploración (10 min)

1. Abre la carpeta `.github/skills/` de este repositorio
2. Lee los ficheros `SKILL.md` de al menos 3 skills distintas:
   - `clean-code-review`
   - `security-review`
   - `test-writing`
3. Responde mentalmente:
   - ¿Qué diferencia hay entre una Skill y una instrucción global (`copilot-instructions.md`)?
   - ¿Cuándo activaría el agente cada skill?

---

### Parte 2 — Agente sin Skill vs con Skill (20 min)

#### Sin Skill
Usa el agente `💻 DEV - 🧼 Clean Code` directamente en el chat:

```
@clean-code Revisa este código y mejora su calidad
```

Pega el siguiente fragmento:

```javascript
function p(u) {
  if (u != null && u != undefined) {
    if (u.age != null) {
      if (u.age >= 18) {
        if (u.email != null && u.email.includes('@')) {
          console.log(u.name + ' is valid');
        }
      }
    }
  }
}
```

Anota la respuesta.

#### Con Skill
Ahora invoca la skill explícitamente:

```
@clean-code #clean-code-review Revisa este código aplicando el procedimiento completo de la skill
```

Compara ambas respuestas:
- ¿Es más estructurada la segunda?
- ¿Sigue el checklist de la skill?
- ¿Menciona los principios SOLID explícitamente?

---

### Parte 3 — Crear tu propia Skill (30 min)

Crea una skill para **revisión de accesibilidad en HTML/CSS** siguiendo esta estructura:

**Ruta:** `.github/skills/accessibility-review/SKILL.md`

Debe incluir:
- Frontmatter con `name`, `description` y `argument-hint`
- Sección **Cuándo usar** con al menos 4 casos
- **Procedimiento** con 5 pasos concretos
- **Checklist** con criterios WCAG básicos (contraste, alt text, roles ARIA, navegación por teclado)
- **Referencias** a WCAG 2.1 y herramientas como axe o Lighthouse

> Pista: puedes usar el SUPER Orquestador para que te ayude a diseñar la skill:
> ```
> @super-orquestador Ayúdame a crear una skill de accesibilidad para revisión de HTML/CSS siguiendo la estructura de las skills existentes en .github/skills/
> ```

---

### Parte 4 — Probar la Skill creada (15 min)

Una vez creada, prueba tu skill con este fragmento HTML:

```html
<div onclick="submitForm()">Enviar</div>
<img src="logo.png">
<input type="text" placeholder="Tu nombre">
<div style="color: #aaa; background: #fff">Texto poco legible</div>
```

Invócala así:

```
@clean-code #accessibility-review Revisa este HTML en busca de problemas de accesibilidad
```

Evalúa si la skill guía correctamente al agente en su análisis.

---

### Parte 5 — Reflexión (10 min)

Responde en tu cuaderno o en un comentario en el chat:

1. ¿Qué ventajas tiene tener skills modulares frente a un único fichero de instrucciones global?
2. ¿Cómo conectan las Skills con los `handoffs` entre agentes?
3. ¿En qué situación del día a día crearías una skill nueva en tu equipo?
4. ¿Qué relación existe entre el SUPER Orquestador y las skills disponibles?

---

## Resultado esperado

Al finalizar este ejercicio debes ser capaz de:

- Entender la estructura y propósito de una Skill en el sistema agentico
- Distinguir el comportamiento de un agente con y sin skill activa
- Crear una skill propia siguiendo las convenciones del proyecto
- Invocar skills desde el chat de forma explícita

---

## Recursos

- Skills disponibles: [`.github/skills/`](../../../.github/skills/)
- Agente Orquestador: [`.github/agents/super-orquestador.agent.md`](../../../.github/agents/super-orquestador.agent.md)
- WCAG 2.1: https://www.w3.org/TR/WCAG21/
- axe DevTools: https://www.deque.com/axe/
