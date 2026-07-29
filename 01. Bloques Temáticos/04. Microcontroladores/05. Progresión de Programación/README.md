# Progresión de Programación — Microcontroladores

> Este archivo pertenece a: **Microcontroladores**
> Ruta: `01. Bloques Temáticos/04. Microcontroladores/05. Progresión de Programación/README.md`

---

## Estado

**Estado:** Borrador
**Versión:** v2.0
**Bloque:** 04_microcontroladores

---

## Descripción

Organiza un curso introductorio de programación física, pensado para un docente con conocimiento cero de programación y electrónica, que avanza desde los conceptos más básicos hasta programar sensores, actuadores y placas completas, con el objetivo de llegar preparado al bloque de Robótica.

---

## Propósito

Un docente que llega al bloque de Robótica sin haber programado antes suele quedarse atascado en preguntas muy concretas: "¿cómo declaro este sensor?", "¿cómo configuro los pines?", "¿cómo defino un umbral?". Esta sección responde esas preguntas **antes** de llegar a Robótica, para que el bloque de Microcontroladores funcione como el curso base de programación de toda la ruta.

A diferencia de una guía de referencia por componente, esta progresión está ordenada como un curso: primero el vocabulario de programación, después cómo se programa cada sensor y actuador, y finalmente cómo se integra todo en cada placa disponible.

---

## Tres pasos

| Paso | ¿Qué es? | ¿Para quién? |
|---|---|---|
| **Fundamentos de Programación** | Variables, condicionales, bucles, funciones, pines y umbrales, explicados desde cero | Docentes sin ninguna experiencia previa en programación |
| **Sensores y Actuadores** | Cómo se programa cada sensor y actuador ya usado en el bloque: declaración, estándares y parámetros | Docentes que ya completaron Fundamentos |
| **Plataformas de Desarrollo** | Cómo programar cada placa completa, en bloques y en texto según el entorno disponible | Docentes que ya eligieron una placa para su aula |

---

## Contenido

```
05. Progresión de Programación/
├── 01. Fundamentos de Programación/
│   ├── Variables, Datos y Comentarios   ← Qué es una variable y cómo documentar código
│   ├── Condicionales y Bucles           ← Cómo decidir y repetir en un programa
│   └── Funciones, Pines y Umbrales      ← Cómo organizar código, declarar pines y definir umbrales
├── 02. Sensores y Actuadores/
│   ├── Sensor de Luz (LDR)              ← Programación del sensor de luz
│   ├── Sensor de Distancia (HC-SR04)    ← Programación del sensor ultrasónico
│   ├── Servomotor                       ← Programación de posición angular
│   └── Motor DC y Driver                ← Programación de dirección y velocidad
└── 03. Plataformas de Desarrollo/
    ├── MicroBit                         ← MakeCode (bloques) y MicroPython (texto)
    ├── Circuit Playground               ← MakeCode (bloques) y CircuitPython (texto)
    ├── Arduino UNO y Nano                ← Arduino IDE (texto)
    ├── ESP32                             ← Arduino IDE y MicroPython (texto)
    ├── IdeaBoard                         ← IdeaScratch (bloques) e IdeaCode (texto)
    └── IdeaSense                         ← IdeaCode (texto)
```

---

## ¿Por qué este orden?

Programar un sensor sin saber qué es una variable es memorizar código sin entenderlo. Programar una placa completa sin haber programado antes un sensor por separado hace que, si algo falla, sea imposible saber si el error está en el sensor, en la placa o en la lógica. Por eso el orden va de lo más general (vocabulario de programación) a lo más específico (una placa con un sensor conectado): cada paso reduce una variable de incertidumbre para el siguiente.

---

## ¿Cuándo pasar al siguiente paso?

No se trata de cumplir tiempo, sino de fluidez:

- De Fundamentos a Sensores y Actuadores: cuando se puede leer un fragmento de código con variables, condicionales y funciones, y explicar en voz alta qué hace cada línea.
- De Sensores y Actuadores a Plataformas de Desarrollo: cuando se puede programar y probar un sensor por separado (por ejemplo, ver los números de una LDR cambiar en el Monitor Serial) antes de combinarlo con otros componentes.

Se puede saltar directo a [`03. Plataformas de Desarrollo`](03.%20Plataformas%20de%20Desarrollo/README.md) si el docente ya tiene experiencia previa de otro contexto y solo necesita la referencia de una placa específica.

---

## Aplicación en Maker Academy

Se usa para planificar la secuencia de enseñanza de programación dentro del bloque de Microcontroladores, con el objetivo de que los estudiantes lleguen al bloque de Robótica sabiendo programar sensores, actuadores y placas, y no solo conociéndolos físicamente.

## Recursos relacionados

- [`README.md` — Microcontroladores`](../README.md): Punto de entrada al bloque temático.
- [`01. Mapa de Progresión.md`](../01.%20Mapa%20de%20Progresi%C3%B3n.md): Describe la progresión general del bloque, con edades e indicadores de logro.
- [`01. Fundamentos de Programación/README.md`](01.%20Fundamentos%20de%20Programaci%C3%B3n/README.md): Primer paso de esta progresión.
- [`03. Sensores y Actuadores`](../03.%20Sensores%20y%20Actuadores/README.md): Documentación física de los componentes que se programan en el paso 2.
- [`01. Plataformas de Desarrollo`](../01.%20Plataformas%20de%20Desarrollo/README.md): Documentación física de las placas que se programan en el paso 3.

## Nota docente

Para docentes que nunca han programado: la mejor manera de prepararse es hacer una vez el mismo recorrido que harán sus estudiantes, sin saltarse pasos. Empezar por Fundamentos, aunque parezca lento, evita después el problema más común en el bloque de Robótica: estudiantes (y docentes) que saben conectar un sensor pero no saben qué escribir en el código para que funcione.
