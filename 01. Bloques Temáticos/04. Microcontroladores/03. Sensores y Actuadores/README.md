# Sensores y Actuadores

> Este archivo pertenece a: **Microcontroladores**
> Ruta: `01. Bloques Temáticos/04. Microcontroladores/03. Sensores y Actuadores/README.md`

---

## Estado

**Estado:** Completo
**Versión:** v1.1
**Bloque:** 04_microcontroladores

---

## Descripción

Esta carpeta documenta los sensores y actuadores más usados en proyectos educativos: sensor de luz, sensor de distancia, servomotor y motor DC con su driver.

---

## Propósito

Los microcontroladores por sí solos no hacen nada. Su valor está en que pueden **leer el mundo** (sensores) y **actuar sobre él** (actuadores). Esta carpeta cubre los sensores y actuadores más utilizados en proyectos educativos.

---

## ¿Qué es un sensor?

Un sensor es cualquier componente que convierte algo del mundo físico en una señal eléctrica que el microcontrolador puede leer:
- **Sensor de luz (LDR):** convierte la intensidad de luz en un número
- **Sensor de distancia (HC-SR04):** convierte la distancia a un objeto en un número
- **Sensor de temperatura:** convierte la temperatura en un número

---

## ¿Qué es un actuador?

Un actuador es cualquier componente que convierte una señal eléctrica del microcontrolador en algo del mundo físico:
- **LED:** convierte electricidad en luz
- **Servomotor:** convierte una señal en movimiento a un ángulo específico
- **Motor DC:** convierte electricidad en rotación continua
- **Buzzer:** convierte electricidad en sonido

---

## Sensores y actuadores disponibles

| Componente | Tipo | Nivel recomendado |
|---|---|---|
| `01. Sensor de Luz.md` | Sensor analógico | Primaria alta, Secundaria |
| `02. Sensor de Distancia.md` | Sensor digital | Secundaria |
| `03. Servomotor.md` | Actuador de posición | Secundaria |
| `04. Motor DC y Driver.md` | Actuador de movimiento | Secundaria |

---

## Sensores adicionales frecuentes en proyectos

Estos no tienen ficha propia aquí pero se usan mucho en proyectos educativos:

| Sensor | ¿Qué mide? | Fácil de usar |
|---|---|---|
| DHT11 / DHT22 | Temperatura y humedad del aire | ✅ (librería simple) |
| HC-SR501 (PIR) | Movimiento de personas | ✅ (solo HIGH/LOW) |
| Sensor de suelo | Humedad del suelo para plantas | ✅ |
| Sensor de sonido | Nivel de ruido o aplausos | ✅ |
| Sensor de color | Detecta el color de superficies | ✅ (con librería) |
| Sensor de gas (MQ-2) | Detecta gas, humo o alcohol | ⚠️ (necesita calibración) |
| Sensor de pulso cardíaco | Frecuencia cardíaca | ✅ |

---

## Aplicación en Maker Academy

Se usa como guía de referencia para seleccionar los componentes adecuados según el proyecto. Ayuda a los docentes a entender la diferencia entre sensores (entrada) y actuadores (salida).

## Recursos relacionados

- [Sensor de Luz](01.%20Sensor%20de%20Luz.md)
- [Sensor de Distancia](02.%20Sensor%20de%20Distancia.md)
- [Servomotor](03.%20Servomotor.md)
- [Motor DC y Driver](04.%20Motor%20DC%20y%20Driver.md)

## Nota docente

La secuencia recomendada para introducir sensores y actuadores es:

1. **Primero el actuador:** hacer que un LED parpadee, que un servo se mueva. El estudiante "controla" algo.
2. **Luego el sensor:** leer un valor del ambiente (luz, temperatura, distancia). El estudiante "escucha" algo.
3. **Finalmente, conectarlos:** cuando detecta oscuridad, encender el LED. Cuando detecta que alguien se acerca, mover el servo. El estudiante crea un sistema que "toma decisiones".

Esta progresión construye la intuición de los sistemas de control, que es el corazón de la robótica y la automatización.
