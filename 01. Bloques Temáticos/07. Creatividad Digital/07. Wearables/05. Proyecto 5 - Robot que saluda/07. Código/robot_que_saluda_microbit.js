// Robot que saluda: version Primaria (micro:bit, MakeCode)
// Al presionar el boton A: cara feliz, melodia, el brazo saluda tres veces
// y los ojos LED se encienden cada vez que el brazo sube.
//
// Conexiones (con la micro:bit desconectada):
//   Servo: naranja -> P0; rojo -> + del portapilas de 4 AA;
//          cafe -> - del portapilas y tambien GND de la micro:bit
//   Ojo izquierdo: pata larga con su resistencia de 220 ohm -> P1, pata corta -> GND
//   Ojo derecho:   pata larga con su resistencia de 220 ohm -> P2, pata corta -> GND

function ojos (encendidos: number) {
    pins.digitalWritePin(DigitalPin.P1, encendidos)
    pins.digitalWritePin(DigitalPin.P2, encendidos)
}

function saludar () {
    basic.showIcon(IconNames.Happy)
    music.play(music.stringPlayable("C E G - - - - - ", 240), music.PlaybackMode.InBackground)
    for (let index = 0; index < 3; index++) {
        pins.servoWritePin(AnalogPin.P0, 150)   // brazo arriba (bajar el numero si choca)
        ojos(1)
        basic.pause(400)
        pins.servoWritePin(AnalogPin.P0, 90)    // brazo abajo
        ojos(0)
        basic.pause(400)
    }
    basic.showIcon(IconNames.Asleep)
}

input.onButtonPressed(Button.A, function () {
    saludar()
})

// En la micro:bit V2, P0 tambien saca el sonido. Como ahi esta el servo,
// se desactiva: la melodia sigue sonando por el parlante de la placa.
pins.setAudioPinEnabled(false)
pins.servoWritePin(AnalogPin.P0, 90)
ojos(0)
basic.showIcon(IconNames.Asleep)
