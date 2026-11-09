# Proyecto 3: Bosque sonoro, Primaria (IdeaBoard con IdeaCode / CircuitPython)
# Cada hoja de papel aluminio se conecta con un cable lagarto a un pin tactil.
# Al tocar una hoja suena su animal y el LED de la IdeaBoard cambia de color.
import time
import board
import touchio
import neopixel
import simpleio

PIN_BUZZER = board.IO5          # buzzer pasivo en el conector IO05 (senal y GND)
SENSIBILIDAD = 0.15             # 0.15 = la hoja cambia 15 % al tocarla

# Sonidos: lista de (frecuencia en Hz, duracion en segundos). 0 = silencio.
# Los estudiantes pueden cambiar los numeros para inventar su propio sonido.
SONIDOS = {
    "yiguirro": [(1320, 0.12), (1570, 0.12), (1320, 0.12), (1050, 0.25), (0, 0.1), (1400, 0.2)],
    "rana": [(180, 0.08), (0, 0.06), (180, 0.08), (0, 0.06), (220, 0.15)],
    "mono congo": [(110, 0.3), (130, 0.3), (150, 0.4), (120, 0.4)],
    "tucan": [(700, 0.06), (500, 0.06), (700, 0.06), (500, 0.06), (700, 0.1)],
}

# Hojas: (pin, animal, color del LED)
HOJAS = [
    (board.IO4, "yiguirro", (120, 80, 0)),
    (board.IO27, "rana", (0, 150, 0)),
    (board.IO32, "mono congo", (120, 30, 0)),
    (board.IO33, "tucan", (0, 60, 150)),
]

luz = neopixel.NeoPixel(board.NEOPIXEL, 1, brightness=0.3)
sensores = []
for pin, animal, color in HOJAS:
    t = touchio.TouchIn(pin)
    sensores.append([t, t.raw_value, animal, color])   # guarda el valor sin tocar


def tocada(s):
    sensor, base = s[0], s[1]
    return abs(sensor.raw_value - base) > base * SENSIBILIDAD


def sonar(animal):
    for frecuencia, duracion in SONIDOS[animal]:
        if frecuencia == 0:
            time.sleep(duracion)
        else:
            simpleio.tone(PIN_BUZZER, frecuencia, duration=duracion)


luz[0] = (0, 20, 0)
print("Bosque listo: toque una hoja")

while True:
    for s in sensores:
        if tocada(s):
            print("Hoja tocada:", s[2])
            luz[0] = s[3]
            sonar(s[2])
            luz[0] = (0, 20, 0)
            time.sleep(0.3)              # evita que un toque suene dos veces
    time.sleep(0.02)
