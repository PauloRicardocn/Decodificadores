const inputA = document.getElementById("inputA");
const inputB = document.getElementById("inputB");
const inputE = document.getElementById("inputE");

const luzes = {
  S0: document.getElementById("S0"),
  S1: document.getElementById("S1"),
  S2: document.getElementById("S2"),
  S3: document.getElementById("S3"),
};

// Mapeamento das imagens para cada saída
const imagens = {
  "000": "images/saida_00_disable.png", // E = 0, qualquer A e B -> saída desativada
  "001": "images/saida_01_disable.png",
  "010": "images/saida_10_disable.png",
  "011": "images/saida_11_disable.png",
  100: "images/saida_00_enable.png",
  101: "images/saida_01_enable.png",
  110: "images/saida_10_enable.png",
  111: "images/saida_11_enable.png",
};

let A = 0;
let B = 0;
let E = 0;

inputA.addEventListener("click", () => {
  A = A === 0 ? 1 : 0;
  inputA.textContent = `A: ${A}`;
  updateCircuit();
});

inputB.addEventListener("click", () => {
  B = B === 0 ? 1 : 0;
  inputB.textContent = `B: ${B}`;
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

  const chaveSaida = `${E}${A}${B}`;

  if (E === 0) {
    // Se Enable for 0, apenas muda a imagem, mas mantém as saídas desativadas
    circuitImage.src = imagens[`${E}${A}${B}`];
    return;
  }

  // Se Enable for 1, calcular saídas normalmente
  const notA = A === 0 ? 1 : 0;
  const notB = B === 0 ? 1 : 0;

  const S0 = notA && notB;
  const S1 = notA && B;
  const S2 = A && notB;
  const S3 = A && B;

  // Atualizar luzes apenas quando Enable estiver ativo
  if (S0) luzes.S0.classList.add("active");
  if (S1) luzes.S1.classList.add("active");
  if (S2) luzes.S2.classList.add("active");
  if (S3) luzes.S3.classList.add("active");

  // Atualizar a imagem correspondente à saída
  circuitImage.src = imagens[chaveSaida];
}
