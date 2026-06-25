# Programación en Texto

> Ruta: `01_bloques-tematicos/04_microcontroladores/progresion-programacion/texto`

---

## Estado

- **Estado:** Completo
- **Versión:** v1.0

---

## Propósito

La programación en texto es el nivel donde la interfaz visual de bloques desaparece y el programador escribe instrucciones directamente en el lenguaje que el compilador o intérprete puede procesar. Es un salto cognitivo real: ahora los errores de sintaxis son posibles, los mensajes de error deben interpretarse y la estructura del programa depende completamente de la disciplina del programador.

La recompensa es proporcional al esfuerzo: el código en texto da acceso a toda la potencia del lenguaje, sin las limitaciones que impone la interfaz gráfica. Librerías complejas, manipulación de datos, comunicación de red y lógica avanzada son todos alcanzables desde texto pero difíciles o imposibles de representar con bloques.

---

## Lenguajes cubiertos en esta subcarpeta

| Archivo | Lenguaje | Plataforma | Nivel de acceso |
|---|---|---|---|
| `arduino-basico.md` | C++ (Arduino) | Arduino UNO, Nano, Mega | Secundaria |
| `micropython-basico.md` | MicroPython | ESP32, micro:bit, Raspberry Pi Pico | Secundaria |
| `circuitpython-basico.md` | CircuitPython | Circuit Playground, RP2040, ESP32-S2/S3 | Secundaria |
| `python-robotica.md` | Python estándar | Raspberry Pi, PC con GPIO | Secundaria avanzada |

---

## La transición de bloques a texto

La estrategia más efectiva para la transición es la comparación directa: tomar un programa ya funcional en bloques y ver cómo se expresa el mismo programa en texto.

MakeCode facilita esto con su vista JavaScript: cualquier programa de bloques tiene un equivalente en texto que el estudiante puede ver con un solo clic. Comparar el bloque "si... entonces" con la estructura `if (...) { }` en texto hace la conexión explícita y reduce la sensación de que "hay que aprender todo de nuevo".

---

## Errores comunes al empezar con texto

| Error | Síntoma | Causa |
|---|---|---|
| Punto y coma faltante (C++) | Error de compilación: "expected ';'" | El compilador de C++ requiere `;` al final de cada instrucción |
| Indentación incorrecta (Python) | IndentationError | Python usa la indentación como parte de la sintaxis |
| Tipo de dato incorrecto | Comportamiento inesperado o error en tiempo de ejecución | Mezclar int con String sin conversión |
| Puerto COM incorrecto | No carga el programa | El IDE tiene seleccionado el puerto equivocado |
| Velocidad de baudrate incorrecta | Monitor serial muestra símbolos ilegibles | Serial.begin() y el monitor serial usan velocidades distintas |

---

## Notas docentes

El primer contacto con mensajes de error de compilación puede ser frustrante para los estudiantes acostumbrados a bloques (donde los errores de sintaxis son imposibles). Es importante normalizar los errores como parte del proceso, no como indicadores de fracaso. Una estrategia: el docente comete errores deliberadamente frente al grupo, lee el mensaje de error en voz alta, lo interpreta y lo corrige. Eso modela el comportamiento de un programador competente: los errores no son vergonzosos, son información.
