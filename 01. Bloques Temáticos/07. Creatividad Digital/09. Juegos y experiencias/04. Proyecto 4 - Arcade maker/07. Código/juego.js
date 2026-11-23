"use strict";
// ════════════════════════════════════════════════
// 1. REGLAS EDITABLES
// ════════════════════════════════════════════════
const VIDAS = 3;
const PUNTOS_POR_NIVEL = 100;
const VELOCIDAD_INICIAL = 1.45;
const PROB_BOLSA = 0.36; // entre 0 y 1
const TAMANO_OBJETOS = 1.6; // tamaño de medusas y bolsas: 1 = original, 2 = el doble
// ════════════════════════════════════════════════

// ════════════════════════════════════════════════
// 2. DISEÑO EDITABLE: FIGURAS EN PÍXELES Y COLORES
// ════════════════════════════════════════════════
// Cada figura es una cuadrícula: cada texto es una fila y cada letra, un píxel.
// El punto (.) es un píxel vacío. Cada letra usa el color que indica su paleta.
// Todas las filas de una figura deben tener la misma cantidad de caracteres.
const MEDUSA = [
  ".............",
  ".....PPPP....",
  "...PPVVVVPP..",
  "..PVVLLLVVVP.",
  ".PVLLLYYLLVVP",
  "PVLLYYYYLLLVP",
  "PVLLYYYYYLLVP",
  "PPVVLLLLLVVPP",
  "..PPPPPPPPPP.",
  "...P.P..P.P..",
  "..P..P.P..P..",
  "..P..P.P...P.",
  "...P.P..P.P..",
  "...P.P....P..",
  "..P...P...P..",
  "..P...P..P...",
];
const COLORES_MEDUSA = { P: "#dd75ed", V: "#a657ec", L: "#fdace0", Y: "#ffe1a5" };
const BOLSA = [
  "..GG....GG...",
  ".GWWG..GWWG..",
  ".GWWG..GWWG..",
  ".GWWWGGWWWG..",
  ".GWWWWWWWWG..",
  ".GWWWWWWWWG..",
  ".GWWWWWWWWG..",
  ".GWWWWWWWWG..",
  ".GWWWWWWWWG..",
  ".GWWWWWWWWG..",
  "..GWWWWWWG...",
  "...GGGGGG....",
];
const COLORES_BOLSA = { G: "#8498ac", W: "#c6d0d7" };
// Franjas del mar, de la superficie (arriba) al fondo (abajo).
const COLORES_MAR = [
  "#138ec0",
  "#0e83b8",
  "#0b78ad",
  "#0a71a6",
  "#08699d",
  "#086195",
  "#07598d",
  "#075486",
  "#064d7d",
  "#064371",
  "#073967",
  "#07315c",
  "#072e54",
  "#062849",
];
// ════════════════════════════════════════════════

// 3. ESTADO DEL JUEGO Y FUNCIONES DE APOYO
const W = 480,
  H = 270,
  c = document.getElementById("game"),
  ctx = c.getContext("2d", { alpha: false });
ctx.imageSmoothingEnabled = false;
const ui = {
  score: document.getElementById("score"),
  lives: document.getElementById("lives"),
  level: document.getElementById("level"),
  overlay: document.getElementById("overlay"),
  title: document.getElementById("overlayTitle"),
  body: document.getElementById("overlayText"),
  tip: document.getElementById("overlayTip"),
  start: document.getElementById("startBtn"),
  status: document.getElementById("serialStatus"),
  pause: document.getElementById("pauseBtn"),
  sound: document.getElementById("soundBtn"),
  connect: document.getElementById("connectBtn"),
};
let state = "menu",
  score = 0,
  lives = VIDAS,
  level = 1,
  playerX = W / 2,
  objects = [],
  particles = [],
  clock = 0,
  spawn = 0,
  invincible = 0,
  shieldUntil = 0,
  shieldReady = 0,
  sound = true,
  keyboard = { left: false, right: false },
  boardX = null,
  boardConnected = false,
  serialPort = null,
  serialReader = null,
  serialActive = false,
  serialBuffer = "",
  prevButtons = [0, 0, 0, 0],
  audioCtx = null,
  lastTime = 0;
const rand = (a, b) => a + Math.random() * (b - a),
  clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const rect = (x, y, w, h, color) => {
  ctx.fillStyle = color;
  ctx.fillRect(Math.round(x), Math.round(y), Math.round(w), Math.round(h));
};
function poly(points, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(Math.round(points[0][0]), Math.round(points[0][1]));
  for (let i = 1; i < points.length; i++)
    ctx.lineTo(Math.round(points[i][0]), Math.round(points[i][1]));
  ctx.closePath();
  ctx.fill();
}
function pxText(t, x, y, size = 10, color = "#fff", align = "left") {
  ctx.fillStyle = color;
  ctx.font = `bold ${size}px monospace`;
  ctx.textAlign = align;
  ctx.fillText(t, Math.round(x), Math.round(y));
  ctx.textAlign = "left";
}
function beep(freq = 540, dur = 0.08, type = "square") {
  if (!sound) return;
  try {
    audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === "suspended") audioCtx.resume();
    let osc = audioCtx.createOscillator(),
      gain = audioCtx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0.035, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + dur);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + dur);
  } catch (e) {}
}
function hud() {
  ui.score.textContent = String(score).padStart(4, "0");
  ui.level.textContent = String(level).padStart(2, "0");
  ui.lives.textContent = Array.from({ length: VIDAS }, (_, i) => (i < lives ? "♥" : "♡")).join(
    " ",
  );
}
function overlay(title, body, button, tip) {
  ui.title.textContent = title;
  ui.body.textContent = body;
  ui.start.textContent = button;
  ui.tip.textContent = tip;
  ui.overlay.classList.remove("hidden");
}
function newGame() {
  score = 0;
  lives = VIDAS;
  level = 1;
  playerX = W / 2;
  objects = [];
  particles = [];
  clock = 0;
  spawn = 0;
  invincible = 0;
  shieldUntil = 0;
  shieldReady = 0;
  state = "playing";
  ui.overlay.classList.add("hidden");
  hud();
  beep(620, 0.1);
}
function pauseToggle() {
  if (state === "playing") {
    state = "paused";
    overlay("EN PAUSA", "El océano te espera.", "CONTINUAR", "Presioná P para continuar");
  } else if (state === "paused") {
    state = "playing";
    ui.overlay.classList.add("hidden");
  }
}
function startOrResume() {
  if (state === "paused") pauseToggle();
  else newGame();
}
function useShield() {
  if (state !== "playing" || clock < shieldReady) return;
  shieldUntil = clock + 1.6;
  shieldReady = clock + 8;
  beep(800, 0.12);
}
function toggleSound() {
  sound = !sound;
  ui.sound.textContent = "SONIDO: " + (sound ? "SÍ" : "NO");
}
ui.start.onclick = startOrResume;
ui.pause.onclick = pauseToggle;
ui.sound.onclick = toggleSound;
// ════════════════════════════════════════════════
// 4. CONTROLES: TECLADO Y BOTONES EN PANTALLA
// ════════════════════════════════════════════════
window.addEventListener("keydown", (e) => {
  const k = e.key.toLowerCase();
  if (["arrowleft", "arrowright", " ", "arrowup", "arrowdown"].includes(k)) e.preventDefault();
  if (k === "arrowleft" || k === "a") keyboard.left = true;
  if (k === "arrowright" || k === "d") keyboard.right = true;
  if (e.repeat) return;
  if (k === "e" || (k === " " && state !== "playing")) startOrResume();
  else if (k === "p") pauseToggle();
  else if (k === "m") toggleSound();
  else if (k === " " && state === "playing") useShield();
});
window.addEventListener("keyup", (e) => {
  const k = e.key.toLowerCase();
  if (k === "arrowleft" || k === "a") keyboard.left = false;
  if (k === "arrowright" || k === "d") keyboard.right = false;
});
window.addEventListener("blur", () => {
  keyboard.left = false;
  keyboard.right = false;
});
for (const [id, dir] of [
  ["leftTouch", "left"],
  ["rightTouch", "right"],
]) {
  let el = document.getElementById(id);
  el.addEventListener("pointerdown", (e) => {
    e.preventDefault();
    keyboard[dir] = true;
    el.setPointerCapture(e.pointerId);
  });
  for (const event of ["pointerup", "pointercancel", "lostpointercapture"])
    el.addEventListener(event, () => (keyboard[dir] = false));
}
// ════════════════════════════════════════════════
// 5. CONTROL FÍSICO OPCIONAL (WEB SERIAL)
// ════════════════════════════════════════════════
// Recepción: cada línea de la IdeaBoard contiene exactamente b1,b2,b3,b4,pot.
// b1 funciona como la barra espaciadora: inicia el juego y, durante la partida, activa el escudo.
function processSerialLine(line) {
  const v = line.trim().split(",").map(Number);
  if (v.length !== 5 || v.some((n) => !Number.isFinite(n))) return;
  const buttons = v.slice(0, 4).map((x) => (x ? 1 : 0));
  boardX = (clamp(v[4], 0, 1000) / 1000) * (W - 100) + 50;
  if (buttons[0] && !prevButtons[0]) {
    if (state !== "playing") startOrResume();
    else useShield();
  }
  if (buttons[1] && !prevButtons[1]) useShield();
  if (buttons[2] && !prevButtons[2]) pauseToggle();
  if (buttons[3] && !prevButtons[3]) toggleSound();
  prevButtons = buttons;
}
async function connectSerial() {
  if (serialActive) {
    await disconnectSerial();
    return;
  }
  if (!("serial" in navigator)) {
    alert(
      "Tu navegador no ofrece Web Serial. Usá una versión reciente de Chrome o Edge en computadora, o jugá con el teclado.",
    );
    return;
  }
  try {
    serialPort = await navigator.serial.requestPort();
    await serialPort.open({ baudRate: 115200 });
    serialActive = true;
    boardConnected = true;
    ui.status.textContent = "IdeaBoard conectada · 115200 baudios";
    ui.status.dataset.connected = "true";
    ui.connect.textContent = "DESCONECTAR CONTROL";
    readSerial();
  } catch (err) {
    ui.status.textContent = "No se conectó: " + err.message;
    boardConnected = false;
    serialActive = false;
    ui.status.dataset.connected = "false";
  }
}
async function readSerial() {
  try {
    while (serialPort && serialPort.readable && serialActive) {
      serialReader = serialPort.readable.getReader();
      try {
        while (serialActive) {
          const { value, done } = await serialReader.read();
          if (done) break;
          if (!value) continue;
          serialBuffer += new TextDecoder().decode(value);
          let n;
          while ((n = serialBuffer.indexOf("\n")) >= 0) {
            processSerialLine(serialBuffer.slice(0, n));
            serialBuffer = serialBuffer.slice(n + 1);
          }
          if (serialBuffer.length > 512) serialBuffer = serialBuffer.slice(-100);
        }
      } finally {
        serialReader.releaseLock();
        serialReader = null;
      }
    }
  } catch (e) {
    ui.status.textContent = "Control desconectado: " + e.message;
  } finally {
    if (serialActive) await disconnectSerial();
  }
}
async function disconnectSerial() {
  serialActive = false;
  boardConnected = false;
  boardX = null;
  prevButtons = [0, 0, 0, 0];
  try {
    if (serialReader) await serialReader.cancel();
  } catch (e) {}
  try {
    if (serialPort) await serialPort.close();
  } catch (e) {}
  serialPort = null;
  ui.status.textContent = "Sin control conectado · teclado disponible";
  ui.status.dataset.connected = "false";
  ui.connect.textContent = "CONECTAR CONTROL";
}
ui.connect.onclick = connectSerial;
// ════════════════════════════════════════════════
// 6. DIBUJO: FONDO, OBJETOS Y TORTUGA
// ════════════════════════════════════════════════
// Pixel art del fondo marino. Se pinta con rectángulos de píxeles y geometría simple.
const fish = Array.from({ length: 15 }, (_, i) => ({
  x: rand(0, W),
  y: rand(42, 180),
  s: rand(0.5, 1.5),
  speed: rand(0.08, 0.28),
}));
const bubbles = Array.from({ length: 31 }, () => ({
  x: rand(0, W),
  y: rand(0, H),
  r: Math.floor(rand(1, 4)),
  speed: rand(0.2, 0.65),
}));
function ocean() {
  const bands = COLORES_MAR;
  for (let i = 0; i < bands.length; i++)
    rect(0, Math.floor((i * H) / bands.length), W, Math.ceil(H / bands.length) + 1, bands[i]);
  for (let i = 0; i < 8; i++) {
    let x = ((i * 74 + clock * 3) % 700) - 100;
    poly(
      [
        [x, 0],
        [x + 20, 0],
        [x + 85, H],
        [x + 51, H],
      ],
      i % 2 ? "#51dffd0c" : "#9cefff12",
    );
  }
  for (let i = 0; i < 34; i++) {
    let x = (i * 83 + 17) % W,
      y = 12 + ((i * 17) % 45);
    rect(x, y, 16 + (i % 3) * 7, 2 + (i % 2), "#42dcef33");
  }
  // Arrecife, rocas y corales al fondo
  poly(
    [
      [0, 126],
      [25, 137],
      [48, 124],
      [68, 158],
      [88, 160],
      [121, 181],
      [128, 224],
      [0, 224],
    ],
    "#075078",
  );
  poly(
    [
      [480, 115],
      [448, 133],
      [422, 145],
      [402, 170],
      [386, 164],
      [356, 217],
      [480, 225],
    ],
    "#06496e",
  );
  poly(
    [
      [0, 198],
      [48, 190],
      [91, 215],
      [128, 226],
      [178, 222],
      [230, 239],
      [0, 270],
    ],
    "#075982",
  );
  poly(
    [
      [480, 193],
      [446, 187],
      [402, 210],
      [368, 223],
      [312, 234],
      [480, 270],
    ],
    "#07557d",
  );
  for (let i = 0; i < 17; i++) {
    let x = i * 30,
      y = 220 + (i % 3) * 7;
    rect(x, y, 18, 2, "#1179a9");
  }
  for (const f of fish) {
    let x = (f.x + clock * f.speed * 17) % W;
    let y = f.y;
    poly(
      [
        [x - 5 * f.s, y],
        [x, y - 2 * f.s],
        [x + 6 * f.s, y],
        [x, y + 2 * f.s],
      ],
      "#063a64",
    );
    poly(
      [
        [x - 5 * f.s, y],
        [x - 9 * f.s, y - 3 * f.s],
        [x - 9 * f.s, y + 3 * f.s],
      ],
      "#063a64",
    );
  }
  for (let j = 0; j < 2; j++)
    for (let i = 0; i < 8; i++) {
      let x = j ? 440 + i * 8 : -10 + i * 7,
        base = 246 + (i % 4) * 6;
      let sway = Math.round(Math.sin(clock * 1.6 + i) * 4);
      rect(x, base - 18 - (i % 3) * 8, 3, 28, "#207c72");
      rect(x + sway, base - 31 - (i % 3) * 8, 3, 15, "#3ba17d");
    }
  coral(26, 244, "#e879a4");
  coral(454, 245, "#ec7cae");
  coral(61, 250, "#8a71c7");
  coral(418, 255, "#ff98ae");
  for (const b of bubbles) {
    let yy = (b.y - clock * b.speed * 18 + H * 20) % H;
    rect(b.x, yy, b.r + 2, b.r + 2, "#66dafa");
    rect(b.x + 1, yy + 1, b.r, b.r, "#187caf");
  }
}
function coral(x, y, color) {
  rect(x - 2, y - 25, 4, 27, color);
  rect(x - 14, y - 17, 4, 12, color);
  rect(x + 12, y - 20, 4, 17, color);
  rect(x - 11, y - 23, 12, 3, color);
  rect(x + 3, y - 29, 12, 3, color);
  rect(x - 17, y - 31, 3, 11, color);
  rect(x + 15, y - 36, 3, 18, color);
  rect(x - 6, y - 39, 4, 16, color);
}
// Las figuras y colores se editan en la sección 2 (DISEÑO EDITABLE).
function sprite(pattern, palette, x, y, s) {
  let width = pattern[0].length;
  for (let yy = 0; yy < pattern.length; yy++)
    for (let xx = 0; xx < width; xx++) {
      let ch = pattern[yy][xx];
      if (ch !== "." && palette[ch]) rect(x + xx * s, y + yy * s, s + 0.3, s + 0.3, palette[ch]);
    }
}
function bubbleBurst(x, y, c) {
  for (let i = 0; i < 11; i++)
    particles.push({ x, y, vx: rand(-2.6, 2.6), vy: rand(-3, 1.3), life: rand(10, 22), color: c });
}
function spawnThing() {
  let kind = Math.random() < PROB_BOLSA ? "bag" : "jelly";
  objects.push({
    kind,
    x: rand(45, W - 45),
    y: -22,
    size: rand(0.75, 1.12),
    phase: rand(0, 6),
    speed: rand(0.9, 1.18),
  });
}
function drawJelly(x, y, s) {
  sprite(
    MEDUSA,
    COLORES_MEDUSA,
    Math.round(x - (MEDUSA[0].length / 2) * s),
    Math.round(y - (MEDUSA.length / 2) * s),
    s,
  );
}
function drawBag(x, y, s) {
  sprite(
    BOLSA,
    COLORES_BOLSA,
    Math.round(x - (BOLSA[0].length / 2) * s),
    Math.round(y - (BOLSA.length / 2) * s),
    s,
  );
  rect(x + 3 * s, y + 2 * s, 2 * s, 3 * s, "#e2e7ea");
}
function dibujarCosas() {
  for (const ob of objects) {
    let scale = ob.size * (0.6 + (ob.y / H) * 0.65) * 1.15 * TAMANO_OBJETOS;
    let xx = ob.x + Math.sin(clock * 1.2 + ob.phase) * 8;
    if (ob.kind === "jelly") drawJelly(xx, ob.y, scale);
    else drawBag(xx, ob.y, scale);
  }
}
// Vista en primera persona: cabeza y caparazón parcial al fondo, aletas a los lados.
function dibujarTortuga() {
  ctx.save();
  let x = playerX;
  let bob = Math.sin(clock * 3.5) * 2;
  ctx.translate(Math.round(x), Math.round(bob));
  if (clock < invincible && Math.floor(clock * 12) % 2 === 0) ctx.globalAlpha = 0.5;
  // Aletas extendidas hacia las esquinas inferiores.
  poly(
    [
      [-19, 220],
      [-43, 225],
      [-81, 229],
      [-119, 239],
      [-158, 261],
      [-148, 270],
      [-91, 266],
      [-41, 258],
      [-15, 256],
    ],
    "#071f3c",
  );
  poly(
    [
      [19, 220],
      [43, 225],
      [81, 229],
      [119, 239],
      [158, 261],
      [148, 270],
      [91, 266],
      [41, 258],
      [15, 256],
    ],
    "#071f3c",
  );
  poly(
    [
      [-21, 226],
      [-50, 228],
      [-88, 236],
      [-121, 248],
      [-148, 262],
      [-107, 257],
      [-57, 252],
      [-18, 253],
    ],
    "#325579",
  );
  poly(
    [
      [21, 226],
      [50, 228],
      [88, 236],
      [121, 248],
      [148, 262],
      [107, 257],
      [57, 252],
      [18, 253],
    ],
    "#325579",
  );
  for (let sign of [-1, 1])
    for (let i = 0; i < 21; i++) {
      let ax = sign * randSeed(i * 7 + 3, 35, 146),
        ay = randSeed(i * 5 + 2, 240, 266);
      rect(ax, ay, 3 + (i % 3), 2 + (i % 2), "#86a4bd");
    }
  // Caparazón dorsal: placas longitudinales características.
  poly(
    [
      [-49, 270],
      [-39, 231],
      [-30, 216],
      [-18, 210],
      [18, 210],
      [30, 216],
      [39, 231],
      [49, 270],
    ],
    "#0b233d",
  );
  poly(
    [
      [-43, 270],
      [-34, 231],
      [-24, 218],
      [-13, 215],
      [13, 215],
      [24, 218],
      [34, 231],
      [43, 270],
    ],
    "#355778",
  );
  poly(
    [
      [-29, 270],
      [-22, 224],
      [-12, 216],
      [-5, 214],
      [5, 214],
      [12, 216],
      [22, 224],
      [29, 270],
    ],
    "#172f51",
  );
  poly(
    [
      [-3, 216],
      [-5, 270],
      [5, 270],
      [3, 216],
    ],
    "#91a5bb",
  );
  poly(
    [
      [-28, 228],
      [-22, 224],
      [-25, 270],
      [-30, 270],
    ],
    "#7896b1",
  );
  poly(
    [
      [28, 228],
      [22, 224],
      [25, 270],
      [30, 270],
    ],
    "#7896b1",
  );
  // Cabeza vista desde arriba en el centro.
  poly(
    [
      [-20, 223],
      [-18, 209],
      [-14, 199],
      [-9, 194],
      [9, 194],
      [14, 199],
      [18, 209],
      [20, 223],
    ],
    "#0c253f",
  );
  poly(
    [
      [-15, 220],
      [-13, 205],
      [-8, 199],
      [8, 199],
      [13, 205],
      [15, 220],
    ],
    "#3e6284",
  );
  rect(-8, 197, 16, 4, "#7295b3");
  for (let i = 0; i < 26; i++) {
    let xx = randSeed(i * 41, -40, 40),
      yy = randSeed(i * 11, 226, 265);
    if (Math.abs(xx) < 43) rect(xx, yy, 2 + (i % 3), 2, "#89a5ba");
  }
  if (clock < shieldUntil) {
    ctx.strokeStyle = "#6ffcf2";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.ellipse(0, 240, 164, 49, 0, Math.PI, Math.PI * 2);
    ctx.stroke();
    rect(-31, 181, 62, 3, "#96fff4");
  }
  ctx.restore();
}
function randSeed(seed, a, b) {
  let v = Math.sin(seed * 127.1 + 17.3) * 43758.5453;
  return Math.floor(a + (v - Math.floor(v)) * (b - a));
}
// ════════════════════════════════════════════════
// 7. LÓGICA: MOVIMIENTO, CHOQUES, PUNTOS Y NIVELES
// ════════════════════════════════════════════════
function update(dt) {
  clock += dt;
  let move = 0;
  if (keyboard.left) move -= 1;
  if (keyboard.right) move += 1;
  if (move !== 0) playerX = clamp(playerX + move * 185 * dt, 48, W - 48);
  else if (boardConnected && boardX !== null) playerX += (boardX - playerX) * Math.min(1, dt * 10);
  const speed = (VELOCIDAD_INICIAL + (level - 1) * 0.32) * 60 * dt;
  spawn -= dt;
  if (spawn <= 0) {
    spawnThing();
    spawn = rand(0.55, 1.05) / Math.pow(1.12, level - 1);
  }
  for (let i = objects.length - 1; i >= 0; i--) {
    let ob = objects[i];
    ob.y += speed * ob.speed;
    let xx = ob.x + Math.sin(clock * 1.2 + ob.phase) * 8;
    if (ob.y > 191 && ob.y < 248 && Math.abs(xx - playerX) < 27 + 8 * (TAMANO_OBJETOS - 1)) {
      objects.splice(i, 1);
      if (ob.kind === "jelly") {
        score += 10;
        beep(740, 0.075);
        bubbleBurst(xx, ob.y, "#ffa4df");
        let next = 1 + Math.floor(score / PUNTOS_POR_NIVEL);
        if (next > level) {
          level = next;
          beep(1050, 0.2);
          bubbleBurst(W / 2, 52, "#ffe876");
        }
      } else if (clock > invincible && clock > shieldUntil) {
        lives--;
        invincible = clock + 1.4;
        beep(190, 0.2, "sawtooth");
        bubbleBurst(xx, ob.y, "#c0d3e0");
        if (lives <= 0) {
          state = "over";
          overlay(
            "FIN DEL JUEGO",
            `Conseguiste ${score} puntos y alcanzaste el nivel ${level}. Las bolsas plásticas ponen en peligro a las tortugas baula.`,
            "VOLVER A JUGAR",
            "Cada bolsa evitada ayuda a proteger el océano.",
          );
        }
      }
      hud();
    } else if (ob.y > H + 24) objects.splice(i, 1);
  }
  for (let i = particles.length - 1; i >= 0; i--) {
    let p = particles[i];
    p.x += p.vx;
    p.y += p.vy;
    p.vy += 0.1;
    p.life -= 1;
    if (p.life <= 0) particles.splice(i, 1);
  }
}
// ════════════════════════════════════════════════
// 8. BUCLE PRINCIPAL: DIBUJAR Y REPETIR ~60 VECES POR SEGUNDO
// ════════════════════════════════════════════════
function draw() {
  ocean();
  dibujarCosas();
  for (const p of particles) rect(p.x, p.y, 3, 3, p.color);
  dibujarTortuga();
  if (state === "playing" && clock < shieldUntil)
    pxText("ESCUDO", W / 2, 38, 11, "#9dfbef", "center");
  if (state === "playing" && clock > shieldUntil && clock < shieldReady) {
    let s = Math.ceil(shieldReady - clock);
    pxText(`ESCUDO: ${s}s`, W - 10, 15, 9, "#b7edfa", "right");
  }
  if (state === "playing" && level > 1 && score % PUNTOS_POR_NIVEL < 10)
    pxText("¡NIVEL " + level + "!", W / 2, 64, 15, "#ffe56a", "center");
}
function loop(now) {
  let dt = Math.min(0.04, Math.max(0, (now - lastTime) / 1000 || 0.016));
  lastTime = now;
  if (state === "playing") update(dt);
  draw();
  requestAnimationFrame(loop);
}
hud();
requestAnimationFrame(loop);
