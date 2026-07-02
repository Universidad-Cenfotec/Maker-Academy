# Comunicación entre Dispositivos

> Este archivo pertenece a: **Microcontroladores**
> Ruta: `01. Bloques Temáticos/04. Microcontroladores/04. Comunicacion entre Dispositivos/README.md`

---

## Estado

**Estado:** Completo
**Versión:** v1.1
**Bloque:** 04_microcontroladores

---

## Propósito

<img width="320" alt="Módulo Bluetooth HC-05 para comunicación serial inalámbrica, uno de los módulos más usados en proyectos educativos con UART" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Bluetooth_module_HC-05.jpg/320px-Bluetooth_module_HC-05.jpg" />

<img width="500" alt="Diagrama del bus I2C mostrando un maestro conectado a múltiples esclavos con las líneas SDA y SCL" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/I2C.svg/640px-I2C.svg.png" />

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

- [UART](01. UART.md)
- [I2C](02. I2C.md)
- [SPI](03. SPI.md)
- [Bluetooth y WiFi](04. Bluetooth y WiFi.md)

## Imagen sugerida

Diagrama comparativo de UART, I2C y SPI mostrando el número de cables y la topología de conexión de cada protocolo.

## Nota docente

Para la mayoría de proyectos educativos de nivel secundaria, con UART y I2C es suficiente. SPI se introduce cuando hay un proyecto específico que lo requiere (datalogger con SD, pantalla a color).

Lo más importante para los estudiantes no es memorizar los protocolos, sino entender que **los dispositivos electrónicos necesitan "idiomas" compartidos para comunicarse**, y que elegir el protocolo correcto es parte del diseño del sistema.
