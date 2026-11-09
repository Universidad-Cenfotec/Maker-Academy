# Proyecto 7: Volcan Poas vivo, Secundaria (IdeaBoard con IdeaCode / CircuitPython)
# El sensor detecta al publico, enciende las luces del crater y avisa a la
# computadora con el mensaje "ERUPCION" para que la proyeccion cambie.
import time
import math
import random
import board
import digitalio
import pulseio
import pwmio

DISTANCIA_CM = 80          # el publico activa la erupcion a menos de esto
DURACION = 15              # segundos de erupcion
ESPERA = 20                # segundos antes de poder repetir

# Tres grupos de LEDs (cada grupo: 2 LEDs con su resistencia de 220 Ohm)
luces = [pwmio.PWMOut(p, frequency=1000, duty_cycle=0) for p in (board.IO4, board.IO5, board.IO18)]
trig = digitalio.DigitalInOut(board.IO26)
trig.direction = digitalio.Direction.OUTPUT
eco = pulseio.PulseIn(board.IO35, maxlen=2)     # ECHO con divisor 1 kOhm / 2 kOhm
eco.pause()


def medir_distancia_cm():
    eco.clear()
    eco.resume()
    trig.value = True
    time.sleep(0.00001)
    trig.value = False
    t0 = time.monotonic()
    while len(eco) == 0:
        if time.monotonic() - t0 > 0.05:
            eco.pause()
            return 999
    eco.pause()
    return eco[0] / 58


def brillo(luz, nivel):
    """nivel de 0 a 1"""
    luz.duty_cycle = int(max(0, min(1, nivel)) * 65535)


def calma(t):
    """Brillo suave que sube y baja: el calor dentro del crater."""
    for i, luz in enumerate(luces):
        brillo(luz, 0.05 + 0.05 * math.sin(t * 1.2 + i))


def erupcion():
    print("ERUPCION")
    fin = time.monotonic() + DURACION
    while time.monotonic() < fin:
        for luz in luces:
            brillo(luz, random.uniform(0.3, 1.0))
        time.sleep(random.uniform(0.03, 0.12))
    print("CALMA")


ultima = -ESPERA
print("Volcan listo")
while True:
    ahora = time.monotonic()
    calma(ahora)
    if ahora - ultima > ESPERA and medir_distancia_cm() < DISTANCIA_CM:
        erupcion()
        ultima = time.monotonic()
    time.sleep(0.05)
