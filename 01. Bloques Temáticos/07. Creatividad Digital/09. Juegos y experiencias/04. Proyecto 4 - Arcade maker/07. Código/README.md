# Código

> Este archivo pertenece a: **Bloque 7: Proyectos innovadores y creatividad digital**
> Ruta: `01_bloques-tematicos/07_creatividad-digital/09. Juegos y experiencias/04. Proyecto 4 - Arcade maker/07. Código/README.md`

---

## Estado

**Estado:** Borrador
**Versión:** v1.0
**Bloque:** 07_creatividad-digital

---

## Descripción

Código del Proyecto 4.

---

## Propósito

Guardar el código del Proyecto 4 listo para copiar a cada placa.

---

## Contenido de esta carpeta

| Archivo | Descripción |
|---|---|
| [`juego.html`](./juego.html) | Estructura de la página del juego (HTML). Es el archivo que se abre en Chrome o Edge. |
| [`estilos.css`](./estilos.css) | Apariencia de la página: colores, tamaños y distribución (CSS). |
| [`juego.js`](./juego.js) | Programa del juego: reglas, diseño en pixel art, controles, dibujo y lógica (JavaScript). |
| [`control_botones_code.py`](./control_botones_code.py) | IdeaBoard: control de dos botones de arcade en IO05 e IO18 (versión del prototipo). |
| [`control_joystick_botones_code.py`](./control_joystick_botones_code.py) | IdeaBoard: alternativa con joystick (VRx en IO34, SW en IO04) y dos botones. |
| [`arduino_uno.ino`](./arduino_uno.ino) | Control alternativo con Arduino Uno. |
| [`esp32.ino`](./esp32.ino) | Control alternativo con ESP32 genérico o IdeaBoard en Arduino IDE. |
| [`tapa-consola.svg`](./tapa-consola.svg) | Mejora opcional: tapa de la consola para corte láser (rojo corta, azul graba). |
| [`probeta-botones.svg`](./probeta-botones.svg) | Probeta para elegir el diámetro de los agujeros de los botones. |

---

## Cómo usar esta carpeta

- **Archivos `.py`:** se abren en IdeaCode y se guardan en la IdeaBoard con el nombre `code.py`.
- **Archivos `.ino`:** se abren en Arduino IDE. Cada uno debe ir dentro de una carpeta con el mismo nombre.
- **Juego:** los archivos `juego.html`, `estilos.css` y `juego.js` deben estar siempre en la misma carpeta, porque el HTML los enlaza con rutas relativas. Se abre `juego.html` con doble clic en Chrome o Edge de computadora; no necesita internet. Si Web Serial no funciona así, ejecute `py -m http.server` en esta carpeta y abra `http://localhost:8000/juego.html`.
- **Reglas del juego:** se cambian en la sección 1 de `juego.js` (`VIDAS`, `PUNTOS_POR_NIVEL`, `VELOCIDAD_INICIAL`, `PROB_BOLSA` y `TAMANO_OBJETOS`).
- **Diseño del juego:** las figuras en pixel art y los colores se cambian en la sección 2 de `juego.js` (`MEDUSA`, `BOLSA`, `COLORES_MEDUSA`, `COLORES_BOLSA` y `COLORES_MAR`); la tortuga, en la función `dibujarTortuga()`.
- **Programas `.py`:** corresponden al control físico opcional de Secundaria.
- **Código de micro:bit:** está en la guía `02. Microbit.md` y se pega en la vista JavaScript de MakeCode.

---

## Relación con XperiencED Maker

- **Inspiración:** el código terminado muestra lo que se puede lograr.
- **Experimentación:** los estudiantes leen, comentan y cambian los ajustes.
- **Reflexión:** comparan su versión con la original y explican los cambios.

---

## Recursos relacionados

- [`README.md — Proyecto 4`](../README.md): Índice del proyecto.
- [`05. Plataformas/`](../05.%20Plataformas/): Guías por placa.

---

## Nota docente

Los nombres de pines de los programas de IdeaBoard coinciden con la definición oficial de la placa en CircuitPython. Antes de la clase, cargue el programa en la placa real y verifique en la consola de IdeaCode que las lecturas cambien al presionar los botones.
