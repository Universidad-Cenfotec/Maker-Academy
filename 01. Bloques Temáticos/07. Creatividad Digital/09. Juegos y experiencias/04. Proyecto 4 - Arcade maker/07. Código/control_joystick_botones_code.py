# Arcade maker: control con joystick y caja de dos botones (IdeaBoard, CircuitPython)
# Envia al juego una linea por lectura con el formato: b1,b2,b3,b4,pot
#   b1 = iniciar  -> boton del joystick (SW) en IO04
#   b2 = escudo   -> boton VERDE en IO05
#   b3 = pausa    -> boton ROJO en IO18
#   b4 = sonido   -> sin usar (siempre 0)
#   pot = movimiento izquierda/derecha del joystick (VRx en IO34), de 0 a 1000
#
# Conexion de cada boton de la caja: un terminal a la senal (IO05 o IO18) y el
# otro al GND de la misma fila. NO usar el pin del medio de la fila (V+).

import time
import board
import digitalio
import analogio

# Muchas cajas industriales traen el boton rojo "normalmente cerrado" (NC):
# conduce cuando esta suelto y se abre al presionarlo. Si el rojo funciona al
# reves (marca 1 suelto y 0 presionado), cambien False por True.
ROJO_NC = False
VERDE_NC = False


def boton(pin):
    b = digitalio.DigitalInOut(pin)
    b.switch_to_input(pull=digitalio.Pull.UP)   # resistencia interna: no hace falta otra
    return b


def presionado(b, nc):
    # Con pull-up: suelto = True (3.3 V), presionado = False (unido a GND)
    if nc:
        return 1 if b.value else 0
    return 0 if b.value else 1


sw = boton(board.IO4)
verde = boton(board.IO5)
rojo = boton(board.IO18)
vrx = analogio.AnalogIn(board.IO34)

while True:
    b1 = 0 if sw.value else 1
    b2 = presionado(verde, VERDE_NC)
    b3 = presionado(rojo, ROJO_NC)
    pot = int(vrx.value * 1000 / 65535)
    print("{},{},{},0,{}".format(b1, b2, b3, pot))
    time.sleep(0.03)
