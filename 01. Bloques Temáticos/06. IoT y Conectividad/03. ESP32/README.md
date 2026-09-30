# ESP32 para IoT: orientación docente y progresión por nivel

> Este archivo pertenece a: **Internet de las Cosas y Conectividad**  
> Ruta: `01. Bloques Temáticos/06. IoT y Conectividad/03. ESP32/README.md`

---

## Estado

**Estado:** En revisión  
**Versión:** v1.1  
**Bloque:** 06_iot-conectividad  
**Última actualización:** 2026-09-30

---

## Descripción

Esta carpeta orienta al personal docente en la selección y mediación de experiencias con ESP32, Wi-Fi, Bluetooth y servidores web locales. Relaciona el funcionamiento técnico con una necesidad, la seguridad del prototipo y las Evidencias de aprendizaje.

Incluye una ruta de consulta y ajustes por los cinco niveles de Maker Academy. Los ejemplos de programación son referencias para preparar demostraciones y analizar decisiones; su uso depende de los conocimientos previos y del propósito del proyecto.

---

## Propósito

Ofrecer criterios para introducir ESP32 de manera gradual, seleccionar una forma de conectividad pertinente y acompañar al estudiantado en la construcción, explicación y mejora de prototipos conectados.

La persona docente debe poder decidir qué profundidad trabajar, qué apoyos ofrecer, qué riesgos revisar y qué Evidencias observar antes de ampliar la complejidad.

---

## Contenido

### 1. Documentos de la carpeta

| Recurso | Pregunta orientadora | Aporte a la mediación |
| --- | --- | --- |
| [Introducción al ESP32](introduccion-esp32.md) | ¿Qué hace la placa dentro del sistema? | Reconocer componentes, entradas, salidas y condiciones eléctricas. |
| [Wi-Fi básico](wifi-basico.md) | ¿Cómo se conecta y cómo se reconoce un fallo? | Diferenciar red local e Internet; analizar conexión y reconexión. |
| [Bluetooth básico](bluetooth-basico.md) | ¿Cuándo conviene una comunicación cercana? | Distinguir Bluetooth clásico y BLE; interpretar servicios y datos. |
| [Servidor web embebido](servidor-web-embebido.md) | ¿Cómo consulta o controla el navegador un dispositivo? | Relacionar rutas HTTP, interfaz, autorización y estado del prototipo. |

**Estado de Wi-Fi básico:** Validado, versión v1.1, con actualización del 2026-09-30. Se aplicó la denominación oficial del bloque y se verificaron la ruta y los enlaces internos. Este estado corresponde a `wifi-basico.md`; el README conserva su estado **En revisión**.

El recorrido habitual es **introducción → Wi-Fi → servidor web**. Bluetooth ofrece una ruta alternativa cuando la comunicación cercana responde mejor a la necesidad. No es obligatorio utilizar las dos tecnologías en un mismo proyecto.

### 2. Alcance técnico común

La referencia de hardware para los ejemplos con LED es una placa de desarrollo **ESP32-DevKitC con módulo ESP32-WROOM**, basada en el ESP32 original. Se utiliza un LED externo en GPIO23, con resistencia de 330 Ω, para evitar depender del LED integrado de cada fabricante.

Los ejemplos se escriben en C++ con el entorno Arduino y las bibliotecas del paquete oficial **esp32 by Espressif Systems**, con APIs de la serie 3.x. Antes de la sesión se deben registrar la versión instalada, la placa seleccionada y el resultado de la compilación y de la prueba física. Esta referencia no sustituye la progresión institucional de programación por bloques y Python: esos entornos pueden utilizarse si el centro dispone de una implementación compatible y probada. Cambiar de lenguaje requiere adaptar las APIs y el código, no solo copiarlo.

ESP32 es una familia. Un ejemplo para ESP32-WROOM no define el pinout ni las capacidades de ESP32-S2, S3, C3, C6 o H2. La introducción y el documento de Bluetooth permiten comprobar esa diferencia antes de elegir la placa.

### 3. Condiciones de entrada y preparación docente

Antes de incorporar conectividad, observe si el grupo puede explicar una relación de entrada, proceso y salida; interpretar un dato con unidad; identificar una conexión segura y registrar un cambio realizado al prototipo. Si necesita apoyo, mantenga el trabajo local y use tarjetas, datos simulados o una demostración.

Para preparar la experiencia:

1. Definir la necesidad y quién usará el resultado.
2. Seleccionar el nivel del mapa y comprobar los conocimientos previos.
3. Identificar el modelo de placa, el pinout y las capacidades de radio.
4. Probar el cable USB de datos, el entorno y un programa local.
5. Preparar una red autorizada o una conexión cercana controlada.
6. Definir qué ocurrirá ante desconexión, reinicio o un dato inválido.
7. Seleccionar Evidencias y preguntas de retroalimentación acordes al nivel.

La preparación no requiere cuentas personales del estudiantado. Se puede trabajar en red local, con datos ficticios y sin acceso a Internet.

### 4. Cómo usar el mapa de progresión

El mapa orienta la profundidad, la autonomía y las Evidencias; no convierte todos los grados en cursos de ESP32. La progresión institucional ubica IoT principalmente en **Nivel 5: Innovation Lab**. En los niveles anteriores se preparan sus fundamentos o se hacen aproximaciones cuando el proyecto lo justifica.

| Nivel institucional | Alcance en esta carpeta | Mediación y Evidencia |
| --- | --- | --- |
| **1. Exploradores Maker — Preescolar** | Causa y efecto; representar que un objeto envía una señal. IoT no se prioriza. | Demostración docente y tarjetas. Explicación oral o dibujo. |
| **2. Inventores Maker — 1.º–3.º** | Secuencias y mensajes con propósito. IoT no se prioriza. | Opciones guiadas y montaje preparado. Secuencia visual y cambio explicado. |
| **3. Creadores Maker — 4.º–6.º** | Sensores, datos y respuestas locales como preparación. | Bloques o modelo docente. Diagrama, tabla con unidad y mejora documentada. |
| **4. Diseñadores Maker — 7.º–9.º** | Conexión local inicial si es pertinente; diagnóstico de un fallo. | Código o entorno preparado y preguntas técnicas. Registro de pruebas y diagrama. |
| **5. Innovation Lab — 10.º–11.º** | Selección de conectividad, integración y validación con usuarios. | Mentoría y decisiones justificadas. Repositorio, validación y análisis de límites. |

Consulte el [Mapa de Progresión del bloque](../01.%20Mapa%20de%20Progresi%C3%B3n.md) para los criterios de adaptación y los ajustes específicos de ESP32. Los documentos conceptuales remiten al mapa para ajustar la mediación sin duplicar el desglose por niveles.

**Procedimiento de ajuste:** conserve la necesidad y el aprendizaje central; reduzca o amplíe la cantidad de componentes, el lenguaje, la autonomía y los casos de fallo. Mantenga seguridad y privacidad en todos los niveles. Valore lo que cada estudiante puede explicar y decidir, además del funcionamiento del producto.

Un grupo de 10.º sin experiencia con microcontroladores puede comenzar con una demostración guiada y asumir decisiones de Nivel 5 sobre necesidad y privacidad. Un grupo de 6.º con experiencia puede ampliar su registro de datos, sin exigirle arquitectura de red ni autenticación como aprendizaje común del grado.

### 5. Un mismo propósito con distinta profundidad

**Propósito de referencia:** comunicar si un recurso del Makerspace está disponible. La señal es ficticia y no registra personas ni controla accesos físicos.

| Nivel | Ajuste del recurso | Evidencia de comprensión |
| --- | --- | --- |
| 1 | Representar “disponible” y “en uso” con tarjetas. | Explica para quién sirve la señal. |
| 2 | Ordenar “cambiar señal → enviar mensaje → observar”. | Identifica un mensaje que llegó y otro que no llegó. |
| 3 | Programar una señal local o registrar estados simulados. | Relaciona entrada, proceso y salida. |
| 4 | Consultar el estado desde una página local preparada. | Distingue una respuesta actual de una página antigua. |
| 5 | Comparar Wi-Fi y BLE, justificar la opción y validar la interfaz. | Documenta fallos, privacidad y mejoras con usuarios. |

No se añaden nuevas tecnologías solo para aumentar la dificultad. El avance puede estar en la calidad del dato, la explicación, la autonomía o la validación.

### 6. Seguridad, acceso e inclusión

- Alimentar y cablear según el modelo; desconectar antes de cambiar conexiones.
- Tratar los GPIO como señales de 3,3 V; no conectar motores, cargas grandes ni señales de 5 V directamente.
- Proteger contraseñas, tokens e identificadores de personas en código, capturas y publicaciones.
- Mostrar claramente los datos simulados, la ausencia de comunicación y el estado local.
- Usar texto e iconos además del color; permitir explicación oral, diagrama o bitácora según la necesidad de apoyo.
- Rotar funciones de diseño, programación, pruebas y documentación para que el aprendizaje no dependa de quién utiliza el teclado.
- Preparar una alternativa con datos y diagramas si el hardware o la red no están disponibles.

Los ejemplos son prototipos educativos. Un servidor HTTP de demostración o un servicio BLE abierto no debe trasladarse a un sistema con datos sensibles o actuadores reales sin revisar su arquitectura de seguridad.

### 7. Criterios para avanzar

Avance de trabajo local a conexión cuando el grupo pueda explicar qué comunica y por qué. Incorpore una interfaz cuando pueda reconocer una conexión lograda y un fallo. Amplíe hacia plataformas cuando pueda validar el dato y diferenciar envío de recepción confirmada.

En Nivel 4 y Nivel 5, observe al menos una prueba normal, una interrupción y una mejora. En niveles iniciales, trabaje el mismo principio con situaciones representadas y preguntas accesibles.

---

## Aplicación en Maker Academy

### Inspiración

Parta de una necesidad cercana. Invite a comparar una solución local con una conectada: ¿quién necesita observar el resultado?, ¿a qué distancia?, ¿qué valor aporta compartirlo? Esta comparación permite seleccionar tecnología con propósito y activar los intereses del grupo.

### Experimentación

Modele una prueba pequeña y pida que el equipo anticipe lo que ocurrirá. Luego permita modificar una variable y observar el resultado. En niveles iniciales, el cambio se representa con tarjetas o secuencias. En niveles superiores, se revisan código, red, interfaz y registro de fallos.

La Cultura maker se concreta en Proyectos con sentido, Pasión por una pregunta cercana, Pares que comparan decisiones y Juego entendido como exploración con límites seguros.

### Reflexión y evaluación formativa

Solicite una explicación de la decisión, un resultado observado y una mejora. La retroalimentación debe conducir a una nueva prueba: “La página conserva el último valor; ¿cómo permitirán reconocer que dejó de recibir datos?”.

| Criterio | Evidencia que se ajusta al nivel |
| --- | --- |
| Propósito | Relaciona la señal o el dato con una necesidad. |
| Sistema | Explica el recorrido con dibujos, diagrama o arquitectura. |
| Prueba y mejora | Compara una predicción con lo observado y registra un ajuste. |
| Responsabilidad | Respeta conexiones, privacidad y límites de uso. |
| Colaboración | Participa en decisiones y comunica su aporte. |

La Documentación maker reúne bocetos, diagramas, código cuando corresponde, registros de pruebas y reflexiones. Una conexión exitosa es una Evidencia técnica, pero requiere explicación para mostrar aprendizaje.

---

## Recursos relacionados

- [Mapa de Progresión de Internet de las Cosas y Conectividad](../01.%20Mapa%20de%20Progresi%C3%B3n.md)
- [Fundamentos de IoT](../01.%20Fundamentos%20de%20IoT/README.md)
- [Plataformas y herramientas](../02.%20Plataformas%20y%20Herramientas/README.md)
- [Protocolos de comunicación](../04.%20Protocolos%20de%20Comunicaci%C3%B3n/README.md)
- [Seguridad del bloque](../03.Seguridad.md)
- [Alineación con el PNFT](../04.%20Alineaci%C3%B3n%20con%20el%20PNFT.md)
- [Progresión institucional de bloques](../../../02.%20Programa%20Anual%20K11/Progresi%C3%B3n%20de%20Bloques.md)
- [Progresión institucional de competencias K–11](../../../02.%20Programa%20Anual%20K11/Progresi%C3%B3n%20de%20Competencias%20K-11.md)
- [Instalación oficial de Arduino-ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/installing.html)

---

## Imagen sugerida

<img width="1024" height="1536" alt="image" src="https://github.com/user-attachments/assets/88f67ea4-7bd9-42f8-8961-c4ccbac00a95" />


## Nota docente

Elija primero el nivel de competencia y la necesidad. Después seleccione el documento y el recurso técnico. La conectividad se incorpora cuando aporta valor y el grupo puede comprender sus consecuencias. Los ajustes del mapa son orientaciones de mediación, no nuevas exigencias curriculares ni una planificación completa de sesiones.
