// Guardian del bosque: Bosque sonoro, version Primaria (micro:bit V2, MakeCode)
// Pegar en la vista JavaScript de makecode.microbit.org y luego cambiar a Bloques.
//
// DIA (luz encendida): el guardian duerme. Las plantas de papel aluminio
//   conectadas a P0, P1 y P2 suenan al tocarlas: pajaro, mono y abeja.
// NOCHE (luz apagada o pantalla tapada): el guardian abre los ojos y suena la
//   secuencia del bosque nocturno: buho, grillos, ranas y jaguar. Mientras es
//   de noche, las plantas no suenan.
//
// IMPORTANTE: encender la micro:bit con la luz del aula encendida y sin tapar
// la pantalla, porque al arrancar guarda la luz normal del aula.

// Las plantas se detectan por toque (modo capacitivo de la micro:bit V2).
// P0 tambien saca sonido por defecto: se desactiva para usarlo como planta.
pins.setAudioPinEnabled(false)
pins.touchSetMode(TouchTarget.P0, TouchTargetMode.Capacitive)
pins.touchSetMode(TouchTarget.P1, TouchTargetMode.Capacitive)
pins.touchSetMode(TouchTarget.P2, TouchTargetMode.Capacitive)
let noche = false
// La primera lectura de luz puede salir en 0 mientras el sensor arranca:
// se lee una vez, se espera y se vuelve a leer para guardar la luz del aula.
let luzBase = input.lightLevel()
basic.pause(500)
luzBase = input.lightLevel()
basic.showIcon(IconNames.Asleep)

function buho () {
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(330, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
}

function grillos () {
    for (let index = 0; index < 6; index++) {
        music.play(music.tonePlayable(3000, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.UntilDone)
        basic.pause(60)
    }
}

function ranas () {
    for (let index = 0; index < 3; index++) {
        music.play(music.tonePlayable(150, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
        basic.pause(120)
    }
}

function jaguar () {
    music.play(music.createSoundExpression(WaveShape.Noise, 400, 80, 255, 0, 1200, SoundExpressionEffect.Warble, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
}

basic.forever(function () {
    // 0.4 = que tan oscuro debe estar para que sea de noche.
    // Si el guardian no despierta al tapar la pantalla, subir a 0.6.
    // Si despierta solo con la luz normal, bajar a 0.3.
    if (input.lightLevel() < luzBase * 0.4) {
        noche = true
        basic.showIcon(IconNames.Surprised)
        buho()
        grillos()
        ranas()
        jaguar()
        basic.pause(1000)
    } else if (noche) {
        noche = false
        basic.showIcon(IconNames.Asleep)
    }
    basic.pause(200)
})

// Planta 1 (P0): pajaro
input.onPinPressed(TouchPin.P0, function () {
    if (!(noche)) {
        basic.showIcon(IconNames.Happy)
        music.play(music.builtinPlayableSoundEffect(soundExpression.twinkle), music.PlaybackMode.UntilDone)
        basic.showIcon(IconNames.Asleep)
    }
})

// Planta 2 (P1): mono
input.onPinPressed(TouchPin.P1, function () {
    if (!(noche)) {
        basic.showIcon(IconNames.Silly)
        music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.UntilDone)
        basic.showIcon(IconNames.Asleep)
    }
})

// Planta 3 (P2): abeja
input.onPinPressed(TouchPin.P2, function () {
    if (!(noche)) {
        basic.showIcon(IconNames.Butterfly)
        music.play(music.createSoundExpression(WaveShape.Sawtooth, 220, 240, 120, 120, 800, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        basic.showIcon(IconNames.Asleep)
    }
})
