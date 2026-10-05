# MQTT: publicación y suscripción con propósito

> Este archivo pertenece a: **Internet de las Cosas y Conectividad**  
> Ruta: `01. Bloques Temáticos/06. IoT y Conectividad/04. Protocolos de Comunicación/mqtt-introduccion.md`

---

## Estado

**Estado:** En revisión  
**Versión:** v1.0  
**Bloque:** 06_iot-conectividad  
**Última actualización:** 2026-10-04

---

## Descripción

MQTT permite comunicar mensajes mediante publicación y suscripción. Un servidor, habitualmente llamado broker, recibe publicaciones y las distribuye según las suscripciones. El documento orienta al personal docente para introducir este modelo sin confundir entrega de mensajes con almacenamiento histórico o ejecución de una acción.

---

## Propósito

Ofrecer criterios para explicar quién publica, quién recibe, cómo se organizan los temas y qué sucede cuando la comunicación se interrumpe. La elección de MQTT debe responder a las necesidades del proyecto y a las condiciones del centro educativo.

---

## Contenido

### 1. Compartir sin consultar cada vez

En el caso de una estación ambiental del Makerspace, un panel y un registro pueden necesitar la misma lectura. MQTT permite que la estación publique un mensaje y que el broker lo distribuya a los clientes suscritos al tema correspondiente.

El cliente no necesita conocer directamente a todos los destinatarios. Sin embargo, el broker pasa a ser una dependencia que debe estar disponible. Puede funcionar en una red local; la nube no es un requisito del modelo.

| Elemento | Función | Ejemplo de aula |
| --- | --- | --- |
| Cliente publicador | Envía un mensaje sobre un tema. | Estación ambiental. |
| Broker | Gestiona conexiones y distribución. | Servicio preparado por la persona docente. |
| Cliente suscriptor | Solicita recibir temas de interés. | Panel ambiental. |
| Tema o topic | Identifica la categoría del mensaje. | `maker/aula-01/telemetria/temperatura`. |
| Payload | Contenido comunicado. | Lectura simulada con unidad y validez. |

Un mismo cliente puede publicar y suscribirse. El papel no queda fijado por el tipo de dispositivo.

### 2. Organizar temas y datos

Use nombres coherentes, sin información personal. En esta propuesta, `aula-01` es un identificador ficticio del prototipo.

| Tema propuesto | Contenido | Decisión de diseño |
| --- | --- | --- |
| `maker/aula-01/telemetria/temperatura` | Lectura y calidad del dato. | Separa medición de control. |
| `maker/aula-01/estado` | Disponibilidad comunicada. | No representa por sí sola la vigencia del sensor. |
| `maker/aula-01/comandos/led` | Solicitud de señalización didáctica. | Requiere permiso y caducidad. |
| `maker/aula-01/resultados/led` | Resultado de la aplicación. | Permite relacionarlo con el comando. |

Los temas distinguen mayúsculas y minúsculas. En filtros de suscripción, `+` representa un nivel y `#` varios niveles, con las reglas de ubicación definidas por MQTT. No son comodines que se escriban en el nombre de un tema publicado.

Payload de referencia, **simulado**, que la persona docente puede preparar:

```json
{
  "lectura_id": "demo-001",
  "temperatura_c": 24.6,
  "dato_valido": true,
  "simulado": true
}
```

JSON es una opción de formato del proyecto; MQTT no exige JSON. La aplicación receptora debe interpretar y validar el contenido según el acuerdo del equipo.

### 3. Entrega y resultado son observaciones distintas

| QoS | Semántica de entrega MQTT | Implicación |
| --- | --- | --- |
| 0 | Como máximo una vez. | Puede perderse el mensaje. |
| 1 | Al menos una vez. | Pueden llegar duplicados. |
| 2 | Exactamente una vez en el intercambio MQTT correspondiente. | Requiere más pasos del protocolo. |

El QoS efectivo hacia un suscriptor depende de la publicación y del nivel concedido para su suscripción. MQTT no garantiza por estos niveles que un actuador físico haya ejecutado una orden. Una confirmación del broker tampoco demuestra que una base de datos haya guardado la lectura.

Para el caso de aula, pida diferenciar: publicación enviada, mensaje recibido por el panel, registro de aplicación y observación física. Si el proyecto necesita evitar duplicados, un `lectura_id` solo ayuda cuando la aplicación comprueba y aplica una política de deduplicación.

### 4. Mensajes retenidos y disponibilidad

Un mensaje retenido permite que una nueva suscripción reciba el último valor conservado por el broker para ese tema. No es un historial ni prueba que el dato siga vigente. Una lectura retenida necesita información de actualidad definida por la aplicación.

Para retirar un mensaje retenido se publica en ese tema un payload de longitud cero con la bandera RETAIN activada. Publicar sin RETAIN no elimina el valor retenido anterior.

El Last Will permite configurar un mensaje que el broker publica cuando detecta una desconexión no normal, bajo las condiciones del protocolo. La detección puede tardar; no representa una medición instantánea de disponibilidad. Tampoco demuestra que el sensor funcione correctamente.

En este capítulo se introduce el modelo común de MQTT 3.1.1 y 5.0. La caducidad de mensajes es una capacidad de MQTT 5.0; no se supone presente en cualquier cliente. Documente versión del broker, cliente y biblioteca antes de preparar una demostración.

### 5. Qué conservar ante un fallo

La estación debe mantener sus funciones locales y comunicar la ausencia de actualización. El sistema no puede prometer que todos los mensajes perdidos reaparecerán: eso depende del QoS, las sesiones, los límites y la implementación.

Para una demostración técnica, la persona docente verifica identificadores de cliente distintos, reconexión limitada y recuperación de suscripciones según la configuración de sesión. Usar el mismo identificador puede provocar que una conexión sustituya a otra.

| Condición controlada | Pregunta | Evidencia útil |
| --- | --- | --- |
| Tema correcto | ¿Qué clientes recibieron el mensaje? | Registro de publicación y recepción. |
| Tema con un carácter distinto | ¿Hubo fallo de red o de coincidencia? | Tema y filtro comparados. |
| Cliente nuevo y valor retenido | ¿Ese valor fue producido ahora? | Aviso sobre vigencia. |
| Duplicado simulado | ¿El registro repite la lectura? | Resultado de deduplicación. |
| Broker detenido | ¿Qué permanece funcionando? | Estado local y panel sin actualización. |

Las interrupciones se realizan únicamente en el servicio de demostración, bajo control docente.

### 6. Seguridad y elección del modelo

Autenticar clientes, restringir publicación y suscripción por tema y proteger el transporte con TLS son decisiones diferentes. La ruta del tema no actúa como contraseña. Para control, un cliente autorizado a leer telemetría no debe recibir automáticamente permiso para publicar comandos.

Prepare un broker local o institucional autorizado y datos ficticios. No use un broker público para datos personales, credenciales ni control físico. En esta primera aproximación pueden representarse los intercambios con tarjetas, sin infraestructura.

MQTT resulta pertinente cuando varios componentes necesitan novedades y el proyecto puede mantener un broker. HTTP puede ser más directo para una consulta puntual a un servicio existente. No se elige un protocolo únicamente porque parezca más avanzado.

---

## Aplicación en Maker Academy

### Inspiración

Presente una necesidad compartida: varias personas desean conocer un cambio ambiental. Compare que cada persona pregunte a la estación con que se anuncien novedades a quienes expresaron interés.

### Experimentación

Consulte el [Mapa de Progresión del bloque](../01.%20Mapa%20de%20Progresi%C3%B3n.md). Ajuste vocabulario, apoyos y Evidencias sin duplicar el desglose por ciclos.

Con apoyo docente, asigne roles de publicador, broker y suscriptor; use tarjetas de temas para decidir quién recibe un mensaje. Si corresponde trabajar con software, prepare el entorno y compare un tema correcto con uno distinto. Después analice un mensaje duplicado o antiguo. Rotar los roles permite que los Pares expliquen el sistema completo.

### Reflexión y evaluación formativa

Solicite explicar por qué un suscriptor recibió o no recibió un mensaje y qué confirma esa recepción. Observe si el grupo reconoce que un último valor puede estar desactualizado. La Documentación maker debe incluir temas, formato del dato, condición probada y siguiente mejora.

---

## Recursos relacionados

- [Orientación del capítulo](README.md).
- [HTTP y HTTPS](http-https.md).
- [API: contrato de datos](api-basico.md).
- [Plataformas y herramientas](../02.%20Plataformas%20y%20Herramientas/README.md).
- [OASIS: MQTT 3.1.1, secciones 3.3 y 4.7](https://docs.oasis-open.org/mqtt/mqtt/v3.1.1/os/mqtt-v3.1.1-os.html).
- [OASIS: MQTT 5.0, secciones 3.1.3.2, 3.3 y 4.3](https://docs.oasis-open.org/mqtt/mqtt/v5.0/os/mqtt-v5.0-os.html).

Fuentes consultadas el 2026-10-04. Los temas y payloads de este recurso son propuestas didácticas, no una configuración institucional existente.

---

![Ilustración conceptual de estudiantes que comparten tarjetas informativas junto a un tablero MQTT con las secciones Publicar y Suscribirse.](imagenes/mqtt-contexto.png)


## Nota docente

Antes de elegir una biblioteca, compruebe qué versión y capacidades soporta. Para introducir MQTT no hace falta una demostración de control: recibir y explicar datos ficticios permite observar el modelo con menor complejidad. Amplíe el alcance cuando el grupo pueda justificar los permisos y la respuesta a mensajes antiguos.
