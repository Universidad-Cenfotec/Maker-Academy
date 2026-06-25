# Progresión de Programación , Microcontroladores

> Ruta: `01_bloques-tematicos/04_microcontroladores/progresion-programacion`

---

## Estado

- **Estado:** Completo
- **Versión:** v1.0

---

## Propósito

La programación no empieza con una pantalla. Empieza con la comprensión de que una instrucción tiene un significado preciso, que el orden importa y que si algo no funciona, se puede encontrar el error de forma sistemática. Esta sección organiza el camino desde esa comprensión más básica hasta la escritura de código en texto complejo.

La progresión está dividida en tres niveles que corresponden a distintas formas de expresar instrucciones:

- **Iconográfico:** instrucciones físicas, sin pantalla ni dispositivo electrónico
- **Bloques:** instrucciones visuales en entornos de programación gráfica
- **Texto:** código escrito en lenguajes como Arduino C++ o MicroPython

---

## Estructura de la progresión

```
05. Progresión de Programación/
├── README.md                  ← Este archivo
├── iconografico/
│   ├── README.md
│   ├── tarjetas-flechas.md   ← Dar instrucciones con tarjetas físicas
│   ├── secuencias-colores.md ← Programar secuencias con bloques de colores
│   └── rutas-en-piso.md      ← Planificar rutas en el suelo con cinta
├── bloques/
│   ├── README.md
│   ├── makecode-basico.md    ← MakeCode para micro:bit y Circuit Playground
│   ├── scratch-basico.md     ← Scratch con hardware usando extensiones
│   └── bloques-con-sensores.md ← Condicionales y umbrales con sensores
└── texto/
    ├── README.md
    ├── arduino-basico.md     ← C++ con Arduino IDE
    ├── micropython-basico.md ← MicroPython en micro:bit y ESP32
    ├── circuitpython-basico.md ← CircuitPython en Circuit Playground
    └── python-robotica.md    ← Python para proyectos más complejos
```

---

## ¿Por qué tres niveles?

Cada nivel desarrolla un tipo distinto de comprensión:

**Iconográfico:** construye el modelo mental de "instrucción" sin la distracción de la sintaxis o la interfaz. El error es inmediato y corporal: el compañero-robot va a donde no debía. Eso hace la depuración completamente intuitiva.

**Bloques:** permite expresar ideas complejas (bucles, condiciones, variables) sin la barrera de la sintaxis. El estudiante puede enfocarse en la lógica del programa porque los bloques lo ayudan a construir instrucciones sintácticamente correctas por construcción.

**Texto:** introduce la disciplina de la sintaxis exacta y la lectura de mensajes de error. Este nivel desarrolla habilidades directamente transferibles a entornos profesionales de programación.

---

## Cuándo avanzar de nivel

El criterio para avanzar de nivel no es la edad ni el tiempo transcurrido: es la fluidez. Un estudiante está listo para pasar de iconográfico a bloques cuando puede crear secuencias de más de 10 pasos con confianza y depurar errores de forma independiente. Está listo para pasar de bloques a texto cuando puede leer un programa de bloques de otra persona y predecir el comportamiento sin ejecutarlo.

No es necesario completar un nivel antes de explorar el siguiente. Muchos estudiantes se benefician de ver código en texto mientras todavía trabajan con bloques: desmitifica el código y reduce la ansiedad ante el cambio de nivel.

---

## Notas docentes

La tendencia en muchos contextos es saltarse el nivel iconográfico por considerarlo "demasiado simple" para la edad del grupo. Es un error frecuente con consecuencias reales: grupos que llegan a bloques sin haber desarrollado el modelo mental de "instrucción exacta" tienen dificultades específicas para entender por qué sus programas no hacen lo que ellos quieren.

El nivel iconográfico puede completarse en dos sesiones de 45 minutos con cualquier grupo que no tenga experiencia previa en programación, independientemente de su edad.
