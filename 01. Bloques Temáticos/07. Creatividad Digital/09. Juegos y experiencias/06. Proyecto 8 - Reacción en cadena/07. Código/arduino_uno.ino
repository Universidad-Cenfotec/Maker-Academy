// Proyecto 8: Reaccion en cadena, plantilla de etapa electronica (Arduino Uno)
#include <Servo.h>

const int NUMERO_ETAPA = 3;
const int TIPO_SENSOR = 0;          // 0 = boton (microswitch), 1 = luz, 2 = distancia
const int PIN_SERVO = 9;
const int PIN_BOTON = 2;          // microswitch entre el pin y GND
const int PIN_LUZ = A0;            // modulo de luz: salida AO
const int PIN_TRIG = 12;
const int PIN_ECHO = 11;
const int CERRADA = 0;
const int ABIERTA = 90;
const unsigned long TIEMPO_ABIERTA = 1500;
const float UMBRAL_LUZ = 0.7;
const int UMBRAL_DISTANCIA = 8;

Servo compuerta;
int baseLuz = 0;
enum Estado { LISTA, REARMANDO };
Estado estado = LISTA;
unsigned long libreDesde = 0;

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

bool entradaActiva() {
  if (TIPO_SENSOR == 0) return digitalRead(PIN_BOTON) == LOW;
  if (TIPO_SENSOR == 1) return analogRead(PIN_LUZ) < baseLuz * UMBRAL_LUZ;
  return medirDistanciaCm() < UMBRAL_DISTANCIA;
}

void setup() {
  Serial.begin(115200);
  pinMode(PIN_BOTON, INPUT_PULLUP);
  pinMode(PIN_TRIG, OUTPUT);
  pinMode(PIN_ECHO, INPUT);
  baseLuz = analogRead(PIN_LUZ);    // luz sin tapar al encender
  compuerta.attach(PIN_SERVO);
  compuerta.write(CERRADA);
  Serial.print("Etapa ");
  Serial.print(NUMERO_ETAPA);
  Serial.println(" lista");
}

void loop() {
  if (estado == LISTA && entradaActiva()) {
    Serial.print("ETAPA "); Serial.print(NUMERO_ETAPA);
    Serial.print(": entrada a los "); Serial.print(millis() / 1000.0); Serial.println(" s");
    compuerta.write(ABIERTA);
    delay(TIEMPO_ABIERTA);
    compuerta.write(CERRADA);
    Serial.print("ETAPA "); Serial.print(NUMERO_ETAPA);
    Serial.print(": salida a los "); Serial.print(millis() / 1000.0); Serial.println(" s");
    estado = REARMANDO;
    libreDesde = millis();
  } else if (estado == REARMANDO) {
    if (entradaActiva()) libreDesde = millis();
    else if (millis() - libreDesde > 2000) {
      estado = LISTA;
      Serial.println("Lista otra vez");
    }
  }
  delay(10);
}
