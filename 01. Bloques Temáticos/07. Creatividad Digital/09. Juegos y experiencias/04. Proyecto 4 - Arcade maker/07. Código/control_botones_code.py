# Arcade maker: control SIN joystick (IdeaBoard, CircuitPython)
# Dos botones de arcade mueven la tortuga a la izquierda y a la derecha.
# El programa convierte esos botones en el valor "pot" que espera el juego.
#
# Formato que se envia al juego: b1,b2,b3,b4,pot
#   b1 = iniciar  -> boton IO04 (opcional) o los dos botones azules a la vez
#   b2 = escudo   -> boton IO19 (opcional)
#   b3 = pausa    -> boton IO23 (opcional)
#   b4 = sonido   -> sin usar
#   pot = posicion de la tortuga, de 0 (izquierda) a 1000 (derecha)
#
# Conexion de cada boton: un terminal a la senal y el otro a GND de la misma
# fila. NO usar el pin del medio de la fila (V+).
#   Boton IZQUIERDA -> IO05
#   Boton DERECHA   -> IO18
#   (opcionales)  INICIAR -> IO04, ESCUDO -> IO19, PAUSA -> IO23

import time
import board
import digitalio

VELOCIDAD = 30        # cuanto se mueve la tortuga en cada lectura (subir = mas rapida)

# Si un boton de la caja industrial funciona al reves (marca 1 suelto),
# es "normalmente cerrado": pongan True en su linea.
INICIAR_NC = False
ESCUDO_NC = False
PAUSA_NC = False


def boton(pin):
    b = digitalio.DigitalInOut(pin)
    b.switch_to_input(pull=digitalio.Pull.UP)   # resistencia interna
    return b


def presionado(b, nc=False):
    # Con pull-up: suelto = True, presionado = False (unido a GND)
    if nc:
        return 1 if b.value else 0
    return 0 if b.value else 1


izquierda = boton(board.IO5)
derecha = boton(board.IO18)
iniciar = boton(board.IO4)
escudo = boton(board.IO19)
pausa = boton(board.IO23)

posicion = 500        # la tortuga empieza en el centro

while True:
    izq = presionado(izquierda)
    der = presionado(derecha)

    if izq and not der:
        posicion = max(0, posicion - VELOCIDAD)
    elif der and not izq:
        posicion = min(1000, posicion + VELOCIDAD)

    # Iniciar: el boton de IO04, o los dos botones azules al mismo tiempo
    b1 = 1 if (presionado(iniciar, INICIAR_NC) or (izq and der)) else 0
    b2 = presionado(escudo, ESCUDO_NC)
    b3 = presionado(pausa, PAUSA_NC)

    print("{},{},{},0,{}".format(b1, b2, b3, posicion))
    time.sleep(0.03)
