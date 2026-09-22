# ¿Qué es el Internet de las Cosas (IoT)?

> Este archivo pertenece a: **IoT y conectividad**  
> Ruta: `01. Bloques Temáticos/06. IoT y Conectividad/01. Fundamentos/01. Qué es IoT.md`

---

## Estado

**Estado:** En revisión  
**Versión:** v1.0  
**Bloque:** 06_iot-conectividad  
**Última actualización:** 2026-09-13  
**Responsable:** Equipo Maker Academy

---

## Descripción

El Internet de las Cosas, conocido como IoT por las siglas en inglés *Internet of Things*, reúne objetos físicos capaces de relacionarse con el mundo digital. Estos objetos pueden observar una condición del entorno mediante sensores, recibir información, procesarla, intercambiar datos por una red y, en algunos casos, ejecutar acciones por medio de actuadores.

IoT no consiste únicamente en conectar un aparato a Internet. Una solución IoT tiene un propósito: utilizar datos provenientes del mundo físico para informar, supervisar, controlar o automatizar una situación. Por ejemplo, una estación ambiental escolar puede medir temperatura y humedad, enviar las lecturas a una plataforma, representarlas en un gráfico y generar una alerta cuando las condiciones del aula superen un límite establecido.

Este documento introduce el concepto, los componentes y el funcionamiento general de un sistema IoT. También ofrece criterios para distinguirlo de un circuito electrónico aislado, una aplicación web o una automatización que no intercambia datos.

---

## Propósito

Orientar a docentes, niños, niñas y jóvenes en la comprensión inicial del IoT antes de trabajar con placas como ESP32, protocolos de comunicación o plataformas en la nube.

Al finalizar este tema, se espera que la persona estudiante pueda:

- explicar con sus propias palabras qué es IoT;
- identificar el objeto físico, los datos, la conexión y la aplicación de una solución;
- describir el recorrido de un dato desde el entorno hasta una persona usuaria o un actuador;
- diferenciar entre un dispositivo electrónico, un dispositivo conectado y un sistema IoT;
- reconocer beneficios, limitaciones y riesgos básicos relacionados con seguridad y privacidad; y
- proponer un uso de IoT que responda a una necesidad real del entorno escolar o comunitario.

---

## Contenido

### 1. Una definición útil de IoT

El IoT puede entenderse como un ecosistema de objetos físicos y componentes digitales que colaboran mediante redes para ofrecer un servicio. Dentro de ese ecosistema, los objetos pueden medir, comunicar, procesar o modificar condiciones del mundo real.

Para fines educativos, una solución puede considerarse IoT cuando reúne estos cuatro elementos:

1. **Interacción con el mundo físico.** Existe al menos un sensor que obtiene información o un actuador que produce una acción.
2. **Procesamiento.** Un microcontrolador, computadora o servicio interpreta datos y aplica instrucciones o reglas.
3. **Conectividad.** El dispositivo intercambia información con otro componente mediante Wi-Fi, Bluetooth, Ethernet u otra tecnología de comunicación.
4. **Propósito.** Los datos o las acciones sirven para comprender una situación, tomar una decisión, controlar un proceso o resolver una necesidad.

La conexión a Internet es frecuente, pero no todas las experiencias educativas deben depender de servicios externos. Un sistema puede comenzar en una red local para aprender su arquitectura de manera segura y luego ampliarse hacia una plataforma remota.

### 2. Del objeto cotidiano al objeto conectado

Un objeto tradicional realiza una función sin intercambiar datos. Al incorporarle electrónica puede responder a entradas locales. Cuando además se comunica con otros componentes, se convierte en parte de un sistema conectado.

| Ejemplo | ¿Qué hace? | Clasificación |
| --- | --- | --- |
| Termómetro de vidrio | Muestra la temperatura directamente | Instrumento no digital |
| Ventilador con interruptor | Enciende cuando una persona lo activa | Dispositivo eléctrico |
| Ventilador con sensor de temperatura | Enciende automáticamente al superar un límite | Sistema automático local |
| Sensor que publica la temperatura en un panel | Mide, procesa, comunica y presenta datos | Sistema IoT de monitoreo |
| Sensor que publica datos y activa ventilación remota | Mide, comunica, decide y actúa | Sistema IoT de monitoreo y control |

La diferencia no depende de que el producto sea sofisticado. Un proyecto sencillo con un sensor, un ESP32 y un panel local puede representar correctamente un sistema IoT si existe un flujo de datos claro y un propósito definido.

### 3. Componentes principales de una solución IoT

Los componentes pueden variar, pero el bloque temático de Maker Academy organiza el concepto alrededor de cuatro partes fundamentales.

#### Dispositivos

Son los elementos que interactúan con el entorno físico. Pueden contener:

- **sensores**, que obtienen datos como temperatura, humedad, luz, distancia, movimiento o nivel de agua;
- **actuadores**, que ejecutan acciones mediante luces, motores, relés, pantallas, alarmas o válvulas; y
- **microcontroladores**, como ESP32, que leen entradas, ejecutan el programa y coordinan la comunicación.

Un dispositivo no necesita tener todos estos componentes. Puede limitarse a medir y enviar datos, o puede recibir una instrucción para actuar.

#### Conectividad

Es el medio por el que viaja la información. Wi-Fi permite integrar el dispositivo a una red local o a Internet; Bluetooth facilita comunicación cercana; Ethernet utiliza un enlace por cable; otras tecnologías ofrecen diferentes combinaciones de alcance, consumo energético, velocidad y costo.

La conectividad se selecciona según la necesidad. Un sensor que funciona con batería durante meses tiene requisitos distintos a una cámara conectada permanentemente a la corriente.

#### Plataforma o servicio

Recibe los datos y puede almacenarlos, organizarlos, analizarlos o distribuirlos. La plataforma puede ejecutarse en una computadora del makerspace, en un servidor institucional o en la nube.

ThingSpeak permite visualizar series de datos; Blynk facilita interfaces de control; Node-RED permite crear flujos de automatización. Estas herramientas se estudian posteriormente en el bloque, porque primero es necesario comprender qué función cumplen dentro del sistema.

#### Aplicación o interfaz

Es la parte con la que interactúa una persona usuaria. Puede ser un dashboard, una página web, una aplicación móvil, una notificación o un informe. Una interfaz útil no presenta datos sin contexto: muestra nombres claros, unidades, fecha de actualización, estados y criterios que ayudan a tomar decisiones.

### 4. El recorrido de un dato

Comprender IoT resulta más sencillo cuando se sigue el recorrido de una medición. En una estación ambiental escolar, el proceso podría ser el siguiente:

1. Un sensor mide una temperatura de 29 °C.
2. El ESP32 recibe la lectura y comprueba que se encuentre dentro de un rango posible.
3. El programa prepara el dato con su nombre y unidad.
4. La lectura viaja por Wi-Fi hacia una plataforma.
5. La plataforma almacena la medición junto con su fecha y hora.
6. Un dashboard actualiza el valor y su gráfico histórico.
7. Una regla compara la lectura con el umbral definido para la actividad.
8. Si se cumple la condición, el sistema muestra una advertencia o activa una acción permitida.
9. La persona usuaria interpreta la información y decide qué hacer.

Este recorrido puede resumirse de la siguiente manera:

`entorno → sensor → procesamiento → red → plataforma → aplicación → decisión o acción`

El flujo no siempre es lineal. En sistemas de control existe retroalimentación: después de actuar, el sensor vuelve a medir para comprobar si la condición cambió.

### 5. Monitorear, controlar y automatizar

No todas las soluciones IoT hacen lo mismo. Conviene diferenciar tres funciones.

| Función | Pregunta que responde | Ejemplo |
| --- | --- | --- |
| Monitorear | ¿Qué está ocurriendo? | Consultar la humedad de un huerto escolar |
| Controlar | ¿Qué acción desea ejecutar una persona? | Encender una luz desde una interfaz local |
| Automatizar | ¿Qué debe hacer el sistema cuando ocurre una condición? | Activar una alerta si el nivel de agua es demasiado alto |

Una misma solución puede combinar las tres funciones. Sin embargo, agregar automatización también aumenta la responsabilidad: una lectura incorrecta o una regla mal definida puede producir una acción no deseada. Por eso se deben establecer límites, probar condiciones extremas y diseñar un estado seguro ante fallos.

### 6. Ejemplos cercanos

Los siguientes casos permiten relacionar el concepto con necesidades reales:

- **Ambiente escolar:** medir temperatura, humedad, ruido o calidad del aire para analizar condiciones de aprendizaje.
- **Huerto inteligente:** observar humedad del suelo y apoyar decisiones de riego sin desperdiciar agua.
- **Uso de energía:** registrar cuándo permanece encendida una luz y proponer hábitos de ahorro.
- **Conservación:** detectar cambios ambientales que podrían afectar plantas, colecciones u objetos delicados.
- **Accesibilidad:** crear señales luminosas, sonoras o táctiles conectadas a una necesidad específica.
- **Mantenimiento:** registrar vibración, temperatura o tiempo de uso para detectar comportamientos inusuales.

Un buen caso de uso inicia con el problema y las personas involucradas. La pregunta no debería ser “¿dónde puedo colocar un sensor?”, sino “¿qué situación necesitamos comprender o mejorar y qué datos serían realmente útiles?”.

### 7. Beneficios y desafíos

IoT puede ampliar la capacidad de observar procesos, utilizar datos históricos, responder a distancia y automatizar tareas repetitivas. También permite descubrir patrones que serían difíciles de reconocer mediante observaciones aisladas.

Sin embargo, conectar un objeto crea nuevas responsabilidades:

- **Seguridad:** un dispositivo mal configurado puede permitir accesos no autorizados. Las contraseñas predeterminadas, los servicios innecesarios y el software desactualizado aumentan el riesgo.
- **Privacidad:** los sensores pueden revelar rutinas, presencia, ubicación o hábitos. Se debe recolectar únicamente la información necesaria para el propósito educativo.
- **Confiabilidad:** la red, el sensor o la plataforma pueden fallar. El sistema debe comunicar cuándo un dato está ausente, desactualizado o fuera de rango.
- **Escalabilidad:** una solución que funciona con un dispositivo puede comportarse de forma distinta al conectar decenas. Deben considerarse cantidad de mensajes, almacenamiento, energía y mantenimiento.
- **Interoperabilidad:** los componentes pueden utilizar formatos o protocolos diferentes. Documentar el intercambio de datos facilita la integración.
- **Sostenibilidad:** fabricar, alimentar y reemplazar dispositivos consume recursos. Antes de conectar un objeto, se debe comprobar que el beneficio justifique el costo ambiental y material.

La seguridad y la privacidad no son contenidos separados que se agregan al final. Forman parte del diseño desde la primera idea del proyecto.

### 8. Ideas que conviene corregir desde el inicio

**“Todo aparato inteligente es IoT.”** Un dispositivo puede ejecutar funciones automáticas sin comunicarse con otro sistema.

**“IoT significa controlar cosas desde el teléfono.”** El control remoto es solo una posibilidad. Muchos sistemas se dedican principalmente a medir, registrar o generar alertas.

**“Todos los datos deben enviarse a la nube.”** El procesamiento y almacenamiento también pueden realizarse localmente cuando la privacidad, la latencia o la disponibilidad lo requieran.

**“Más datos siempre producen una mejor solución.”** Los datos deben ser pertinentes, comprensibles y suficientemente confiables. Recopilar información innecesaria aumenta costos y riesgos.

**“Si el prototipo funciona una vez, el sistema está terminado.”** Un sistema IoT debe probarse ante datos inválidos, desconexiones, reinicios, retrasos y cambios del entorno.

---

## Aplicación en Maker Academy

Este tema se trabaja mediante XperiencED Maker, de forma que el concepto surja de observar, representar y discutir un sistema antes de programarlo.

### Inspiración

La persona docente presenta objetos o imágenes cercanas: una lámpara con interruptor, un sensor de movimiento, un reloj inteligente, una estación meteorológica y un sistema de riego. Los equipos responden:

- ¿Qué parte interactúa con el mundo físico?
- ¿Qué dato utiliza?
- ¿Con qué otro componente se comunica?
- ¿Quién usa la información?
- ¿Qué problema intenta resolver?
- ¿Qué podría ocurrir si falla?

La intención no es acertar una etiqueta de inmediato, sino justificar la clasificación.

### Experimentación

Cada equipo diseña en papel una solución IoT para una necesidad del centro educativo. Debe incluir:

1. el problema y la persona usuaria;
2. el sensor o actuador necesario;
3. el dato mínimo que se utilizará;
4. el componente que procesará la información;
5. la forma de conectividad;
6. la plataforma o servicio;
7. la aplicación, alerta o acción final; y
8. un riesgo con su medida de protección.

Después, el equipo representa el flujo mediante tarjetas o roles humanos. Una persona actúa como sensor, otra como microcontrolador, otra como red, otra como plataforma y otra como usuario o actuador. La persona docente introduce fallos: un dato imposible, pérdida de conexión, mensaje repetido o plataforma no disponible. El equipo debe decidir cómo respondería su sistema.

### Reflexión

Cada equipo explica por qué su propuesta sí constituye una solución IoT y responde:

- ¿Qué valor aporta la conexión?
- ¿Podría resolverse el problema sin Internet?
- ¿Qué datos no deberían recopilarse?
- ¿Cómo sabría la persona usuaria que una medición es reciente y válida?
- ¿Qué cambiaría si el proyecto creciera de uno a cincuenta dispositivos?

### Evidencias sugeridas

- Diagrama del sistema con flechas y nombres de los datos.
- Tabla de componentes y función de cada uno.
- Explicación escrita de cinco a ocho líneas con lenguaje propio.
- Identificación de un beneficio, un riesgo y una medida preventiva.
- Ticket de salida: “Una solución es IoT cuando...”.

### Criterios de observación

| Criterio | Evidencia observable |
| --- | --- |
| Comprensión del concepto | Explica la relación entre mundo físico, datos y conectividad |
| Pensamiento sistémico | Reconoce componentes y describe el flujo de información |
| Pertinencia | Vincula la tecnología con una necesidad concreta |
| Ciudadanía digital | Identifica un riesgo de seguridad o privacidad |
| Comunicación | Usa vocabulario claro y justifica sus decisiones |

### Ajuste por nivel

- **Primeros niveles:** trabajar con objetos cotidianos, dibujos y secuencias de entrada-respuesta. No es necesario introducir protocolos.
- **Niveles intermedios:** representar sensor, microcontrolador, conexión, plataforma e interfaz; utilizar datos simulados.
- **Niveles avanzados:** analizar arquitectura, calidad del dato, seguridad, privacidad, escalabilidad y procesamiento local frente a nube.

---

## Recursos relacionados

### Dentro del repositorio
- [`README.md`](README.md)
- [`arquitectura-iot.md`](arquitectura-iot.md)
- [`dispositivos-conectividad-plataformas.md`](dispositivos-conectividad-plataformas.md)
- [`casos-uso-iot.md`](casos-uso-iot.md)
- [`../01. Mapa de ProgresiÃ³n.md`](../01.%20Mapa%20de%20Progresi%C3%B3n.md)
- [`../02. Vocabulario.md`](../02.%20Vocabulario.md)
- [`../03.Seguridad.md`](../03.Seguridad.md)

---

## Imagen sugerida

Diagrama horizontal y sobrio que muestre el recorrido de un dato en una estación ambiental escolar:

`aula → sensor de temperatura → ESP32 → Wi-Fi → plataforma → dashboard → decisión`

La imagen debe mostrar estudiantes observando o documentando el prototipo, no únicamente componentes tecnológicos. Se recomienda utilizar azul institucional `#164A98`, azul `#006AEA`, azul claro `#9CC8FF` y grises `#D2D2D2` y `#7C7B75`, respetando el libro de marca de la Universidad CENFOTEC.

---

## Nota docente

En esta introducción no es necesario profundizar en código, plataformas o protocolos. La prioridad es que el estudiantado comprenda el sistema completo y pueda explicar qué información se obtiene, cómo circula, para qué se utiliza y qué riesgos aparecen al conectar el objeto.

Evite presentar como IoT cualquier circuito que reaccione a un sensor. Pregunte siempre adónde viajan los datos, qué otro componente participa y qué propósito cumple la comunicación. Cuando se utilicen ejemplos de cámaras, micrófonos, ubicación o presencia, incluya desde el inicio una conversación sobre consentimiento, privacidad y recolección mínima de datos.
