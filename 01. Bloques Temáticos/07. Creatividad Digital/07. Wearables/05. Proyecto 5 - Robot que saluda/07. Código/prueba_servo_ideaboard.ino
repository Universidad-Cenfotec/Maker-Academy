// Prueba del servo en la IdeaBoard: mueve el brazo de 90 a 150 grados sin parar.
// Servo en la fila IO25 (cafe GND, rojo V+, naranja senal).
#include <ESP32Servo.h>
Servo brazo;
void setup() {
  Serial.begin(115200);
  ESP32PWM::allocateTimer(0);
  brazo.setPeriodHertz(50);
  brazo.attach(25, 500, 2400);
  Serial.println("Prueba del servo");
}
void loop() {
  brazo.write(150);
  delay(1000);
  brazo.write(90);
  delay(1000);
}
