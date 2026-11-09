# Proyecto 3: Bosque sonoro, Secundaria (IdeaBoard con IdeaCode / CircuitPython)
# Instalacion con tres estados: DORMIDO, DESPIERTO y TORMENTA.
import time
import math
import random
import board
import digitalio
import pulseio
import touchio
import neopixel
import simpleio

# ---------- Pines ----------
PIN_BUZZER = board.IO5            # buzzer pasivo: fila IO05 (senal y GND)
PIN_TIRA = board.IO18             # tira LED WS2812B: fila IO18 (V+, GND y senal)
PIN_TRIG = board.IO26             # ultrasonico TRIG: fila IO26 (V+ alimenta el sensor)
PIN_ECHO = board.IO35             # ultrasonico ECHO con divisor 1 kOhm / 2 kOhm
PINES_HOJAS = [board.IO4, board.IO27, board.IO32, board.IO33]

# ---------- Ajustes (se calibran con la obra real) ----------
NUM_LEDS = 30
BRILLO = 0.4                      # 0 a 1. Mas brillo = mas consumo
DIST_DESPIERTO = 120              # cm: alguien se acerca y el bosque despierta
DIST_TORMENTA = 40                # cm: alguien muy cerca...
TIEMPO_CERCA = 3                  # ...durante 3 s provoca la tormenta
TOQUES_TORMENTA = 6               # o 6 toques en 10 s
DURACION_TORMENTA = 6             # s
SENSIBILIDAD = 0.15

ANIMALES = [
    ("yiguirro", (255, 180, 0), [(1320, 0.12), (1570, 0.12), (1320, 0.12), (1050, 0.25)]),
    ("rana", (0, 255, 40), [(180, 0.08), (0, 0.06), (180, 0.08), (0, 0.06), (220, 0.15)]),
    ("mono congo", (255, 60, 0), [(110, 0.3), (130, 0.3), (150, 0.4)]),
    ("tucan", (0, 120, 255), [(700, 0.06), (500, 0.06), (700, 0.06), (500, 0.1)]),
]

# ---------- Preparacion ----------
tira = neopixel.NeoPixel(PIN_TIRA, NUM_LEDS, brightness=BRILLO, auto_write=False)
trig = digitalio.DigitalInOut(PIN_TRIG)
trig.direction = digitalio.Direction.OUTPUT
eco = pulseio.PulseIn(PIN_ECHO, maxlen=2)
eco.pause()

hojas = []
for pin in PINES_HOJAS:
    t = touchio.TouchIn(pin)
    hojas.append([t, t.raw_value, False])     # sensor, valor sin tocar, estaba tocada

estado = "DORMIDO"
inicio_cerca = None
inicio_tormenta = 0
toques = []                                   # momentos de los ultimos toques


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


def hoja_nueva(i):
    """True solo en el momento en que la hoja empieza a ser tocada."""
    sensor, base, antes = hojas[i]
    ahora = abs(sensor.raw_value - base) > base * SENSIBILIDAD
    hojas[i][2] = ahora
    return ahora and not antes


def sonar(notas):
    for f, d in notas:
        if f == 0:
            time.sleep(d)
        else:
            simpleio.tone(PIN_BUZZER, f, duration=d)


def tramo(i):
    """Parte de la tira que corresponde a la hoja i."""
    n = NUM_LEDS // len(PINES_HOJAS)
    return range(i * n, (i + 1) * n)


def luz_dormido(t):
    v = int(10 + 25 * (1 + math.sin(t * 1.5)) / 2)      # respira despacio
    tira.fill((0, v, v // 3))
    tira.show()


def luz_despierto():
    tira.fill((40, 90, 10))                               # luz de manana en el bosque
    tira.show()


def tormenta_paso():
    if random.random() < 0.15:                            # relampago
        tira.fill((255, 255, 255))
        tira.show()
        time.sleep(0.05)
        simpleio.tone(PIN_BUZZER, random.randint(60, 120), duration=0.25)   # trueno
    tira.fill((0, 0, random.randint(10, 40)))             # lluvia azul oscura
    tira.show()


def cambiar(nuevo):
    global estado
    if nuevo != estado:
        print("Estado:", estado, "->", nuevo)
        estado = nuevo


print("Bosque sonoro listo")
while True:
    ahora = time.monotonic()
    d = medir_distancia_cm()

    # Toques en las hojas (cuentan en cualquier estado)
    for i, (nombre, color, notas) in enumerate(ANIMALES):
        if hoja_nueva(i):
            toques.append(ahora)
            print("Hoja:", nombre, "| estado:", estado)
            if estado == "DESPIERTO":
                for k in tramo(i):
                    tira[k] = color
                tira.show()
                sonar(notas)
    toques = [t for t in toques if ahora - t < 10]

    # Cambios de estado
    if estado == "TORMENTA":
        tormenta_paso()
        if ahora - inicio_tormenta > DURACION_TORMENTA:
            toques = []
            cambiar("DESPIERTO")
    else:
        if d < DIST_TORMENTA:
            if inicio_cerca is None:
                inicio_cerca = ahora
        else:
            inicio_cerca = None
        muy_cerca = inicio_cerca is not None and ahora - inicio_cerca > TIEMPO_CERCA
        if muy_cerca or len(toques) >= TOQUES_TORMENTA:
            inicio_tormenta = ahora
            inicio_cerca = None
            cambiar("TORMENTA")
        elif d < DIST_DESPIERTO:
            if estado == "DORMIDO":
                cambiar("DESPIERTO")
                sonar([(523, 0.1), (659, 0.1), (784, 0.15)])  # el bosque despierta
            luz_despierto()
        else:
            cambiar("DORMIDO")
            luz_dormido(ahora)
    time.sleep(0.03)
