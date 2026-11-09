// Proyecto 3: Bosque sonoro (Arduino Uno)
// Hojas tactiles con la libreria CapacitiveSensor: una resistencia de 1 MOhm
// va del pin 2 a cada pin de hoja, y la hoja de aluminio se conecta al pin de hoja.
#include <CapacitiveSensor.h>
#include <Adafruit_NeoPixel.h>

const bool USAR_SENSOR = true;    // false = Primaria: sin ultrasonico ni tira, siempre despierto
const int PIN_BUZZER = 9;
const int PIN_TIRA = 6;
const int PIN_TRIG = 12;
const int PIN_ECHO = 11;          // el Uno trabaja a 5 V: no necesita divisor
const int NUM_LEDS = 30;
const long UMBRAL = 200;          // calibrar con el monitor serie
const int DIST_DESPIERTO = 120;
const int DIST_TORMENTA = 40;
const unsigned long TIEMPO_CERCA = 3000;
const unsigned long DURACION_TORMENTA = 6000;

CapacitiveSensor hojas[4] = {
  CapacitiveSensor(2, 4), CapacitiveSensor(2, 5), CapacitiveSensor(2, 7), CapacitiveSensor(2, 8)
};
const char* NOMBRES[4] = {"yiguirro", "rana", "mono congo", "tucan"};
bool antes[4] = {false, false, false, false};
Adafruit_NeoPixel tira(NUM_LEDS, PIN_TIRA, NEO_GRB + NEO_KHZ800);

enum Estado { DORMIDO, DESPIERTO, TORMENTA };
Estado estado = DORMIDO;
unsigned long inicioCerca = 0;
unsigned long inicioTormenta = 0;
unsigned long toques[6] = {0, 0, 0, 0, 0, 0};   // momentos de los ultimos 6 toques
int posToque = 0;

void nota(int f, int ms) {
  if (f > 0) tone(PIN_BUZZER, f, ms);
  delay(ms + 20);
}

void sonarAnimal(int i) {
  if (i == 0) { nota(1320, 120); nota(1570, 120); nota(1320, 120); nota(1050, 250); }
  if (i == 1) { nota(180, 80); nota(0, 60); nota(180, 80); nota(0, 60); nota(220, 150); }
  if (i == 2) { nota(110, 300); nota(130, 300); nota(150, 400); }
  if (i == 3) { nota(700, 60); nota(500, 60); nota(700, 60); nota(500, 100); }
}

uint32_t colorAnimal(int i) {
  if (i == 0) return tira.Color(255, 180, 0);
  if (i == 1) return tira.Color(0, 255, 40);
  if (i == 2) return tira.Color(255, 60, 0);
  return tira.Color(0, 120, 255);
}

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

void pintar(int r, int g, int b) {
  tira.fill(tira.Color(r, g, b));
  tira.show();
}

void cambiar(Estado nuevo) {
  if (nuevo != estado) {
    Serial.print("Estado: ");
    Serial.println(nuevo == DORMIDO ? "DORMIDO" : (nuevo == DESPIERTO ? "DESPIERTO" : "TORMENTA"));
    estado = nuevo;
  }
}

void setup() {
  Serial.begin(115200);
  pinMode(PIN_TRIG, OUTPUT);
  pinMode(PIN_ECHO, INPUT);
  tira.begin();
  tira.setBrightness(100);
  if (!USAR_SENSOR) estado = DESPIERTO;
  Serial.println("Bosque sonoro listo");
}

void loop() {
  unsigned long ahora = millis();
  // 1. Hojas
  for (int i = 0; i < 4; i++) {
    long valor = hojas[i].capacitiveSensor(30);
    bool tocada = valor > UMBRAL;
    if (tocada && !antes[i]) {
      Serial.print("Hoja: ");
      Serial.print(NOMBRES[i]);
      Serial.print(" valor=");
      Serial.println(valor);
      toques[posToque] = ahora;
      posToque = (posToque + 1) % 6;
      if (estado == DESPIERTO) {
        int n = NUM_LEDS / 4;
        for (int k = i * n; k < (i + 1) * n; k++) tira.setPixelColor(k, colorAnimal(i));
        tira.show();
        sonarAnimal(i);
      }
    }
    antes[i] = tocada;
  }
  if (!USAR_SENSOR) { delay(30); return; }

  // 2. Estados
  long d = medirDistanciaCm();
  bool seisToques = toques[posToque] != 0 && ahora - toques[posToque] < 10000;  // el mas viejo de los 6
  if (estado == TORMENTA) {
    if (random(100) < 15) {
      pintar(255, 255, 255);
      delay(50);
      nota(random(60, 120), 250);
    }
    pintar(0, 0, random(10, 40));
    if (ahora - inicioTormenta > DURACION_TORMENTA) {
      for (int k = 0; k < 6; k++) toques[k] = 0;
      cambiar(DESPIERTO);
    }
  } else {
    if (d < DIST_TORMENTA) { if (inicioCerca == 0) inicioCerca = ahora; }
    else inicioCerca = 0;
    bool muyCerca = inicioCerca != 0 && ahora - inicioCerca > TIEMPO_CERCA;
    if (muyCerca || seisToques) {
      inicioTormenta = ahora;
      inicioCerca = 0;
      cambiar(TORMENTA);
    } else if (d < DIST_DESPIERTO) {
      if (estado == DORMIDO) { cambiar(DESPIERTO); nota(523, 100); nota(659, 100); nota(784, 150); }
      pintar(40, 90, 10);
    } else {
      cambiar(DORMIDO);
      int v = 10 + 12 * (1 + sin(ahora / 650.0));
      pintar(0, v, v / 3);
    }
  }
  delay(30);
}
