# Fundamentos de Programación

> Este archivo pertenece a: **Microcontroladores**
> Ruta: `01. Bloques Temáticos/04. Microcontroladores/05. Progresión de Programación/01. Fundamentos de Programación/README.md`

---

## Estado

**Estado:** Borrador
**Versión:** v1.0
**Bloque:** 04_microcontroladores

---

## Descripción

Esta subcarpeta enseña, desde cero, los conceptos de programación que se necesitan para trabajar con cualquier microcontrolador: variables, comentarios, condicionales, bucles, funciones, pines y umbrales. Está pensada para un docente que nunca ha escrito una línea de código.

---

## Propósito

Antes de programar un sensor o una plataforma específica, hace falta un vocabulario común. Un docente que no sabe qué es una "variable" o un "umbral" no puede seguir un tutorial de un sensor, aunque el tutorial esté muy bien explicado, porque cada línea de código asume ese conocimiento previo.

Esta subcarpeta llena ese vacío. No enseña ningún sensor ni ninguna placa en particular: enseña las piezas de lenguaje que **todas** las placas y **todos** los sensores usan, para que el resto de la progresión de programación se pueda leer sin tropiezos.

---

## Contenido de esta carpeta

A continuación se listan los archivos disponibles, en el orden en que se recomienda leerlos:

| Archivo | Descripción |
|---|---|
| [`01. Variables, Datos y Comentarios.md`](./01.%20Variables%2C%20Datos%20y%20Comentarios.md) | Qué es una variable, qué tipos de datos existen y cómo documentar código con comentarios. |
| [`02. Condicionales y Bucles.md`](./02.%20Condicionales%20y%20Bucles.md) | Cómo tomar decisiones en el código (`if` / `else`) y cómo repetir acciones (`for` / `while`). |
| [`03. Funciones, Pines y Umbrales.md`](./03.%20Funciones%2C%20Pines%20y%20Umbrales.md) | Cómo organizar código en funciones, cómo declarar y usar pines, y cómo definir un umbral. |

---

## Cómo usar esta carpeta

Leer los tres archivos en orden, aunque el docente ya tenga experiencia previa: los ejemplos de esta carpeta usan siempre el mismo estilo de comentarios y de nombres de variables que se repite en el resto de la progresión de programación. Después de terminar esta carpeta, continuar con [`02. Sensores y Actuadores`](../02.%20Sensores%20y%20Actuadores/README.md).

---

## Relación con XperiencED Kids

- **Inspiración:** los ejemplos parten de preguntas concretas ("¿cómo le digo a la placa que espere?", "¿cómo sé si está oscuro?") en vez de definiciones abstractas.
- **Experimentación:** cada concepto se acompaña de un fragmento de código corto que el docente puede copiar y probar de inmediato.
- **Reflexión:** cada archivo cierra con un ejemplo progresivo que obliga a repasar todo lo aprendido en ese archivo antes de avanzar al siguiente.

---

## Recursos relacionados

- [`README.md` — Progresión de Programación`](../README.md): Índice general de la progresión de programación de Microcontroladores.
- [`02. Sensores y Actuadores`](../02.%20Sensores%20y%20Actuadores/README.md): Siguiente paso, donde estos conceptos se aplican a componentes reales.
- [`02. Vocabulario.md`](../../02.%20Vocabulario.md): Glosario de términos de electrónica del bloque de Microcontroladores.

---

## Nota docente

No hace falta memorizar esta carpeta antes de tocar una placa. Es mejor leer un concepto, probarlo de inmediato en cualquier placa disponible y volver a esta carpeta cuando surja una duda. La meta es que, al llegar al bloque de Robótica, ningún estudiante ni docente se quede preguntando "¿qué es esto que dice `int` al inicio del código?".
