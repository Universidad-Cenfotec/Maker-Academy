# Bloque Temático 4: Microcontroladores

> Este archivo pertenece a: **Microcontroladores**
> Ruta: `01. Bloques Temáticos/04. Microcontroladores/README.md`

---

## Estado

**Estado:** Completo
**Versión:** v1.1
**Bloque:** 04_microcontroladores

---

## Descripción

Este bloque temático reúne los recursos para enseñar programación física con microcontroladores: plataformas de hardware, entradas y salidas, sensores y actuadores, comunicación entre dispositivos y la progresión de programación de iconográfico a texto.

---

## Propósito

Servir como punto de entrada al bloque temático de Microcontroladores dentro del repositorio de Maker Academy. Orienta a los docentes sobre las plataformas disponibles, la estructura de los contenidos y los recursos de apoyo.

---

## ¿Qué es un microcontrolador?

<img width="480" alt="Placa BBC micro:bit, una de las plataformas de microcontroladores más utilizadas en educación a nivel mundial" src="https://upload.wikimedia.org/wikipedia/commons/0/02/BBC_micro_bit_%2826146399942%29.png" />

Un microcontrolador es una pequeña computadora en un chip. A diferencia de una computadora normal, no tiene teclado ni pantalla: su trabajo es **leer sensores del entorno** (luz, temperatura, movimiento) y **controlar actuadores** (LEDs, motores, altavoces) siguiendo las instrucciones de un programa.

Los microcontroladores están en todas partes: controlan el semáforo de la esquina, el termostato de tu casa, la lavadora y los juguetes electrónicos. En el makerspace, permiten que estudiantes de todos los niveles creen sus propios inventos interactivos.

---

## Plataformas disponibles en este repositorio

| Plataforma | Nivel | Programación | Destacado |
|---|---|---|---|
| **micro:bit** | Primaria, Secundaria inicial | Bloques, Python | Más recursos en español |
| **Circuit Playground** | Primaria, Secundaria | Bloques, Python | 10 LEDs RGB llamativos |
| **Arduino UNO/Nano** | Secundaria | C++ | Ecosistema más grande del mundo |
| **ESP32** | Secundaria avanzada | Arduino, Python | WiFi y Bluetooth integrados |
| **IdeaBoard** | Secundaria | Bloques, Python | Hecho en Costa Rica, motores integrados |
| **IdeaSense** | Secundaria | Python | Hecho en Costa Rica, 5 sensores integrados |

---

## Estructura del bloque

```
04. Microcontroladores/
├── 01. Plataformas de Desarrollo/      ← Las 6 placas disponibles
├── 02. Entradas y Salidas Digitales/   ← Pines, señales, PWM, Monitor Serial
├── 03. Sensores y Actuadores/          ← Luz, distancia, servos, motores
├── 04. Comunicación entre Dispositivos/← UART, I2C, SPI, Bluetooth, WiFi
├── 05. Progresión de Programación/     ← Iconográfico → Bloques → Texto
├── 06. Evaluación/                     ← Instrumentos de evaluación
├── 01. Mapa de Progresión.md
├── 02. Vocabulario.md
├── 03. Seguridad.md
└── 04. Alineación con el PNFT.md
```

---

## ¿Por dónde empezar?

**Docente sin experiencia en tecnología:**
→ Empezar por `05. Progresión de Programación / 01. Iconografico`. Son actividades sin computadora que construyen el pensamiento lógico.

**Docente con experiencia en Scratch o programación básica:**
→ Empezar por `01. Plataformas de Desarrollo / 01. Micro:bit.md` y luego `05. Progresión de Programación / 02. Bloques / 01. MakeCode Basico.md`.

**Docente de secundaria técnica:**
→ Revisar `01. Plataformas de Desarrollo / 03. Arduino UNO y Nano.md` y los archivos de `03. Sensores y Actuadores`.

---

## Recursos de apoyo

- **Vocabulario técnico:** `02. Vocabulario.md`
- **Seguridad en el taller:** `03. Seguridad.md`
- **Alineación curricular (PNFT):** `04. Alineación con el PNFT.md`
- **Mapa de progresión:** `01. Mapa de Progresión.md`

---

## Aplicación en Maker Academy

Este archivo es el primer recurso que consulta un docente cuando accede al bloque de Microcontroladores. Permite entender la organización del contenido y elegir la plataforma o tema más adecuado para su nivel educativo.

## Recursos relacionados

- [Plataformas de Desarrollo](01.%20Plataformas%20de%20Desarrollo/README.md)
- [Entradas y Salidas Digitales](02.%20Entradas%20y%20Salidas%20Digitales/README.md)
- [Sensores y Actuadores](03.%20Sensores%20y%20Actuadores/README.md)
- [Comunicación entre Dispositivos](04.%20Comunicacion%20entre%20Dispositivos/README.md)
- [Progresión de Programación](05.%20Progresión%20de%20Programación/README.md)

## Nota docente

**No hay que saber todo para empezar.** Los mejores docentes de makerspace aprenden junto con sus estudiantes. El rol del docente no es ser el experto técnico, sino facilitar la exploración y el pensamiento crítico.

**Una plataforma bien dominada vale más que muchas conocidas superficialmente.** Si el centro tiene micro:bits, dominar esa plataforma al 100% es más valioso que saber un poco de todo.

**Los proyectos concretos motivan más que los conceptos abstractos.** Antes de enseñar "qué es un sensor", hacer que los estudiantes conecten uno y vean los números cambiar en pantalla. 