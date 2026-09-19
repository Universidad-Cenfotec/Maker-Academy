# Uso del Protoboard: Cómo Conectar Componentes sin Soldar

> Este archivo pertenece a: **Electrónica Maker**
> Ruta: `01_bloques-tematicos/03.Electrónica Maker/03.Protoboard y Medición/01.uso-protoboard.md`

---

## Estado

- **Estado:** Borrador
- **Versión:** v1.0
- **Bloque:** 03.Electrónica Maker

---

## Descripción

Este documento explica **qué es el protoboard y para qué sirve**. Es una placa que permite conectar componentes **sin soldar**, lo que la hace ideal para **probar circuitos** antes de armarlos de forma definitiva. Se compara cómo se ve un circuito conectado **sin protoboard** y **dentro de una protoboard**, usando como ejemplo el circuito del pulsador del documento 02.

> **Importante:** durante este bloque el protoboard se usa **simulado en Tinkercad**. El armado con un protoboard real se hace recién en las **mini-lecciones y prácticas guiadas**.

---

## Repaso general

En el documento [02.pulsador-switch.md](../02.%20Circuitos%20Simples/02.pulsador-switch.md) armamos un circuito con **pila, pulsador, resistencia y LED**. Ahí conectamos los componentes **cable a cable, sin una placa**. En este documento vemos que ese mismo circuito se puede armar de forma mucho más ordenada usando un **protoboard**.

**Idea clave:** el protoboard es una **herramienta para conectar componentes** sin soldar, de forma rápida y ordenada.

---

## Contenido

### 1. ¿Qué es un protoboard?

Un **protoboard** (también llamado breadboard) es una **placa con orificios** donde se insertan los componentes y los cables. Por dentro, esos orificios están **conectados entre sí en filas**, de modo que al insertar dos patitas en la misma fila, esas dos patitas quedan conectadas eléctricamente.

**Datos importantes del protoboard:**

- Permite **conectar y desconectar** componentes fácilmente, sin soldar.
- Se usa para **probar** un circuito antes de hacer la versión definitiva.
- Tiene **filas conectadas** que hacen las veces de "cables invisibles" entre los componentes.

**Analogía:** el protoboard es como una **mesa con agujeros** donde puedes clavar y desclavar las piezas (componentes) cuando quieras, sin pegarlas. Si te equivocas, las sacas y las vuelves a poner.

**Idea clave:** el protoboard conecta componentes **sin soldar**, juntando las patitas que se insertan en la misma fila.

---

### 2. El circuito del pulsador sin protoboard

Recordemos cómo se veía el circuito del pulsador del documento 02, conectado **cable a cable, sin protoboard**:

![Circuito del pulsador sin protoboard: pila, pulsador, resistencia y LED conectados en cadena](<../../../Recursos visuales/Fotografías/circuito-pulsador-sin-protoboard.png>)

**Qué observamos:**
- Los componentes se conectan **uno tras otro**, de extremo a extremo.
- Cada unión se hace **en la patita de un componente**, donde se tocan varios cables.
- Si hay que **cambiar un componente**, hay que desarmar varias conexiones.

**Idea clave:** sin protoboard, el circuito funciona, pero las conexiones son **más frágiles y menos ordenadas**.

---

### 3. El mismo circuito dentro de una protoboard

Ahora, el **mismo circuito del pulsador** armado dentro de un protoboard:

![Circuito del pulsador dentro de un protoboard: los componentes se insertan en las filas](<../../../Recursos visuales/Fotografías/circuito-pulsador-protoboard.gif>)

**Qué observamos:**
- Cada componente se inserta en **un orificio** del protoboard.
- Los componentes que van en la **misma fila** quedan conectados entre sí.
- El circuito se ve **más ordenado** y es **más fácil de modificar**.

**Idea clave:** en el protoboard, las **filas conectadas** hacen el trabajo de los cables, así que el circuito queda más limpio y fácil de cambiar.

---

### 4. Sin protoboard vs. con protoboard: comparación

| | **Sin protoboard** | **Con protoboard** |
|---|---|---|
| ¿Cómo se conectan? | Cable a cable, en cadena | Se insertan en filas |
| ¿Dónde se unen los cables? | En las patitas de los componentes | En los orificios de la misma fila |
| ¿Es ordenado? | Menos ordenado | Más ordenado |
| ¿Es fácil de cambiar? | Hay que desarmar conexiones | Solo se mueve el componente |
| ¿Se usa para probar? | No es lo ideal | Sí, es su propósito |

**Analogía:** sin protoboard es como **unir piezas con la mano, una a una**; con protoboard es como **encajarlas en una plantilla con huecos** donde ya sabes dónde va cada una.

**Idea clave:** el protoboard **organiza** las conexiones y hace más fácil **probar y modificar** un circuito.

---

### 5. ¿Cuándo se usa un protoboard?

El protoboard se usa cuando **queremos probar un circuito** antes de hacer la versión definitiva:

- Para **experimentar** con componentes sin dañarlos.
- Para **corregir** conexiones rápido, sin desoldar.
- Para **enseñar** electrónica, porque es fácil de ver y de modificar.

**Idea clave:** el protoboard es el **"taller de pruebas"** del electrónico: ahí se arma, se prueba y se corrige antes de soldar.

---

### 6. Resumen

| ¿Qué es? | ¿Para qué sirve? | ¿Cómo conecta? |
|---|---|---|
| Una placa con orificios | Probar circuitos sin soldar | Juntando las patitas de una misma fila |

---

## Recursos relacionados

### Otros recursos

- [`00.README.md`](00.README.md) — Índice del bloque y guía de navegación.
- [`02.uso-multimetro.md`](02.uso-multimetro.md) — El multímetro, para medir lo que pasa en el circuito.
- [`03.cables-jumper.md`](03.cables-jumper.md) — Los cables que conectan el protoboard.
- [02.pulsador-switch.md](../02.%20Circuitos%20Simples/02.pulsador-switch.md) — El circuito que se usa como ejemplo en este documento.
- [Circuitos Simples](../02.%20Circuitos%20Simples/00.README.md) — Los circuitos que aquí se arman en el protoboard.
- **Tinkercad** (https://www.tinkercad.com) — Simulador donde se practica este bloque.

---

## Notas docentes

- Se recomienda **repasar el circuito del pulsador** (documento 02) antes de esta lección, ya que se usa como ejemplo.
- La comparación **sin protoboard vs. con protoboard** es la idea central: el mismo circuito, dos formas de conectarlo.
- Las imágenes son **capturas de pantalla de Tinkercad**: una del circuito conectado cable a cable y otra del mismo circuito dentro del protoboard.
- El protoboard se usa **simulado en Tinkercad** durante este bloque; el protoboard físico se introduce en las **mini-lecciones y prácticas guiadas**.
- Este documento prepara el terreno para el **multímetro** (documento 02): una vez que el circuito está en el protoboard, se puede medir.
