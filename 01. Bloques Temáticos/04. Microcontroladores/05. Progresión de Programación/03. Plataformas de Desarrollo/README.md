# Plataformas de Desarrollo — Programación

> Este archivo pertenece a: **Microcontroladores**
> Ruta: `01. Bloques Temáticos/04. Microcontroladores/05. Progresión de Programación/03. Plataformas de Desarrollo/README.md`

---

## Estado

**Estado:** Borrador
**Versión:** v1.0
**Bloque:** 04_microcontroladores

---

## Descripción

Esta subcarpeta enseña, para cada placa disponible en el bloque de Microcontroladores, cómo programarla en todos sus entornos: bloques y texto donde ambos existen, con ejemplos que integran los sensores y actuadores ya vistos en [`02. Sensores y Actuadores`](../02.%20Sensores%20y%20Actuadores/README.md).

---

## Propósito

Conocer una placa físicamente (qué componentes tiene, cómo se conecta) no es lo mismo que saber programarla. Cada plataforma tiene su propio entorno, su propia forma de declarar pines y, en algunos casos, más de un lenguaje disponible. Esta subcarpeta responde, placa por placa, la pregunta: **¿cómo abro el entorno correcto, y qué escribo para que funcione?**

---

## Contenido de esta carpeta

| Archivo | Plataforma | Entornos cubiertos |
|---|---|---|
| [`01. MicroBit.md`](./01.%20MicroBit.md) | micro:bit | MakeCode (bloques) y MicroPython (texto) |
| [`02. Circuit Playground.md`](./02.%20Circuit%20Playground.md) | Circuit Playground Express/Bluefruit | MakeCode (bloques) y CircuitPython (texto) |
| [`03. Arduino UNO y Nano.md`](./03.%20Arduino%20UNO%20y%20Nano.md) | Arduino UNO y Nano | Arduino IDE (texto, C++) |
| [`04. ESP32.md`](./04.%20ESP32.md) | ESP32 | Arduino IDE (C++) y MicroPython (texto) |
| [`05. IdeaBoard.md`](./05.%20IdeaBoard.md) | IdeaBoard | IdeaScratch (bloques) y IdeaCode (texto, CircuitPython) |
| [`06. IdeaSense.md`](./06.%20IdeaSense.md) | IdeaSense | IdeaCode (texto, CircuitPython) |

---

## Cómo usar esta carpeta

Abrir únicamente el archivo de la placa disponible en el aula o el makerspace. No es necesario leer las seis placas si el centro educativo solo cuenta con una. Cada archivo asume que ya se completaron [`01. Fundamentos de Programación`](../01.%20Fundamentos%20de%20Programación/README.md) y, si el proyecto incluye un sensor o actuador, el archivo correspondiente en [`02. Sensores y Actuadores`](../02.%20Sensores%20y%20Actuadores/README.md).

---

## Relación con XperiencED Kids

- **Inspiración:** cada archivo comienza mostrando qué se puede lograr desde la primera sesión con esa placa.
- **Experimentación:** cada entorno se acompaña de un ejemplo mínimo listo para copiar y de un ejemplo progresivo que integra un sensor o actuador real.
- **Reflexión:** el ejemplo final de cada archivo obliga a repasar cómo se declaran pines, entornos y librerías específicas de esa placa.

---

## Recursos relacionados

- [`README.md` — Progresión de Programación`](../README.md): Índice general de la progresión de programación de Microcontroladores.
- [`02. Sensores y Actuadores`](../02.%20Sensores%20y%20Actuadores/README.md): Conceptos de programación de componentes, aplicados aquí a cada placa.
- [`01. Plataformas de Desarrollo`](../../01.%20Plataformas%20de%20Desarrollo/README.md): Documentación física y de hardware de estas mismas placas.

---

## Nota docente

Esta carpeta no repite las especificaciones de hardware ni las comparaciones entre placas: esa información ya está en [`01. Plataformas de Desarrollo`](../../01.%20Plataformas%20de%20Desarrollo/README.md). Aquí el foco está exclusivamente en el entorno de programación y el código, para que un docente que ya eligió su placa pueda sentarse a programar sin dudas de "por dónde empiezo".
