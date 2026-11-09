// Proyecto 3: Bosque sonoro, Secundaria. Prueba del sensor de la planta.
// Muestra en el monitor serie la lectura capacitiva del pin 27.
// Tambien sirve para la version con computadora: Python lee estas lineas por USB.
const int pinPlanta = 27;

void setup() {
  Serial.begin(115200);
  delay(1000);
}

void loop() {
  int lectura = touchRead(pinPlanta);   // baja cuando alguien toca la planta

  Serial.print("Lectura de planta: ");
  Serial.println(lectura);

  delay(100);
}
