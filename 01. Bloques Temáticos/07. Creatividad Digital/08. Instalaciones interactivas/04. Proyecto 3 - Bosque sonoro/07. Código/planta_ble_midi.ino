// Proyecto 3: Bosque sonoro, Secundaria. Planta musical por Bluetooth MIDI.
// La IdeaBoard aparece en GarageBand con el nombre de abajo y envia notas al tocar la planta.
// Librerias: MIDI Library (FortySevenEffects) y Arduino-BLE-MIDI (lathoub).
#include <BLEMIDI_Transport.h>
#include <hardware/BLEMIDI_ESP32.h>

// NOMBRE EN BLUETOOTH. Si el bosque tiene varias plantas, cada IdeaBoard necesita
// un nombre distinto para no confundirlas en GarageBand:
// "IdeaBoard Planta 1", "IdeaBoard Planta 2", "IdeaBoard Planta 3"...
BLEMIDI_CREATE_INSTANCE("IdeaBoard Planta", MIDI)

const int pinPlanta = 27;

// AJUSTES DE SU PLANTA. Calculelos con las lecturas de su planta
// (tabla de calibracion de la guia). Estos son los de la planta del prototipo:
// sin tocar = 1123, tocando = 853.
const int umbralTocar = 1000;   // por debajo de este valor la planta esta tocada
const int umbralSoltar = 1050;  // por encima de este valor la planta se solto
const int pasoNota = 40;        // cuanto debe bajar la lectura para subir una nota

// Escala pentatonica de Do mayor: Do, Re, Mi, Sol, La
const byte notas[] = {60, 62, 64, 67, 69};

bool conectado = false;
bool tocando = false;
int notaActual = -1;

unsigned long ultimoCambio = 0;

void setup() {
  Serial.begin(115200);

  BLEMIDI.setHandleConnected([]() {
    conectado = true;
    Serial.println("Bluetooth conectado");
  });

  BLEMIDI.setHandleDisconnected([]() {
    conectado = false;
    tocando = false;
    notaActual = -1;
    Serial.println("Bluetooth desconectado");
  });

  MIDI.begin(1);

  Serial.println("IdeaBoard Planta iniciada");
}

void loop() {
  MIDI.read();

  int lectura = touchRead(pinPlanta);

  if (lectura < umbralTocar) {
    tocando = true;
  } else if (lectura > umbralSoltar) {
    tocando = false;
  }

  if (conectado) {
    int nuevaNota = -1;

    if (tocando) {
      // Mientras mas fuerte el contacto, mas baja la lectura y mas aguda la nota
      int indice = constrain(
        (umbralTocar - lectura) / pasoNota, 0, 4
      );

      nuevaNota = notas[indice];
    }

    if (nuevaNota != notaActual &&
        millis() - ultimoCambio >= 150) {

      if (notaActual >= 0) {
        MIDI.sendNoteOff(notaActual, 0, 1);
      }

      if (nuevaNota >= 0) {
        MIDI.sendNoteOn(nuevaNota, 90, 1);
      }

      notaActual = nuevaNota;
      ultimoCambio = millis();
    }
  }

  delay(30);
}
