# Proyecto 4: Arcade maker, control (IdeaBoard con IdeaCode / CircuitPython)
# Envia el estado del control a la computadora 30 veces por segundo:
#   b1,b2,b3,b4,pot   por ejemplo: 0,1,0,0,512
# b = 1 cuando el boton esta presionado. pot va de 0 a 1000.
import time
import board
import digitalio
import analogio
import neopixel

# Cada pulsador va entre la senal y GND de una fila de servo (no necesita resistencia)
PINES_BOTONES = [board.IO4, board.IO5, board.IO18, board.IO19]
pot = analogio.AnalogIn(board.IO34)     # potenciometro: fila IO34 (3.3 V, GND y senal)
luz = neopixel.NeoPixel(board.NEOPIXEL, 1, brightness=0.2)

botones = []
for pin in PINES_BOTONES:
    b = digitalio.DigitalInOut(pin)
    b.switch_to_input(pull=digitalio.Pull.UP)
    botones.append(b)

luz[0] = (0, 0, 80)
while True:
    estados = [0 if b.value else 1 for b in botones]   # presionado = 0 V = False
    valor = pot.value * 1000 // 65535
    print(",".join(str(x) for x in estados) + "," + str(valor))
    luz[0] = (0, 120, 0) if any(estados) else (0, 0, 80)
    time.sleep(0.033)
