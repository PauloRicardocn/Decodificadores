const inputC = document.getElementById("inputA"); // C
const inputB = document.getElementById("inputB"); // B
const inputA = document.getElementById("inputC"); // A
const inputE = document.getElementById("inputE"); // Enable

const luzes = {
  S0: document.getElementById("S0"),
  S1: document.getElementById("S1"),
  S2: document.getElementById("S2"),
  S3: document.getElementById("S3"),
  S4: document.getElementById("S4"),
  S5: document.getElementById("S5"),
  S6: document.getElementById("S6"),
  S7: document.getElementById("S7"),
};

// Mapeamento das imagens para cada saída
const imagens = {
  "0000": "images/saida_000_disable.png", // E = 0, qualquer C, B e A -> saída desativada
  "0001": "images/saida_100_disable.png",
  "0010": "images/saida_010_disable.png",
  "0011": "images/saida_110_disable.png",
  "0100": "images/saida_001_disable.png",
  "0101": "images/saida_101_disable.png",
  "0110": "images/saida_011_disable.png",
  "0111": "images/saida_111_disable.png",
  "1000": "images/saida_000_enable.png",
  "1001": "images/saida_001_enable.png",
  "1010": "images/saida_010_enable.png",
  "1011": "images/saida_011_enable.png",
  "1100": "images/saida_100_enable.png",
  "1101": "images/saida_101_enable.png",
  "1110": "images/saida_110_enable.png",
  "1111": "images/saida_111_enable.png",
};

let C = 0;
let B = 0;
let A = 0;
let E = 0;

inputC.addEventListener("click", () => {
  C = C === 0 ? 1 : 0;
  inputC.textContent = `C: ${C}`;
  updateCircuit();
});

inputB.addEventListener("click", () => {
  B = B === 0 ? 1 : 0;
  inputB.textContent = `B: ${B}`;
  updateCircuit();
});

inputA.addEventListener("click", () => {
  A = A === 0 ? 1 : 0;
  inputA.textContent = `A: ${A}`;
  updateCircuit();
});

inputE.addEventListener("click", () => {
  E = E === 0 ? 1 : 0;
  inputE.textContent = `E: ${E}`;
  updateCircuit();
});

function updateCircuit() {
  // Resetar todas as luzes
  Object.values(luzes).forEach((light) => light.classList.remove("active"));

  const chaveSaida = `${E}${C}${B}${A}`;

  if (E === 0) {
    circuitImage.src = imagens[chaveSaida];
    return;
  }

  // Se Enable for 1, calcular saídas normalmente
  const notC = C === 0 ? 1 : 0;
  const notB = B === 0 ? 1 : 0;
  const notA = A === 0 ? 1 : 0;

  const S0 = notC && notB && notA;
  const S1 = notC && notB && A;
  const S2 = notC && B && notA;
  const S3 = notC && B && A;
  const S4 = C && notB && notA;
  const S5 = C && notB && A;
  const S6 = C && B && notA;
  const S7 = C && B && A;

  if (S0) luzes.S0.classList.add("active");
  if (S1) luzes.S1.classList.add("active");
  if (S2) luzes.S2.classList.add("active");
  if (S3) luzes.S3.classList.add("active");
  if (S4) luzes.S4.classList.add("active");
  if (S5) luzes.S5.classList.add("active");
  if (S6) luzes.S6.classList.add("active");
  if (S7) luzes.S7.classList.add("active");

  // Atualizar a imagem correspondente à saída
  circuitImage.src = imagens[chaveSaida];
}
