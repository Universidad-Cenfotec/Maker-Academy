# Pieza 3D Funcional , Práctica Guiada

> Ruta: `01_bloques-tematicos/02_fabricacion-digital/practicas-guiadas/pieza-3d-funcional`

---

**Estado:** Completo  
**Versión:** v1.0  
**Bloque:** 02_fabricacion-digital  
**Tecnología principal:** Impresora 3D FDM  
**Software:** Tinkercad (diseño) + Cura o PrusaSlicer (slicing)  
**Nivel sugerido:** Secundaria  
**Duración estimada:** 2–3 sesiones de 60 minutos + tiempo de impresión (variable)

---

## Propósito de esta práctica

Imprimir un objeto decorativo es fácil. Diseñar una pieza que *resuelve un problema real* es una habilidad completamente distinta. Esta práctica lleva a los estudiantes a diseñar una pieza que debe cumplir una función específica: sostener algo, conectar algo, contener algo, o facilitar una acción.

La diferencia entre imprimir un modelo descargado de internet y diseñar uno propio desde cero es la diferencia entre consumir tecnología y crearla. Esta práctica es sobre lo segundo.

---

## Objetivos de aprendizaje

Al finalizar esta práctica, el estudiante habrá:

- Identificado un problema real en su entorno y propuesto una solución fabricable en 3D
- Modelado una pieza funcional en Tinkercad con al menos una restricción dimensional real
- Exportado el modelo como STL y configurado el slicer para los parámetros de impresión adecuados
- Evaluado si la pieza impresa cumple su función y propuesto mejoras concretas

---

## ¿Qué es una pieza "funcional"?

Una pieza funcional es aquella que debe cumplir un requisito de desempeño ,no solo verse bien. Esto implica que hay criterios de éxito medibles:

- Un gancho debe sostener un peso determinado sin deformarse
- Un soporte de celular debe mantener el teléfono a un ángulo específico sin volcarse
- Un organizador de cables debe permitir el paso de cables de cierto diámetro
- Un tapón de repuesto debe sellar un agujero sin filtrar agua

> **Analogía del ingeniero:** un escultor busca que su obra sea bella. Un ingeniero busca que su diseño funcione. Un buen diseñador maker busca las dos cosas. Esta práctica inclina la balanza hacia la funcionalidad , sin olvidar que la forma importa.

---

## Materiales

| Material | Cantidad | Notas |
|---|---|---|
| Filamento PLA | ~5–15 g por pieza | Color a elección PLA es suficiente para piezas de uso general |
| Papel de lija fino (opcional) | , | Para acabado superficial post-impresión |
| Calibrador vernier | 1 por equipo | Para medir el objeto real que la pieza debe complementar |

---

## Herramientas y software

- Computadora con acceso a [Tinkercad](https://www.tinkercad.com) (gratuito, en navegador)
- Slicer: [Ultimaker Cura](https://ultimaker.com/software/ultimaker-cura/) o [PrusaSlicer](https://www.prusa3d.com/prusaslicer/) (ambos gratuitos)
- Impresora 3D FDM (cualquier modelo compatible con G-code estándar)

---

## Fase 0: Definición del problema (15–20 min)

Antes de abrir Tinkercad, el estudiante debe responder estas tres preguntas:

1. **¿Qué problema resuelve mi pieza?**  
   Ejemplo: *"Los cables de mi escritorio siempre se caen cuando desconecto el cargador."*

2. **¿Cuáles son los requisitos dimensionales?**  
   Ejemplo: *"El cable tiene 4 mm de diámetro. El borde del escritorio tiene 20 mm de grosor."*

3. **¿Cómo verificaré que funciona?**  
   Ejemplo: *"El cable debe quedar sostenido sin caerse aunque lo suelte, y el gancho debe mantenerse en el borde sin resbalarse."*

Escribir estas respuestas antes de diseñar evita el error más común: diseñar primero y descubrir después que no encaja con el objeto real.

**Ideas de piezas funcionales para el aula** (si los estudiantes no tienen idea propia):

| Pieza | Función | Complejidad |
|---|---|---|
| Gancho para auriculares | Cuelga los auriculares del borde de un monitor o escritorio | Baja |
| Soporte para tablet | Sostiene una tablet a un ángulo de lectura | Media |
| Organizador de clips/ligas | Contiene objetos pequeños en el escritorio | Baja |
| Tapa de repuesto para botella | Reemplaza una tapa perdida | Media |
| Adaptador de conector | Une dos piezas con geometría incompatible | Alta |
| Soporte para planta pequeña | Permite colgar una maceta pequeña de una repisa | Media |

---

## Fase 1: Diseño en Tinkercad (40–60 min)

### Principios de diseño para impresión 3D funcional

Antes de modelar, hay cuatro reglas que hacen la diferencia entre una pieza que se imprime bien y una que falla:

**Regla 1: Diseña pensando en la gravedad del filamento**  
La impresora construye la pieza capa por capa, de abajo hacia arriba. Cada capa debe apoyarse sobre la anterior. Los voladizos mayores de ~45° necesitan soportes (material adicional que se retira después). Si es posible, diseña la pieza para que no los necesite.

> **Analogía:** construir con bloques de Lego capa por capa. No puedes poner un bloque en el aire , necesita algo debajo que lo sostenga. El slicer puede agregar "soportes" automáticamente, pero idealmente el diseño los evita.

**Regla 2: Las paredes delgadas se rompen**  
Para PLA en impresora FDM, una pared funcional debe tener al menos 1.5–2 mm de grosor. Paredes más delgadas pueden imprimirse, pero son frágiles.

**Regla 3: Los agujeros horizontales son ovalados**  
Un agujero diseñado como círculo perfecto, al imprimirse horizontalmente, sale ligeramente ovalado porque las capas superiores tienden a hundirse un poco. Compensación: diseñar el agujero 0.2–0.4 mm más grande de lo necesario, o imprimirlo verticalmente si es posible.

**Regla 4: La orientación de impresión afecta la resistencia**  
Las capas de impresión son el punto más débil de la pieza , se separan más fácilmente que el plástico sólido. Una pieza que soportará fuerza en una dirección debe orientarse para que las capas sean perpendiculares a esa fuerza.

---

### Flujo de modelado en Tinkercad

**1. Empezar por el cuerpo principal**  
En Tinkercad, casi todo se construye combinando formas básicas (cubos, cilindros, esferas) con operaciones de unión y resta. La lógica es: *"¿Qué forma sólida se parece más a mi pieza?"* Partir de esa forma y modificarla.

**2. Usar el modo de medición constante**  
Cada vez que se modifica una dimensión, confirmar el valor numéricamente en el panel de propiedades. No depender de la vista , el ojo engaña. Usar el calibrador para medir el objeto real y transcribir esas medidas exactas al modelo.

**3. Agregar los elementos de función**  
Los agujeros, ranuras, bordes redondeados y relieves se agregan como formas de "hueco" en Tinkercad. Los bordes redondeados (fillets) no solo son estéticos , reducen el estrés mecánico en las esquinas y hacen la pieza más resistente.

**4. Revisar antes de exportar**  
Antes de exportar:
- Rotar el modelo en todas las direcciones para buscar geometría inesperada
- Verificar que no hay piezas "flotando" desconectadas del cuerpo principal
- Comprobar que el tamaño es el correcto (Tinkercad muestra las dimensiones en la barra de propiedades)

**5. Exportar como STL**  
`Exportar → .STL` desde el menú de Tinkercad. El archivo STL describe la superficie del modelo como una malla de triángulos , es el formato universal para impresión 3D.

---

## Fase 2: Configuración del slicer (20–30 min)

El slicer convierte el modelo 3D en instrucciones de movimiento para la impresora (G-code). Las decisiones tomadas aquí afectan directamente la resistencia, el tiempo y el uso de material.

### Parámetros fundamentales

**Altura de capa (layer height)**

| Valor | Resultado | Cuándo usarlo |
|---|---|---|
| 0.1 mm | Superficie muy suave, detalle fino | Piezas decorativas o con texto pequeño |
| 0.2 mm | Equilibrio calidad/velocidad | La mayoría de las piezas funcionales |
| 0.3 mm | Más rápido, visible el escalonado | Prototipos rápidos o piezas grandes sin detalle |

**Relleno (infill)**

El interior de la pieza no se imprime sólido , se rellena con un patrón geométrico que ahorra material y tiempo.

| Porcentaje | Descripción | Para qué sirve |
|---|---|---|
| 10–15% | Muy ligero | Piezas decorativas, sin carga |
| 20–30% | Estándar | La mayoría de las piezas funcionales |
| 40–60% | Resistente | Piezas que soportan peso o impacto |
| 80–100% | Casi sólido | Piezas con carga extrema o muy pequeñas |

> **Analogía del relleno:** imagina un panel de cartón corrugado. Aunque las dos caras externas son sólidas, el interior tiene un patrón ondulado que da resistencia con muy poco material. El relleno de impresión 3D hace exactamente lo mismo, pero con patrones más complejos (panal de abeja, gyroide, líneas).

**Soportes (supports)**

Si la pieza tiene partes que "vuelan" (ángulo mayor a 45° sobre el vacío), el slicer puede generar soportes automáticamente. Siempre revisar la vista de capas del slicer para ver si hay soportes y dónde están , a veces se generan en lugares innecesarios.

**Adhesión a la cama (bed adhesion)**

Para piezas pequeñas o con poca superficie de contacto con la cama:
- **Brim:** agrega un borde plano alrededor de la base (fácil de retirar, buena adhesión)
- **Raft:** imprime una plataforma completa debajo de la pieza (más estable, más difícil de retirar)
- **Skirt:** solo dibuja el contorno, no toca la pieza (útil para "purgar" el filamento al inicio)

### Configuración recomendada para esta práctica

| Parámetro | Valor recomendado |
|---|---|
| Altura de capa | 0.2 mm |
| Relleno | 25–35% |
| Paredes (perimeters) | 3 |
| Temperatura de extrusión (PLA) | 200–215 °C |
| Temperatura de cama (PLA) | 55–65 °C |
| Velocidad de impresión | 40–60 mm/s |
| Soportes | Solo si son estrictamente necesarios |

---

## Fase 3: Impresión y evaluación (sesión 3)

### Durante la impresión

- Supervisar las primeras 5–10 capas: si la primera capa no adhiere bien, detener y ajustar (limpiar la cama, ajustar el offset Z)
- Si el filamento se desprende de la cama a mitad de la impresión: detener, limpiar y reiniciar
- No interrumpir la impresión innecesariamente , el filamento puede "babear" al reanudar

### Evaluación de la pieza impresa

Una vez fría la pieza (esperar al menos 5 minutos después de retirarla de la cama):

**Prueba funcional:**
¿Cumple la función para la que fue diseñada? Probarla con el objeto real para el que fue creada.

**Prueba dimensional:**
Medir las dimensiones críticas con el calibrador y comparar con el diseño. ¿Cuánto se alejó del valor diseñado?

**Prueba de resistencia:**
Aplicar la carga o fuerza para la que fue diseñada. ¿Se deforma? ¿Se rompe?

**Registro de iteración:**
Completar esta tabla antes de terminar la sesión:

| Aspecto | Lo que diseñé | Lo que obtuve | Ajuste necesario |
|---|---|---|---|
| Dimensión crítica A | , mm | , mm | , |
| Dimensión crítica B | , mm | , mm | , |
| Función principal | Descripción | ¿Funciona? | , |
| Acabado superficial | , | , | , |

---

## Variantes y extensiones

**Diseño paramétrico con Fusion 360:** para grupos avanzados, Fusion permite definir medidas como variables y cambiar todo el modelo modificando un solo número. Ideal para piezas que deben fabricarse en diferentes tamaños.

**Pieza de dos materiales:** imprimir el cuerpo rígido en PLA y agregar una parte flexible (TPU) para los puntos de contacto. Requiere una impresora con doble extrusor o cambio manual de filamento.

**Pieza con inserción de hardware:** diseñar agujeros para insertar tuercas hexagonales o insertos de metal a presión/calor, para crear uniones roscadas permanentes.

---

## Indicadores de éxito

Al finalizar, el estudiante debería poder responder:

- ¿Por qué elegiste esa orientación de impresión?
- ¿Qué cambiarías en el diseño después de ver la pieza impresa?
- ¿Qué parámetro del slicer tuvo más impacto en la calidad de tu pieza?

---

## Notas docentes

**La iteración es el producto.** Si una pieza sale perfecta al primer intento, probablemente el reto no era suficientemente ambicioso. Normalizar ante los estudiantes que imprimir dos o tres versiones de la misma pieza es parte del proceso, no un fracaso.

**Gestión del tiempo de impresión:** las piezas pequeñas (gancho, organizador) toman 20–45 minutos. Piezas medianas pueden tomar 1–3 horas. Si el tiempo es limitado, asignar el tiempo de impresión fuera de la sesión (por la noche, en recreo) o usar impresoras múltiples en paralelo.

**Error frecuente:** estudiantes que diseñan la pieza sin medir el objeto real primero. El calibrador debe usarse ANTES de abrir Tinkercad, no después. Proponer una regla de clase: *"Si no tienes el objeto real en la mano cuando diseñas, algo saldrá mal."*

**Conexión curricular:** esta práctica conecta con tecnología, diseño industrial, y con el método científico (hipótesis → prueba → análisis → mejora). Para secundaria, es posible introducir el concepto de ciclo de vida del producto: ¿qué pasa con la pieza cuando ya no se necesita?
