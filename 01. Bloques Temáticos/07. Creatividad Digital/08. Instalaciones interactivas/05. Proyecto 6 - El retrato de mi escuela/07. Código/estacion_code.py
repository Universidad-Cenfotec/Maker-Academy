# Proyecto 6: El retrato de mi escuela, estacion de datos
# (IdeaBoard con IdeaCode / CircuitPython)
# Mide luz, temperatura y ruido cada 5 minutos y los envia a una hoja de calculo.
# Antes de usar: escriba la red Wi-Fi y la direccion de la hoja en settings.toml.
# Librerias que hay que instalar desde IdeaCode: adafruit_onewire y adafruit_ds18x20.
import os
import time
import board
import analogio
import neopixel
import wifi
import adafruit_connection_manager
import adafruit_requests
from adafruit_onewire.bus import OneWireBus
from adafruit_ds18x20 import DS18X20

LUGAR = "biblioteca"            # cambie el nombre segun donde coloque la estacion
INTERVALO = 300                 # segundos entre mediciones (300 = 5 minutos)

luz_sensor = analogio.AnalogIn(board.IO34)     # sensor de luz: salida AO
ruido_sensor = analogio.AnalogIn(board.IO35)   # KY-038: salida AO
bus = OneWireBus(board.IO27)                   # DS18B20 con resistencia de 4.7 kOhm a 3.3 V
termometro = DS18X20(bus, bus.scan()[0])
led = neopixel.NeoPixel(board.NEOPIXEL, 1, brightness=0.2)


def medir_luz():
    """0 = oscuro, 100 = mucha luz. Si su modulo da al reves, use 100 - valor."""
    return round(luz_sensor.value * 100 / 65535)


def medir_ruido():
    """Diferencia entre el valor mas alto y el mas bajo durante medio segundo (0 a 100)."""
    alto, bajo = 0, 65535
    fin = time.monotonic() + 0.5
    while time.monotonic() < fin:
        v = ruido_sensor.value
        alto = max(alto, v)
        bajo = min(bajo, v)
    return round((alto - bajo) * 100 / 65535)


def conectar():
    led[0] = (80, 60, 0)                      # amarillo: conectando
    wifi.radio.connect(os.getenv("CIRCUITPY_WIFI_SSID"), os.getenv("CIRCUITPY_WIFI_PASSWORD"))
    print("Conectado, IP:", wifi.radio.ipv4_address)


conectar()
pool = adafruit_connection_manager.get_radio_socketpool(wifi.radio)
ssl_context = adafruit_connection_manager.get_radio_ssl_context(wifi.radio)
requests = adafruit_requests.Session(pool, ssl_context)
URL = os.getenv("URL_HOJA")

print("lugar,luz,temperatura,ruido")
while True:
    luz = medir_luz()
    temperatura = round(termometro.temperature, 1)
    ruido = medir_ruido()
    print(f"{LUGAR},{luz},{temperatura},{ruido}")       # copia de respaldo en la consola
    try:
        if not wifi.radio.connected:
            conectar()
        r = requests.get(f"{URL}?lugar={LUGAR}&luz={luz}&temp={temperatura}&ruido={ruido}")
        r.close()
        led[0] = (0, 80, 0)                   # verde: dato enviado
    except Exception as e:
        print("No se pudo enviar:", e)
        led[0] = (80, 0, 0)                   # rojo: revisar la red
    time.sleep(INTERVALO)
