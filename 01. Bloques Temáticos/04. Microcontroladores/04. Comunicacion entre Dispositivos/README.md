# Comunicación entre Dispositivos

> Este archivo pertenece a: **Microcontroladores**
> Ruta: `01. Bloques Temáticos/04. Microcontroladores/04. Comunicacion entre Dispositivos/README.md`

---

## Estado

**Estado:** Completo
**Versión:** v1.1
**Bloque:** 04_microcontroladores

---

## Descripción

Esta carpeta documenta los protocolos de comunicación entre dispositivos electrónicos más usados en proyectos educativos: UART, I2C, SPI, Bluetooth y WiFi.

---

## Propósito

Los microcontroladores raramente trabajan solos. Necesitan comunicarse con sensores, pantallas, módulos inalámbricos y otros microcontroladores. Esta carpeta cubre los protocolos de comunicación más usados en proyectos educativos.

---

## Los cuatro protocolos

| Protocolo | Cables | Velocidad | Ideal para |
|---|---|---|---|
| **UART** (Serial) | 2 | Media | Bluetooth, GPS, módulos simples |
| **I2C** | 2 | Media | Pantallas OLED, sensores múltiples |
| **SPI** | 4 | Alta | Tarjetas SD, pantallas TFT a color |
| **Bluetooth / WiFi** | Inalámbrico | Variable | Control remoto, IoT |

---

## ¿Cuál usar?

**Conectar un módulo Bluetooth o GPS** → UART
**Conectar una pantalla pequeña o varios sensores** → I2C
**Guardar datos en tarjeta SD** → SPI
**Controlar desde el celular o enviar datos a internet** → Bluetooth o WiFi

---

## Aplicación en Maker Academy

Se usa como introducción antes de trabajar con módulos Bluetooth, sensores I2C, tarjetas SD u otros componentes que requieren protocolos de comunicación específicos.

## Recursos relacionados

- [UART](01.%20UART.md)
- [I2C](02.%20I2C.md)
- [SPI](03.%20SPI.md)
- [Bluetooth y WiFi](04.%20Bluetooth%20y%20WiFi.md)

## Nota docente

Para la mayoría de proyectos educativos de nivel secundaria, con UART y I2C es suficiente. SPI se introduce cuando hay un proyecto específico que lo requiere (datalogger con SD, pantalla a color).

Lo más importante para los estudiantes no es memorizar los protocolos, sino entender que **los dispositivos electrónicos necesitan "idiomas" compartidos para comunicarse**, y que elegir el protocolo correcto es parte del diseño del sistema.
