# Giros

> Este archivo pertenece a: **Robótica Educativa**
> Ruta: `01. Bloques Temáticos/05. Robótica/02. Movimiento y Mecanismos/giros.md`

---

## Estado

**Estado:** Completo
**Versión:** v1.0
**Bloque:** 05_robotica

---

## Descripción

Un robot que solo avanza y retrocede tiene poca utilidad. Los giros son lo que le permiten navegar, esquivar obstáculos, seguir rutas y comportarse de forma interesante. Hay varias formas de girar, y cada una tiene un efecto diferente que conviene conocer para elegir la correcta según el proyecto.

**Si los giros fueran pasos de baile: hay una diferencia entre girar sobre tu propio eje (pivote) y dar una curva mientras caminas. Ambos son giros, pero el resultado y el espacio que se ocupa son completamente distintos.**

> *Insertar próximamente una imagen: diagrama cenital (vista desde arriba) mostrando cuatro tipos de giro con sus trayectorias en distintos colores — giro en arco suave, giro en arco cerrado, pivote con una rueda parada y pivote con ruedas en sentido contrario — con el punto de inicio marcado y la trayectoria resultante.*

---

## Propósito

Que el docente comprenda los distintos tipos de giro disponibles en un robot diferencial, sepa cuándo usar cada uno y pueda guiar a los estudiantes cuando el robot no gira como esperan.

---

## Tipos de giro en un robot diferencial

### 1. Giro en arco suave (curva)

Un motor va más rápido que el otro. El robot describe una curva, no un ángulo brusco.

```cpp
// Curva suave hacia la derecha
void curvarDerecha(int velRapida, int velLenta) {
  // Motor izquierdo más rápido que el derecho
  analogWrite(ENA, velRapida);  // izquierdo
  analogWrite(ENB, velLenta);   // derecho
  digitalWrite(IN1, HIGH); digitalWrite(IN2, LOW);
  digitalWrite(IN3, HIGH); digitalWrite(IN4, LOW);
}
```

**Uso típico:** seguimiento de línea con correcciones suaves, navegación fluida en pasillos.

**Radio de giro:** depende de qué tan diferente es la velocidad entre los dos motores. A mayor diferencia, curva más cerrada.

---

### 2. Giro con una rueda parada (pivote con una rueda)

Un motor se detiene y el otro sigue girando. El robot gira alrededor de la rueda parada.

```cpp
// Girar a la derecha con la rueda derecha parada
void girarDerechaConRuedaParada(int velocidad) {
  analogWrite(ENA, velocidad); // motor izquierdo avanza
  analogWrite(ENB, 0);         // motor derecho parado
  digitalWrite(IN1, HIGH); digitalWrite(IN2, LOW);
  digitalWrite(IN3, LOW);  digitalWrite(IN4, LOW);
}
```

**Radio de giro:** la distancia entre la rueda parada y la rueda activa.

**Uso típico:** giros de 90° en laberintos o rutas con esquinas.

---

### 3. Pivote en el lugar (giro con ruedas en sentido contrario)

Un motor gira hacia adelante y el otro hacia atrás, a la misma velocidad. El robot gira sobre su propio centro sin desplazarse.

```cpp
// Pivote a la derecha en el lugar
void pivoteDerecha(int velocidad) {
  analogWrite(ENA, velocidad);
  analogWrite(ENB, velocidad);
  digitalWrite(IN1, HIGH); digitalWrite(IN2, LOW);  // izquierdo: adelante
  digitalWrite(IN3, LOW);  digitalWrite(IN4, HIGH); // derecho: atrás
}
```

**Radio de giro:** prácticamente cero. El robot gira en el mismo punto.

**Uso típico:** SumoBot (para buscar al adversario girando en el lugar), espacios reducidos, giros de 180°.

**Ventaja sobre los otros giros:** es el más predecible. Un tiempo fijo produce siempre el mismo ángulo (si la calibración es correcta).

---

## Cuánto tiempo girar para lograr un ángulo específico

No existe un tiempo universal para "girar 90°". Depende de:

- La velocidad de los motores (la `velocidad` en `analogWrite`)
- El diámetro de las ruedas
- La distancia entre las ruedas
- La superficie (más fricción = gira más lento)
- Si la batería está cargada o no

**La única forma de saber el tiempo correcto es medir experimentalmente:**

1. Poner el robot en el piso y ejecutar el pivote por 300 ms
2. Medir cuántos grados giró
3. Calcular cuánto ms son necesarios para 90°
4. Probar, ajustar, repetir

Por ejemplo: si en 300 ms gira 45°, entonces para 90° se necesita aproximadamente 600 ms. Pero esto hay que verificarlo porque la relación no siempre es perfectamente lineal.

---

## Tabla comparativa de tipos de giro

| Tipo | Rueda izquierda | Rueda derecha | Radio | Desplazamiento del robot |
|---|---|---|---|---|
| Arco suave derecha | Rápida | Lenta | Grande | Sí, avanza mientras gira |
| Arco suave izquierda | Lenta | Rápida | Grande | Sí, avanza mientras gira |
| Pivote derecha (rueda parada) | Adelante | Parada | Medio | Sí, pivota sobre la rueda parada |
| Pivote izquierda (rueda parada) | Parada | Adelante | Medio | Sí, pivota sobre la rueda parada |
| Pivote en el lugar (derecha) | Adelante | Atrás | Mínimo | No |
| Pivote en el lugar (izquierda) | Atrás | Adelante | Mínimo | No |

---

## Aplicación en Maker Academy

Se trabaja inmediatamente después del avance y retroceso, como parte natural de la progresión. El reto de "programar un cuadrado" (avanzar, girar 90°, avanzar, girar 90°, cuatro veces) es una actividad clásica que combina avance, giro y bucle en un solo programa significativo.

## Recursos relacionados

- [Avance y Retroceso](avance-retroceso.md)
- [Calibración de Motores](calibracion-motores.md)
- [Velocidad](velocidad.md)

---

## Nota docente

El reto del cuadrado es pedagógicamente rico porque tiene múltiples puntos de falla que el estudiante debe depurar: ¿los cuatro lados son iguales?, ¿los cuatro giros son de 90°?, ¿el cuadrado cierra (el último giro lleva al punto de inicio)?

Cada pregunta lleva a un ajuste diferente en el código. Y cuando el cuadrado finalmente cierra correctamente, la satisfacción del grupo es genuina porque entienden exactamente qué tuvieron que ajustar y por qué.
