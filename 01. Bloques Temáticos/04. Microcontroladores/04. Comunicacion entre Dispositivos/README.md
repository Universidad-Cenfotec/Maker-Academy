# Comunicación entre Dispositivos

Llega un momento en todo proyecto de programación física donde un solo microcontrolador no es suficiente: se necesita enviar datos a un teléfono, mostrar información en una pantalla OLED, leer un sensor digital que habla I2C o conectar la placa a internet. Para eso existen los protocolos de comunicación.

Un protocolo de comunicación es un conjunto de reglas que dos o más dispositivos siguen para entenderse. Igual que un idioma: no basta con hablar, hay que hablar el mismo idioma al mismo ritmo.

---

## Contenido de esta sección

| Archivo | Qué cubre |
|---|---|
| `01. UART.md` | Comunicación serial, baudrate, SoftwareSerial, módulos HC-05 y GPS |
| `02. I2C.md` | Bus de dos cables, direcciones, scanner, pantalla OLED |
| `03. SPI.md` | Bus de cuatro cables, tarjeta SD, pantalla TFT, NRF24L01 |
| `04. Bluetooth y WiFi.md` | HC-05, ESP32 servidor web, plataformas IoT |

---

## Tabla comparativa de protocolos

| Protocolo | Cables | Dispositivos | Velocidad | Uso típico |
|---|---|---|---|---|
| UART | 2 (TX, RX) | 2 (punto a punto) | 9600 a 115200 bps | Módulos Bluetooth, GPS, monitor serial |
| I2C | 2 (SDA, SCL) | Hasta 127 (con dirección única) | 100 kHz a 400 kHz | Pantallas OLED, sensores digitales, acelerómetros |
| SPI | 4 (MOSI, MISO, SCK, CS) | Múltiples (un CS por dispositivo) | 1 MHz a 20 MHz | Tarjetas SD, pantallas TFT, radio NRF24L01 |
| Bluetooth | Inalámbrico | 2 (maestro/esclavo en BT clásico) | Hasta 3 Mbps | Control remoto, envío de datos a celular |
| WiFi | Inalámbrico | Múltiples en la red | Hasta 150 Mbps | IoT, servidor web, MQTT |

---

## Cómo elegir el protocolo

**Usar UART cuando:** se conecta un módulo externo que ya usa UART (HC-05, GPS NEO-6M, DFPlayer), o cuando se necesita comunicación serial simple entre dos dispositivos.

**Usar I2C cuando:** se conectan múltiples sensores o pantallas y se quiere minimizar el número de cables. Todos los dispositivos I2C comparten el mismo bus de dos cables.

**Usar SPI cuando:** se necesita alta velocidad de transferencia (mostrar imágenes en una pantalla TFT o escribir datos rápido en una tarjeta SD). SPI es más rápido que I2C pero usa más cables.

**Usar Bluetooth cuando:** se quiere control inalámbrico desde un celular sin necesidad de red WiFi. El módulo HC-05 convierte UART en Bluetooth clásico de forma transparente.

**Usar WiFi cuando:** el proyecto necesita conectarse a internet, publicar datos en una plataforma online, o controlarse desde cualquier lugar del mundo. El ESP32 es la plataforma natural para esto.

---

## GND siempre compartido

Independientemente del protocolo, todos los dispositivos en un mismo sistema deben compartir el GND. Sin GND común, las señales de comunicación no tienen referencia y los datos llegan corruptos o no llegan.

Si un módulo externo se alimenta con voltaje diferente al Arduino (por ejemplo, un módulo de 3.3 V conectado a un Arduino de 5 V), hay que verificar la compatibilidad de voltaje de las señales. Los pines de un ESP32 (3.3 V) pueden dañarse si reciben señales de 5 V directamente. En esos casos se usa un divisor de tensión o un convertidor de nivel lógico (level shifter).
