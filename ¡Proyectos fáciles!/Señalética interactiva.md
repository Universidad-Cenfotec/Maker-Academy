
# Proyecto Maker: Señalética interactiva

## Estado

**Estado:** Publicado  
**Versión:** v2.0

---

## Datos generales

- **Nivel sugerido:** 7.º a 9.º año
- **Duración aproximada:** 1 a 2 lecciones
- **Dificultad:** Fácil
- **Tecnología:** IDEABoard + IdeaSense
- **Programación:** IdeaScratch o Python

## 1. ¿Qué vamos a crear? 🎯

Vamos a construir un cartel interactivo que comunique mensajes de convivencia mediante botones y símbolos luminosos.

Cada botón mostrará un símbolo diferente en la matriz LED 5×5.

**Nuestro reto:** ¿Cómo podemos utilizar la tecnología para comunicar mensajes positivos en nuestra escuela?

## 2. ¿Qué necesitamos? 🧰

- [ ] IDEABoard
- [ ] IdeaSense
- [ ] Cable QWIIC
- [ ] Cable USB-C de datos
- [ ] Computadora
- [ ] Cartón rígido
- [ ] Marcadores y materiales para decorar
- [ ] Cinta adhesiva o pegamento
- [ ] Tijeras

## 3. ¡Manos a la obra! 🔧

### Paso 1. Elegimos los mensajes

Definimos qué queremos comunicar con cada botón.

| Botón | Mensaje | Símbolo |
|---|---|---|
| A | Acuerdo | Visto bueno ✓ |
| B | Amabilidad | Carita ☺ |
| C | Reconocimiento | Corazón ♥ |

### Paso 2. Conectamos los componentes

1. Conectamos IdeaSense a IDEABoard utilizando el cable QWIIC.
2. Conectamos IDEABoard a la computadora mediante USB-C.
3. Abrimos el entorno de programación.
4. Comprobamos que los componentes respondan correctamente.

### Paso 3. Programamos nuestra señalética 💻

Podemos utilizar una de las siguientes opciones.

#### Opción A. Programación por bloques (IdeaScratch)

Esta opción permite crear el programa arrastrando bloques, sin necesidad de escribir código.

**Instrucciones:**

1. Agregamos el bloque de configuración de IdeaSense Explorer.
2. Incorporamos un bloque **Por siempre**.
3. Agregamos tres condiciones:
   - Si se presiona A, mostrar un visto bueno.
   - Si se presiona B, mostrar una carita.
   - Si se presiona C, mostrar un corazón.
4. Utilizamos los bloques **Draw matrix** para crear los símbolos.

**Código de referencia:**

![Programación por bloques de Señalética interactiva](Recursos%20visuales/C%C3%B3digos/Se%C3%B1aleticaBloques.png)

#### Opción B. Programación en Python

Esta opción permite realizar la misma actividad escribiendo instrucciones en Python.

**Código completo:**

```python
import board
from ideaboard import IdeaBoard
from time import sleep

ib = IdeaBoard()

from ideasense import IdeaSense
idea = IdeaSense()

while True:
    sleep(0.01)

    # Botón A: Visto bueno
    if idea.pressed[0]:
        _pat = [
            [0, 0, 0, 0, 1],
            [0, 0, 0, 1, 0],
            [1, 0, 1, 0, 0],
            [0, 1, 0, 0, 0],
            [0, 0, 0, 0, 0]
        ]
        for _r in range(5):
            for _c in range(5):
                idea.matrix[_c, _r] = _pat[_r][_c]

    # Botón B: Carita
    if idea.pressed[1]:
        _pat = [
            [0, 0, 0, 0, 0],
            [0, 1, 0, 1, 0],
            [0, 0, 0, 0, 0],
            [0, 1, 1, 1, 0],
            [0, 0, 0, 0, 0]
        ]
        for _r in range(5):
            for _c in range(5):
                idea.matrix[_c, _r] = _pat[_r][_c]

    # Botón C: Corazón
    if idea.pressed[2]:
        _pat = [
            [0, 1, 0, 1, 0],
            [1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1],
            [0, 1, 1, 1, 0],
            [0, 0, 1, 0, 0]
        ]
        for _r in range(5):
            for _c in range(5):
                idea.matrix[_c, _r] = _pat[_r][_c]
```

**¿Cómo funciona el programa?**

- `idea.pressed[0]`: detecta el botón A.
- `idea.pressed[1]`: detecta el botón B.
- `idea.pressed[2]`: detecta el botón C.
- `idea.matrix`: controla los símbolos luminosos.
- `1`: LED encendido.
- `0`: LED apagado.

El programa revisa continuamente los botones y muestra el símbolo correspondiente cuando detecta una pulsación.

### Paso 4. Construimos el cartel

1. Recortamos una base de cartón rígido.
2. Escribimos el título de nuestra señalética.
3. Decoramos el cartel con los mensajes seleccionados.
4. Colocamos la placa dejando visibles los botones y la matriz LED.

### Paso 5. Probamos y mejoramos

Presionamos cada botón y comprobamos:

- [ ] El botón A muestra el visto bueno.
- [ ] El botón B muestra una carita.
- [ ] El botón C muestra un corazón.
- [ ] Los símbolos se distinguen fácilmente.
- [ ] El cartel es estable y fácil de utilizar.

**¡Podemos mejorar!** Si algún símbolo no se entiende, modificamos su diseño en la matriz LED.

## 4. ¿Qué aprendimos? 💡

Reflexionamos sobre nuestra experiencia:

- ¿Cómo sabe el programa qué botón presionamos?
- ¿Por qué es importante que los símbolos sean fáciles de reconocer?
- ¿Qué mejoraríamos de nuestra señalética?

## 5. ¡Compartimos nuestra creación! 🌟

Presentamos nuestro cartel y explicamos cómo funciona.

**Evidencias del proyecto:**

- Fotografía del cartel terminado.
- Captura de la programación.
- Breve registro de las pruebas realizadas.

## Nota para el docente

Este proyecto permite introducir conceptos de **entrada, condición y salida**, mediante una experiencia relacionada con la convivencia escolar.

**Recomendaciones:**

- Iniciar con programación por bloques y ofrecer Python como alternativa.
- Proporcionar el programa base cuando se quiera simplificar la actividad.
- Promover que los estudiantes personalicen los mensajes y símbolos.
- Comprobar previamente el funcionamiento del hardware y el entorno de programación.

**Adaptaciones:** Para estudiantes con menos experiencia, utilizar símbolos predefinidos. Para aumentar la dificultad, proponer nuevos mensajes, condiciones o secuencias luminosas.

