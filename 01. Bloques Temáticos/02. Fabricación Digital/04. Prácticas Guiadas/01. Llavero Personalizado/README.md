# Llavero Personalizado , Práctica Guiada

> Ruta: `01_bloques-tematicos/02_fabricacion-digital/practicas-guiadas/llavero-personalizado`

---

**Estado:** Completo  
**Versión:** v1.0  
**Bloque:** 02_fabricacion-digital  
**Tecnología principal:** Cortadora láser  
**Nivel sugerido:** Primaria alta / Secundaria  
**Duración estimada:** 60–90 minutos (incluyendo diseño y corte)

---

## Propósito de esta práctica

El llavero personalizado es la práctica introductoria ideal para la cortadora láser. Es lo suficientemente simple para completarse en una sola sesión, y lo suficientemente significativo para que los estudiantes quieran hacerlo bien , porque se lo llevan puesto.

Permite introducir de forma práctica los conceptos de: diseño vectorial, diferencia entre corte y grabado láser, ajuste de parámetros de la máquina, y el ciclo completo de diseño-fabricación.

---

## Objetivos de aprendizaje

Al finalizar esta práctica, el estudiante habrá:

- Creado un archivo vectorial (.svg o .dxf) con una forma personalizada
- Distinguido entre líneas de corte y áreas de grabado en el diseño
- Configurado los parámetros básicos de la cortadora láser (velocidad y potencia) para el material elegido
- Obtenido una pieza física a partir de un archivo digital propio

---

## Materiales

| Material | Cantidad | Notas |
|---|---|---|
| MDF de 3 mm | 1 pieza de ~15 × 10 cm por estudiante | También funciona con acrílico de 2–3 mm |
| Cordón o argolla para llavero | 1 por estudiante | Se consigue en mercerías o papelerías |
| Papel de enmascarar | Opcional | Protege la superficie durante el grabado en madera |

---

## Herramientas y software

- Cortadora láser (cualquier modelo con software compatible con SVG/DXF)
- Computadora con **Inkscape** (gratuito) o similar
- **LightBurn** (o el software propio de la cortadora láser)
- Calibrador o regla milimétrica

---

## Preparación del docente (antes de la sesión)

1. Verificar que la cortadora láser esté calibrada y limpia (especialmente los espejos y lente)
2. Tener listos los parámetros de corte y grabado para el material del día (velocidad, potencia)
3. Preparar una plantilla base en Inkscape con el círculo de la argolla ya incluido , los estudiantes solo añaden su diseño
4. Cortar un llavero de ejemplo para mostrar el resultado esperado

> **Nota de seguridad:** revisar la ventilación del área antes de iniciar. El corte de MDF produce humo con partículas finas la ventilación activa es obligatoria.

---

## Flujo de la práctica

### Fase 1: Diseño (25–35 min)

**1.1 Definir la forma del llavero**

El llavero puede tener cualquier silueta: un animal, un símbolo, las iniciales del nombre, una figura geométrica, un ícono de interés personal. La única restricción técnica es que **la silueta debe ser un contorno cerrado** (una forma que encierra un área, no líneas sueltas).

En Inkscape:
- Usar la herramienta de formas básicas para figuras geométricas
- Usar la herramienta de Bezier/pluma para formas orgánicas o texto convertido a trayectoria
- Para texto: escribir, seleccionar, ir a **Trayectoria → Objeto a trayectoria** (esto convierte las letras en formas vectoriales que la máquina puede cortar)

**1.2 Agregar el agujero para la argolla**

El agujero debe tener al menos 4 mm de diámetro para que pase la argolla. Se coloca con la herramienta de círculos, cerca del borde superior de la pieza.

**1.3 Definir qué se corta y qué se graba**

En LightBurn (y en la mayoría de los softwares de láser), el color de la línea determina la operación:
- **Línea roja** → corte (atraviesa el material)
- **Línea negra** o **relleno negro** → grabado (marca la superficie sin cortar)

Convención recomendada para esta práctica:
- Contorno exterior del llavero: línea de corte (roja)
- Agujero de la argolla: línea de corte (roja)
- Texto, decoración, imagen interna: grabado (negro)

**1.4 Verificar el tamaño**

Un llavero funcional suele medir entre 4 cm y 8 cm en su dimensión más larga. Usar la herramienta de transformaciones de Inkscape para confirmar el tamaño real en milímetros antes de exportar.

---

### Fase 2: Preparación del archivo (10 min)

1. Exportar desde Inkscape como **SVG plano** o **DXF**
2. Abrir en LightBurn (o el software de la máquina)
3. Verificar que los colores/capas estén asignados correctamente (corte vs. grabado)
4. Configurar los parámetros según el material:

**Parámetros orientativos para MDF 3 mm:**

| Operación | Velocidad | Potencia | Pasadas |
|---|---|---|---|
| Grabado | 200–300 mm/s | 20–35% | 1 |
| Corte | 15–25 mm/s | 70–85% | 1–2 |

> Estos valores son orientativos. **Siempre hacer una prueba de material** antes del corte final.

5. Posicionar el diseño sobre el material en la pantalla del software

---

### Fase 3: Fabricación (10–15 min)

1. Colocar el material en la cama de la cortadora y asegurarlo (si aplica)
2. Ajustar el enfoque del láser según el grosor del material
3. Enviar el archivo: **grabar primero, luego cortar** (si la máquina corta primero, la pieza se mueve y el grabado queda desalineado)
4. No abandonar la máquina durante el proceso , supervisión continua
5. Esperar a que el humo se disperse antes de abrir la tapa

---

### Fase 4: Acabado y ensamble (10 min)

1. Retirar la pieza de la cama con cuidado , puede estar caliente
2. Si se usó papel de enmascarar, retirarlo con cuidado
3. Limpiar el hollín suave con un trapo seco (en madera) o ligeramente húmedo
4. Pasar la argolla por el agujero
5. Mostrar y compartir el resultado

---

## Variantes y extensiones

**Para grupos más avanzados:**
- Diseñar el llavero con la forma de un objeto 3D que se ensamble: dos piezas con finger joint que forman un mini cubo al unirse
- Añadir un grabado con foto (halftone): convertir una fotografía a un patrón de puntos grabable en láser

**Para grupos más jóvenes:**
- Usar una plantilla base (la silueta ya está hecha) y pedir solo que diseñen el grabado interior
- Hacer el diseño con tijeras en papel primero, luego digitalizarlo

**Adaptación sin láser:**
- La misma actividad puede hacerse en cartón con cutter y plantillas impresas, como etapa previa o alternativa

---

## Indicadores de éxito

Al finalizar, el estudiante debería poder responder:

- ¿Por qué hay dos tipos de operación (grabado y corte) en el mismo archivo?
- ¿Qué hubiera pasado si el agujero de la argolla no estuviera en el diseño?
- ¿Qué cambiarías en tu diseño si pudieras hacerlo de nuevo?

---

## Notas docentes

**Errores frecuentes y cómo anticiparlos:**

- **El texto no se corta correctamente:** casi siempre es porque el texto no se convirtió a trayectoria. Recuerdar hacer `Trayectoria → Objeto a trayectoria` en Inkscape.
- **Las letras interiores caen:** la "O", "A", "B", "D", "P", "R" tienen islas interiores que caen si se cortan completas. Solución: usar una tipografía stencil, o conectar las islas al borde exterior con pequeños puentes.
- **El diseño sale del material:** verificar el tamaño real del diseño en el software antes de cortar.
- **El corte no atraviesa:** aumentar la potencia o disminuir la velocidad, o hacer dos pasadas.

**Gestión del tiempo:** si el grupo es grande, organizar por equipos de 2–3 estudiantes por máquina. Mientras un equipo corta, los otros pueden estar finalizando su diseño o haciendo el acabado del llavero ya cortado.
