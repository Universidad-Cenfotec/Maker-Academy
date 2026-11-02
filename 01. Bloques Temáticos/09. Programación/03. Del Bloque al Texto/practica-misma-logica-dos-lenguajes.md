# Práctica guiada: la misma lógica, dos representaciones

> Este archivo pertenece a: **B09 Programación · Del Bloque al Texto**
>
> Ruta: `01. Bloques Temáticos/09. Programación/03. Del Bloque al Texto/practica-misma-logica-dos-lenguajes.md`

---

## Estado

**Estado:** En revisión

**Versión:** v0.1

**Bloque:** 09_programacion

**Última actualización:** 2026-11-01

---

## Descripción

El equipo compara una guía de destinos por bloques o tarjetas con un programa de Python que debería ofrecer las mismas tres respuestas. Una de las condiciones del programa está equivocada. En lugar de corregirla a simple vista, el grupo predice tres salidas, ejecuta, rastrea el caso que falla y prueba una modificación pequeña.

## Propósito

Leer una condición en texto, relacionarla con una decisión ya conocida, diferenciar la entrada del resultado y justificar una corrección a partir de una prueba. Reconocer que una ejecución sin error de sintaxis todavía puede dar una respuesta incorrecta.

## Contenido

### 1. Preparación docente

**Nivel recomendado:** 7.º–9.º, tras trabajar decisiones en bloques. **Tiempo:** 45–60 minutos. Prepare un entorno Python 3 local o [Python Tutor](https://pythontutor.com/visualize.html) y una hoja con tres casos. Compruebe antes que el centro permite abrir el visualizador; no pegue datos reales del estudiantado o de visitantes.

En papel, represente la misma regla con tarjetas: «si materiales → mensaje A; si lectura → mensaje B; si ninguna → pedir otra elección». Puede recuperarse la [guía interactiva por bloques](../02.%20Programaci%C3%B3n%20por%20Bloques/practica-guia-interactiva.md) si el grupo ya la construyó. Aclare que la versión de Python muestra texto en consola; no está haciendo clic en los botones del proyecto de bloques.

### 2. Inspiración · acordar qué debería hacer

Una persona visitante pide **lectura** y la guía no le da la dirección esperada. Antes de mostrar el programa, pida que el equipo complete las salidas previstas:

| Entrada | Respuesta que queremos |
| --- | --- |
| `materiales` | `Andá a la mesa de materiales` |
| `lectura` | `Andá a la zona de lectura` |
| `otro` | `Elegí materiales o lectura` |

En grupos con experiencias distintas de Python, asigne roles de lector de código, predictor, operador y observador. Un compañero puede leer en voz alta las líneas sin quitar a otro la decisión sobre qué prueba ejecutar.

### 3. Experimentación · una rama que no responde

Entregue este programa tal como está. La condición repetida es intencional para la práctica.

```python
destino = "lectura"

if destino == "materiales":
    mensaje = "Andá a la mesa de materiales"
elif destino == "materiales":
    mensaje = "Andá a la zona de lectura"
else:
    mensaje = "Elegí materiales o lectura"

print(mensaje)
```

1. Sin ejecutarlo, prediga qué imprimirá con `lectura`. Señale la línea que cree que decidirá el resultado.
2. Ejecute. Anote la salida exacta y compárela con la tabla de intención.
3. Avance línea por línea en Python Tutor o con una traza de papel. Marque el valor de `destino` y el resultado de cada comparación. ¿Por qué la segunda rama tampoco se ejecutó?
4. Cambie **solo una condición**. Vuelva a probar `lectura`, luego `materiales` y `otro`, modificando el valor de la primera línea antes de cada ejecución.
5. Pruebe `Lectura` con mayúscula. Decida si se aceptará esa variante. Si se decide que sí, explique que se necesitará una regla adicional; no cambie la especificación silenciosamente después de observar la salida.

| Registro | Respuesta del equipo |
| --- | --- |
| Predijimos para `lectura`… | ______________________________ |
| El programa mostró… | ______________________________ |
| La primera diferencia estuvo en… | ______________________________ |
| Cambiamos… y al volver a probar… | ______________________________ |

**Comprobación docente:** antes del cambio, `lectura` produce la respuesta genérica porque ambas comparaciones preguntan por `materiales`. Cambiar la condición del `elif` a `destino == "lectura"` hace que los tres casos de la tabla respondan como se esperaba. `Lectura` conserva la respuesta genérica; el programa todavía distingue mayúsculas. No entregue esta explicación antes de que el grupo rastree al menos un caso.

### 4. Ajustes y extensión

Si la sintaxis interrumpe la conversación, entregue las líneas impresas como tiras y pida a una pareja que actúe de intérprete: lee una condición por vez y señala si es verdadera. Una tercera persona registra el valor de `mensaje`. En el entorno local, use únicamente el ejemplo con datos ficticios.

Para 10.º–11.º, pida que el equipo convierta la regla corregida en una función que reciba el destino y devuelva el mensaje, y que diseñe pruebas para entrada vacía, mayúscula y espacios. Esa ampliación es posterior a la prueba inicial; no se evalúa a 7.º–9.º por haberla completado. Quien termine antes puede explicar por qué un `SyntaxError` sería distinto del error de lógica encontrado.

### 5. Reflexión y evaluación formativa

Guarde la tabla de predicción y las tres salidas después del cambio. Pida a otra pareja que pruebe un cuarto valor. Pregunte: «¿Qué aprendimos al mirar el valor de `destino`?», «¿por qué fue útil volver a probar materiales?» y «¿qué comportamiento queda fuera de nuestra regla?».

La evidencia mínima es una predicción, una traza del caso `lectura`, la condición corregida y una segunda ejecución. Regístrela con la [ficha breve](../07.%20Evaluaci%C3%B3n/registro-de-pruebas.md) si el grupo ya la usa; no exija documentar cada pulsación del visualizador.

## Aplicación en Maker Academy

**Inspiración:** una necesidad real de orientar a quien visita el espacio. **Experimentación:** comparar representaciones, probar tres entradas y corregir una condición. **Reflexión:** explicar por qué el programa corría sin error de sintaxis y, aun así, respondía mal para lectura. La revisión entre pares hace visible lo que el autor asumía sobre las entradas.

## Recursos relacionados

- [Una regla en bloques y en Python](una-regla-en-bloques-y-en-python.md).
- [Python Tutor y otros entornos](../06.%20Herramientas%20para%20el%20Aula/juegos-y-entornos-interactivos.md).
- [Registro de pruebas](../07.%20Evaluaci%C3%B3n/registro-de-pruebas.md).

## Imagen sugerida

El [esquema comparativo](../imagenes/misma-regla-dos-representaciones.svg) muestra las tres salidas deseadas. Contrástelo con la traza de la versión defectuosa, que no alcanza la respuesta de lectura.

## Nota docente

El dato importante es que el equipo pueda decir **por qué** la rama de lectura no se ejecutó. Una corrección acertada por casualidad se puede comprobar pidiendo que prediga el cuarto caso antes de abrir el programa.
