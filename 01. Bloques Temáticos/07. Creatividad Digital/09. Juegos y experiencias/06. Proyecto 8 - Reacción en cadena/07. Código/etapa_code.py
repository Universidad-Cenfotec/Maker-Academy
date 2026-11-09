# Proyecto 8: Reaccion en cadena, plantilla de etapa electronica
# (IdeaBoard con IdeaCode / CircuitPython)
# La etapa espera una senal de entrada (sensor) y produce una salida (servo que abre
# una compuerta y suelta la canica de la siguiente etapa).
import time
import board
import digitalio
import analogio
import pulseio
import pwmio
import neopixel
from adafruit_motor import servo

NUMERO_ETAPA = 3                 # numero de su etapa en la maquina
TIPO_SENSOR = "boton"            # "boton" (microswitch), "luz" o "distancia"
COMPUERTA_CERRADA = 0            # angulos del servo (se calibran)
COMPUERTA_ABIERTA = 90
TIEMPO_ABIERTA = 1.5             # segundos que la compuerta queda abierta
UMBRAL_LUZ = 0.7                 # la sombra baja la luz a menos del 70 %
UMBRAL_DISTANCIA = 8             # cm

# ---------- Salida: servo en IO25 ----------
pwm = pwmio.PWMOut(board.IO25, duty_cycle=0, frequency=50)
compuerta = servo.Servo(pwm, min_pulse=500, max_pulse=2400)
led = neopixel.NeoPixel(board.NEOPIXEL, 1, brightness=0.3)

# ---------- Entrada segun el tipo de sensor ----------
if TIPO_SENSOR == "boton":
    boton = digitalio.DigitalInOut(board.IO27)          # microswitch entre IO27 y GND
    boton.switch_to_input(pull=digitalio.Pull.UP)
elif TIPO_SENSOR == "luz":
    luz = analogio.AnalogIn(board.IO34)                 # modulo de luz: salida AO
    base_luz = luz.value                                # valor con la luz sin tapar
elif TIPO_SENSOR == "distancia":
    trig = digitalio.DigitalInOut(board.IO26)
    trig.direction = digitalio.Direction.OUTPUT
    eco = pulseio.PulseIn(board.IO35, maxlen=2)         # ECHO con divisor 1 kOhm / 2 kOhm
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


def entrada_activa():
    if TIPO_SENSOR == "boton":
        return not boton.value                          # presionado = 0 V
    if TIPO_SENSOR == "luz":
        return luz.value < base_luz * UMBRAL_LUZ
    return medir_distancia_cm() < UMBRAL_DISTANCIA


VERDE, AMARILLO, AZUL = (0, 120, 0), (120, 90, 0), (0, 0, 120)
compuerta.angle = COMPUERTA_CERRADA
estado = "LISTA"
led[0] = VERDE
inicio = time.monotonic()
print(f"Etapa {NUMERO_ETAPA} lista. Sensor: {TIPO_SENSOR}")

while True:
    t = time.monotonic() - inicio
    if estado == "LISTA" and entrada_activa():
        print(f"ETAPA {NUMERO_ETAPA}: entrada a los {t:.2f} s")
        estado = "ACTIVANDO"
        led[0] = AMARILLO
        compuerta.angle = COMPUERTA_ABIERTA
        time.sleep(TIEMPO_ABIERTA)
        compuerta.angle = COMPUERTA_CERRADA
        print(f"ETAPA {NUMERO_ETAPA}: salida a los {time.monotonic() - inicio:.2f} s")
        estado = "REARMANDO"
        led[0] = AZUL
        libre_desde = time.monotonic()
    elif estado == "REARMANDO":
        # espera 2 s seguidos sin senal antes de quedar lista otra vez
        if entrada_activa():
            libre_desde = time.monotonic()
        elif time.monotonic() - libre_desde > 2:
            estado = "LISTA"
            led[0] = VERDE
            print(f"ETAPA {NUMERO_ETAPA}: lista otra vez")
    time.sleep(0.01)
