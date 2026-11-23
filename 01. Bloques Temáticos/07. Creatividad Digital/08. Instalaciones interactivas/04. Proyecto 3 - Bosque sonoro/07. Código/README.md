# Código

> Este archivo pertenece a: **Bloque 7: Proyectos innovadores y creatividad digital**
> Ruta: `01_bloques-tematicos/07_creatividad-digital/08. Instalaciones interactivas/04. Proyecto 3 - Bosque sonoro/07. Código/README.md`

---

## Estado

**Estado:** Borrador
**Versión:** v1.0
**Bloque:** 07_creatividad-digital

---

## Descripción

Código del Proyecto 3.

---

## Propósito

Guardar el código del Proyecto 3 listo para copiar a cada placa.

---

## Contenido de esta carpeta

| Archivo | Descripción |
|---|---|
| [`guardian_del_bosque.js`](./guardian_del_bosque.js) | micro:bit V2, Primaria (MakeCode): "El guardián del bosque", con día y noche según la luz y tres plantas táctiles. |
| [`guardian_ideaboard_code.py`](./guardian_ideaboard_code.py) | IdeaBoard, Primaria (IdeaCode): adaptación del guardián con fotorresistencia y buzzer. |
| [`planta_lectura.ino`](./planta_lectura.ino) | IdeaBoard o ESP32, Secundaria (Arduino IDE): prueba del sensor; también envía las lecturas a la computadora. |
| [`planta_ble_midi.ino`](./planta_ble_midi.ino) | IdeaBoard o ESP32, Secundaria (Arduino IDE): planta musical por Bluetooth MIDI para GarageBand. |
| [`planta_midi.py`](./planta_midi.py) | Secundaria, versión con computadora: convierte las lecturas en notas MIDI para REAPER. |

---

## Cómo usar esta carpeta

- **Archivos `.py`:** se abren en IdeaCode y se guardan en la IdeaBoard con el nombre `code.py`.
- **Archivos `.ino`:** se abren en Arduino IDE. Cada uno debe ir dentro de una carpeta con el mismo nombre.
- **Archivo `.js` de micro:bit:** se pega en la vista JavaScript de [makecode.microbit.org](https://makecode.microbit.org) y luego se cambia a Bloques.

---

## Relación con XperiencED Maker

- **Inspiración:** el código terminado muestra lo que se puede lograr.
- **Experimentación:** los estudiantes leen, comentan y cambian los ajustes.
- **Reflexión:** comparan su versión con la original y explican los cambios.

---

## Recursos relacionados

- [`README.md — Proyecto 3`](../README.md): Índice del proyecto.
- [`05. Plataformas/`](../05.%20Plataformas/): Guías por placa.

---

## Nota docente

El código se revisó con un simulador de las librerías. Antes de la clase, cárguelo en la placa real y ajuste los pines y valores marcados como ajustes.
