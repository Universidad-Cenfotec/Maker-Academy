# LED y Resistencia: El Primer Circuito que Enciende una Luz

> Este archivo pertenece a: **Electrónica Maker**
> Ruta: `01_bloques-tematicos/03.Electrónica Maker/02.Circuitos Simples/01.led-resistencia.md`

---

## Estado

- **Estado:** Borrador
- **Versión:** v1.0
- **Bloque:** 03.Electrónica Maker

---

## Descripción

Este es el **primer circuito** del bloque. Enseña qué es un **LED**, para qué sirve la **resistencia** que lo acompaña, y cómo se conectan para encender una luz. Repasa los conceptos de voltaje, corriente y resistencia vistos en Fundamentos, y los aplica en un circuito real (o simulado). Es la base de todos los circuitos que veremos después.

---

## Contenido

### 1. ¿Qué es un LED?

Un **LED** (siglas en inglés de "diodo emisor de luz") es un componente que **se enciende** cuando pasa corriente por él. Es una lucecita pequeña que usamos en muchísimos aparatos: luces de los celulares, semáforos, juguetes, televisores y más.

**Datos importantes del LED:**

- Tiene **dos patitas**: una más **larga** (positiva, ánodo) y una más **corta** (negativa, cátodo).
- La corriente debe entrar por la pata larga y salir por la corta. Si se conecta al revés, **no enciende**.
- Necesita poca corriente para encender, pero si recibe **demasiada**, se quema.

![LED con sus dos patas: larga (positiva) y corta (negativa)](<../../../Recursos visuales/Fotografías/led-patitas.jpg>)

**Idea clave:** el LED es una lucecita que enciende cuando la corriente pasa en la dirección correcta.

---

### 2. Repaso: ¿qué necesitamos para encenderlo?

Para encender un LED necesitamos tres cosas que ya conocemos de Fundamentos:

1. **Una fuente de energía** (voltaje) — por ejemplo, una pila de 9 V o de 3 V.
2. **Un camino para la corriente** (los cables) — que conecta todo.
3. **Un control de la corriente** (la resistencia) — para que el LED no reciba de más.

Recordemos la **ley de Ohm**, que relaciona estas tres magnitudes:

\[V = I \times R\]

- **V** = voltaje (voltios) — la "fuerza" que empuja la corriente.
- **I** = corriente (amperios) — cuánta corriente circula.
- **R** = resistencia (ohmios) — cuánto "frena" el paso de la corriente.

![Triángulo de la ley de Ohm: V = I × R](<../../../Recursos visuales/Fotografías/triangulo-ohm.jpg>)

**Idea clave:** sin resistencia, el LED recibiría toda la corriente de golpe y se quemaría. La resistencia lo protege.

---

### 3. ¿Por qué el LED necesita una resistencia?

Imaginemos que conectamos un LED directamente a una pila de 9 V. El LED no tiene casi resistencia propia, así que por él pasaría **mucha corriente** de golpe y **se quemaría** en segundos (y a veces hasta huele feo).

La **resistencia** se coloca en el camino de la corriente para **limitar cuánta pasa**. Así el LED recibe solo la corriente que necesita y enciende de forma segura.

**Analogía:** la resistencia es como una **manguera con una llave**: si abrimos la llave de golpe, el agua sale con mucha fuerza y puede romper algo; la resistencia es esa llave que regula cuánta agua (corriente) pasa.

![Circuito con pila, resistencia y LED conectados en serie](<../../../Recursos visuales/Fotografías/circuito-led-resistencia.jpg>)

**Idea clave:** la resistencia es la "llave" que protege al LED de recibir demasiada corriente.

---

### 4. ¿Cómo se conecta el circuito?

El circuito más simple con un LED tiene **cuatro partes conectadas en un lazo** (en serie):

1. La **pila** (fuente de voltaje).
2. Un **cable** desde la pila hasta la resistencia.
3. La **resistencia** (protege al LED).
4. El **LED** (la pata larga hacia la resistencia, la corta hacia la pila).

El orden del lazo puede variar, pero siempre forma un **círculo cerrado** para que la corriente pueda circular.

![Esquema del circuito LED + resistencia en serie](<../../../Recursos visuales/Fotografías/esquema-led-resistencia.jpg>)

**Idea clave:** un circuito cerrado es un lazo: la corriente sale de la pila, pasa por la resistencia y el LED, y regresa a la pila.

---

### 5. ¿Qué resistencia usamos? (cálculo sencillo)

Para elegir la resistencia, usamos la **ley de Ohm**. Veamos un ejemplo con una pila de **9 V** y un LED que necesita **20 mA** (0,02 A) de corriente:

\[R = \frac{V}{I} = \frac{9}{0.02} = 450\ \Omega\]

Como 450 Ω no es un valor común, usamos la resistencia comercial más cercana: **470 Ω** (o 1 kΩ, que también funciona y protege aún más).

**Idea clave:** con la ley de Ohm calculamos qué resistencia necesitamos para que el LED reciba la corriente justa.

---

### 6. Resumen

| Concepto | ¿Qué es? | ¿Para qué sirve? |
|---|---|---|
| **LED** | Una lucecita que enciende con corriente | Indicar, iluminar, decorar |
| **Resistencia** | Un componente que limita la corriente | Proteger al LED de quemarse |
| **Pila** | Fuente de voltaje | Dar la energía al circuito |
| **Ley de Ohm** | \(V = I \times R\) | Calcular la resistencia correcta |

---
## Recursos relacionados

### Videos recomendados (nivel principiante)

- [Hacer un LED parpadeante con Tinkercad](https://www.youtube.com/watch?v=0Tq8lX56B6Q) — Video en español que muestra cómo armar un circuito con LED y resistencia en Tinkercad (sin protoboard), ideal para este bloque. [1]
- [Cálculo de resistencia para un LED](https://www.youtube.com/shorts/j2v-7S9_GVY) — Explica cómo calcular la resistencia necesaria para un LED usando la ley de Ohm. Nota: el video tiene auto-doblaje activado por defecto; los estudiantes deben desactivarlo para escuchar el audio original en español. [2]

### Otros recursos
principiante)._

### Otros recursos

- [`00.README.md`](00.README.md) — Índice del bloque y guía de navegación.
- [Fundamentos de Electrónica](../01.Fundamentos%20de%20Electrónica/00.README.md) — Voltaje, corriente, resistencia y ley de Ohm (prerrequisito).
- **Tinkercad** (https://www.tinkercad.com) — Simulador donde se puede armar y probar este circuito.

---

## Notas docentes

- Se recomienda **mostrar un LED físico** si es posible, para que los estudiantes vean las dos patitas (larga y corta).
- El cálculo de la resistencia es **opcional** para niveles iniciales; lo importante es entender *por qué* se necesita la resistencia.
- Las imágenes pueden generarse en **Tinkercad u otro software de simulación** (por ejemplo, simuladores de circuitos en línea), según disponibilidad.
- Este circuito es la base de todos los demás del bloque: dominarlo facilita los siguientes temas.
