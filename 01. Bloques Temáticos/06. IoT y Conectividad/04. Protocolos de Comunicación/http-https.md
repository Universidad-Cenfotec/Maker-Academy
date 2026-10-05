# HTTP y HTTPS: consultar, comunicar y comprobar

> Este archivo pertenece a: **Internet de las Cosas y Conectividad**  
> Ruta: `01. Bloques Temáticos/06. IoT y Conectividad/04. Protocolos de Comunicación/http-https.md`

---

## Estado

**Estado:** En revisión  
**Versión:** v1.0  
**Bloque:** 06_iot-conectividad  
**Última actualización:** 2026-10-04

---

## Descripción

HTTP organiza intercambios de solicitudes y respuestas entre aplicaciones. HTTPS protege ese intercambio mediante TLS. Este documento orienta al personal docente para interpretar operaciones web de un prototipo IoT y distinguir conectividad, respuesta del servicio y resultado físico.

---

## Propósito

Acompañar la selección de operaciones web con un propósito claro, la interpretación de errores y el cuidado de los datos. El aprendizaje central consiste en explicar qué se solicita, qué responde el sistema y qué Evidencias permiten confiar en el resultado.

---

## Contenido

### 1. Del enlace Wi-Fi a la aplicación

Wi-Fi permite un enlace de red; HTTP define cómo una aplicación solicita recursos a otra. Tener una IP no demuestra que un servidor esté disponible. Un navegador puede consultar un ESP32 en una red local sin Internet, siempre que exista una ruta de comunicación y el servidor esté activo.

El cliente inicia la solicitud. El servidor la procesa y devuelve una respuesta. Estos papeles dependen de la operación: el ESP32 puede servir una página local o actuar como cliente de una plataforma. Una respuesta puede contener HTML, JSON u otra representación; HTTP no exige que todos los datos sean páginas web.

**Caso de referencia:** una persona desea consultar la temperatura de una estación ambiental del Makerspace. Antes de elegir una plataforma, el equipo identifica la unidad, la frecuencia necesaria y cómo comunicará una lectura ausente.

### 2. Qué se solicita y qué se recibe

| Elemento | Pregunta docente | Ejemplo didáctico |
| --- | --- | --- |
| URL | ¿Dónde está el recurso? | `https://iot.example.org/api/v1/estaciones/aula-01` |
| Método | ¿Qué operación se pide? | `GET` para consultar. |
| Cabeceras | ¿Qué información acompaña el intercambio? | `Accept: application/json`. |
| Cuerpo | ¿Qué contenido se envía o recibe? | Lectura y unidad en JSON. |
| Código de estado | ¿Cómo informa el servidor el resultado? | `200`, `400` o `503`. |

El dominio `example.org` es un marcador documental; no se propone como servicio real. Los fragmentos siguientes son ejemplos de mensajes, no programas ejecutables.

```http
GET /api/v1/estaciones/aula-01 HTTP/1.1
Host: iot.example.org
Accept: application/json
```

Una respuesta de aula preparada por la persona docente podría ser:

```http
HTTP/1.1 200 OK
Content-Type: application/json
Cache-Control: no-store

{"estacion":"aula-01","temperatura_c":24.6,"dato_valido":true,"simulado":true,"edad_dato_ms":1200}
```

El ejemplo representa una lectura simulada de 1,2 segundos de antigüedad. El contrato debe definir cómo se calcula esa edad. No se interpreta como fecha de calendario ni se supone que los relojes de dos dispositivos estén sincronizados.

### 3. Elegir el método

| Método | Uso conceptual | Ejemplo de proyecto |
| --- | --- | --- |
| GET | Consultar una representación. | Leer el estado ambiental. |
| POST | Enviar contenido para su procesamiento. | Registrar una nueva lectura. |
| PUT | Crear o sustituir la representación del recurso indicado. | Establecer una configuración completa. |
| DELETE | Solicitar eliminar el recurso indicado. | Borrar un registro ficticio autorizado. |

Una consulta GET no debe encender una salida. POST expresa una operación de procesamiento, pero no concede permiso ni valida sus parámetros. En un control físico se necesita además autorización, límites y una respuesta segura ante fallos.

PUT es idempotente: repetir la misma solicitud conserva el mismo efecto solicitado. POST no garantiza esa propiedad. Si se pierde una respuesta después de registrar una lectura, repetir el envío puede crear un duplicado. El diseño de la API debe resolverlo, por ejemplo con un identificador de lectura y una política explícita.

### 4. Interpretar respuestas y ausencia de respuesta

| Resultado | Lectura pertinente | Siguiente comprobación |
| --- | --- | --- |
| 200 | Operación atendida con éxito según su contrato. | Revisar cuerpo, tipo y vigencia del dato. |
| 201 | Recurso creado. | Comprobar identificador devuelto. |
| 202 | Solicitud aceptada para procesamiento. | Consultar el resultado posterior previsto. |
| 400 | Solicitud incorrecta. | Comparar formato y parámetros con el contrato. |
| 401 | Faltan credenciales válidas. | Revisar autenticación en privado. |
| 403 | El servidor rechaza la operación. | Revisar permisos asignados. |
| 404 | Recurso no encontrado. | Verificar ruta e identificador. |
| 429 | Demasiadas solicitudes. | Ajustar frecuencia y espera indicada. |
| 503 | Servicio temporalmente no disponible. | Mantener estado local y recuperación limitada. |
| Sin respuesta | No se obtuvo una respuesta HTTP. | Revisar red, DNS, TLS y tiempo de espera. |

No convierta un tiempo de espera en “error 500”: ese código solo existe si fue recibido. Tampoco una respuesta 200 demuestra que un LED se encendió físicamente; puede confirmar únicamente el estado lógico del programa.

### 5. Qué aporta HTTPS

HTTPS utiliza TLS para proteger la comunicación en tránsito y comprobar la identidad del servidor mediante certificados. No sustituye la autorización, la validación del dato ni la protección de lo almacenado.

En una implementación con ESP32, la persona docente debe comprobar la configuración de confianza, el nombre del servidor y las condiciones temporales requeridas por la biblioteca para validar certificados. Desactivar esa validación no es una solución de referencia. Una contraseña enviada por HTTP sin TLS queda expuesta en el tramo no cifrado, aunque el acceso Wi-Fi tenga clave.

Un servidor HTTP local preparado puede apoyar una demostración con datos ficticios, sin secretos ni control de cargas peligrosas. Para comunicar credenciales o datos sensibles, prepare un entorno con protección adecuada antes de ejecutar el intercambio.

### 6. Diseñar la recuperación

La estación del caso debe conservar una respuesta local comprensible cuando falla la comunicación. El panel muestra “sin actualización” y la antigüedad del último dato; no sustituye la lectura por cero.

Defina tiempo máximo de espera, número limitado de intentos y pausa entre ellos. Diferencie una lectura pendiente de una aceptada. Si la operación puede repetirse, explique cómo se evita duplicar su efecto. Un reintento constante puede saturar el servicio y ocultar la causa del fallo.

| Condición de aula | Predicción que se solicita | Evidencia |
| --- | --- | --- |
| Ruta correcta y dato válido | ¿Qué respuesta esperamos? | Código, cuerpo y explicación. |
| Ruta inexistente | ¿Falló la red o el recurso? | 404 recibido y ruta usada. |
| Lectura antigua | ¿Se puede presentar como actual? | Aviso de antigüedad. |
| Servicio detenido | ¿Qué conserva el sistema local? | Tiempo de espera y estado local. |

---

## Aplicación en Maker Academy

### Inspiración

Muestre una pantalla con un valor y pregunte: “¿Cómo sabemos que corresponde a este momento?”. Relacione la pregunta con una persona que necesita decidir si ventilar el Makerspace. Compare consultar un dato con solicitar una acción.

### Experimentación

Consulte el [Mapa de Progresión del bloque](../01.%20Mapa%20de%20Progresi%C3%B3n.md) para seleccionar profundidad, autonomía y Evidencias. El desglose por ciclos se concentra en ese recurso.

Con mayor apoyo, represente una solicitud y una respuesta mediante tarjetas. Cuando exista autonomía técnica, use mensajes preparados o el servidor local de ESP32 y cambie una condición por vez. No es necesario abrir cuentas ni publicar el prototipo en Internet.

### Reflexión y evaluación formativa

Solicite explicar qué confirma cada observación: IP obtenida, código recibido, cuerpo válido y comportamiento físico. Si el equipo afirma “funcionó porque salió 200”, pida precisar qué operación terminó y qué falta observar. La Documentación maker debe reunir predicción, condición, resultado y mejora.

---

## Recursos relacionados

- [Orientación del capítulo](README.md).
- [API: contrato e interpretación de datos](api-basico.md).
- [MQTT: otra forma de comunicar](mqtt-introduccion.md).
- [Wi-Fi básico](../03.%20ESP32/wifi-basico.md).
- [Servidor web embebido](../03.%20ESP32/servidor-web-embebido.md).
- [RFC 9110: semántica HTTP, secciones 4.3.4 y 9](https://www.rfc-editor.org/rfc/rfc9110.html).
- [MDN: métodos HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods).
- [MDN: códigos HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status).
- [Espressif: cliente HTTP y verificación HTTPS](https://docs.espressif.com/projects/esp-idf/en/stable/esp32/api-reference/protocols/esp_http_client.html).

Las fuentes técnicas se consultaron el 2026-10-04. La documentación ESP-IDF orienta conceptos de implementación; sus APIs no se copian directamente a Arduino-ESP32.

---

## Imagen sugerida

![Ilustración conceptual de una persona que consulta una estación ambiental desde una tableta; las tarjetas Solicitud y Respuesta acompañan un símbolo HTTPS.](imagenes/http-https-contexto.png)

**Recurso incluido:** `imagenes/http-https-contexto.png`.  
**Propósito:** vincular consulta y respuesta con una necesidad del Makerspace. La ilustración no representa una conexión eléctrica ni certifica la seguridad de un sistema.

---

## Nota docente

Prepare los resultados normales y los fallos antes de la experiencia. Valore la explicación del intercambio y del dato ausente. Una solicitud exitosa aporta una Evidencia técnica; el aprendizaje se observa cuando el grupo interpreta sus límites y propone una mejora comprobable.
