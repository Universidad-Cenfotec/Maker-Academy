# Prácticas guiadas de IoT y Conectividad

> Este archivo pertenece a **IoT y Conectividad**.

Ruta: `01. Bloques Temáticos/06. IoT y Conectividad/05. Prácticas Guiadas/README.md`

**Estado:** En revisión · **Versión:** v1.0 · **Actualización:** 2026-10-20

## Propósito

Esta carpeta reúne experiencias en las que el estudiantado observa una necesidad, construye una forma de comunicar o usar información, prueba su propuesta y la mejora. Las prácticas se consultan junto con el [mapa de progresión](../01.%20Mapa%20de%20Progresi%C3%B3n.md): en los niveles iniciales se representan señales y secuencias; los montajes conectados se reservan para grupos que puedan explicar su función y trabajar con las condiciones técnicas del centro.

La carpeta traduce los contenidos de [Fundamentos](../01.%20Fundamentos%20de%20IoT/README.md), [Mensajes entre objetos](../04.%20Protocolos%20de%20Comunicaci%C3%B3n/README.md), [ESP32](../03.%20ESP32/README.md) y [Plataformas](../02.%20Plataformas%20y%20Herramientas/README.md) en experiencias de aula. El resultado que se valora es una decisión explicada y probada, además del producto construido.

## Elegir una práctica

| Práctica | Pregunta que investiga | Nivel principal |
| --- | --- | --- |
| [Un aviso que sí llega](un-aviso-que-si-llega/README.md) | ¿Quién recibe, entiende y atiende un mensaje? | Adaptable a los cinco niveles. |
| [¿De cuándo es este dato?](dashboard-temperatura/README.md) | ¿Una pantalla muestra una observación actual o anterior? | Creadores Maker; ampliación posterior. |
| [¿Se encendió de verdad?](control-led-web/README.md) | ¿Qué confirma una orden web y qué requiere observación física? | Diseñadores Maker; desarrollo en Innovation Lab. |
| [Del sensor al registro remoto](sensor-a-nube/README.md) | ¿La lectura se midió, se envió y quedó registrada? | Innovation Lab; análisis preparado en Diseñadores. |
| [Una alerta que ayuda a decidir](alerta-ambiental-iot/README.md) | ¿Cuándo avisar y qué mostrar si el dato deja de llegar? | Innovation Lab; simulación previa. |

Las cinco guías están desarrolladas para **revisión docente**. La secuencia posible va de comunicación representada a visualización, control y proyectos conectados; no es una lista de requisitos ni se exige realizar prácticas de nivel superior en preescolar o primaria. El tablero y la alerta comparten datos ficticios, pero investigan decisiones distintas: **leer con contexto** y **avisar sin exagerar**. El control web investiga la relación entre orden y efecto; el registro remoto, entre medición y confirmación de entrega.

## Preparar la experiencia

Cada guía parte de una necesidad y una persona usuaria; propone **Inspiración, Experimentación y Reflexión**, una prueba normal y una de fallo, evidencia observable y una alternativa con tarjetas. Elija el nivel con el [mapa de progresión](../01.%20Mapa%20de%20Progresi%C3%B3n.md), prepare las tarjetas o los datos, acuerde qué observación justificaría una mejora y reserve tiempo para que otro equipo interprete el resultado. Antes de impartir la ampliación con hardware, verifique el modelo, conexiones, programa, red y credenciales en el equipo específico del centro. El código técnico se consulta en los capítulos de [ESP32](../03.%20ESP32/README.md) y [Plataformas](../02.%20Plataformas%20y%20Herramientas/README.md), sin duplicarlo aquí.

En todas las edades, utilice datos ficticios cuando sea posible, evite cuentas personales sin autorización y muestre cuándo no hay información reciente. La práctica con tarjetas puede ser una experiencia completa para un nivel inicial. En los niveles conectados separe lo que observó el sensor, lo que respondió la red y lo que entendió la persona usuaria.

## Recursos visuales

La [ilustración del aviso](../04.%20Protocolos%20de%20Comunicaci%C3%B3n/imagenes/mensajes-panorama.svg) y la [comparación de mensajes](../04.%20Protocolos%20de%20Comunicaci%C3%B3n/imagenes/tarjeta-clara.svg) abren la primera práctica. Las cuatro guías restantes incluyen diagramas SVG propios de [vigencia](imagenes/tablero-vigencia.svg), [solicitud y salida](imagenes/solicitud-y-led.svg), [registro remoto](imagenes/lectura-al-registro.svg) y [alerta](imagenes/alerta-con-pruebas.svg). Pueden proyectarse o imprimirse; cada imagen incluye descripción alternativa. Los diagramas representan decisiones, no conexiones eléctricas.
