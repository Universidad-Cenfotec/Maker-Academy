# Entradas y Salidas Digitales

Esta sección cubre los conceptos fundamentales para que un microcontrolador lea información del mundo (entradas) y produzca respuestas (salidas). Es el núcleo técnico de la programación física: sin entender cómo funciona un pin digital, cómo el ADC convierte voltaje en número, qué hace exactamente PWM o cómo usar el monitor serial para depurar, el resto del bloque queda sin base.

---

## Contenido de esta sección

| Archivo | Qué cubre |
|---|---|
| `01. Pines Digitales.md` | pinMode, digitalWrite, digitalRead, pull-up, anti-rebote |
| `02. Entradas Analogicas.md` | ADC, potenciómetro, divisor de tensión para LDR y termistor, map(), promediado |
| `03. PWM.md` | Duty cycle, analogWrite(), fade de LED, control de velocidad, servos, tone() |
| `04. Monitor Serial.md` | Serial.begin(), print vs println, depuración, Serial Plotter |

---

## La distinción fundamental: entrada vs. salida

Un pin configurado como **entrada** (INPUT) lee el estado eléctrico del mundo exterior. El microcontrolador escucha. Un pin configurado como **salida** (OUTPUT) impone un estado eléctrico al mundo exterior. El microcontrolador habla.

Esta distinción es tan simple que parece trivial, pero sus implicaciones son profundas. Un LED en un pin de entrada no encenderá porque el pin no suministra corriente. Un botón conectado a un pin de salida puede dañar el microcontrolador si el pin está en HIGH y el botón lo conecta a GND directamente. Configurar correctamente la dirección de cada pin antes de usarlo es el primer paso en cualquier programa.

---

## Digital vs. analógico

La frontera entre lo digital y lo analógico es uno de los conceptos más importantes de la electrónica aplicada.

Lo **digital** es binario: encendido o apagado, 1 o 0, HIGH o LOW. Un botón es digital: está presionado o no lo está. Una señal digital es inmune al ruido pequeño porque basta con que supere la mitad del voltaje para interpretarse como HIGH.

Lo **analógico** es continuo: la temperatura puede ser 23.4 °C o 23.41 °C o cualquier valor intermedio. La luz, el sonido, la presión, la humedad son fenómenos analógicos. Los microcontroladores procesan números enteros, así que el ADC (Convertidor Analógico a Digital) es el traductor entre el mundo físico continuo y el mundo computacional discreto.

El PWM va en la dirección opuesta: convierte un número entero en una señal que parece analógica usando pulsos digitales de duración variable. Es la forma en que el microcontrolador "habla analógico" a pesar de ser un dispositivo digital.

---

## Corriente máxima por pin: la regla que más se viola

Cada pin GPIO de un microcontrolador puede suministrar o absorber una corriente máxima. En el ATmega328P (Arduino UNO) ese límite es 40 mA por pin y 200 mA en total por toda la placa. En el nRF52840 (Circuit Playground Bluefruit) el límite es 15 mA por pin.

Un LED rojo típico con 3.3 V necesita alrededor de 10 mA a 20 mA. Con una resistencia de 220 Ω conectado a 5 V, la corriente es aproximadamente (5 - 2) / 220 ≈ 13.6 mA. Bien dentro del límite.

Un motor DC pequeño puede necesitar 200 mA a 500 mA. Conectarlo directamente a un pin destruiría el microcontrolador. La solución es usar un transistor o driver L298N como intermediario: el pin controla la compuerta del transistor con pocos mA, y el transistor controla el motor con los mA que necesite de una fuente externa.

Entender este límite antes de conectar cualquier componente es tan importante como saber cuál es el voltaje correcto.
