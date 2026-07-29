# Sigue línea básico — Práctica guiada

> Este archivo pertenece a: **Prácticas Guiadas de Robótica**
> Ruta: `01. Bloques Temáticos/05. Robótica/05. Prácticas Guiadas/04. Sigue línea básico/README.md`

---

## Estado

**Estado:** Completo
**Versión:** v1.0
**Bloque:** 05_robotica
**Tecnología principal:** Sensores de línea (infrarrojos) + motores DC
**Nivel sugerido:** Primaria alta / Secundaria
**Duración estimada:** 75–90 minutos

---

## Descripción

Cuarta práctica guiada del bloque de Robótica: el robot deja de seguir instrucciones fijas de tiempo y empieza a reaccionar al entorno mediante un sensor de línea, introduciendo el concepto de retroalimentación en tiempo real.

---

## Propósito de esta práctica

Hasta ahora el robot se movía siguiendo instrucciones fijas de tiempo: avanzar 2 segundos, girar 550 milisegundos. Esta práctica marca un cambio importante: el robot empieza a **reaccionar** a lo que percibe del entorno mediante un sensor de línea, en lugar de ejecutar ciegamente una secuencia predeterminada. Es la primera práctica del bloque que introduce retroalimentación en tiempo real, concepto central de la robótica.

Se apoya directamente en los conceptos técnicos desarrollados en [Sensor de línea](../../03.%20Sensores%20y%20Percepción/01.%20Sensor%20de%20línea.md), que el docente debe repasar antes de la sesión, especialmente la diferencia entre superficie clara y franja oscura y cómo el sensor traduce eso a una lectura digital.

---

## Objetivos de aprendizaje

Al finalizar esta práctica, el estudiante habrá:

- Conectado y calibrado uno o dos sensores de línea infrarrojos en el robot
- Comprendido cómo el robot usa la lectura del sensor para decidir si corregir su trayectoria hacia la izquierda o la derecha
- Programado un ciclo de control simple que compara la lectura del sensor con un valor de referencia y ajusta el movimiento
- Logrado que el robot siga una ruta marcada en el piso durante al menos un recorrido completo sin salirse de la línea

---

## Materiales

| Material | Cantidad | Notas |
|---|---|---|
| Robot educativo armado (de prácticas anteriores) | 1 por pareja o trío | Ya debe avanzar y girar de forma calibrada |
| Sensor de línea infrarrojo (1 o 2 sensores) | 1 set por robot | Con 2 sensores el seguimiento es más estable que con 1 |
| Cinta aislante negra o cartulina negra | 1 rollo o pliego por grupo | Para marcar la línea sobre superficie clara |
| Pliego de cartulina blanca o papel periódico grande | 1 por grupo | Como base de la pista, si el piso del makerspace es oscuro |

---

## Herramientas y software

- Computadora con el IDE de Arduino
- Cable USB para cargar el programa
- Monitor serie del IDE, para observar en vivo los valores que entrega el sensor de línea

---

## Preparación del docente (antes de la sesión)

1. Diseñar una pista sencilla: una línea cerrada (circuito) o una ruta con inicio y meta, con curvas suaves, sin ángulos de 90° en el primer intento
2. Verificar que el contraste entre la línea y la superficie sea alto (línea negra sobre fondo blanco funciona mejor que sobre fondo gris)
3. Tener preparado un boceto del código de calibración (lectura de valores altos y bajos del sensor) para mostrarlo si el grupo se traba
4. Probar la pista con un robot de referencia antes de la sesión para confirmar que es resoluble

> **Nota de seguridad:** el pegado de la cinta o cartulina al piso debe hacerse de forma que no genere bordes que levanten el robot ni riesgo de resbalones para los estudiantes que se agachan a observar.

---

## Flujo de la práctica

### Fase 1: Inspiración (10 min)

**1.1 Conectar la idea con la experiencia previa**

El docente recuerda: "Hasta ahora nuestro robot avanzaba y giraba siguiendo un tiempo fijo, sin importar lo que hubiera en el piso. Hoy le vamos a dar un sensor para que 'vea' el piso y decida solo cuándo corregir su camino."

**1.2 Explorar el sensor sin robot**

Antes de montar el sensor en el robot, se conecta a la computadora y se observan sus lecturas en el monitor serie mientras se pasa sobre superficie clara y sobre la línea oscura, para que el grupo relacione el número que ve en pantalla con lo que el sensor "percibe".

---

### Fase 2: Experimentación (45–55 min)

**2.1 Montar y conectar el sensor**

Fijar el sensor de línea en la parte frontal baja del chasis, lo más cerca posible del piso sin rozarlo, y conectarlo según el diagrama del kit (VCC, GND y salida digital o analógica a un pin del microcontrolador).

**2.2 Calibrar el umbral**

Con el monitor serie abierto, registrar el valor típico sobre superficie clara y sobre la línea oscura. La diferencia entre ambos valores define el **umbral** que el programa usará para decidir si el sensor está "sobre la línea" o "fuera de la línea".

```cpp
int lectura = analogRead(PIN_SENSOR);
bool sobreLinea = (lectura > UMBRAL); // ajustar UMBRAL según la calibración
```

**2.3 Programar la lógica de seguimiento (dos sensores)**

Con dos sensores, uno a cada lado del centro del robot, la lógica básica es:

```cpp
void loop() {
  bool izqSobreLinea = leerSensor(PIN_IZQ);
  bool derSobreLinea = leerSensor(PIN_DER);

  if (!izqSobreLinea && !derSobreLinea) {
    avanzar(150, 150);      // ambos fuera de la línea: seguir recto
  } else if (izqSobreLinea && !derSobreLinea) {
    avanzar(80, 150);        // corregir hacia la izquierda
  } else if (!izqSobreLinea && derSobreLinea) {
    avanzar(150, 80);        // corregir hacia la derecha
  } else {
    detener();               // ambos sobre la línea: posible cruce o fin de pista
  }
}
```

**2.4 Prueba y ajuste fino**

Colocar el robot sobre la pista y observar. Es común que el robot oscile de un lado a otro (zigzag) en el primer intento; el grupo debe ajustar las velocidades de corrección hasta lograr un seguimiento más suave.

---

### Fase 3: Reflexión (10–15 min)

1. Cada grupo demuestra su robot completando al menos una vuelta de la pista
2. El docente pregunta: "¿Qué diferencia hay entre este programa y el del cuadrado de la práctica anterior?"
3. Se guía al grupo a nombrar la diferencia clave: antes el robot no percibía nada del entorno; ahora decide su movimiento en cada instante según lo que el sensor detecta

---

## Variantes y extensiones

**Para grupos más avanzados:**
- Incorporar un tercer sensor central para detectar cruces o bifurcaciones en la pista
- Ajustar las velocidades de corrección de forma proporcional a qué tan lejos está el robot de la línea (introducción informal a control proporcional), en lugar de una corrección de todo o nada

**Para grupos que necesitan más apoyo:**
- Trabajar primero con un solo sensor centrado y una lógica más simple: si detecta la línea, avanzar recto; si la pierde, girar levemente hacia el último lado donde la vio
- Proveer una pista más ancha y con curvas más suaves en el primer intento

**Adaptación con menos sensores disponibles:**
- Si el makerspace cuenta con pocos sensores de línea, trabajar por estaciones rotativas mientras otros grupos avanzan en la calibración de código en la computadora

---

## Indicadores de éxito

Al finalizar, el estudiante debería poder responder:

- ¿Qué significa el "umbral" que calibraron y por qué cada robot puede necesitar uno distinto?
- ¿Qué hace el robot cuando ambos sensores detectan la línea al mismo tiempo?
- ¿Por qué este programa reacciona distinto según el piso, a diferencia del programa del cuadrado?

---

## Notas docentes

**Errores frecuentes y cómo anticiparlos:**

- **El robot no distingue la línea de la superficie clara:** casi siempre es un problema de calibración del umbral, no del sensor en sí. Repetir la lectura de valores en el monitor serie antes de sospechar de la conexión física.
- **El robot hace zigzag exagerado:** las velocidades de corrección son demasiado agresivas. Reducir la diferencia entre la velocidad de la rueda que corrige y la que sigue recto.
- **El sensor está demasiado alto o demasiado bajo:** si está muy alto, no distingue bien los contrastes; si roza el piso, se ensucia o se daña. La altura recomendada suele ser de pocos milímetros, según las especificaciones del sensor del kit.

**Gestión del tiempo:** la calibración del umbral (Fase 2.2) es el paso que más tiempo consume y el que más se salta por apuro. Vale la pena dedicarle al menos 10 minutos dedicados, porque un umbral mal calibrado hace fallar todo lo que sigue, sin que el error parezca estar ahí.

---

## Recursos relacionados

- [`README.md` — Prácticas Guiadas](../README.md): índice de la secuencia de prácticas guiadas de robótica.
- [`01. Sensor de línea.md`](../../03.%20Sensores%20y%20Percepción/01.%20Sensor%20de%20línea.md): base conceptual del sensor calibrado en esta práctica.
- [`03. Robot gira`](../03.%20Robot%20gira/README.md): práctica anterior de la secuencia.
- [`05. Evita obstáculos básico`](../05.%20Evita%20obstáculos%20básico/README.md): siguiente práctica de la secuencia.
