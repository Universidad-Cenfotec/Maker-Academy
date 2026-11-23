# Guardian del bosque: adaptacion para IdeaBoard (IdeaCode / CircuitPython)
# Version de Primaria del Proyecto 3: Bosque sonoro. La plataforma principal de
# Primaria es la micro:bit; este programa es una alternativa para makerspaces
# que solo tienen IdeaBoard.
#
# DIA (luz encendida): el guardian duerme (LED verde tenue). Las plantas de
#   papel aluminio en IO04, IO27 e IO32 suenan al tocarlas: pajaro, mono y abeja.
# NOCHE (luz apagada o sensor tapado): el guardian despierta (LED azul) y suena
#   el bosque nocturno: buho, grillos, ranas y jaguar. De noche las plantas no suenan.
#
# Conexiones (con la placa desconectada):
#   Plantas: IO04, IO27 e IO32 (pines tactiles), con jumper o cable lagarto.
#   Buzzer pasivo: fila IO05, senal y GND.
#   Sensor de luz: fotorresistencia entre 3.3 V y la senal de IO34, y una
#   resistencia de 10 kOhm entre la senal de IO34 y GND (divisor de voltaje).
#
# IMPORTANTE: encender la placa con la luz del aula encendida, sin tapar el
# sensor y sin tocar las plantas, porque al arrancar guarda esos valores.
import time
import board
import touchio
import analogio
import neopixel
import simpleio

PIN_BUZZER = board.IO5
UMBRAL_NOCHE = 0.4        # igual que en la micro:bit: 0.6 si no despierta, 0.3 si despierta solo
SENSOR_INVERTIDO = False  # True si el sensor da MAS valor con menos luz (algunos modulos)
SENSIBILIDAD = 0.15       # cuanto debe cambiar una planta al tocarla (0.15 = 15 %)

luz = analogio.AnalogIn(board.IO34)
led = neopixel.NeoPixel(board.NEOPIXEL, 1, brightness=0.3)

# Sonidos: lista de (frecuencia en Hz, duracion en segundos). 0 = silencio.
DIA = {
    "pajaro": [(1320, 0.1), (1570, 0.1), (1760, 0.15), (0, 0.05), (1570, 0.1)],
    "mono": [(300, 0.12), (450, 0.12), (300, 0.12), (450, 0.12), (600, 0.2)],
    "abeja": [(220, 0.1), (240, 0.1), (220, 0.1), (240, 0.1), (220, 0.1), (240, 0.1)],
}
BUHO = [(392, 0.25), (330, 0.5)]
GRILLOS = [(3000, 0.06), (0, 0.06)] * 6
RANAS = [(150, 0.12), (0, 0.12)] * 3
JAGUAR = [(f, 0.05) for f in range(400, 80, -20)]

PLANTAS = [
    (board.IO4, "pajaro", (255, 200, 0)),
    (board.IO27, "mono", (255, 80, 0)),
    (board.IO32, "abeja", (200, 200, 0)),
]


def sonar(notas):
    for frecuencia, duracion in notas:
        if frecuencia == 0:
            time.sleep(duracion)
        else:
            simpleio.tone(PIN_BUZZER, frecuencia, duration=duracion)


def nivel_luz():
    valor = luz.value
    return 65535 - valor if SENSOR_INVERTIDO else valor


# Preparacion: guardar la luz normal del aula y el valor de cada planta sin tocar
time.sleep(0.5)
luz_base = nivel_luz()
sensores = []
for pin, animal, color in PLANTAS:
    t = touchio.TouchIn(pin)
    sensores.append([t, t.raw_value, animal, color])

DORMIDO = (0, 20, 0)
DESPIERTO = (0, 60, 255)
led[0] = DORMIDO
noche = False
print("Guardian listo. Luz base:", luz_base)

while True:
    if nivel_luz() < luz_base * UMBRAL_NOCHE:
        noche = True
        led[0] = DESPIERTO
        sonar(BUHO)
        sonar(GRILLOS)
        sonar(RANAS)
        sonar(JAGUAR)
        time.sleep(1)
    elif noche:
        noche = False
        led[0] = DORMIDO
    else:
        for sensor, base, animal, color in sensores:
            if abs(sensor.raw_value - base) > base * SENSIBILIDAD:
                print("Planta tocada:", animal)
                led[0] = color
                sonar(DIA[animal])
                led[0] = DORMIDO
                time.sleep(0.3)
    time.sleep(0.05)
