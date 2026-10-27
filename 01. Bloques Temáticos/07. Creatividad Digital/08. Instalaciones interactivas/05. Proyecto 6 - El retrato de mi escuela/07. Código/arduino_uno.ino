// Proyecto 6: El retrato de mi escuela, estacion de datos (Arduino Uno)
// El Uno no tiene Wi-Fi: los datos salen por el monitor serie en formato CSV.
// Copie las lineas del monitor serie a un archivo .csv para la obra.
#include <OneWire.h>
#include <DallasTemperature.h>

const char* LUGAR = "biblioteca";
const unsigned long INTERVALO = 60000;   // ms entre mediciones (60000 = 1 minuto)
const int PIN_LUZ = A0;                  // sensor de luz: salida AO
const int PIN_RUIDO = A1;                // KY-038: salida AO
const int PIN_TEMP = 2;                  // DS18B20 con resistencia de 4.7 kOhm a 5 V

OneWire bus(PIN_TEMP);
DallasTemperature termometro(&bus);

int medirRuido() {
  int alto = 0, bajo = 1023;
  unsigned long fin = millis() + 500;
  while (millis() < fin) {
    int v = analogRead(PIN_RUIDO);
    if (v > alto) alto = v;
    if (v < bajo) bajo = v;
  }
  return map(alto - bajo, 0, 1023, 0, 100);
}

void setup() {
  Serial.begin(115200);
  termometro.begin();
  Serial.println("lugar,luz,temperatura,ruido");
}

void loop() {
  int luz = map(analogRead(PIN_LUZ), 0, 1023, 0, 100);
  termometro.requestTemperatures();
  float temperatura = termometro.getTempCByIndex(0);
  int ruido = medirRuido();
  Serial.print(LUGAR); Serial.print(",");
  Serial.print(luz); Serial.print(",");
  Serial.print(temperatura, 1); Serial.print(",");
  Serial.println(ruido);
  delay(INTERVALO);
}
