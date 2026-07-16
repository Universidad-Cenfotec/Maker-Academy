# Robot Gira , Práctica Guiada

> Ruta: `01. Bloques Temáticos/05. Robótica/05. Prácticas Guiadas/03. Robot gira/README.md`

---

**Estado:** Completo
**Versión:** v1.0
**Bloque:** 05_robotica
**Tecnología principal:** Robot educativo con motores DC y microcontrolador (Arduino o similar)
**Nivel sugerido:** Primaria alta
**Duración estimada:** 60–75 minutos

---

## Propósito de esta práctica

Una vez que el robot sabe avanzar y detenerse, el siguiente paso natural es enseñarle a girar. Esta práctica retoma el programa de la sesión anterior y le agrega giros, culminando en el reto clásico de robótica educativa: **programar un cuadrado**. El reto obliga al grupo a combinar avance, giro y repetición en un solo programa, y es una de las actividades con mayor poder de depuración de todo el bloque.

Se apoya en los conceptos técnicos desarrollados en [Giros](../../02.%20Movimiento%20y%20Mecanismos/02.%20Giros.md), que el docente debe tener claros antes de facilitar la sesión.

---

## Objetivos de aprendizaje

Al finalizar esta práctica, el estudiante habrá:

- Programado al menos un tipo de giro (pivote en el lugar o giro con una rueda parada)
- Calibrado experimentalmente el tiempo necesario para que el robot gire aproximadamente 90°
- Combinado instrucciones de avance y giro en una secuencia que forma un cuadrado
- Depurado su programa identificando en qué lado o giro específico falló el recorrido

---

## Materiales

| Material | Cantidad | Notas |
|---|---|---|
| Robot educativo armado y calibrado (de la práctica anterior) | 1 por pareja o trío | Debe avanzar recto de forma razonable antes de iniciar |
| Cinta de enmascarar | 1 rollo por grupo | Para marcar el cuadrado esperado en el piso |
| Transportador o plantilla de ángulos (opcional) | 1 por grupo | Ayuda a verificar visualmente si el giro fue de 90° |
| Cinta métrica | 1 por grupo | Para definir el largo de cada lado del cuadrado (sugerido: 60–100 cm) |

---

## Herramientas y software

- Computadora con el IDE de Arduino (o el entorno del kit del makerspace)
- Cable USB para cargar programas
- Cronómetro (puede ser el del celular) para las pruebas de calibración de giro

---

## Preparación del docente (antes de la sesión)

1. Verificar que los robots del grupo anterior sigan calibrados para avanzar razonablemente recto
2. Marcar en el piso, con cinta, un cuadrado de referencia de tamaño conocido (por ejemplo, 80 cm por lado) donde los grupos puedan comparar el recorrido de su robot
3. Tener preparado un ejemplo de tabla de calibración de giro para mostrar cómo registrar los datos (ver Fase 2)
4. Revisar el archivo [Giros](../../02.%20Movimiento%20y%20Mecanismos/02.%20Giros.md) para poder explicar la diferencia entre pivote y arco si algún grupo pregunta

> **Nota de seguridad:** los giros en el lugar pueden hacer que el robot se desplace de forma menos predecible que el avance recto. Mantener siempre distancia entre robots de distintos grupos durante las pruebas.

---

## Flujo de la práctica

### Fase 1: Inspiración (5–10 min)

**1.1 Retomar el programa anterior**

El docente recuerda: "La sesión pasada logramos que el robot avance y se detenga. Hoy vamos a enseñarle a girar, y al final del día su robot debe poder dibujar un cuadrado en el piso."

**1.2 Mostrar el reto final**

Se muestra el cuadrado marcado en el piso como meta visual: el robot debe salir del punto de inicio, recorrer cuatro lados iguales con cuatro giros de 90°, y terminar cerca de donde comenzó.

---

### Fase 2: Experimentación (35–45 min)

**2.1 Elegir el tipo de giro**

Se recomienda usar el **pivote en el lugar** (ruedas girando en sentidos contrarios) porque es el más predecible, según lo descrito en [Giros](../../02.%20Movimiento%20y%20Mecanismos/02.%20Giros.md):

```cpp
void pivoteDerecha(int velocidad) {
  analogWrite(ENA, velocidad);
  analogWrite(ENB, velocidad);
  digitalWrite(IN1, HIGH); digitalWrite(IN2, LOW);  // izquierdo: adelante
  digitalWrite(IN3, LOW);  digitalWrite(IN4, HIGH);  // derecho: atrás
}
```

**2.2 Calibrar el ángulo de giro**

Antes de armar el cuadrado completo, cada grupo debe encontrar cuánto tiempo de `delay` produce un giro de aproximadamente 90°. Se recomienda registrar los intentos en una tabla simple:

| Intento | Tiempo de giro (ms) | Ángulo observado | Ajuste siguiente |
|---|---|---|---|
| 1 | 300 | ~45° | Aumentar tiempo |
| 2 | 600 | ~95° | Reducir un poco |
| 3 | 550 | ~90° | Valor final |

**2.3 Programar el cuadrado**

Con el tiempo de giro calibrado, el grupo escribe el programa completo:

```cpp
void loop() {
  for (int lado = 0; lado < 4; lado++) {
    avanzar(150, 1500);   // avanzar un lado del cuadrado
    pivoteDerecha(150);
    delay(550);            // tiempo calibrado para ~90°
    detener();
  }
  while (true) {}
}
```

**2.4 Probar y depurar**

El grupo coloca el robot en el punto de inicio del cuadrado marcado en el piso y ejecuta el programa completo. Es poco probable que el cuadrado cierre perfectamente al primer intento: el grupo debe observar en qué lado o giro específico se desvió y ajustar solo esa parte.

---

### Fase 3: Reflexión (10–15 min)

1. Cada grupo muestra su recorrido final, aunque no haya cerrado perfectamente
2. El docente guía la reflexión con las preguntas: "¿Los cuatro lados fueron iguales? ¿Los cuatro giros fueron iguales? ¿Dónde está el error, en el avance o en el giro?"
3. Se registra en la bitácora el tiempo de giro calibrado y la velocidad usada, como referencia para futuras prácticas

---

## Variantes y extensiones

**Para grupos más avanzados:**
- Retar al grupo a programar un triángulo (giros de 120°) o un hexágono (giros de 60°), reutilizando la misma lógica de calibración
- Introducir una función `girar(int gradosObjetivo)` que calcule el tiempo aproximado a partir del valor calibrado de 90°, en lugar de escribir el tiempo directamente

**Para grupos que necesitan más apoyo:**
- Proveer el valor de calibración de giro ya encontrado por el docente, para que el grupo se concentre solo en armar la secuencia del cuadrado
- Reducir el reto a un solo giro de 90° entre dos tramos rectos, sin exigir que cierre el cuadrado completo

**Adaptación con robots de programación por bloques:**
- La misma lógica de "avanzar, girar, repetir cuatro veces" se puede construir con un bloque de repetición (`repetir 4 veces`) si el kit del makerspace usa programación visual en lugar de código de texto

---

## Indicadores de éxito

Al finalizar, el estudiante debería poder responder:

- ¿Qué significa que el tiempo de giro esté "calibrado" y por qué no es el mismo para todos los robots?
- ¿Qué lado o giro de su cuadrado tuvo más error y cómo lo identificaron?
- ¿Qué cambiarían en su programa para dibujar una figura con más lados?

---

## Notas docentes

**Errores frecuentes y cómo anticiparlos:**

- **El robot gira, pero se desplaza mientras lo hace:** es señal de que no está usando un pivote real, sino un giro con una rueda parada o un arco. Revisar que ambos motores tengan la misma velocidad y sentidos opuestos.
- **El cuadrado se hace cada vez más grande o torcido:** es normal que el error se acumule lado tras lado, ya que ningún giro es perfectamente exacto. Este es justamente el punto pedagógico: el grupo debe notar y discutir la acumulación de error.
- **Se calibra el giro con batería baja y luego falla con batería cargada:** recordar a los grupos recalibrar si cambian de batería o si notan que el robot se mueve de forma distinta a sesiones anteriores.

**Gestión del tiempo:** la calibración del giro (Fase 2.2) suele tomar más tiempo del esperado. Es preferible dedicarle tiempo suficiente antes de pasar al cuadrado completo, en lugar de apurar esta fase y arrastrar el error a todo el programa.
