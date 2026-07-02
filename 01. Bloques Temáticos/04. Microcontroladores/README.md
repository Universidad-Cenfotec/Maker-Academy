# Bloque Temático 4: Microcontroladores

> Este archivo pertenece a: **Microcontroladores**
> Ruta: `01. Bloques Temáticos/04. Microcontroladores/README.md`

---

## Estado

**Estado:** Completo
**Versión:** v1.1
**Bloque:** 04_microcontroladores


## Propósito

Servir como punto de entrada al bloque temático de Microcontroladores dentro del repositorio de Maker Academy. Orienta a los docentes sobre las plataformas disponibles, la estructura de los contenidos y los recursos de apoyo.

---

## ¿Qué es un microcontrolador?

<img width="400" alt="Placa micro:bit, una de las plataformas de microcontroladores más utilizadas en educación a nivel mundial" src="https://github.com/user-attachments/assets/6e68c978-a9d3-4738-8379-2fd89f717db3" />
<img width="480" alt="Colección de placas de desarrollo: Arduino UNO, micro:bit, ESP32 y módulos electrónicos sobre una mesa" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Arduino_Uno_-_R3.jpg/640px-Arduino_Uno_-_R3.jpg" />


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

- [Plataformas de Desarrollo](01. Plataformas de Desarrollo/README.md)
- [Entradas y Salidas Digitales](02. Entradas y Salidas Digitales/README.md)
- [Sensores y Actuadores](03. Sensores y Actuadores/README.md)
- [Comunicación entre Dispositivos](04. Comunicacion entre Dispositivos/README.md)
- [Progresión de Programación](05. Progresión de Programación/README.md)

## Imagen sugerida

Foto panorámica de las seis plataformas de desarrollo (micro:bit, Circuit Playground, Arduino UNO, ESP32, IdeaBoard e IdeaSense) colocadas juntas sobre una mesa.

## Nota docente

**No hay que saber todo para empezar.** Los mejores docentes de makerspace aprenden junto con sus estudiantes. El rol del docente no es ser el experto técnico, sino facilitar la exploración y el pensamiento crítico.

**Una plataforma bien dominada vale más que muchas conocidas superficialmente.** Si el centro tiene micro:bits, dominar esa plataforma al 100% es más valioso que saber un poco de todo.

**Los proyectos concretos motivan más que los conceptos abstractos.** Antes de enseñar "qué es un sensor", hacer que los estudiantes conecten uno y vean los números cambiar en pantalla. La pregunta "¿por qué cambian los números?" surge sola.
