# Caja Ensamblable con Láser , Práctica Guiada

> Ruta: `01_bloques-tematicos/02_fabricacion-digital/practicas-guiadas/caja-ensamblable-laser`

---

**Estado:** Completo  
**Versión:** v1.0  
**Bloque:** 02_fabricacion-digital  
**Tecnología principal:** Cortadora láser  
**Nivel sugerido:** Secundaria  
**Duración estimada:** 2 sesiones de 60–90 minutos (diseño + corte/ensamble)

---

## Propósito de esta práctica

La caja ensamblable es considerada el "Hola Mundo" de la fabricación láser. No hay proyecto que introduzca mejor los conceptos de ensamble tipo finger joint, compensación de kerf, y el pensamiento tridimensional a partir de piezas planas.

A diferencia del llavero ,que es básicamente bidimensional, la caja obliga a pensar en cómo seis piezas planas se convierten en una estructura tridimensional. Ese salto conceptual es el aprendizaje central de esta práctica.

---

## Objetivos de aprendizaje

Al finalizar esta práctica, el estudiante habrá:

- Comprendido cómo un objeto 3D se puede descomponer en piezas planas (desarrollo de superficies)
- Aplicado el concepto de finger joint para ensamblar piezas sin pegamento
- Compensado el kerf en el diseño para lograr un ensamble con ajuste correcto
- Iterado al menos una vez en su diseño a partir de una prueba física

---

## Materiales

| Material | Cantidad | Notas |
|---|---|---|
| MDF de 3 mm | Según el tamaño de la caja | Una caja de 100×100×80 mm usa aprox. 30×20 cm de material |
| Cola blanca (PVA) o pegamento de madera | Opcional | Para hacer el ensamble permanente si se desea |
| Lija grano 220 | Opcional | Para suavizar los bordes después del corte |

**Sobre la elección del grosor:** el grosor del material (3 mm en este caso) define directamente el tamaño de los fingers del finger joint. Si cambias el grosor, debes regenerar el diseño.

---

## Herramientas y software

- Cortadora láser
- Computadora con navegador web (para MakerCase) o **Inkscape/Fusion 360** para diseño manual
- **LightBurn** o software equivalente
- Calibrador vernier
- Espátula o estilete para ayudar a ensamblar las piezas

---

## Concepto clave: del objeto 3D a piezas planas

Una caja tiene 6 caras. Para fabricarla en láser, necesitamos 6 piezas planas que, al unirse, formen la caja. Este proceso se llama **desarrollo de superficies** y es el mismo principio que usa el cartón de una caja de cereal: si la despliegas completamente, obtienes una figura plana que, al doblar, forma la caja.

> **Analogía:** piensa en un dado de seis caras. Si lo "desarmáramos" sin destruirlo, abriéndolo por sus aristas, obtendríamos una cruz plana formada por seis cuadrados. Eso es un desarrollo de superficie. En nuestra caja, hacemos lo mismo , pero en lugar de doblar el material, conectamos las piezas con finger joints.

---

## Flujo de la práctica

### Sesión 1: Diseño (60–90 min)

#### Opción A: Diseño con MakerCase (recomendado para principiantes)

[MakerCase](https://www.makercase.com) es una herramienta web que genera automáticamente el patrón de finger joints para una caja con las dimensiones que especifiques.

**Pasos:**

1. Ir a [makercase.com](https://www.makercase.com)
2. Elegir "Open Box" (caja sin tapa) o "Closed Box" (caja con tapa)
3. Ingresar las dimensiones internas deseadas (ancho, largo, alto) en milímetros
4. Ingresar el grosor del material: **3 mm**
5. Activar la compensación de kerf: ingresar el kerf de la máquina (si no se conoce, empezar con 0.1 mm y ajustar)
6. Seleccionar el estilo de finger joint (ancho de los fingers , sugerido: igual al grosor del material = 3 mm)
7. Descargar el archivo SVG

**Verificación antes de cortar:**
- Abrir el SVG en Inkscape y confirmar que todas las medidas están en mm (no en px)
- Verificar que hay exactamente 6 piezas (o 5 si es caja abierta)
- Confirmar que los fingers encajan visualmente antes de cortar

#### Opción B: Diseño manual en Inkscape (para grupos más avanzados)

Diseñar el finger joint manualmente requiere:
1. Calcular el número de fingers por lado: `número de fingers = longitud del lado / (2 × grosor_material)`
2. Dibujar cada pieza con sus fingers en los bordes correspondientes
3. Los fingers de una pieza deben ser el "negativo" de los fingers de la otra , donde una tiene una lengüeta, la otra tiene un hueco

Este proceso es más lento pero permite entender profundamente el diseño paramétrico.

#### Personalización del diseño

Una vez generado el patrón base, los estudiantes pueden añadir:
- Grabado en la tapa o paredes (nombre, patrón, imagen)
- Agujeros de ventilación decorativos (patrones geométricos) en las paredes laterales
- Un pestillo simple diseñado en la tapa

---

### Sesión 2: Corte, prueba y ensamble (60–90 min)

#### Prueba de kerf (15 min , crucial)

Antes de cortar la caja completa, cortar una pieza de prueba:

1. Diseñar un pequeño cuadrado de finger joint: dos piezas de 30×30 mm con 2 fingers cada una
2. Cortarlas y ensamblarlas
3. Evaluar el ajuste:

| Resultado | Interpretación | Acción |
|---|---|---|
| Las piezas no entran | Kerf insuficiente (los fingers son demasiado grandes) | Aumentar el valor de kerf en el diseño |
| Las piezas entran pero quedan flojas | Kerf excesivo (los fingers son demasiado pequeños) | Disminuir el valor de kerf |
| Las piezas entran con presión moderada | ✓ Kerf correcto | Proceder con el corte de la caja |

> Esta prueba consume muy poco material (dos rectángulos pequeños) pero puede evitar desperdiciar una pieza de MDF completa.

#### Corte de las piezas (20–30 min)

1. Colocar todas las piezas en el archivo de corte, optimizando el uso del material (sin espacios innecesarios entre piezas)
2. Configurar parámetros:

**Parámetros orientativos para MDF 3 mm:**

| Operación | Velocidad | Potencia | Pasadas |
|---|---|---|---|
| Grabado | 200–300 mm/s | 20–35% | 1 |
| Corte | 15–25 mm/s | 75–90% | 1–2 |

3. Si hay grabado, configurarlo primero en el orden de operaciones
4. Ejecutar el corte

#### Ensamble (15–20 min)

El ensamble en seco (sin pegamento) es el primer paso , así se verifica que todo encaja antes de usar adhesivo.

**Orden de ensamble para una caja rectangular:**
1. Base + dos paredes largas
2. Agregar las dos paredes cortas
3. Agregar la tapa (si aplica)

**Si una pieza no entra:**
- No forzar , puede romperse
- Identificar qué finger está bloqueando usando una linterna o luz
- Lijar suavemente ese finger (por el canto, con lija fina)

**Si el ensamble en seco funciona correctamente y se quiere hacer permanente:**
- Aplicar una pequeña cantidad de cola blanca en los fingers antes de ensamblar definitivamente
- Alinear bien todas las piezas antes de que seque
- Dejar asentar sin presionar excesivamente

---

## Reflexión técnica: ¿por qué usamos finger joints?

El finger joint no es solo una solución estética , es estructuralmente inteligente. La superficie de contacto entre dos piezas unidas con finger joint es mucho mayor que si simplemente estuvieran pegadas borde a borde. Más superficie de contacto significa más resistencia.

Además, los fingers actúan como guías de alineación: es muy difícil que las piezas queden torcidas entre sí cuando los fingers las mantienen en posición.

> **Analogía estructural:** las fichas de rompecabezas no se quedan juntas por la forma de las piezas , se quedan juntas porque la tensión entre las piezas vecinas se distribuye por toda la superficie de contacto. El finger joint funciona igual.

---

## Variantes y extensiones

**Caja con tapa deslizante:** en lugar de una tapa con finger joints, diseñar ranuras en las paredes laterales por donde deslice una pieza de madera delgada.

**Caja hexagonal:** usar MakerCase en modo "custom polygon" o diseñarla manualmente. Introduce conceptos de ángulos y uniones no rectas.

**Caja con compartimentos:** agregar paredes divisorias internas (con ranuras T-slot para que se sostengan sin pegamento).

**Versión en acrílico transparente:** el mismo diseño en acrílico crea un efecto visual completamente diferente. Los parámetros de corte cambian (más lento, menos potencia que el MDF).

---

## Indicadores de éxito

Al finalizar, el estudiante debería poder responder:

- ¿Por qué los fingers tienen el mismo tamaño que el grosor del material?
- ¿Qué hubiera pasado si no hacíamos la prueba de kerf primero?
- Si la caja midiera el doble, ¿cuánto material adicional necesitarías?

---

## Notas docentes

**Gestión del tiempo:** esta es una práctica de dos sesiones. Si el tiempo es limitado, la primera sesión puede terminar con el archivo listo para cortar, y la segunda sesión con el corte y ensamble. No intentar comprimir todo en una hora.

**Error más frecuente:** estudiantes que no ajustan el kerf porque "se ve bien en pantalla". El kerf no se ve en pantalla , solo aparece en el material físico. Insistir en la prueba de kerf antes de cortar la pieza final.

**Conexión curricular:** esta práctica conecta con geometría (desarrollo de superficies, proporciones) y con diseño industrial. Para secundaria, es posible introducir conceptos de diseño paramétrico: *"¿qué pasaría si cambiamos una sola medida , cómo afecta a todas las demás piezas?"*
