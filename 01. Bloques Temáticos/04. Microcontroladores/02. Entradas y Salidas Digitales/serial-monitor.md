# Monitor Serial

<img width="560" alt="Monitor Serial del IDE de Arduino mostrando la comunicación en tiempo real entre el microcontrolador y la computadora" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Arduino_Serial_Monitor.png/640px-Arduino_Serial_Monitor.png" />


> Este archivo pertenece a: **Microcontroladores**
> Ruta: `01. Bloques Temáticos/04. Microcontroladores/02. Entradas y Salidas Digitales/serial-monitor.md`

---

## Estado

**Estado:** Archivado
**Versión:** v1.0
**Bloque:** 04_microcontroladores

> **Nota de archivo:** este archivo es una versión anterior y redundante de [`04. Monitor Serial.md`](04.%20Monitor%20Serial.md), que cubre el mismo tema con el nombre y la numeración estándar de esta carpeta. Se conserva por si contiene ejemplos útiles (estrategias de depuración, comunicación bidireccional, plotter serial), pero **no debe usarse como referencia principal**: usar `04. Monitor Serial.md` en su lugar.

---

## Descripción

El monitor serial es la herramienta de depuración más importante que tiene un programador de microcontroladores. Permite que la placa envíe texto y números a la computadora a través del cable USB, donde el programador puede verlos en tiempo real. Es el equivalente electrónico de pedirle a alguien que te cuente en voz alta lo que está pensando: el microcontrolador no tiene pantalla propia, pero puede "hablar" con la computadora para reportar lo que está haciendo.

Sin el monitor serial, depurar un programa es como intentar arreglar un motor sin instrumentos: posible, pero innecesariamente difícil.

---

## Propósito

Documentar el tema 'serial-monitor' dentro del bloque de Microcontroladores para que los docentes de Maker Academy cuenten con una referencia clara y accesible.

## Configuración básica en Arduino

```cpp
void setup() {
  Serial.begin(9600);  // iniciar comunicación serial a 9600 baudios
}

void loop() {
  int valor = analogRead(A0);
  Serial.println(valor);  // enviar valor seguido de salto de línea
  delay(200);
}
```

El número `9600` es la velocidad de transmisión en baudios (bits por segundo). El monitor serial y el programa deben usar la misma velocidad o aparecerá texto ilegible. Valores comunes: 9600, 115200.

---

## Funciones de Serial en Arduino

| Función | Resultado |
|---|---|
| `Serial.print("texto")` | Envía texto sin salto de línea al final |
| `Serial.println("texto")` | Envía texto con salto de línea al final |
| `Serial.print(variable)` | Envía el valor de una variable numérica |
| `Serial.println(variable)` | Envía el valor con salto de línea |
| `Serial.print(valor, DEC)` | En base decimal |
| `Serial.print(valor, HEX)` | En base hexadecimal |
| `Serial.available()` | Indica si hay datos entrantes desde la computadora |
| `Serial.read()` | Lee un byte de los datos entrantes |

---

## Abrir el monitor serial en Arduino IDE

1. Cargar el programa que incluye `Serial.begin()`.
2. Hacer clic en el ícono de lupa (esquina superior derecha del IDE) o usar `Ctrl+Shift+M`.
3. Verificar que la velocidad de baudios en el menú desplegable del monitor coincida con la del código.
4. Los mensajes aparecen en tiempo real.

La placa se reinicia cuando se abre el monitor serial. Esto es normal: el microcontrolador interpreta la apertura de la conexión serial como una señal de reset.

---

## Estrategias de depuración con Serial

### Ver el valor de sensores en tiempo real

```cpp
void loop() {
  int luz = analogRead(A0);
  Serial.print("Luz: ");
  Serial.println(luz);
  delay(100);
}
```

Esto muestra el valor del sensor de luz 10 veces por segundo. Es el primer paso antes de escribir cualquier lógica condicional: hay que saber qué valores reales produce el sensor en las condiciones del proyecto.

### Confirmar que el código llega a cierta línea

```cpp
void loop() {
  Serial.println("Inicio del loop");
  if (digitalRead(7) == LOW) {
    Serial.println("Botón presionado");
    // lógica del botón
  }
  Serial.println("Fin del loop");
  delay(200);
}
```

Si el mensaje "Botón presionado" no aparece aunque el botón esté presionado, el problema está en la detección del botón, no en la lógica posterior.

### Medir tiempos con millis()

```cpp
unsigned long inicio = millis();
// código a medir
unsigned long fin = millis();
Serial.print("Tiempo: ");
Serial.print(fin - inicio);
Serial.println(" ms");
```

---

## Serial en MicroPython

En MicroPython, la función `print()` estándar de Python envía el texto al monitor serial:

```python
import time

while True:
    valor = 42  # aquí iría la lectura de un sensor
    print("Valor:", valor)
    time.sleep(0.2)
```

Para ver el output de MicroPython se puede usar Thonny IDE (tiene consola integrada), Mu Editor, o cualquier terminal serial (PuTTY, screen, minicom).

---

## Comunicación bidireccional: enviar comandos a la placa

El monitor serial también puede enviar datos desde la computadora a la placa. Esto permite controlar el microcontrolador escribiendo comandos desde el teclado:

```cpp
void loop() {
  if (Serial.available() > 0) {
    char comando = Serial.read();
    if (comando == 'E') {
      digitalWrite(13, HIGH);
      Serial.println("LED encendido");
    }
    if (comando == 'A') {
      digitalWrite(13, LOW);
      Serial.println("LED apagado");
    }
  }
}
```

Con este programa, escribir "E" en el monitor serial enciende el LED y "A" lo apaga.

---

## Plotter serial: visualizar datos como gráfica

El Arduino IDE 2.x incluye un plotter serial que convierte los valores numéricos enviados por `Serial.println()` en una gráfica en tiempo real. Es muy útil para visualizar el comportamiento de sensores analógicos a lo largo del tiempo.

Para activarlo: Herramientas > Plotter Serial (solo en Arduino IDE 2.x).

---

## Aplicación en Maker Academy

Se consulta como material de apoyo durante la planificación y ejecución de actividades del bloque de Microcontroladores en Maker Academy.

## Recursos relacionados

- [README del bloque](../../README.md)

## Nota docente

Enseñar el monitor serial desde la primera sesión con sensores evita muchas sesiones de frustración. El flujo de trabajo correcto es: conectar sensor → leer valores en el monitor serial → entender el rango real del sensor → escribir la lógica del programa. Los estudiantes que saltan directamente al programa sin ver los valores primero frecuentemente usan umbrales incorrectos y no entienden por qué su programa no funciona.

Una actividad eficaz de introducción: programa el monitor serial para mostrar los valores de un sensor de luz en tiempo real, luego pide a los estudiantes que anoten el valor con luz de ambiente normal, con la mano tapando el sensor y con una linterna apuntando al sensor. Esos tres valores les darán el contexto que necesitan para calibrar sus programas.
