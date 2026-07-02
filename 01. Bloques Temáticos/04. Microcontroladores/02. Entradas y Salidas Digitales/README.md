# Entradas y Salidas Digitales

> Este archivo pertenece a: **Microcontroladores**
> Ruta: `01. Bloques Temáticos/04. Microcontroladores/02. Entradas y Salidas Digitales/README.md`

---

## Estado

**Estado:** Completo
**Versión:** v1.1
**Bloque:** 04_microcontroladores

---

## Propósito

<img width="480" alt="Comparación de señal digital (cuadrada 0/1) y señal analógica (sinusoidal) en un osciloscopio" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Duty_Cycle_Examples.png/480px-Duty_Cycle_Examples.png" />

Esta carpeta cubre cómo el microcontrolador se comunica con el mundo a través de sus pines: cómo leer sensores y botones (entradas) y cómo controlar LEDs, motores y actuadores (salidas).

---

## Contenido

| Archivo | Concepto | Nivel recomendado |
|---|---|---|
| `01. Pines Digitales.md` | Señales de encendido/apagado | Primaria alta, Secundaria |
| `02. Entradas Analógicas.md` | Leer valores continuos (temperatura, luz, posición) | Secundaria |
| `03. PWM.md` | Control de brillo y velocidad | Secundaria |
| `04. Monitor Serial.md` | Ver lo que pasa dentro del programa | Secundaria |

---

## La diferencia entre digital y analógico

**Digital:** solo tiene dos estados posibles. Como un interruptor de luz: encendido o apagado, 1 o 0.
- Ejemplos: botones, LEDs, sensores de movimiento PIR, relés

**Analógico:** puede tener cualquier valor dentro de un rango. Como la temperatura: no es solo "caliente o frío", sino exactamente cuántos grados.
- Ejemplos: potenciómetros, sensores de luz (LDR), termistores, sensores de humedad

**PWM:** una técnica para simular valores intermedios usando señales digitales. Permite controlar el brillo de un LED o la velocidad de un motor con una señal que técnicamente solo tiene dos estados.

---

## Aplicación en Maker Academy

Se usa como punto de entrada al módulo de E/S para que los docentes entiendan la diferencia entre señales digitales y analógicas antes de trabajar con sensores y actuadores.

## Recursos relacionados

- [Pines Digitales](01. Pines Digitales.md)
- [Entradas Analógicas](02. Entradas Analogicas.md)
- [PWM](03. PWM.md)
- [Monitor Serial](04. Monitor Serial.md)

## Imagen sugerida

Diagrama comparativo entre señal digital (cuadrada, 0 y 1) y señal analógica (sinusoidal, valores continuos).

## Nota docente

Para introducir estos conceptos, se recomienda esta progresión:

1. **Pines digitales:** hacer parpadear un LED (OUTPUT) y luego leer un botón (INPUT). Son los conceptos más concretos y visuales.
2. **Entradas analógicas:** conectar un potenciómetro y ver cómo los números cambian en el Monitor Serial al girar la perilla.
3. **PWM:** controlar el brillo del LED con el potenciómetro. Aquí se conectan los dos conceptos anteriores.
4. **Monitor Serial:** usarlo desde el principio como herramienta de exploración, no como tema separado.

El Monitor Serial no es un tema aparte: es una herramienta que se usa en todos los demás temas. Se recomienda presentarlo desde la primera sesión y usarlo constantemente.
