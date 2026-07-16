# Sensores y Percepción

> Ruta: `01. Bloques Temáticos/05. Robótica/03. Sensores y Percepción`

---

**Estado:** Completo
**Versión:** v1.0
**Bloque:** 05_robotica

---

## Propósito

Esta sección abarca cómo los robots perciben el mundo que los rodea: qué sensores existen, cómo funcionan a nivel básico y cómo se combinan para producir comportamientos más complejos. Si el bloque de Movimiento y Mecanismos le da al robot la capacidad de actuar, esta sección le da la capacidad de decidir con base en información del entorno, en lugar de seguir siempre la misma secuencia fija.

Es también la sección donde los conceptos de robótica se acercan más a la programación con condicionales (`if`/`else`), porque cada sensor obliga al robot a tomar una decisión distinta según lo que percibe en cada instante.

---

## Contenido de esta sección

| Archivo | ¿Qué explica? |
|---|---|
| `01. Sensor de línea.md` | Cómo funciona el sensor IR reflectivo, cómo calibrarlo y cómo programar el seguimiento de una línea con dos sensores |
| `02. Sensor de distancia.md` | Cómo funciona el sensor ultrasónico HC-SR04, cómo leer distancias en Arduino y cómo usarlo para evadir obstáculos o detectar al adversario en SumoBot |
| `03. Sensor de luz.md` | Cómo funciona el LDR (fotoresistor), cómo leer su valor de forma analógica y cómo programar un robot que sigue una fuente de luz |
| `04. Múltiples sensores.md` | Cómo combinar varios sensores en un mismo robot y cómo definir una jerarquía de prioridad cuando dos sensores "piden" comportamientos distintos al mismo tiempo |

> Los archivos están numerados en el orden en que se recomienda consultarlos.

---

## Secuencia recomendada

1. **Sensor de línea** — el primer sensor que se trabaja, porque se conecta directamente con los giros ya aprendidos en Movimiento y Mecanismos
2. **Sensor de distancia** — introduce la idea de medir una magnitud (centímetros) en lugar de solo detectar presencia o ausencia
3. **Sensor de luz** — un sensor más ligero y vistoso, útil para practicar la comparación entre dos lecturas del mismo tipo
4. **Múltiples sensores** — el cierre de la sección, donde se combinan sensores de distinta naturaleza y se define qué sensor tiene prioridad, como preparación directa para el reto de SumoBot

---

## Nota docente

Esta sección es el puente natural hacia el bloque de SumoBot: los cuatro archivos preparan al estudiante para entender por qué el robot de competencia necesita, como mínimo, sensores de línea (para no salirse del dohyo) y de distancia (para encontrar al adversario). Conviene no saltarse el archivo de Múltiples Sensores, porque es ahí donde se resuelve el error más común de los equipos: programar cada sensor por separado sin definir cuál manda cuando ambos "piden" algo distinto al mismo tiempo.
