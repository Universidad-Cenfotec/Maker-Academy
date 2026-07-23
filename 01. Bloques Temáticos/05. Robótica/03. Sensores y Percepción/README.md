# Sensores y Percepción

> Este archivo pertenece a: **Robótica Educativa**
> Ruta: `01. Bloques Temáticos/05. Robótica/03. Sensores y Percepción/README.md`

---

## Estado

**Estado:** Completo
**Versión:** v1.0
**Bloque:** 05_robotica

---

## Descripción

Esta sección reúne los cuatro sensores centrales de la robótica educativa (línea, distancia, luz y su combinación) y explica cómo cada uno le permite al robot percibir el entorno y tomar decisiones distintas según lo que detecta. Está dirigida al docente que necesita comprender el funcionamiento físico de cada sensor antes de guiar su programación en el aula o en el makerspace.

---

## Propósito

Esta sección abarca cómo los robots perciben el mundo que los rodea: qué sensores existen, cómo funcionan a nivel básico y cómo se combinan para producir comportamientos más complejos. Si el bloque de Movimiento y Mecanismos le da al robot la capacidad de actuar, esta sección le da la capacidad de decidir con base en información del entorno, en lugar de seguir siempre la misma secuencia fija.

Es también la sección donde los conceptos de robótica se acercan más a la programación con condicionales (`if`/`else`), porque cada sensor obliga al robot a tomar una decisión distinta según lo que percibe en cada instante.

---

## Contenido de esta carpeta

| Archivo | ¿Qué explica? |
|---|---|
| [`01. Sensor de línea.md`](./01.%20Sensor%20de%20l%C3%ADnea.md) | Cómo funciona el sensor IR reflectivo, cómo calibrarlo y cómo programar el seguimiento de una línea con dos sensores |
| [`02. Sensor de distancia.md`](./02.%20Sensor%20de%20distancia.md) | Cómo funciona el sensor ultrasónico HC-SR04, cómo leer distancias en Arduino y cómo usarlo para evadir obstáculos o detectar al adversario en SumoBot |
| [`03. Sensor de luz.md`](./03.%20Sensor%20de%20luz.md) | Cómo funciona el LDR (fotoresistor), cómo leer su valor de forma analógica y cómo programar un robot que sigue una fuente de luz |
| [`04. Múltiples sensores.md`](./04.%20M%C3%BAltiples%20sensores.md) | Cómo combinar varios sensores en un mismo robot y cómo definir una jerarquía de prioridad cuando dos sensores "piden" comportamientos distintos al mismo tiempo |

> Los archivos están numerados en el orden en que se recomienda consultarlos.

---

## Cómo usar esta carpeta

Recorre los cuatro archivos en orden: cada uno se apoya en el anterior. Comienza con el sensor de línea, sigue con el sensor de distancia, luego con el sensor de luz y cierra con Múltiples Sensores, que integra los anteriores en una sola lógica de prioridad. Esta secuencia prepara directamente al grupo para el bloque de SumoBot.

---

## Relación con XperiencED Kids

- **Inspiración:** observar cómo un mismo sensor puede generar comportamientos muy distintos según cómo se interprete su lectura en el programa.
- **Experimentación:** calibrar cada sensor, probar umbrales y programar las reacciones del robot ante lo que percibe.
- **Reflexión:** discutir, antes de programar, qué sensor debe tener prioridad cuando hay información contradictoria, y registrar esa decisión de diseño.

---

## Recursos relacionados

- [`README.md` — Robótica Educativa](../README.md): índice general del bloque de Robótica.
- [`04. SumoBot/README.md`](../04.%20SumoBot/README.md): sección donde estos sensores se aplican de forma combinada en el kit SumoBot.
- [`01. Fundamentos de Robótica/04. Sensores y actuadores robóticos.md`](../01.%20Fundamentos%20de%20Rob%C3%B3tica/04.%20Sensores%20y%20actuadores%20rob%C3%B3ticos.md): base conceptual sobre sensores y actuadores previa a esta sección.

---

## Nota docente

Esta sección es el puente natural hacia el bloque de SumoBot: los cuatro archivos preparan al estudiante para entender por qué el robot de competencia necesita, como mínimo, sensores de línea (para no salirse del dohyo) y de distancia (para encontrar al adversario). Conviene no saltarse el archivo de Múltiples Sensores, porque es ahí donde se resuelve el error más común de los equipos: programar cada sensor por separado sin definir cuál manda cuando ambos "piden" algo distinto al mismo tiempo.
