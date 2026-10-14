# Mensajes entre objetos: orientación docente

> Este capítulo pertenece a **IoT y Conectividad**. La ruta de la carpeta conserva su nombre anterior para mantener los enlaces existentes del repositorio.

**Estado:** En revisión · **Versión:** v2.1 · **Actualización:** 2026-10-14

## La pregunta del capítulo

**Si un objeto tiene algo que comunicar, ¿cómo hacemos para que el aviso llegue a quien lo necesita y se entienda?**

En Maker Academy, esta pregunta puede explorarse con personas y tarjetas, con un prototipo local o con dos dispositivos conectados. La idea compartida es diseñar y poner a prueba un mensaje: **quién lo envía, qué quiere comunicar, a quién va dirigido y qué respuesta esperamos**.

El hilo conductor es un estante de materiales del aula. Cuando faltan lápices, el estante envía el aviso **«Faltan lápices en el estante A»** a la mesa que los repone. El estado es ficticio y se puede representar con una tarjeta o con un botón; no requiere identificar personas ni vigilar quién tomó el material. Cambiar este contexto por otro problema del grupo es válido si se conserva un destinatario y una razón para comunicar.

![Tres momentos del aviso del estante: detectar que faltan lápices, compartir el mensaje y mostrarlo en la mesa de materiales.](imagenes/mensajes-panorama.svg)

*Figura 1. Un mismo aviso se puede representar o probar con dispositivos. El dibujo muestra el sentido del mensaje, no un circuito ni una red específica.*

## Alcance y relación con el bloque

[Fundamentos de IoT](../01.%20Fundamentos%20de%20IoT/README.md) presenta las partes del sistema y el recorrido general de los datos. [ESP32](../03.%20ESP32/README.md) y [Plataformas](../02.%20Plataformas%20y%20Herramientas/README.md) explican herramientas y conexiones concretas. Este capítulo se detiene en la **comunicación comprensible entre dos puntos**: redactar un aviso útil, observar su entrega y corregir lo que confunde a quien lo recibe.

No se espera que todo el estudiantado configure redes. El [mapa de progresión](../01.%20Mapa%20de%20Progresi%C3%B3n.md) sitúa IoT principalmente en Innovation Lab; en los niveles anteriores, estos mensajes son una preparación mediante señales, secuencias y datos sencillos.

| Recurso | Decisión que trabaja | Evidencia posible |
| --- | --- | --- |
| [Un mensaje con propósito](mensaje-con-proposito.md) | Elegir destinatario, contenido y respuesta esperada. | Tarjeta o propuesta de mensaje que otra persona entiende. |
| [Del emisor al receptor](del-emisor-al-receptor.md) | Seguir el aviso y observar cuándo llega o se desvía. | Recorrido representado o prueba entre dispositivos. |
| [¿Llegó y se entendió?](llego-y-se-entendio.md) | Distinguir aviso recibido, aviso comprendido y situación atendida. | Prueba, ajuste y nueva comprobación. |

## Cómo se conectan los tres recursos

Los documentos responden a momentos diferentes del mismo intercambio:

1. **Diseñar:** el grupo acuerda qué significa la señal y qué información necesita quien la recibirá.
2. **Compartir:** observa si el aviso sale del origen y aparece en el destino correcto.
3. **Interpretar:** compara lo que se quiso decir con lo que otra persona entendió y con el estado real.

El orden ayuda a diagnosticar una dificultad. Si la mesa recibió «¡Atención!» pero no sabe qué hacer, conviene revisar el **contenido**. Si la tarjeta clara llegó a otra mesa, la dificultad está en la **entrega**. Si se repusieron los lápices y la mesa sigue viendo el aviso antiguo, hay que revisar **cómo se muestra la actualidad**. Cada problema pide una mejora diferente.

| Si el grupo observa... | Conviene consultar... | Decisión que se espera |
| --- | --- | --- |
| La señal admite varias interpretaciones. | [Un mensaje con propósito](mensaje-con-proposito.md). | Acordar palabras, iconos, ubicación y destinatario. |
| El mensaje es claro pero no aparece donde hace falta. | [Del emisor al receptor](del-emisor-al-receptor.md). | Representar o probar el recorrido y sus extremos. |
| El mensaje aparece, pero confunde sobre lo ocurrido. | [¿Llegó y se entendió?](llego-y-se-entendio.md). | Separar recepción, comprensión y solución. |

## Profundizar sin acelerar el currículo

En los primeros niveles, la riqueza está en el **significado**: dos niños pueden discrepar sobre lo que indica un símbolo y modificarlo para entenderse. En primaria superior, se pueden comparar estados locales y observar si otra persona interpreta la señal sin ayuda. En secundaria, una entrega preparada permite distinguir lo que muestra el origen de lo que recibe el destino. Innovation Lab puede decidir si necesita una conexión real, cómo mostrar un aviso anterior y qué evidencia obtendrá de usuarios.

Este avance no se mide por la cantidad de dispositivos. Un equipo que justifica por qué un mensaje necesita un destinatario claro ha tomado una decisión de diseño; otro que observa una pantalla encendida sin saber qué confirma necesita volver a la interpretación. Consulte el [mapa de progresión](../01.%20Mapa%20de%20Progresi%C3%B3n.md) para seleccionar autonomía, apoyos y evidencias.

Las tecnologías concretas se trabajan en [ESP32](../03.%20ESP32/README.md) y [Plataformas](../02.%20Plataformas%20y%20Herramientas/README.md). La [práctica guiada de un aviso](../05.%20Pr%C3%A1cticas%20Guiadas/un-aviso-que-si-llega/README.md) lleva estas ideas a una experiencia de aula; aquí se ofrece la base conceptual para que el docente pueda adaptar y explicar sus decisiones.

## Un propósito, cinco niveles

La misma necesidad puede tener expresiones diferentes. La tabla es una guía para seleccionar el alcance, no una lista de requisitos para cada grado.

| Nivel Maker Academy | Qué hace el grupo con el aviso | Qué puede observar la persona docente |
| --- | --- | --- |
| **Exploradores Maker · preescolar** | Una persona hace de estante, otra lleva una tarjeta con un dibujo y otra recibe el aviso. | Reconoce quién necesita saber que faltan lápices y comunica la señal con apoyo. |
| **Inventores Maker · 1.º–3.º** | Ordena tarjetas «ocurre → se avisa → se recibe → se responde» y cambia una que resulte confusa. | Explica a quién va el mensaje y qué pasa si se entrega a otra mesa. |
| **Creadores Maker · 4.º–6.º** | Usa un botón o estado simulado para activar una señal local; registra «hay» y «faltan» con texto o iconos. | Relaciona cada estado con un mensaje y prueba si otra persona lo interpreta igual. |
| **Diseñadores Maker · 7.º–9.º** | Prueba el aviso entre dos equipos o con una interfaz preparada; interrumpe una entrega de forma controlada. | Diferencia un cambio en el estante de lo que muestra el receptor y registra una corrección. |
| **Innovation Lab · 10.º–11.º** | Diseña el intercambio según la necesidad, prueba retrasos o mensajes repetidos y valida la claridad con usuarios. | Justifica qué confirma el sistema, cómo informa la ausencia de actualización y qué mejoró tras la prueba. |

En preescolar y primaria inicial se trabaja una **representación de comunicación**, no un proyecto IoT completo. En primaria superior se puede construir una señal local. La conexión real aparece cuando aporta algo al proyecto y el grupo puede explicar lo que ocurre.

## Aplicación en Maker Academy

### Inspiración

Muestre dos tarjetas: «¡Ayuda!» y «Faltan lápices en el estante A». Pregunte cuál ayudaría a reponer materiales y qué información falta en la otra. La necesidad concreta da lugar a las decisiones del grupo.

### Experimentación

Permita que los pares intercambien los papeles de emisor, mensajero, receptor y persona usuaria. Cambie una condición por vez: destino equivocado, tarjeta sin dibujo, aviso retrasado. El juego hace visible el problema; una nueva versión del mensaje permite probar la solución. En niveles mayores, el equipo puede sustituir las tarjetas por una interfaz o dispositivos disponibles y registrar lo observado.

### Reflexión y evaluación formativa

Pida tres respuestas: **¿qué queríamos comunicar?, ¿qué entendió quien recibió el aviso?, ¿qué cambiamos después de probarlo?** Acepte explicación oral, secuencia visual, registro de prueba o documentación técnica según el nivel. Observe si el grupo evita presentar un dato anterior como si acabara de llegar.

## Cuidado de la experiencia

Use estados ficticios y recursos de baja tensión preparados por la persona docente. No asocie el aviso con nombres, fotografías ni hábitos de estudiantes. Cuando una pantalla deje de actualizarse, muestre «sin actualización» en vez de inventar un estado. Las tarjetas y las interfaces deben usar palabras o símbolos además del color; la persona que recibe el mensaje necesita poder interpretarlo.

## Recursos relacionados

- [Mapa de progresión de IoT y Conectividad](../01.%20Mapa%20de%20Progresi%C3%B3n.md).
- [Fundamentos de IoT](../01.%20Fundamentos%20de%20IoT/README.md).
- [ESP32: Wi-Fi básico](../03.%20ESP32/wifi-basico.md), para una ampliación técnica en niveles pertinentes.
- [Prácticas guiadas](../05.%20Pr%C3%A1cticas%20Guiadas/README.md), para planificaciones y montajes.

Las tres ilustraciones SVG de esta carpeta son elaboración propia para Maker Academy. Pueden proyectarse, ampliarse o imprimirse; su texto alternativo describe la idea que debe poder comprenderse sin la imagen.
