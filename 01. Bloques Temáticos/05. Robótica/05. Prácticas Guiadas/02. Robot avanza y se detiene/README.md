# Robot avanza y se detiene — Práctica guiada

> Este archivo pertenece a: **Prácticas Guiadas de Robótica**
> Ruta: `01. Bloques Temáticos/05. Robótica/05. Prácticas Guiadas/02. Robot avanza y se detiene/README.md`

---

## Estado

**Estado:** Completo
**Versión:** v1.0
**Bloque:** 05_robotica
**Tecnología principal:** Robot educativo con motores DC y microcontrolador (Arduino o similar)
**Nivel sugerido:** Primaria alta
**Duración estimada:** 45–60 minutos

---

## Descripción

Segunda práctica guiada del bloque de Robótica: el grupo escribe y carga su primer programa de control real, haciendo que el robot avance una distancia fija y se detenga solo.

---

## Propósito de esta práctica

Esta es la primera práctica con código real sobre el robot armado. Después de haber trabajado la secuencia con tarjetas icónicas, el grupo escribe y carga su primer programa: hacer que el robot avance una distancia fija y se detenga. Es una actividad breve en apariencia, pero introduce de forma concreta los conceptos de tiempo de ejecución, velocidad de motores y la diferencia entre "programar" y "que el programa funcione como se esperaba".

Se apoya directamente en los conceptos técnicos desarrollados en [Avance y retroceso](../../02.%20Movimiento%20y%20Mecanismos/01.%20Avance%20y%20retroceso.md), que el docente debe repasar antes de la sesión.

---

## Objetivos de aprendizaje

Al finalizar esta práctica, el estudiante habrá:

- Escrito y cargado un programa simple que hace avanzar el robot por un tiempo determinado
- Comprendido la relación entre el tiempo de ejecución de una instrucción (`delay`) y la distancia recorrida por el robot
- Detectado y corregido una desviación en la trayectoria recta del robot ajustando la velocidad de cada motor
- Detenido el robot de forma controlada al final del recorrido

---

## Materiales

| Material | Cantidad | Notas |
|---|---|---|
| Robot educativo armado (chasis, 2 motores DC, rueda loca, driver de motores) | 1 por pareja o trío | Debe estar ya ensamblado antes de esta sesión |
| Microcontrolador (Arduino Uno, Nano o similar) | 1 por robot | Ya montado sobre el chasis |
| Batería o pila para el robot | 1 por robot, cargada | Verificar carga antes de iniciar |
| Cinta métrica o metro de costura | 1 por grupo | Para medir la distancia real recorrida |
| Cinta de enmascarar | 1 rollo por grupo | Para marcar la línea de meta en el piso |

---

## Herramientas y software

- Computadora con el IDE de Arduino instalado (o el entorno que use el kit del makerspace)
- Cable USB para cargar el programa al microcontrolador
- Espacio de piso liso y despejado de al menos 2 metros de largo por robot

---

## Preparación del docente (antes de la sesión)

1. Confirmar que todos los robots enciendan y que los motores respondan al girar las ruedas manualmente (sin código, solo para verificar conexión)
2. Tener un programa de ejemplo ya probado para mostrarlo si algún grupo se atrasa demasiado
3. Marcar en el piso una línea de inicio y, opcionalmente, una meta a una distancia conocida (por ejemplo, 1 metro)
4. Revisar el estado de las baterías: un robot con batería baja avanza más lento y desvía las conclusiones del grupo

> **Nota de seguridad:** mantener el área de prueba despejada de cables sueltos y mochilas. Los robots en movimiento deben tener siempre un estudiante cerca listo para detenerlos manualmente si se salen del área.

---

## Flujo de la práctica

### Fase 1: Inspiración (5–10 min)

**1.1 Retomar la secuencia con tarjetas**

El docente recuerda la práctica anterior de lógica de programación con Code.org: "Ya ordenamos secuencias, bucles y condicionales en bloques. Hoy vamos a programar el mismo tipo de instrucción, pero directamente en el robot con código."

**1.2 Presentar el reto**

El reto es simple: lograr que el robot avance en línea recta desde la línea de inicio hasta una meta marcada, y que se detenga solo, sin empujarlo ni apagarlo manualmente.

---

### Fase 2: Experimentación (25–35 min)

**2.1 Programa base**

El docente comparte o guía la escritura de un programa mínimo:

```cpp
void setup() {
  pinMode(ENA, OUTPUT); pinMode(IN1, OUTPUT); pinMode(IN2, OUTPUT);
  pinMode(ENB, OUTPUT); pinMode(IN3, OUTPUT); pinMode(IN4, OUTPUT);
}

void loop() {
  // Avanzar
  digitalWrite(IN1, HIGH); digitalWrite(IN2, LOW);
  digitalWrite(IN3, HIGH); digitalWrite(IN4, LOW);
  analogWrite(ENA, 150);
  analogWrite(ENB, 150);
  delay(2000); // avanza durante 2 segundos

  // Detenerse
  analogWrite(ENA, 0);
  analogWrite(ENB, 0);

  while (true) {} // se queda detenido
}
```

**2.2 Primera prueba**

Cada grupo carga el programa y observa qué pasa. Es normal que el robot no recorra la distancia exacta esperada ni vaya perfectamente recto.

**2.3 Ajustar el tiempo (`delay`)**

Si el robot se pasa de la meta o se queda corto, el grupo debe ajustar el valor del `delay` (no la velocidad todavía) y volver a probar. Esto refuerza que el tiempo de ejecución controla la distancia.

**2.4 Corregir la desviación**

Si el robot se desvía hacia un lado, es porque un motor gira más rápido que el otro. El grupo ajusta el valor de `analogWrite` de cada motor por separado hasta lograr una trayectoria más recta. Este ajuste fino se relaciona directamente con lo explicado en [Calibración de motores](../../02.%20Movimiento%20y%20Mecanismos/04.%20Calibración%20de%20motores.md).

---

### Fase 3: Reflexión (10 min)

1. Cada grupo mide con la cinta métrica qué tan cerca quedó de la meta real
2. El docente pregunta: "¿Qué tuvieron que cambiar para que el robot se detuviera en el lugar correcto?"
3. Se anota en la bitácora del grupo el valor final de `delay` y de velocidad que usaron, como referencia para la siguiente práctica

---

## Variantes y extensiones

**Para grupos más avanzados:**
- Pedir que el robot avance, se detenga 2 segundos y luego retroceda hasta el punto de inicio, usando la misma lógica de tiempo
- Introducir una función `avanzar(int tiempo)` para que el código sea reutilizable en distintas distancias

**Para grupos que necesitan más apoyo:**
- Proveer el programa base ya escrito y pedir solo que ajusten el valor de `delay` hasta acertar la distancia
- Trabajar en trío con roles definidos: quien escribe el código, quien mide la distancia y quien observa la trayectoria

**Adaptación sin microcontrolador propio:**
- Si el makerspace cuenta con robots de programación por bloques (app o control remoto), la misma lógica de "avanzar un tiempo fijo y detenerse" se puede trabajar con bloques visuales antes de pasar a código de texto

---

## Indicadores de éxito

Al finalizar, el estudiante debería poder responder:

- ¿Qué parte del código controla cuánto tiempo avanza el robot?
- ¿Por qué el robot se desvió hacia un lado y qué cambiaron para corregirlo?
- Si quisieran que el robot avance el doble de distancia, ¿qué valor cambiarían en el código?

---

## Notas docentes

**Errores frecuentes y cómo anticiparlos:**

- **El robot no se mueve al cargar el programa:** revisar primero la batería, luego las conexiones del driver de motores. Es el error más común y rara vez es un problema de código.
- **El robot avanza pero nunca se detiene:** suele ser porque falta el bloque de `analogWrite(0)` o el `while(true)` al final, y el `loop()` vuelve a ejecutar la instrucción de avanzar una y otra vez.
- **La desviación se "corrige" cambiando el tiempo en lugar de la velocidad:** si el robot se desvía hacia un lado, cambiar el `delay` no resuelve el problema de raíz. Guiar al grupo hacia el ajuste de velocidad de cada motor por separado.

**Gestión del tiempo:** esta práctica se beneficia de trabajar por estaciones si hay pocos robots disponibles: mientras un grupo prueba en el piso, otro puede estar ajustando su código en la computadora.

---

## Recursos relacionados

- [`README.md` — Prácticas Guiadas](../README.md): índice de la secuencia de prácticas guiadas de robótica.
- [`01. Avance y retroceso.md`](../../02.%20Movimiento%20y%20Mecanismos/01.%20Avance%20y%20retroceso.md): base conceptual del movimiento que se programa en esta práctica.
- [`04. Calibración de motores.md`](../../02.%20Movimiento%20y%20Mecanismos/04.%20Calibración%20de%20motores.md): profundiza el ajuste de velocidad usado para corregir la desviación del robot.
- [`03. Robot gira`](../03.%20Robot%20gira/README.md): siguiente práctica de la secuencia.
