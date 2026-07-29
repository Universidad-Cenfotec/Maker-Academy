# Evita obstáculos básico — Práctica guiada

> Este archivo pertenece a: **Prácticas Guiadas de Robótica**
> Ruta: `01. Bloques Temáticos/05. Robótica/05. Prácticas Guiadas/05. Evita obstáculos básico/README.md`

---

## Estado

**Estado:** Completo
**Versión:** v1.0
**Bloque:** 05_robotica
**Tecnología principal:** Sensor de distancia ultrasónico + motores DC
**Nivel sugerido:** Primaria alta / Secundaria
**Duración estimada:** 75–90 minutos

---

## Descripción

Quinta y última práctica guiada del bloque de Robótica: el robot aprende a percibir el espacio frente a él con un sensor de distancia y a tomar decisiones de navegación autónoma, cerrando la progresión de Prácticas Guiadas.

---

## Propósito de esta práctica

Esta es la práctica que cierra la progresión de "Prácticas Guiadas" de robótica: el robot ya sabe avanzar, girar y seguir una línea; ahora aprende a percibir el espacio frente a él y a tomar una decisión de navegación autónoma cuando detecta un obstáculo. Es también la base directa de comportamientos usados en el SumoBot, donde detectar al adversario es la primera condición para poder actuar.

Se apoya en los conceptos técnicos desarrollados en [Sensor de distancia](../../03.%20Sensores%20y%20Percepción/02.%20Sensor%20de%20distancia.md), que el docente debe repasar antes de la sesión, en particular el principio de medición por eco ultrasónico.

---

## Objetivos de aprendizaje

Al finalizar esta práctica, el estudiante habrá:

- Conectado y leído correctamente un sensor de distancia ultrasónico
- Definido una distancia de seguridad (umbral) a partir de la cual el robot debe reaccionar
- Programado una lógica de decisión: avanzar mientras el camino esté libre, detenerse y girar cuando detecte un obstáculo cercano
- Comprobado que el robot recorre un espacio con obstáculos sin chocar, ajustando el umbral y el tipo de giro según sea necesario

---

## Materiales

| Material | Cantidad | Notas |
|---|---|---|
| Robot educativo armado (de prácticas anteriores) | 1 por pareja o trío | Ya debe avanzar y girar de forma calibrada |
| Sensor de distancia ultrasónico (tipo HC-SR04 o similar) | 1 por robot | Montado al frente del chasis, a la altura donde espera encontrar obstáculos |
| Obstáculos variados (cajas, conos, botellas) | 3 a 5 por espacio de prueba | De distintos tamaños y materiales, para probar la detección en condiciones diversas |
| Cinta métrica | 1 por grupo | Para medir distancias reales de detección durante la calibración |

---

## Herramientas y software

- Computadora con el IDE de Arduino
- Cable USB para cargar el programa
- Monitor serie del IDE, para observar en vivo la distancia medida por el sensor en centímetros

---

## Preparación del docente (antes de la sesión)

1. Delimitar un espacio de piso despejado (mínimo 2×2 metros) donde colocar los obstáculos de prueba
2. Verificar que el sensor ultrasónico esté firmemente sujeto y apuntando hacia adelante, no hacia el piso ni hacia arriba
3. Tener preparado un boceto del código de lectura de distancia para mostrarlo si algún grupo se atrasa
4. Considerar materiales de los obstáculos: superficies muy blandas o inclinadas pueden absorber o desviar el eco ultrasónico y dar lecturas poco confiables; tenerlo presente al armar el espacio de prueba

> **Nota de seguridad:** aunque los robots se mueven a baja velocidad, mantener siempre a los estudiantes fuera de la trayectoria directa del robot durante las pruebas, especialmente durante los primeros intentos sin calibrar.

---

## Flujo de la práctica

### Fase 1: Inspiración (10 min)

**1.1 Conectar con la experiencia previa**

El docente recuerda: "Nuestro robot ya reacciona a lo que ve en el piso con el sensor de línea. Hoy le damos otro sentido: la capacidad de saber qué tan lejos está algo que tiene enfrente, sin tocarlo."

**1.2 Demostración del sensor**

Con el sensor conectado a la computadora (sin el robot en movimiento), se pasa la mano frente a él a distintas distancias mientras el grupo observa los valores en el monitor serie, para relacionar el número en pantalla con la distancia real medida con la cinta métrica.

---

### Fase 2: Experimentación (45–55 min)

**2.1 Montar y conectar el sensor**

Fijar el sensor de distancia al frente del chasis, a una altura que le permita detectar obstáculos típicos (ni tan bajo que solo detecte el piso, ni tan alto que pase por encima de obstáculos pequeños), y conectarlo según el diagrama del kit (VCC, GND, Trigger y Echo a pines digitales).

**2.2 Leer la distancia y definir el umbral**

```cpp
long medirDistanciaCm() {
  digitalWrite(PIN_TRIG, LOW);
  delayMicroseconds(2);
  digitalWrite(PIN_TRIG, HIGH);
  delayMicroseconds(10);
  digitalWrite(PIN_TRIG, LOW);
  long duracion = pulseIn(PIN_ECHO, HIGH);
  return duracion * 0.0343 / 2; // conversión a centímetros
}
```

El grupo prueba con distintos objetos y distancias para decidir un **umbral de seguridad** razonable (por ejemplo, 15 cm), a partir del cual el robot debe reaccionar antes de chocar.

**2.3 Programar la lógica de evasión**

```cpp
void loop() {
  long distancia = medirDistanciaCm();

  if (distancia > UMBRAL_SEGURIDAD) {
    avanzar(150, 150);
  } else {
    detener();
    delay(200);
    pivoteDerecha(150);
    delay(550); // tiempo de giro calibrado en la práctica anterior
    detener();
  }
}
```

**2.4 Prueba en el espacio con obstáculos**

Colocar el robot en el espacio delimitado con los obstáculos distribuidos y observar su comportamiento durante varios minutos continuos, ajustando el umbral si el robot roza los obstáculos o si reacciona demasiado lejos de ellos.

---

### Fase 3: Reflexión (10–15 min)

1. Cada grupo demuestra su robot navegando el espacio de obstáculos sin chocar durante al menos un recorrido continuo
2. El docente pregunta: "¿Qué pasó cuando el umbral era muy bajo? ¿Y cuando era muy alto?"
3. Se guía la reflexión final del bloque de Prácticas Guiadas: el grupo compara las cuatro prácticas anteriores y nombra qué tuvo en común cada una (secuencia, tiempo, sensor de línea, sensor de distancia) y en qué se diferenciaron

---

## Variantes y extensiones

**Para grupos más avanzados:**
- Programar que el robot, al detectar un obstáculo, gire hacia el lado donde detecta más espacio libre en lugar de girar siempre hacia el mismo lado (requiere una segunda medición después de girar)
- Combinar esta práctica con el sensor de línea trabajado antes, para un robot que sigue una línea y también evita obstáculos que se colocan sobre la ruta

**Para grupos que necesitan más apoyo:**
- Simplificar la reacción a un solo giro fijo hacia la derecha, sin lógica de decisión adicional
- Reducir la cantidad de obstáculos en el espacio de prueba y aumentar la distancia entre ellos

**Adaptación como cierre de bloque:**
- Usar esta práctica como una mini feria: cada grupo presenta su robot navegando el espacio de obstáculos ante el resto de la clase, como cierre del ciclo de Prácticas Guiadas de robótica

---

## Indicadores de éxito

Al finalizar, el estudiante debería poder responder:

- ¿Qué pasa si el umbral de seguridad es demasiado bajo? ¿Y si es demasiado alto?
- ¿Por qué el sensor a veces "falla" con ciertos materiales u objetos inclinados?
- ¿Qué tienen en común todas las prácticas guiadas de robótica que han hecho hasta ahora?

---

## Notas docentes

**Errores frecuentes y cómo anticiparlos:**

- **El sensor da lecturas erráticas o muy altas:** revisar que Trigger y Echo estén conectados a los pines correctos y que el sensor no esté apuntando hacia una superficie muy inclinada o blanda que absorba el eco.
- **El robot choca a pesar del sensor:** casi siempre el umbral de seguridad es menor que la distancia que el robot recorre entre una lectura y la siguiente detención. Aumentar el umbral o reducir la velocidad de avance suele resolverlo.
- **El robot gira siempre hacia el mismo lado y queda "atrapado" en una esquina:** es un comportamiento esperado en esta versión básica. Se puede señalar como una limitación conocida y usarla como gancho para la variante avanzada de detectar el lado más despejado.

**Gestión del tiempo:** conviene reservar los últimos 10 a 15 minutos de la sesión para la reflexión de cierre de todo el ciclo de Prácticas Guiadas, no solo de esta práctica puntual, ya que es la última del bloque y consolida el aprendizaje acumulado.

---

## Recursos relacionados

- [`README.md` — Prácticas Guiadas](../README.md): índice de la secuencia de prácticas guiadas de robótica.
- [`02. Sensor de distancia.md`](../../03.%20Sensores%20y%20Percepción/02.%20Sensor%20de%20distancia.md): base conceptual del sensor ultrasónico usado en esta práctica.
- [`04. Sigue línea básico`](../04.%20Sigue%20línea%20básico/README.md): práctica anterior de la secuencia.
- [`README.md` — Evaluación](../../06.%20Evaluación/README.md): instrumentos para evaluar el desempeño alcanzado al cerrar el ciclo de prácticas guiadas.
