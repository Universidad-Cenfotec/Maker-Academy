# Proyecto 3: Bosque sonoro, Secundaria. Version con computadora (Windows).
# Lee por USB las lecturas de la IdeaBoard (programa planta_lectura.ino),
# las convierte en notas MIDI y las envia al puerto virtual de loopMIDI.
# Requisitos: py -m pip install pyserial pygame-ce
import serial
import pygame.midi
import time

# CONFIGURACION
PUERTO = "COM4"               # puerto COM de su IdeaBoard
BAUDIOS = 115200
NOMBRE_MIDI = "Planta MIDI"   # con varias plantas: "Planta MIDI 1", "Planta MIDI 2"...

# AJUSTES DE SU PLANTA (tabla de calibracion de la guia).
# Valores del prototipo: sin tocar = 1123, tocando = 853.
UMBRAL_TOCAR = 1000
UMBRAL_SOLTAR = 1050
PASO_NOTA = 40

# Escala pentatonica de Do mayor
NOTAS = [60, 62, 64, 67, 69]

pygame.midi.init()

salida = None
nota_actual = None

try:
    # Buscar puerto virtual MIDI
    puerto_midi = None

    for i in range(pygame.midi.get_count()):
        info = pygame.midi.get_device_info(i)
        nombre = info[1].decode(
            "utf-8", errors="replace"
        )

        if NOMBRE_MIDI.lower() in nombre.lower() and info[3]:
            puerto_midi = i
            break

    if puerto_midi is None:
        raise RuntimeError(
            "No se encontro " + NOMBRE_MIDI + ". "
            "Abre loopMIDI."
        )

    salida = pygame.midi.Output(puerto_midi)

    with serial.Serial(
        PUERTO, BAUDIOS, timeout=0.2
    ) as arduino:

        time.sleep(2)
        arduino.reset_input_buffer()

        tocando = False
        ultimo_dato = time.monotonic()

        print("Planta musical conectada!")

        while True:
            linea = arduino.readline().decode(
                "utf-8", errors="ignore"
            ).strip()

            if linea.startswith("Lectura de planta:"):
                try:
                    valor = int(
                        linea.split(":")[1].strip()
                    )
                except ValueError:
                    continue

                ultimo_dato = time.monotonic()

                if valor < UMBRAL_TOCAR:
                    tocando = True

                elif valor > UMBRAL_SOLTAR:
                    tocando = False

                nueva_nota = None

                if tocando:
                    indice = max(
                        0,
                        min(4, (UMBRAL_TOCAR - valor) // PASO_NOTA)
                    )
                    nueva_nota = NOTAS[indice]

                if nueva_nota != nota_actual:
                    if nota_actual is not None:
                        salida.note_off(nota_actual)

                    if nueva_nota is not None:
                        salida.note_on(nueva_nota, 90)
                        print(
                            "Nota:", nueva_nota,
                            "| Lectura:", valor
                        )

                    nota_actual = nueva_nota

            # Evitar notas sostenidas si se pierde USB
            elif time.monotonic() - ultimo_dato > 1.5:
                if nota_actual is not None:
                    salida.note_off(nota_actual)
                    nota_actual = None
                    tocando = False

except KeyboardInterrupt:
    print("Instrumento detenido")

except Exception as error:
    print("Error:", error)

finally:
    if salida is not None:
        for nota in NOTAS:
            salida.note_off(nota)
        salida.close()

    pygame.midi.quit()
