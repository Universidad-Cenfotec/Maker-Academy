# Calibración de Motores

> Este archivo pertenece a: **Robótica Educativa**
> Ruta: `01. Bloques Temáticos/05. Robótica/02. Movimiento y Mecanismos/calibracion-motores.md`

---

## Estado

**Estado:** Completo
**Versión:** v1.0
**Bloque:** 05_robotica

---

## Descripción

Ningún robot con dos motores DC va perfectamente en línea recta sin calibración. Esto no es un defecto del kit ni del código: es una propiedad física de los motores. La calibración es el proceso de compensar estas diferencias para obtener un movimiento predecible.

**Si calibrar motores fuera como ajustar una balanza: dos pesas "del mismo peso" en una balanza de precisión raramente equilibran exactamente. Se necesita un pequeño ajuste para lograr el equilibrio perfecto. Los motores funcionan igual.**

> *Insertar próximamente una imagen: fotografía cenital de un robot con ruedas sobre una hoja de papel cuadriculado, mostrando la trayectoria real del robot (línea curva marcada con un lápiz) versus la trayectoria deseada (línea recta marcada con una regla), con las dos líneas superpuestas para visualizar la desviación.*

---

## Propósito

Que el docente pueda guiar a los estudiantes a través del proceso de calibración de motores, entendiendo por qué es necesaria y cómo se realiza de forma sistemática.

---

## ¿Por qué los motores no son iguales?

Aunque dos motores sean del mismo modelo y marca, pequeñas variaciones en la fabricación hacen que uno gire levemente más rápido que el otro con el mismo voltaje. Estas diferencias pueden ser del 1% al 10% dependiendo de la calidad del motor.

También influyen otros factores:

- **Desgaste diferencial:** si un motor ha trabajado más que el otro
- **Fricción de las ruedas:** una rueda con más rozamiento (eje más apretado, rueda más pesada) va más lenta
- **Voltaje de la batería:** si la batería no está perfectamente centrada en el circuito, un motor puede recibir levemente menos voltaje
- **Temperatura:** los motores calientes tienen mayor resistencia interna

---

## El método de calibración paso a paso

### Paso 1: Prueba de línea recta

Marcar una línea recta en el piso (con cinta adhesiva) de al menos 1 metro. Programar el robot para avanzar a la misma velocidad en ambos motores durante 2 segundos y colocarlo en el inicio de la línea.

```cpp
// Programa de prueba inicial
void loop() {
  analogWrite(ENA, 180);
  analogWrite(ENB, 180);
  digitalWrite(IN1, HIGH); digitalWrite(IN2, LOW);
  digitalWrite(IN3, HIGH); digitalWrite(IN4, LOW);
  delay(2000);
  // Apagar motores
  analogWrite(ENA, 0);
  analogWrite(ENB, 0);
  while(true); // Detener aquí
}
```

Observar hacia dónde se desvía el robot.

---

### Paso 2: Identificar qué motor va más rápido

- Si el robot se desvía a la **derecha** → el motor **izquierdo** va más rápido → hay que bajar un poco el izquierdo o subir el derecho
- Si el robot se desvía a la **izquierda** → el motor **derecho** va más rápido → hay que bajar el derecho o subir el izquierdo

---

### Paso 3: Ajustar y repetir

Modificar el valor de PWM del motor más rápido, reducirlo en 5 a 10 unidades, y repetir la prueba.

```cpp
// Ejemplo: el robot se desviaba a la derecha, se redujo ENA de 180 a 168
analogWrite(ENA, 168);  // motor izquierdo, ligeramente más lento
analogWrite(ENB, 180);  // motor derecho sin cambio
```

Repetir el ciclo hasta que el robot avance lo más recto posible en 1 metro.

---

### Paso 4: Guardar los valores como constantes

Una vez encontrados los valores correctos, guardarlos como constantes en el código para no perderlos:

```cpp
// Valores calibrados para este robot específico
const int VEL_IZQUIERDO = 168;
const int VEL_DERECHO   = 180;

void avanzar() {
  analogWrite(ENA, VEL_IZQUIERDO);
  analogWrite(ENB, VEL_DERECHO);
  digitalWrite(IN1, HIGH); digitalWrite(IN2, LOW);
  digitalWrite(IN3, HIGH); digitalWrite(IN4, LOW);
}
```

---

## Calibración de giros

La misma lógica aplica para los giros. Para calibrar un pivote de 90°:

1. Programar el pivote con un tiempo inicial (por ejemplo, 400 ms)
2. Ejecutar el giro y medir el ángulo resultante con un transportador o con referencia visual (una cuadrícula)
3. Ajustar el tiempo proporcionalmente
4. Repetir hasta lograr 90° consistentemente

```cpp
// Tiempo calibrado para un pivote de 90° a velocidad 180
const int TIEMPO_GIRO_90 = 430;  // milisegundos (valor de ejemplo, hay que medir)
```

---

## Importante: la calibración es específica de cada robot

Los valores de calibración son únicos para cada robot físico. Un robot con los mismos componentes que otro puede necesitar valores completamente diferentes. Si alguien cambia la batería, agrega peso o cambia la superficie, puede ser necesario recalibrar.

Por esta razón, siempre conviene documentar los valores de calibración y revisarlos si el comportamiento del robot cambia.

---

## Hoja de registro de calibración

Es buena práctica que cada equipo lleve un registro físico o digital:

| Fecha | Superficie | Velocidad izquierdo | Velocidad derecho | Tiempo giro 90° | Observaciones |
|---|---|---|---|---|---|
| 09/07/26 | Piso vinilo | 168 | 180 | 430 ms | Batería nueva |
| 10/07/26 | Piso vinilo | 162 | 180 | 440 ms | Batería al 70% |

---

## Aplicación en Maker Academy

Se trabaja en la sesión posterior a los primeros ensayos de movimiento, cuando el grupo ya notó que el robot no va en línea recta. Es también una actividad obligatoria antes de cualquier competencia SumoBot.

## Recursos relacionados

- [Avance y Retroceso](avance-retroceso.md)
- [Velocidad](velocidad.md)
- [Giros](giros.md)
- [Tabla de Pruebas SumoBot](../04.%20SumoBot/tabla-pruebas.md)

---

## Nota docente

La calibración es uno de los momentos más formativos del bloque de robótica porque obliga al grupo a trabajar de forma científica: hacer una prueba, medir el resultado, hacer un cambio pequeño, probar de nuevo. Este ciclo de iteración controlada es exactamente el método que usan los ingenieros reales.

Un error común es cambiar varios parámetros al mismo tiempo. Si se cambia la velocidad y el tiempo de giro en el mismo ensayo, es imposible saber qué cambio produjo qué efecto. Enseñar a cambiar solo una variable a la vez es una de las lecciones más transferibles de toda la actividad.
