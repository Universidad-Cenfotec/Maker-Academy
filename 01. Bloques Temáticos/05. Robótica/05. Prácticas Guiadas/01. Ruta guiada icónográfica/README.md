# Lógica de Programación con Code.org, Práctica Guiada

> Ruta: `01. Bloques Temáticos/05. Robótica/05. Prácticas Guiadas/01. Ruta guiada icónográfica/README.md`

---

**Estado:** Completo
**Versión:** v2.0
**Bloque:** 05_robotica
**Tecnología principal:** Plataforma en línea studio.code.org (Code.org), programación por bloques de arrastrar y soltar
**Nivel sugerido:** Según nivel de lógica de programación del estudiante (ver "Niveles de entrada" más abajo), no según grado o edad
**Duración estimada:** 3 a 6 sesiones de 30-45 minutos, según el nivel de entrada del grupo

---

## Propósito de esta práctica

Antes de programar un robot físico, el grupo necesita ejercitar la lógica que hace funcionar cualquier programa: secuencias ordenadas, repeticiones y decisiones condicionales. Esta práctica usa **studio.code.org**, la plataforma en línea del proyecto Code.org, para construir esa lógica con laberintos y retos de arrastrar bloques, sin depender todavía de un robot físico ni de una plataforma de hardware como MakeCode o Scratch.

La referencia pedagógica de esta práctica es el video ["Consigue una hora de código"](https://www.youtube.com/watch?v=n8SdOE_dUEQ), que muestra cómo Code.org introduce el pensamiento algorítmico mediante puzles de arrastrar y soltar antes de escribir una sola línea de código de texto.

Es la puerta de entrada a la robótica en Maker Academy: no requiere un robot armado, no requiere electrónica y construye, de forma visual e interactiva, los conceptos de secuencia, bucle y condicional que luego se aplican directamente sobre hardware real en las prácticas [02. Robot avanza y se detiene](../02.%20Robot%20avanza%20y%20se%20detiene/README.md) y [03. Robot gira](../03.%20Robot%20gira/README.md).

---

## Por qué el criterio de avance es el nivel de lógica, no el grado

A diferencia de otras prácticas de este bloque, aquí el punto de partida de cada estudiante **no se define por su grado escolar**, sino por cuánta lógica de programación ya tiene. Dos estudiantes del mismo grado pueden tener puntos de partida distintos: uno nunca ha ordenado instrucciones y otro ya usó Scratch en casa. Code.org permite este ajuste porque sus cursos están organizados por progresión de conceptos (secuencia, bucle, condicional, función), no por edad estricta.

El docente debe evaluar brevemente al grupo, o incluso a cada estudiante, antes de asignar el punto de entrada correcto usando la tabla de la siguiente sección.

---

## Niveles de entrada

### Nivel 1: Principiante absoluto

Estudiantes que nunca han ordenado instrucciones para resolver un problema y que pueden tener lectura limitada.

- **Curso de Code.org:** Hour of Code "Laberinto clásico" (Classic Maze) como calentamiento de una sesión, seguido de **Course A** dentro de studio.code.org.
- **Hasta dónde llegar:** completar las etapas de secuencia simple de Course A y detenerse en la primera etapa que introduce el bloque "repetir" (bucle básico). No es necesario completar el curso completo en esta práctica.
- **Qué se aprende:** que una secuencia de instrucciones ordenadas produce un resultado, y que el orden importa.

### Nivel 2: Con algo de lógica

Estudiantes que ya resolvieron secuencias simples (en papel, con tarjetas o en una sesión anterior) pero no han usado bucles ni condicionales.

- **Curso de Code.org:** **Course C**, o **Course D** si el grupo ya domina la secuencia con soltura.
- **Hasta dónde llegar:** completar las etapas de bucles ("repetir" y "repetir hasta") y avanzar hasta la primera etapa de condicionales ("si / si no") dentro del laberinto. En Course D esto corresponde a la etapa de "Condicionales y bucles en el laberinto".
- **Qué se aprende:** bucles para evitar repetir bloques idénticos, y condicionales para que el programa tome decisiones según lo que "percibe" en el camino, un puente directo hacia lo que hará después un sensor real.

### Nivel 3: Con experiencia previa en bloques

Estudiantes que ya usaron Scratch, MakeCode u otra plataforma de bloques y comprenden bucles y condicionales con soltura.

- **Curso de Code.org:** **Course E** o **Course F**.
- **Hasta dónde llegar:** completar las etapas de bucles anidados y condicionales combinadas, y avanzar hasta la introducción de **funciones** (bloques reutilizables con nombre propio). No es necesario terminar el curso completo: basta con llegar a la primera etapa donde el estudiante crea su propia función.
- **Qué se aprende:** a reconocer un patrón que se repite dentro del propio código y a encapsularlo en una función, la misma idea que luego permite escribir, por ejemplo, una función `avanzar(tiempo)` reutilizable en el código de un robot real.

> **Nota:** los nombres exactos de las etapas dentro de cada curso pueden variar según actualizaciones de la plataforma. El docente debe ingresar a [studio.code.org](https://studio.code.org) y ubicar la etapa correspondiente al concepto descrito (secuencia, bucle, condicional o función), más que memorizar un número de lección fijo.

---

## Objetivos de aprendizaje

Al finalizar esta práctica, el estudiante habrá:

- Ordenado una secuencia de instrucciones en bloques para resolver un laberinto o reto visual
- Usado bloques de repetición para evitar instrucciones repetidas de forma manual
- Usado bloques condicionales para que el programa tome una decisión distinta según lo que encuentra en el camino (según su nivel de entrada)
- Practicado la idea de que el orden de las instrucciones importa y que un error se corrige observando el resultado, no adivinando

---

## Materiales

| Material | Cantidad | Notas |
|---|---|---|
| Computadora, tableta o Chromebook con navegador y acceso a internet | 1 por estudiante o por pareja | studio.code.org funciona en cualquier navegador moderno, sin instalación |
| Cuenta o sección de aula en Code.org (opcional) | 1 por docente | Permite crear una sección de clase y dar seguimiento al avance de cada estudiante; también se puede trabajar sin cuenta usando el modo invitado de Hour of Code |
| Proyector o pantalla compartida | 1 por aula | Para modelar el primer reto en conjunto antes de que el grupo trabaje de forma individual o en parejas |

---

## Herramientas y software

- Navegador web actualizado (Chrome, Edge o Firefox)
- [studio.code.org](https://studio.code.org): plataforma de cursos por bloques
- Video de referencia para el docente: ["Consigue una hora de código"](https://www.youtube.com/watch?v=n8SdOE_dUEQ)

---

## Preparación del docente (antes de la sesión)

1. Ver el video ["Consigue una hora de código"](https://www.youtube.com/watch?v=n8SdOE_dUEQ) para tener claro el tono y el formato de los retos de Code.org.
2. Ingresar a [studio.code.org](https://studio.code.org) y explorar Course A, C y E (o F) para ubicar, en cada uno, la primera etapa de bucles, la primera de condicionales y la primera de funciones, ya que los nombres de lección cambian con las actualizaciones de la plataforma.
3. Definir con qué nivel de entrada trabajará cada estudiante o grupo, según la tabla de "Niveles de entrada".
4. Confirmar que el makerspace o el aula cuenta con conectividad suficiente para que todo el grupo trabaje en línea al mismo tiempo. Si la conectividad es limitada, dividir el grupo en estaciones rotativas.
5. Si se creará una sección de clase en Code.org, hacerlo con anticipación para no perder tiempo de sesión en configuración.

> **Nota de seguridad digital:** si se usan cuentas de estudiantes, seguir la política institucional de datos y privacidad para menores de edad. El modo invitado de Hour of Code no requiere ninguna cuenta ni dato personal.

---

## Flujo de la práctica

### Fase 1: Inspiración (5–10 min)

**1.1 Presentar el reto con una pregunta**

El docente pregunta: "¿Cómo le explicamos a alguien que no puede vernos cómo llegar de aquí hasta allá?" Se puede demostrar con un ejemplo simple: el docente cierra los ojos y pide indicaciones a un estudiante usando solo instrucciones cortas ("adelante", "gira a la izquierda").

**1.2 Mostrar la plataforma**

Se proyecta studio.code.org y se resuelve en conjunto el primer reto del curso asignado, explicando en voz alta qué hace cada bloque antes de arrastrarlo.

---

### Fase 2: Experimentación (20–30 min)

**2.1 Trabajo individual o en parejas**

Cada estudiante o pareja avanza a su propio ritmo dentro del curso asignado según su nivel de entrada, resolviendo los retos de laberinto en orden.

**2.2 Observar y corregir**

Si un reto falla, el estudiante debe observar en qué parte de la secuencia de bloques estuvo el error y reordenar o ajustar antes de intentar de nuevo. Este paso de prueba y corrección es el corazón pedagógico de la actividad, igual que en cualquier programación posterior sobre un robot real.

**2.3 Avanzar hasta el punto definido para su nivel**

Cada estudiante avanza hasta la etapa indicada en la tabla de "Niveles de entrada" para su nivel (bucle simple, condicional o función), sin necesidad de completar el curso entero en esta sesión.

---

### Fase 3: Reflexión (5–10 min)

1. Cada estudiante o pareja comenta un reto que le costó resolver y qué cambió para lograrlo.
2. El docente pregunta: "¿Qué bloque usaron para no repetir la misma instrucción muchas veces?" (nivel 1-2) o "¿Qué bloque usaron para que el programa decidiera algo por sí mismo?" (nivel 2-3).
3. Se introduce el vocabulario: **secuencia**, **bucle** y **condicional** son los mismos bloques lógicos que luego se van a usar para programar un robot real con MakeCode, Scratch o código de texto.

---

## Variantes y extensiones

**Para grupos más avanzados dentro del mismo nivel:**
- Pedir que resuelvan el mismo laberinto de dos formas distintas (con y sin bucle) y comparen cuál código es más corto
- En Course E o F, retar a crear una función propia con un nombre descriptivo antes de usarla en el laberinto

**Para grupos que necesitan más apoyo:**
- Resolver los primeros retos en pareja con roles definidos: quien arrastra los bloques y quien observa el resultado
- Repetir el mismo reto con tarjetas físicas de flechas antes de pasar a la pantalla, para quienes necesiten apoyo concreto antes de lo digital

**Puente hacia el robot físico:**
- Antes de pasar a la práctica [02. Robot avanza y se detiene](../02.%20Robot%20avanza%20y%20se%20detiene/README.md), recordar al grupo que los mismos bloques de secuencia, bucle y condicional que usaron en Code.org existen en MakeCode y Scratch, y que ahora los van a usar para mover un robot de verdad

---

## Indicadores de éxito

Al finalizar, el estudiante debería poder responder:

- ¿Qué pasa si cambio el orden de dos bloques en la secuencia?
- ¿Para qué sirve el bloque de repetir, y por qué es mejor que copiar la misma instrucción varias veces?
- Si su nivel llegó a condicionales: ¿qué decisión distinta toma el programa cuando encuentra algo distinto en el camino?

---

## Notas docentes

**Errores frecuentes y cómo anticiparlos:**

- **Arrastrar bloques al azar sin planificar:** algunos estudiantes prueban combinaciones por ensayo y error sin observar el laberinto primero. Vale la pena pedir que "recorran con el dedo" la ruta en pantalla antes de arrastrar bloques.
- **Confundir el bucle con una simple repetición manual:** el estudiante arrastra el mismo bloque varias veces en vez de usar "repetir". Conviene mostrar explícitamente cuántos bloques ahorra el bucle.
- **Frustración ante el primer error:** es normal y esperado que el primer intento falle. El docente debe enmarcar el error como parte del proceso, no como una falla del estudiante.

**Gestión del tiempo:** si la conectividad o el número de dispositivos es limitado, trabajar por estaciones rotativas. Esta práctica puede repartirse en varias sesiones cortas en lugar de una sola sesión larga, ya que Code.org guarda el avance de cada estudiante si se usa una cuenta o sección de clase.

---

## Recursos relacionados

- [`README.md` — Prácticas Guiadas](../README.md): índice de la progresión completa de prácticas guiadas de robótica.
- [`02. Robot avanza y se detiene/README.md`](../02.%20Robot%20avanza%20y%20se%20detiene/README.md): siguiente práctica de la progresión, donde la misma lógica de secuencia y tiempo se aplica sobre un robot físico.
- [`../../04. Microcontroladores/05. Progresión de Programación/02. Bloques/01. MakeCode Basico.md`](../../../04.%20Microcontroladores/05.%20Progresión%20de%20Programación/02.%20Bloques/01.%20MakeCode%20Basico.md): siguiente paso natural en programación por bloques, ya sobre una plataforma de microcontrolador real.
