# Avance y Retroceso

> Este archivo pertenece a: **Robótica Educativa**
> Ruta: `01. Bloques Temáticos/05. Robótica/02. Movimiento y Mecanismos/avance-retroceso.md`

---

## Estado

**Estado:** Completo
**Versión:** v1.0
**Bloque:** 05_robotica

---

## Descripción

Hacer que el robot avance es la primera instrucción que cualquier grupo programa. Es también la primera fuente de sorpresas: el robot casi nunca va en línea recta perfecta, y entender por qué eso ocurre ya es un aprendizaje importante.

**Si avanzar fuera como caminar: para ir en línea recta necesitás que tus dos piernas den pasos del mismo tamaño y a la misma velocidad. Si una pierna da pasos más largos, vas a desviarte sin darte cuenta.**

> *Insertar próximamente una imagen: secuencia de tres fotos de un robot con ruedas visto desde arriba — en la primera avanza recto, en la segunda se desvía a la derecha, en la tercera retrocede recto — con una flecha indicando la dirección en cada caso.*

---

## Propósito

Que el docente comprenda cómo se programa el movimiento básico de avance y retroceso, y sepa anticipar y explicar los problemas más comunes que aparecen en esta etapa.

---

## Cómo funciona el avance en un robot diferencial

En un robot con dos motores independientes (configuración diferencial), avanzar significa girar los dos motores en la misma dirección y a la misma velocidad. Si los dos motores giran hacia "adelante", el robot avanza. Si los dos giran hacia "atrás", el robot retrocede.

La clave está en la palabra **misma**: si un motor va más rápido que el otro, el robot se desvía hacia el lado más lento.

---

## Código básico en Arduino

El código varía según el driver de motor que se use. A continuación, el esquema para el L298N (el más común en educación):

```cpp
// Pines del motor izquierdo
const int IN1 = 7;   // dirección 1
const int IN2 = 8;   // dirección 2
const int ENA = 9;   // velocidad (PWM)

// Pines del motor derecho
const int IN3 = 10;  // dirección 1
const int IN4 = 11;  // dirección 2
const int ENB = 6;   // velocidad (PWM)

void setup() {
  pinMode(IN1, OUTPUT);
  pinMode(IN2, OUTPUT);
  pinMode(IN3, OUTPUT);
  pinMode(IN4, OUTPUT);
  pinMode(ENA, OUTPUT);
  pinMode(ENB, OUTPUT);
}

void avanzar(int velocidad) {
  digitalWrite(IN1, HIGH);
  digitalWrite(IN2, LOW);
  digitalWrite(IN3, HIGH);
  digitalWrite(IN4, LOW);
  analogWrite(ENA, velocidad);  // 0 a 255
  analogWrite(ENB, velocidad);
}

void detener() {
  digitalWrite(IN1, LOW);
  digitalWrite(IN2, LOW);
  digitalWrite(IN3, LOW);
  digitalWrite(IN4, LOW);
  analogWrite(ENA, 0);
  analogWrite(ENB, 0);
}

void retroceder(int velocidad) {
  digitalWrite(IN1, LOW);
  digitalWrite(IN2, HIGH);
  digitalWrite(IN3, LOW);
  digitalWrite(IN4, HIGH);
  analogWrite(ENA, velocidad);
  analogWrite(ENB, velocidad);
}

void loop() {
  avanzar(180);    // avanzar a 70% de velocidad
  delay(2000);     // durante 2 segundos
  detener();
  delay(500);
  retroceder(180); // retroceder a 70% de velocidad
  delay(2000);
  detener();
  delay(500);
}
```

---

## Equivalente en bloques (MakeCode / mBlock)

Para entornos de bloques, el concepto es el mismo aunque la interfaz sea diferente. Los bloques equivalentes son:

- `Motor izquierdo → adelante, velocidad 70%`
- `Motor derecho → adelante, velocidad 70%`
- `Esperar 2 segundos`
- `Detener motores`

El nombre exacto de los bloques varía según la plataforma y el kit.

---

## Problemas comunes y cómo resolverlos

| Problema | Causa más probable | Solución |
|---|---|---|
| El robot gira en lugar de avanzar | Los pines IN1/IN2 o IN3/IN4 están invertidos en un motor | Intercambiar los cables de un motor, o cambiar HIGH/LOW en el código |
| El robot se desvía a la derecha | El motor izquierdo va más lento | Subir la velocidad del motor izquierdo (ENA) o bajar la del derecho (ENB) |
| El robot se desvía a la izquierda | El motor derecho va más lento | Lo contrario: ajustar ENB o ENA |
| El robot avanza muy poco y se para | Velocidad muy baja (el motor necesita cierto voltaje mínimo para arrancar) | Subir la velocidad de arranque. No usar valores por debajo de ~100–120 en analogWrite |
| El robot avanza pero la rueda loca arrastra | La batería está muy adelante | Reubicar la batería más centrada o hacia atrás |

---

## ¿Por qué el robot casi nunca va perfectamente recto?

Los motores DC tienen pequeñas variaciones de fabricación: dos motores del mismo modelo no giran exactamente a la misma velocidad con el mismo voltaje. Esa diferencia, aunque sea pequeña, acumula error con el tiempo y el robot se desvía.

Esto no es un defecto del kit: es una propiedad real de los motores DC. La solución es la calibración de velocidades, que se cubre en el archivo `calibracion-motores.md`.

---

## Aplicación en Maker Academy

Es el primer programa que se implementa con el kit de robótica, típicamente en la segunda o tercera sesión del bloque (después de la introducción conceptual y el armado).

## Recursos relacionados

- [Calibración de Motores](calibracion-motores.md)
- [Giros](giros.md)
- [Velocidad](velocidad.md)

---

## Nota docente

El primer programa de avance y retroceso siempre genera mucho entusiasmo, pero también las primeras frustraciones cuando el robot "no hace lo que debería". Es el momento ideal para introducir la idea de que **el robot hizo exactamente lo que se le dijo**: si va en la dirección equivocada, el programa le está diciendo que vaya en esa dirección.

Pedir al grupo que lea el código en voz alta ("primero enciendo los dos motores hacia adelante, luego espero 2 segundos, luego apago los motores…") suele ser suficiente para que encuentren el error por sí mismos.
