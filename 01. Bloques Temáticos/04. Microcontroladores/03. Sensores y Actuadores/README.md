# Sensores y Actuadores

Esta sección cubre los componentes físicos que conectan el programa con el mundo real. Los sensores traen información desde el exterior hacia el microcontrolador; los actuadores llevan las decisiones del programa de vuelta al mundo físico. La combinación de ambos es lo que hace de la programación física algo cualitativamente distinto de la programación de pantalla.

---

## Contenido de esta sección

| Archivo | Qué cubre |
|---|---|
| `01. Sensor de Luz.md` | LDR, divisor de tensión, calibración, módulo KY-018 |
| `02. Sensor de Distancia.md` | HC-SR04, tiempo de vuelo, fórmula, librería NewPing |
| `03. Servomotor.md` | SG90 / MG996, colores de cables, librería Servo.h, fuente externa |
| `04. Motor DC y Driver.md` | L298N, puente H, tabla de dirección, control de velocidad por PWM |

---

## El principio "sensor antes que lógica"

Una práctica de diseño que conviene instalar desde el principio: nunca programar la lógica de respuesta antes de haber verificado que el sensor funciona correctamente y que los valores que entrega tienen sentido.

El flujo correcto es:

1. Conectar el sensor
2. Leer y mostrar sus valores en el monitor serial sin ninguna lógica de respuesta
3. Observar el rango real en el ambiente real donde se usará el proyecto
4. Definir umbrales y lógica basándose en esos valores observados
5. Agregar los actuadores y probarlos por separado
6. Integrar sensor + lógica + actuador

Saltarse los pasos 2 y 3 es la causa más frecuente de proyectos que "no funcionan" en el makerspace. Los valores de un sensor de luz en una habitación iluminada con fluorescentes son completamente diferentes a los de un sensor en una habitación con luz solar directa. No hay valores de umbral universales: hay valores que funcionan en ese ambiente específico, que se descubren midiendo.

---

## Sensores cubiertos en esta sección

**Sensor de luz (LDR):** El más simple de los sensores analógicos. No requiere librerías ni protocolos especiales: es una resistencia que cambia su valor con la luz, conectada en un divisor de tensión. Es el mejor primer sensor para aprender el flujo lectura → conversión → umbral → acción.

**Sensor de distancia (HC-SR04):** Sensor ultrasónico de uso muy extendido en robótica educativa. Introduce el concepto de medición por tiempo de vuelo, que es también el principio del radar y del LiDAR de vehículos autónomos. Requiere una función de lectura con temporización precisa.

---

## Actuadores cubiertos en esta sección

**Servomotor:** Permite controlar posición angular con precisión. La capacidad de decirle a un motor "ve exactamente a 90 grados" (en lugar de simplemente "gira") abre proyectos de robótica articulada, mecanismos, y control preciso de movimiento.

**Motor DC con driver L298N:** La base de casi todo robot con ruedas. Introduce el concepto de puente H para control de dirección y PWM para control de velocidad, y enseña por qué es necesario aislar el motor del pin del microcontrolador.

---

## Flujo de trabajo general para un nuevo sensor

```
1. Revisar el datasheet o ficha del sensor
   → ¿Qué voltaje necesita? ¿Qué tipo de señal produce?
   → ¿Cuántos cables tiene y qué función tiene cada uno?

2. Conectar en protoboard antes de soldar
   → GND, VCC (voltaje correcto), señal

3. Programa mínimo: solo leer e imprimir
   → No hay lógica, no hay actuadores, solo Serial.println()

4. Observar en monitor serial o plotter
   → Rango real en el ambiente de uso
   → ¿Hay ruido? ¿Hay saturación en algún extremo?

5. Definir umbrales
   → Basados en observación, no en suposición

6. Agregar actuador y lógica
   → Probar actuador solo primero (¿funciona el servo? ¿el motor gira?)
   → Luego integrar todo

7. Iterar
   → El primer umbral rara vez es el correcto
```

Este flujo aplica al sensor de luz, al sensor de distancia, al sensor de temperatura o a cualquier sensor nuevo. La diferencia entre proyectos que funcionan y proyectos que no reside casi siempre en haber (o no haber) seguido estos pasos.
