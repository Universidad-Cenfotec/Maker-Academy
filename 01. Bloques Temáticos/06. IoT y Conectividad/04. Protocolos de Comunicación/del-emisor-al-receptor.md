# Del emisor al receptor

> Recurso de consulta docente · [Volver al capítulo](README.md)

**Estado:** En revisión · **Versión:** v2.1 · **Actualización:** 2026-10-14

## Descripción

Este recurso se concentra en el recorrido de un aviso. Compara señales locales, entregas representadas y comunicación entre dispositivos para reconocer qué se observó en el origen y en el destino.

## Propósito

Ayudar a seleccionar una forma de compartir información con un destinatario concreto y a distinguir un mensaje producido de uno recibido, sin atribuir una causa no comprobada a una interrupción.

## Contenido

### Una entrega que podemos observar

El estante A tiene un aviso; la mesa de materiales necesita recibirlo. En un juego, una persona representa el estante, otra transporta la tarjeta y otra recibe el aviso. En un prototipo, el primer punto puede ser un botón o dispositivo y el segundo una pantalla o señal.

El mensaje resulta útil si llega **al lugar correcto** y el receptor puede interpretarlo. Una tarjeta enviada a otra mesa y una tarjeta que no llega son problemas diferentes. En ambos casos sería incorrecto afirmar que la mesa de materiales ya se enteró.

### ¿Por qué se comparte el aviso?

Si la mesa de materiales está junto al estante, una persona puede mirar directamente. Cuando está lejos o varias personas necesitan conocer un cambio, compartir un aviso puede ahorrar recorridos y coordinar una respuesta. Esta es una decisión de diseño: **¿a quién beneficia que la información viaje?** Conectar dispositivos no mejora por sí solo un mensaje confuso.

La comunicación puede tomar varias formas comprensibles antes de hablar de tecnologías:

| Situación | Cómo se comparte | Qué debe quedar claro |
| --- | --- | --- |
| El estante y la mesa están cerca. | Se muestra una tarjeta o señal visible en el lugar. | Quien pasa por allí puede ver el estado. |
| La mesa está en otra zona del aula. | Una persona lleva el aviso. | Debe saber a qué mesa entregarlo. |
| Dos mesas necesitan el mismo aviso. | Se prepara una copia para cada destinataria. | Cada mesa debe saber qué le corresponde hacer. |
| Hay dos dispositivos preparados. | El primero comunica un estado al segundo. | Se observa qué muestra cada extremo. |

La forma de compartir cambia; el propósito y el contenido deben mantenerse comprensibles. No se plantea que todos los niveles construyan la cuarta opción.

### Roles y recorrido visible

En una representación, **emisor** es quien tiene la información, **receptor** quien la necesita y **medio** aquello que permite llevarla. Una persona mensajera, una tarjeta expuesta y una conexión digital pueden cumplir ese último papel en experiencias distintas. La mesa no sabe que faltan lápices hasta que observa o recibe una señal interpretable.

Cuando se trabaja con un prototipo, distinga los puntos que se pueden comprobar:

| Punto de observación | Qué se puede afirmar | Qué sigue sin demostrarse |
| --- | --- | --- |
| Cambió el estado en el estante. | El origen detectó o representó el cambio. | Que la mesa haya recibido algo. |
| El origen mostró «enviado». | El sistema intentó compartir el aviso. | Que el receptor lo haya mostrado. |
| La pantalla receptora cambió. | El aviso apareció en ese extremo. | Que una persona lo haya entendido o atendido. |
| Una persona confirma que lo vio. | Se reconoció la lectura. | Que el estante ya fue repuesto. |

Las palabras de una interfaz deben corresponder a lo observado. Si no hay confirmación del receptor, el texto «recibido» podría inducir a error. En primaria, basta con comparar dónde está la tarjeta. En secundaria, el equipo puede registrar los estados de ambos extremos.

### Una comunicación puede ir y volver

En el ejemplo principal, el aviso viaja del estante a la mesa. Si la mesa devuelve una tarjeta «lo vi», aparece una **respuesta** en dirección contraria. Si después alguien revisa el estante y comunica «ya hay lápices», se informa un **nuevo estado**. Son tres mensajes con significados diferentes:

1. «Faltan lápices»: informa una necesidad.
2. «Vi el aviso»: confirma lectura.
3. «Ya hay lápices»: informa un cambio que debe comprobarse en el estante.

Esta distinción ayuda a razonar sobre el intercambio sin estudiar todavía un protocolo. La confirmación no tiene que implementarse en todos los proyectos; se añade si la persona usuaria realmente necesita saber que el mensaje fue visto.

### Elegir la escala adecuada

Una tarjeta puede ser suficiente para un grupo pequeño. Una señal local con botón puede ayudar a practicar estados. Dos dispositivos se justifican cuando observar el destino a distancia resuelve una necesidad del proyecto. Publicar en Internet implica otras decisiones de acceso y mantenimiento, que se estudian en [ESP32](../03.%20ESP32/README.md) y [Plataformas](../02.%20Plataformas%20y%20Herramientas/README.md).

Antes de ampliar, pida una razón concreta: **quién está lejos, qué demora importa y qué pasaría si el aviso no llega**. Esa conversación da sentido a la conectividad y previene la idea de que toda comunicación entre objetos requiere la nube.

### Tres momentos de una prueba

1. **Antes:** el grupo predice cuál aviso debería aparecer y a quién va dirigido.
2. **Durante:** observa el envío y la recepción; alguien registra si llegó.
3. **Después:** pregunta al receptor qué entendió y qué haría.

La secuencia sirve también para una prueba digital. Un cambio visible en el estante no demuestra por sí solo que se actualizó la pantalla de destino. Si el montaje tiene una única pantalla local, se puede estudiar la claridad del mensaje, pero todavía no se ha probado una comunicación entre dispositivos.

| Cambio controlado | Pregunta útil | Mejora posible |
| --- | --- | --- |
| El mensajero va a otra mesa. | ¿Quién recibió el aviso? | Indicar el destinatario. |
| El aviso se queda a medio camino. | ¿Qué sabe ahora la mesa? | Mostrar «sin actualización» o consultar el estante. |
| Llegan dos avisos iguales. | ¿Son dos problemas distintos? | Revisar antes de contar dos faltantes. |
| Llega después de la reposición. | ¿Describe el estado actual? | Comprobar el estante antes de actuar. |

En preescolar se pueden probar las dos primeras situaciones mediante roles y apoyo docente. En primaria superior se añade un registro de lo observado. En secundaria se pueden usar dos dispositivos o una interfaz preparada, con el alcance técnico indicado en [ESP32](../03.%20ESP32/README.md). Cambie una condición por vez para interpretar el resultado.

### Cuando cambia el número de destinatarios

Si el aviso interesa a una sola mesa, el recorrido puede ser directo. Si dos mesas comparten la reposición, el grupo debe decidir si ambas reciben el mismo aviso y cómo evitar que las dos repongan lo mismo sin coordinarse. Esta pregunta introduce la comunicación a varios destinatarios desde una situación escolar, sin requerir infraestructura digital.

En una representación, se pueden comparar tres diseños: una tarjeta que pasa de una mesa a otra, dos copias entregadas por separado o un cartel común visible desde ambas. Ninguno es universalmente mejor. El grupo puede justificar su elección por distancia, claridad y responsabilidad de respuesta.

Cuando los estudiantes mayores utilizan dispositivos, el mismo razonamiento ayuda a decidir quién debe recibir una notificación y si conviene una respuesta de regreso. El detalle del medio se consulta en las carpetas técnicas; aquí importa que **cada destinatario sepa por qué recibe el aviso y qué puede hacer**.

### Leer un fallo sin adivinar su causa

Si la pantalla de destino no cambia, el equipo sabe que **no observó una actualización**. Todavía no sabe si el origen no produjo el aviso, si se interrumpió el camino o si el receptor no lo mostró. Un registro de ambos extremos permite formular una pregunta más precisa.

| Observación | Primera comprobación razonable |
| --- | --- |
| El origen no cambia al representar «faltan». | Revisar la señal o entrada en el origen. |
| El origen cambia, pero el destino no. | Revisar el camino y el estado del receptor. |
| El destino cambia con otro texto. | Revisar el acuerdo sobre el contenido. |
| Ambos cambian, pero la mesa no actúa. | Preguntar qué entendió la persona usuaria. |

La tabla orienta una búsqueda, no diagnostica automáticamente una falla técnica. En juego de roles, se puede observar con tarjetas; en un prototipo, con estados visibles preparados por la persona docente.

## Aplicación en Maker Academy

- **Inspiración:** separe el estante y la mesa. Pregunte cómo sabría la mesa que faltan lápices.
- **Experimentación:** rote los roles y pruebe una entrega normal y otra interrumpida.
- **Reflexión:** separe «se envió», «se recibió» y «se actuó». Documente una predicción, el resultado y un ajuste.

**Evidencia:** el grupo señala dónde se detuvo el aviso y propone una mejora relacionada con lo observado.

## Recursos relacionados

- [Orientación del capítulo](README.md).
- [Un mensaje con propósito](mensaje-con-proposito.md).
- [¿Llegó y se entendió?](llego-y-se-entendio.md).
- [ESP32](../03.%20ESP32/README.md).

## Nota docente

Si un equipo atribuye toda ausencia de aviso a la red, vuelva a observar el origen y el destino por separado. Una tarjeta y dos mesas permiten razonar sobre el fallo antes de examinar hardware.
