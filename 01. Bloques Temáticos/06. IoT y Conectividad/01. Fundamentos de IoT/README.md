# Fundamentos del Internet de las Cosas

> Este archivo pertenece a: **IoT y conectividad**  
> Ruta: `01. Bloques Temáticos/06. IoT y Conectividad/01. Fundamentos/README.md`

---

## Estado

**Estado:** En revisión  
**Versión:** v1.0  
**Bloque:** 06_iot-conectividad  
**Última actualización:** 2026-09-13  
**Responsable:** Equipo Maker Academy

---

## Descripción

Esta carpeta reúne los conceptos necesarios para comprender el Internet de las Cosas antes de utilizar placas, programar conexiones o trabajar con plataformas digitales. Los contenidos explican qué es IoT, cómo se organiza una solución conectada, cuáles componentes permiten que los datos circulen y de qué manera la tecnología puede responder a necesidades reales.

El punto de partida no es una herramienta específica. La comprensión comienza con el sistema completo: un objeto interactúa con el entorno, obtiene o recibe información, la procesa, la comunica y la transforma en una visualización, una decisión o una acción. Esta perspectiva ayuda a evitar que IoT se reduzca a “conectar algo a Internet” o a seguir instrucciones técnicas sin entender su propósito.

Los documentos están dirigidos a personas docentes y facilitadoras que necesitan introducir el tema de forma clara, institucional y gradual. Cada contenido puede adaptarse a diferentes edades mediante ejemplos cotidianos, representaciones físicas, datos simulados o prototipos con microcontroladores.

---

## Propósito

Ofrecer una base conceptual común para que docentes, niños, niñas y jóvenes puedan analizar, explicar y diseñar sistemas IoT con sentido pedagógico, responsabilidad y relación con su entorno.

Después de trabajar esta carpeta, se espera que la persona estudiante pueda:

- explicar la relación entre el mundo físico y el mundo digital;
- reconocer sensores, actuadores, procesamiento, conectividad, plataformas y aplicaciones;
- representar el recorrido de los datos mediante un diagrama;
- diferenciar monitoreo, control y automatización;
- comparar una solución IoT con una alternativa no conectada;
- identificar beneficios, limitaciones y riesgos básicos; y
- proponer un caso de uso pertinente para el centro educativo o la comunidad.

---

## Contenido de la carpeta

Los archivos se organizan en una secuencia que avanza desde la definición general hasta el análisis de aplicaciones.

| Orden | Documento | Pregunta orientadora | Aprendizaje principal |
| ---: | --- | --- | --- |
| 1 | [¿Qué es IoT?](01.%20Qu%C3%A9%20es%20IoT.md) | ¿Cuándo un objeto forma parte de una solución IoT? | Relaciona mundo físico, datos, conectividad y propósito |
| 2 | [Arquitectura IoT](02.%20Arquitectura%20IoT.md) | ¿Cómo se organiza el sistema completo? | Representa componentes, capas y flujo de información |
| 3 | [Dispositivos y conectividad](03.%20Dispositivos%20y%20conectividad.md) | ¿Qué elementos capturan, procesan y comunican los datos? | Distingue dispositivos, redes, plataformas y aplicaciones |
| 4 | [Casos de uso](04.%20Casos%20de%20uso.md) | ¿Para qué resulta útil conectar objetos? | Analiza aplicaciones, beneficios, riesgos y pertinencia |

### 1. ¿Qué es IoT?

Introduce el concepto mediante ejemplos y contraejemplos. Explica qué condiciones debe cumplir una solución IoT, cuáles son sus componentes principales y cómo viaja un dato desde el entorno hasta una persona usuaria o un actuador.

Este documento también diferencia dispositivos eléctricos, sistemas automáticos locales y sistemas conectados. Su objetivo es construir vocabulario y comprensión antes de entrar en detalles técnicos.

### 2. Arquitectura IoT

Presenta el sistema como un conjunto de componentes relacionados. Permite identificar dónde se capturan los datos, dónde se procesan, por cuál red se transmiten, dónde se almacenan y cómo se convierten en información o acciones.

La arquitectura ayuda a reconocer dependencias y puntos de fallo. Una solución no debe analizarse únicamente cuando todo funciona: también debe considerarse qué sucede si el sensor entrega un dato imposible, se pierde la conexión o la plataforma no responde.

### 3. Dispositivos y conectividad

Profundiza en los componentes físicos y digitales del sistema. Incluye sensores, actuadores, microcontroladores, redes, plataformas e interfaces. La selección de cada elemento debe responder a criterios como alcance, energía, velocidad, costo, disponibilidad, seguridad y facilidad de mantenimiento.

Este contenido prepara al grupo para trabajar posteriormente con ESP32, Wi-Fi y Bluetooth sin asumir que una tecnología es apropiada para todos los proyectos.

### 4. Casos de uso

Relaciona los conceptos con agricultura, ambiente, energía, accesibilidad, conservación, mantenimiento y otros contextos. El análisis empieza con una necesidad y no con el deseo de utilizar un sensor.

Cada caso debe indicar quién utilizará la solución, cuál información resulta necesaria, qué beneficio se espera y cuáles riesgos podrían surgir. También se compara el sistema conectado con alternativas más sencillas para decidir si IoT realmente agrega valor.

---

## Ruta de aprendizaje sugerida

### Antes de comenzar

El estudiantado debería reconocer, al menos de manera intuitiva, los conceptos de entrada, proceso y salida. Resulta útil haber explorado sensores y actuadores mediante circuitos sencillos, aunque no es necesario dominar programación ni redes.

La persona docente puede iniciar con objetos cotidianos: un interruptor, un termómetro, una alarma con sensor, una cámara conectada o un sistema de riego. El grupo observa lo que hace cada objeto y formula preguntas sobre los datos que utiliza.

### Durante el recorrido

1. Iniciar con [`01. Qué es IoT.md`](01.%20Qu%C3%A9%20es%20IoT.md) y clasificar ejemplos.
2. Elaborar un primer diagrama del recorrido de un dato.
3. Estudiar [`02. Arquitectura IoT.md`](02.%20Arquitectura%20IoT.md) y mejorar el diagrama con componentes y conexiones.
4. Consultar [`03. Dispositivos y conectividad.md`](03.%20Dispositivos%20y%20conectividad.md) para justificar una selección tecnológica.
5. Analizar [`04. Casos de uso.md`](04.%20Casos%20de%20uso.md) y proponer una aplicación cercana.
6. Cerrar con una explicación del sistema, sus beneficios, sus límites y una medida de protección.

### Producto de cierre

Cada equipo presenta el diseño conceptual de una solución IoT. En esta etapa no es obligatorio construirla. La propuesta debe incluir:

- necesidad identificada y persona usuaria;
- dato que se desea obtener o acción que se desea ejecutar;
- sensor o actuador requerido;
- componente encargado del procesamiento;
- forma de conectividad;
- plataforma o servicio;
- aplicación, visualización o respuesta esperada;
- diagrama del recorrido de los datos;
- posible fallo del sistema; y
- riesgo de seguridad o privacidad con una medida preventiva.

Este producto funciona como puente hacia las carpetas de ESP32, plataformas, protocolos y prácticas guiadas.

---

## Aplicación en Maker Academy

Los fundamentos de IoT se desarrollan mediante XperiencED Maker. El aprendizaje no inicia con una definición para memorizar, sino con la exploración de objetos, problemas y relaciones.

### Inspiración

Se presentan situaciones cercanas y se formulan preguntas: ¿qué está ocurriendo?, ¿qué información permitiría comprenderlo?, ¿quién necesita esa información? El grupo compara objetos tradicionales, dispositivos automáticos y sistemas conectados.

### Experimentación

Los equipos representan sistemas con dibujos, tarjetas, bloques o roles humanos. Pueden simular sensores, redes y plataformas sin utilizar hardware. Después incorporan cambios y fallos para observar cómo se comportaría el sistema.

En niveles intermedios y avanzados, el grupo puede trabajar con datos simulados, diagramas de arquitectura y criterios para seleccionar conectividad. El prototipo físico debe aparecer cuando el concepto y el propósito ya son claros.

### Reflexión

Cada equipo explica el valor de la conexión, las decisiones tomadas y las condiciones en las que la propuesta podría fallar. También analiza si el mismo problema podría resolverse con una alternativa más sencilla y qué información no debería recopilarse.

### Evidencias sugeridas

- Clasificación razonada de objetos y sistemas.
- Mapa conceptual de IoT.
- Diagrama de arquitectura y flujo de datos.
- Tabla de componentes y funciones.
- Análisis breve de beneficios, riesgos y límites.
- Diseño conceptual de una solución para el entorno escolar o comunitario.
- Reflexión individual sobre el uso responsable de los datos.

---

## Orientaciones para la persona docente

- Presente primero la necesidad y después la tecnología.
- Utilice ejemplos que permitan observar con claridad el dato y su recorrido.
- Evite llamar IoT a cualquier circuito que responde a un sensor.
- Pregunte siempre qué componente se comunica, qué información comparte y con qué propósito.
- Trabaje con datos simulados antes de solicitar cuentas o conexiones externas.
- Incluya fallos y datos inválidos dentro de las actividades.
- Introduzca seguridad y privacidad desde la primera explicación.
- Adapte la profundidad, pero mantenga la relación entre objeto, datos, conexión y propósito.

En primeros niveles puede utilizarse lenguaje cotidiano y representaciones visuales. En niveles intermedios se incorporan componentes y diagramas. En niveles avanzados se analizan arquitectura, calidad del dato, interoperabilidad, procesamiento local, nube, seguridad y escalabilidad.

---

## Recursos relacionados

- [`../README.md`](../README.md)
- [`../00. Orientaciones/01. Progresión K-11.md`](../00.%20Orientaciones/01.%20Progresi%C3%B3n%20K-11.md)
- [`../00. Orientaciones/02. Vocabulario.md`](../00.%20Orientaciones/02.%20Vocabulario.md)
- [`../00. Orientaciones/03. Seguridad y privacidad.md`](../00.%20Orientaciones/03.%20Seguridad%20y%20privacidad.md)
- [`../03. ESP32/README.md`](../03.%20ESP32/README.md)
- [`../04. Protocolos/README.md`](../04.%20Protocolos/README.md)
- [`../05. Prácticas/README.md`](../05.%20Pr%C3%A1cticas/README.md)

---

## Imagen sugerida

Mapa visual del capítulo que muestre cuatro estaciones conectadas: concepto de IoT, arquitectura, componentes y casos de uso. En el centro puede mostrarse un proyecto escolar, como una estación ambiental, mientras alrededor aparecen el sensor, el ESP32, la red, la plataforma y el dashboard.

La composición debe ser sobria, tecnológica y educativa. Se recomienda utilizar azul institucional `#164A98`, azul `#006AEA`, azul claro `#9CC8FF` y grises `#D2D2D2` y `#7C7B75`, de acuerdo con los criterios visuales de la Universidad CENFOTEC.

---

## Nota docente

Esta carpeta debe completarse antes de iniciar actividades centradas en herramientas específicas. Si una persona estudiante logra conectar una placa, pero no puede explicar qué dato circula, por qué se comunica o quién utiliza el resultado, todavía necesita fortalecer la comprensión del sistema.

No es necesario que todos los niveles utilicen los mismos términos técnicos. Sin embargo, cada experiencia debe conservar una idea central: IoT relaciona el mundo físico con sistemas digitales para utilizar datos o ejecutar acciones con un propósito definido.
