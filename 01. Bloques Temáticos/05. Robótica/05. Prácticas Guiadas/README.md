# Prácticas Guiadas

> Este archivo pertenece a: **Robótica Educativa**
> Ruta: `01. Bloques Temáticos/05. Robótica/05. Prácticas Guiadas/README.md`

---

## Estado

**Estado:** Completo
**Versión:** v1.0
**Bloque:** 05_robotica

---

## Descripción

Esta carpeta reúne las prácticas guiadas paso a paso del bloque de Robótica: actividades completas, listas para aplicar en el aula o el makerspace, que llevan al grupo desde la primera lógica de programación en bloques hasta un robot capaz de percibir su entorno y reaccionar de forma autónoma. Está dirigida a docentes que ya revisaron los conceptos de los bloques anteriores (Fundamentos, Movimiento y Mecanismos, Sensores y Percepción) y buscan una ruta ordenada de sesiones para llevar a sus estudiantes.

> *Insertar próximamente una imagen: captura de pantalla de un laberinto de studio.code.org resuelto con bloques de secuencia, bucle y condicional, junto a una fotografía de un robot educativo listo para la siguiente práctica.*

---

## Propósito

Las prácticas de esta carpeta traducen la teoría de robótica en experiencias concretas, ordenadas por dificultad creciente. Cada práctica retoma explícitamente lo aprendido en la anterior, de modo que el grupo construye su comprensión de forma acumulativa: de la lógica de programación en bloques sin robot físico, al primer programa de movimiento, a los giros, a la percepción del entorno mediante sensores. Esta progresión está alineada con la metodología XperiencED Kids: cada práctica recorre un ciclo completo de Inspiración, Experimentación y Reflexión.

---

## Contenido de esta carpeta

A continuación se listan las prácticas disponibles en este directorio, en el orden de progresión recomendado:

| Archivo o carpeta | Descripción |
|---|---|
| `01. Lógica de Programación con Code.org/` | Serie de 4 prácticas progresivas (secuencia, bucle, condicional, función) con la plataforma en bloques studio.code.org (Code.org), sin robot ni pantalla de hardware todavía. El punto de entrada se define por el nivel de lógica de programación del estudiante, no por su grado. |
| `02. Robot avanza y se detiene/` | Primer programa real: el robot avanza una distancia fija y se detiene. Introduce tiempo de ejecución y calibración básica. |
| `03. Robot gira/` | Se agregan giros al programa anterior; culmina en el reto de programar un cuadrado. |
| `04. Sigue línea básico/` | Introduce el sensor de línea para que el robot siga una ruta marcada en el piso, reaccionando a lo que percibe. |
| `05. Evita obstáculos básico/` | Introduce el sensor de distancia para que el robot detecte y evada obstáculos de forma autónoma. Cierra la progresión del bloque. |

> Las prácticas están numeradas en el orden en que se recomienda aplicarlas. Cada una depende, en menor o mayor grado, de las destrezas construidas en la anterior.

---

## Cómo usar esta carpeta

Se recomienda aplicar las cinco prácticas en el orden numerado, idealmente en sesiones consecutivas, ya que cada una retoma el código o la calibración lograda en la práctica previa. La práctica 01 se asigna según el nivel de lógica de programación que ya tiene cada estudiante (principiante absoluto, con algo de lógica, o con experiencia previa en bloques), no según su grado escolar: dos estudiantes del mismo grado pueden iniciar en cursos distintos de Code.org. Antes de facilitar cualquier práctica, el docente debe leer también el archivo conceptual correspondiente en los bloques de "Movimiento y Mecanismos" o "Sensores y Percepción" que se enlaza dentro de cada README. Si el grupo es nuevo en programación, no omitir la práctica 01 aunque parezca muy sencilla: es la que instala la lógica de secuencia, bucle y condicional que sostiene todo lo demás.

---

## Relación con XperiencED Kids

- **Inspiración:** cada práctica abre con una pregunta o demostración breve que conecta el reto técnico con una situación concreta y observable (una ruta, una distancia, un cuadrado, una línea en el piso, un obstáculo real).
- **Experimentación:** el cuerpo de cada práctica es un ciclo de programar, probar, observar el resultado físico del robot y ajustar el código o la calibración, repitiendo tantas veces como sea necesario.
- **Reflexión:** cada práctica cierra con preguntas guía que llevan al estudiantado a nombrar qué cambiaron, por qué funcionó o falló, y cómo se conecta con lo aprendido en la práctica anterior.

---

## Recursos relacionados

- [`../01. Fundamentos de Robótica/`](../01.%20Fundamentos%20de%20Robótica/): conceptos base de estabilidad, estructura y componentes que sostienen el armado del robot usado en estas prácticas.
- [`../02. Movimiento y Mecanismos/`](../02.%20Movimiento%20y%20Mecanismos/): fundamento técnico de avance, retroceso, giros y calibración de motores usado en las prácticas 02 y 03.
- [`../03. Sensores y Percepción/`](../03.%20Sensores%20y%20Percepción/): fundamento técnico de los sensores de línea y de distancia usados en las prácticas 04 y 05.

---

## Nota docente

Estas prácticas están diseñadas para aplicarse con el robot ya ensamblado; el armado del chasis y la electrónica debe resolverse antes, apoyándose en los bloques de Fundamentos y Movimiento y Mecanismos. Si el tiempo de sesión es limitado, es preferible completar bien una práctica y dejar la siguiente para otra sesión, en lugar de apurar varias en un mismo día. La calibración de cada robot (velocidad de motores, tiempo de giro, umbral de sensores) es individual y debe repetirse si cambia la batería, el piso o el propio robot.
