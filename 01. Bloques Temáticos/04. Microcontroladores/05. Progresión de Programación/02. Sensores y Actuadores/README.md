# Sensores y Actuadores — Programación

> Este archivo pertenece a: **Microcontroladores**
> Ruta: `01. Bloques Temáticos/04. Microcontroladores/05. Progresión de Programación/02. Sensores y Actuadores/README.md`

---

## Estado

**Estado:** Borrador
**Versión:** v1.0
**Bloque:** 04_microcontroladores

---

## Descripción

Esta subcarpeta enseña, paso a paso, cómo se programa cada sensor y actuador ya documentado en el bloque de Microcontroladores: cómo se declara en código, bajo qué estándar eléctrico funciona, qué parámetros necesita y cómo se construye la lógica de programación alrededor de él.

---

## Propósito

El archivo de cada componente en [`03. Sensores y Actuadores`](../../03.%20Sensores%20y%20Actuadores/README.md) explica **qué es** el componente y **cómo se conecta** físicamente. Esta subcarpeta responde una pregunta distinta: **¿qué hay que escribir en el código para que ese componente funcione?**

Está pensada para que un docente sin experiencia previa en programación pueda, después de leer un archivo, declarar el pin correcto, entender qué significa cada línea del código de ejemplo y ajustar el programa a su propio proyecto sin copiar código a ciegas.

---

## Contenido de esta carpeta

| Archivo | Componente | Tipo |
|---|---|---|
| [`01. Sensor de Luz (LDR).md`](./01.%20Sensor%20de%20Luz%20%28LDR%29.md) | Fotorresistencia (LDR) y módulo KY-018 | Sensor analógico |
| [`02. Sensor de Distancia (HC-SR04).md`](./02.%20Sensor%20de%20Distancia%20%28HC-SR04%29.md) | Sensor ultrasónico HC-SR04 | Sensor digital (por tiempo de pulso) |
| [`03. Servomotor.md`](./03.%20Servomotor.md) | Servomotores SG90 y MG996R | Actuador de posición |
| [`04. Motor DC y Driver.md`](./04.%20Motor%20DC%20y%20Driver.md) | Motor DC con driver L298N | Actuador de movimiento continuo |

---

## Cómo usar esta carpeta

Antes de abrir cualquiera de estos archivos, completar [`01. Fundamentos de Programación`](../01.%20Fundamentos%20de%20Programación/README.md): todos los ejemplos de esta carpeta asumen que ya se entienden las variables, los condicionales, los pines y los umbrales. Cada archivo se puede leer de forma independiente según el componente que el docente tenga disponible: no es necesario seguir el orden si solo se necesita programar un sensor de distancia, por ejemplo.

---

## Relación con XperiencED Kids

- **Inspiración:** cada archivo parte de la pregunta que un docente realmente se hace frente al componente ("¿qué escribo para que esto lea algo?").
- **Experimentación:** cada archivo incluye código progresivo, listo para copiar y modificar, con cada línea comentada.
- **Reflexión:** el ejemplo final de cada archivo obliga a repasar todos los parámetros y estándares vistos antes de darlo por comprendido.

---

## Recursos relacionados

- [`README.md` — Progresión de Programación`](../README.md): Índice general de la progresión de programación de Microcontroladores.
- [`01. Fundamentos de Programación`](../01.%20Fundamentos%20de%20Programación/README.md): Conceptos previos necesarios para esta carpeta.
- [`03. Plataformas de Desarrollo`](../03.%20Plataformas%20de%20Desarrollo/README.md): Siguiente paso: aplicar estos componentes en cada placa específica.
- [`03. Sensores y Actuadores`](../../03.%20Sensores%20y%20Actuadores/README.md): Documentación física y de conexión de estos mismos componentes.

---

## Nota docente

Esta carpeta no repite los diagramas de conexión ni las especificaciones eléctricas: esa información ya está en [`03. Sensores y Actuadores`](../../03.%20Sensores%20y%20Actuadores/README.md). Aquí el foco está exclusivamente en el código: qué se declara, qué significa cada parámetro y cómo se construye la lógica progresivamente, para que al llegar al bloque de Robótica ningún estudiante se quede preguntando cómo programar un sensor que ya conoce físicamente.
