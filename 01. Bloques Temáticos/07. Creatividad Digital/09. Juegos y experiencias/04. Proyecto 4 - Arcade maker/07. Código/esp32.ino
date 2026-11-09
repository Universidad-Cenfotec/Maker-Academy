// Proyecto 4: Arcade maker, control (ESP32 generico, Arduino IDE)
// Envia "b1,b2,b3,b4,pot" 30 veces por segundo. pot va de 0 a 1000.
const int BOTONES[4] = {4, 5, 18, 19};  // cada pulsador entre el pin y GND
const int PIN_POT = 34;                 // potenciometro: extremos a 3.3 V y GND, centro a 34

void setup() {
  Serial.begin(115200);
  for (int i = 0; i < 4; i++) pinMode(BOTONES[i], INPUT_PULLUP);
}

void loop() {
  for (int i = 0; i < 4; i++) {
    Serial.print(digitalRead(BOTONES[i]) == LOW ? 1 : 0);
    Serial.print(",");
  }
  Serial.println(map(analogRead(PIN_POT), 0, 4095, 0, 1000));
  delay(33);
}
