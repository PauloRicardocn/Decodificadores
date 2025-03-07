// script.js
const inputA = document.getElementById("inputA");
const inputB = document.getElementById("inputB");

const luzes = {
  S0: document.getElementById("S0"),
  S1: document.getElementById("S1"),
  S2: document.getElementById("S2"),
  S3: document.getElementById("S3"),
};

// mapeamento das imagens para cada saída
const imagens = {
    "00": "images/saida_00.png",
    "01": "images/saida_01.png",
    "10": "images/saida_10.png",
    "11": "images/saida_11.png"
};

let A = 0;
let B = 0;

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

function updateCircuit() {
  // Resetar todas as luzes
  Object.values(luzes).forEach((light) => light.classList.remove("active"));

  // Calcular saídas
  const notA = A === 0 ? 1 : 0;
  const notB = B === 0 ? 1 : 0;

  const S0 = notA && notB;
  const S1 = notA && B;
  const S2 = A && notB;
  const S3 = A && B;

  // Atualizar luzes
  if (S0) luzes.S0.classList.add("active");
  if (S1) luzes.S1.classList.add("active");
  if (S2) luzes.S2.classList.add("active");
  if (S3) luzes.S3.classList.add("active");

  // atualizar a imagem correspondente à saída
  const chaveSaida = `${A}${B}`;
  circuitImage.src = imagens[chaveSaida];
}
