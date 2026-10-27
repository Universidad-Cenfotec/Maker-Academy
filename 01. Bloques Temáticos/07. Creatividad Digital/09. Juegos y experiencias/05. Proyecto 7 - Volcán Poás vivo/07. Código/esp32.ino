// Proyecto 7: Volcan Poas vivo (ESP32 generico, Arduino IDE)
// ESP32: ECHO en el pin 35 con divisor 1 kOhm / 2 kOhm
// Envia "ERUPCION" por el cable USB para que la proyeccion cambie.
const int LUCES[3] = {4, 5, 18};      // cada pin: 2 LEDs con su resistencia de 220 Ohm
const int PIN_TRIG = 26;
const int PIN_ECHO = 35;
const int DISTANCIA_CM = 80;
const unsigned long DURACION = 15000;
const unsigned long ESPERA = 20000;
unsigned long ultima = 0;
bool primera = true;

long medirDistanciaCm() {
  digitalWrite(PIN_TRIG, LOW);
  delayMicroseconds(2);
  digitalWrite(PIN_TRIG, HIGH);
  delayMicroseconds(10);
  digitalWrite(PIN_TRIG, LOW);
  long t = pulseIn(PIN_ECHO, HIGH, 30000);
  if (t == 0) return 999;
  return t / 58;
}

void calma() {
  float t = millis() / 1000.0;
  for (int i = 0; i < 3; i++) analogWrite(LUCES[i], 12 + 12 * sin(t * 1.2 + i));
}

void erupcion() {
  Serial.println("ERUPCION");
  unsigned long fin = millis() + DURACION;
  while (millis() < fin) {
    for (int i = 0; i < 3; i++) analogWrite(LUCES[i], random(80, 256));
    delay(random(30, 120));
  }
  Serial.println("CALMA");
}

void setup() {
  Serial.begin(115200);
  for (int i = 0; i < 3; i++) pinMode(LUCES[i], OUTPUT);
  pinMode(PIN_TRIG, OUTPUT);
  pinMode(PIN_ECHO, INPUT);
  Serial.println("Volcan listo");
}

void loop() {
  calma();
  if ((primera || millis() - ultima > ESPERA) && medirDistanciaCm() < DISTANCIA_CM) {
    erupcion();
    ultima = millis();
    primera = false;
  }
  delay(50);
}
