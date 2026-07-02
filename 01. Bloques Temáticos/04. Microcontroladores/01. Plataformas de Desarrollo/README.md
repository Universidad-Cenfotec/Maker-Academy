# Plataformas de Desarrollo — Microcontroladores

> Este archivo pertenece a: **Microcontroladores**
> Ruta: `01. Bloques Temáticos/04. Microcontroladores/01. Plataformas de Desarrollo/README.md`

---

## Estado

**Estado:** Completo
**Versión:** v1.1
**Bloque:** 04_microcontroladores

---

## Propósito

<img width="400" alt="Arduino UNO, una de las plataformas más populares para aprender electrónica y programación en secundaria" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Arduino_Uno_-_R3.jpg/640px-Arduino_Uno_-_R3.jpg" />

<img width="200" alt="Logo de Arduino" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Arduino_Logo.svg/320px-Arduino_Logo.svg.png" />

Elegir la plataforma de desarrollo correcta para un grupo o proyecto es una de las decisiones más importantes antes de empezar. Cada plataforma tiene un nivel de dificultad diferente, distintos componentes integrados y un ecosistema propio de software y proyectos.

Esta carpeta tiene fichas detalladas de las seis plataformas más utilizadas en espacios makers escolares. Ninguna es "la mejor" en todos los casos: cada una tiene contextos donde es ideal.

---

## Plataformas disponibles

| Plataforma | Nivel recomendado | Programación | Conectividad | Precio aprox. |
|---|---|---|---|---|
| **micro:bit** | Primaria alta, Secundaria inicial | Bloques (MakeCode), MicroPython | Radio, Bluetooth | USD 15–20 |
| **Circuit Playground** | Primaria, Secundaria | Bloques (MakeCode), CircuitPython | Bluetooth (Bluefruit), IR | USD 25–35 |
| **Arduino UNO / Nano** | Secundaria | C++ (Arduino IDE) | Ninguna integrada | USD 5–15 |
| **ESP32** | Secundaria avanzada | Arduino, MicroPython | WiFi + Bluetooth | USD 5–10 |
| **IdeaBoard** | Secundaria | Bloques (IdeaScratch), CircuitPython, Arduino | WiFi + Bluetooth | USD 30 |
| **IdeaSense** | Secundaria | CircuitPython (IdeaCode) | Ninguna integrada | Consultar CRCibernética |

---

## ¿Cuál elegir según el contexto?

**Para grupos sin ninguna experiencia previa (cualquier edad):**
→ **micro:bit** o **Circuit Playground**. Las dos tienen muchos componentes integrados y permiten hacer proyectos interesantes desde el primer día, sin conectar nada externo.

**Para secundaria que quiere aprender a programar en texto:**
→ **Arduino UNO**. El ecosistema más amplio del mundo, con millones de proyectos y tutoriales disponibles.

**Para proyectos con internet o robots con motores:**
→ **ESP32** o **IdeaBoard**. Tienen WiFi y Bluetooth integrados. La IdeaBoard además incluye controladores de motor, ideal para robótica sin módulos adicionales.

**Para proyectos de ciencias con medición ambiental:**
→ **IdeaSense** o **micro:bit V2**. La IdeaSense tiene temperatura, humedad, luz y movimiento integrados; es como un pequeño laboratorio portátil.

**Para grupos con niveles mixtos en el mismo espacio:**
→ **micro:bit** para niveles iniciales, **Arduino/ESP32** para niveles avanzados. Sus ecosistemas son independientes.

---

## Comparación visual de hardware integrado

| Plataforma | LEDs/Pantalla | Sensores integrados | Control de motores | WiFi |
|---|---|---|---|---|
| micro:bit V2 | Matriz 5×5 | Temp, luz, movimiento, micrófono, altavoz | ❌ | ❌ |
| Circuit Playground | 10 LEDs RGB | Luz, temp, movimiento, micrófono, altavoz | ❌ (con Crickit) | ❌ |
| Arduino UNO | 1 LED | ❌ | ❌ | ❌ |
| ESP32 | ❌ | ❌ | ❌ | ✅ |
| IdeaBoard | 1 LED RGB | ❌ | ✅ (2 motores DC) | ✅ |
| IdeaSense | Matriz 5×5 | Temp, humedad, luz, acelerómetro, giroscopio | ❌ | ❌ |

---

## Aplicación en Maker Academy

Es el recurso de orientación principal para docentes que empiezan a trabajar con hardware en el aula. Se usa antes de elegir una plataforma y como referencia para justificar esa elección ante el equipo educativo.

## Recursos relacionados

- [micro:bit](01. Micro:bit.md)
- [Circuit Playground](02. Circuit Playground.md)
- [Arduino UNO y Nano](03. Arduino UNO y Nano.md)
- [ESP32](04. ESP32.md)
- [IdeaBoard](05. IdeaBoard.md)
- [IdeaSense](06. IdeaSense.md)

## Imagen sugerida

Tabla visual comparativa con las seis plataformas en columnas y sus características principales en filas.

## Nota docente

**Evitar comprar muchas plataformas diferentes "para tener opciones".** Un espacio con 10 micro:bits enseña mejor que uno con 2 de cada cosa, porque los estudiantes pueden trabajar en grupos y el docente puede dominar una sola herramienta en profundidad.

La plataforma es solo el medio. El objetivo es que el estudiante desarrolle pensamiento lógico, capacidad de resolver problemas y comprensión de cómo funciona la tecnología. Cuando eso queda claro, la elección de plataforma se vuelve mucho más sencilla.

**Para docentes que nunca han usado microcontroladores:** empezar con micro:bit es la apuesta más segura. El simulador de MakeCode permite aprender sin miedo a dañar nada, y la comunidad educativa en español es la más grande de todas las plataformas.
