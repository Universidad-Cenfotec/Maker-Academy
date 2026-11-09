// Proyecto 6: El retrato de mi escuela, estacion de datos (ESP32 generico, Arduino IDE)
// Envia luz, temperatura y ruido a una hoja de calculo de Google cada 5 minutos.
#include <WiFi.h>
#include <HTTPClient.h>
#include <WiFiClientSecure.h>
#include <OneWire.h>
#include <DallasTemperature.h>

const char* RED = "nombre-de-la-red";
const char* CLAVE = "clave-de-la-red";
const char* URL_HOJA = "https://script.google.com/macros/s/CODIGO-DE-SU-SCRIPT/exec";
const char* LUGAR = "biblioteca";
const unsigned long INTERVALO = 300000;  // 5 minutos
const int PIN_LUZ = 34;                  // pines ADC1: funcionan con el Wi-Fi encendido
const int PIN_RUIDO = 35;
const int PIN_TEMP = 27;                 // DS18B20 con resistencia de 4.7 kOhm a 3.3 V

OneWire bus(PIN_TEMP);
DallasTemperature termometro(&bus);

int medirRuido() {
  int alto = 0, bajo = 4095;
  unsigned long fin = millis() + 500;
  while (millis() < fin) {
    int v = analogRead(PIN_RUIDO);
    if (v > alto) alto = v;
    if (v < bajo) bajo = v;
  }
  return map(alto - bajo, 0, 4095, 0, 100);
}

void conectar() {
  WiFi.mode(WIFI_STA);
  WiFi.begin(RED, CLAVE);
  while (WiFi.status() != WL_CONNECTED) { delay(500); Serial.print("."); }
  Serial.println(" conectado");
}

void setup() {
  Serial.begin(115200);
  termometro.begin();
  conectar();
  Serial.println("lugar,luz,temperatura,ruido");
}

void loop() {
  int luz = map(analogRead(PIN_LUZ), 0, 4095, 0, 100);
  termometro.requestTemperatures();
  float temperatura = termometro.getTempCByIndex(0);
  int ruido = medirRuido();
  String linea = String(LUGAR) + "," + String(luz) + "," + String(temperatura, 1) + "," + String(ruido);
  Serial.println(linea);                 // copia de respaldo

  if (WiFi.status() != WL_CONNECTED) conectar();
  WiFiClientSecure cliente;
  cliente.setInsecure();                 // simplifica el certificado (solo para uso educativo)
  HTTPClient http;
  String url = String(URL_HOJA) + "?lugar=" + LUGAR + "&luz=" + String(luz) +
               "&temp=" + String(temperatura, 1) + "&ruido=" + String(ruido);
  http.begin(cliente, url);
  http.setFollowRedirects(HTTPC_STRICT_FOLLOW_REDIRECTS);
  int codigo = http.GET();
  Serial.print("Respuesta de la hoja: ");
  Serial.println(codigo);
  http.end();
  delay(INTERVALO);
}
