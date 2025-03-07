// script.js
const inputA = document.getElementById('inputA');
const inputB = document.getElementById('inputB');
const inputC = document.getElementById('inputC');
const circuitImage = document.getElementById('circuitImage');

const luzes = {
    S0: document.getElementById('S0'),
    S1: document.getElementById('S1'),
    S2: document.getElementById('S2'),
    S3: document.getElementById('S3'),
    S4: document.getElementById('S4'),
    S5: document.getElementById('S5'),
    S6: document.getElementById('S6'),
    S7: document.getElementById('S7')
};

let A = 0;
let B = 0;
let C = 0;

inputA.addEventListener('click', () => {
    A = A === 0 ? 1 : 0;
    inputA.textContent = `A: ${A}`;
    updateCircuit();
});

inputB.addEventListener('click', () => {
    B = B === 0 ? 1 : 0;
    inputB.textContent = `B: ${B}`;
    updateCircuit();
});

inputC.addEventListener('click', () => {
    C = C === 0 ? 1 : 0;
    inputC.textContent = `C: ${C}`;
    updateCircuit();
});

function updateCircuit() {
    // Resetar todas as luzes
    Object.values(luzes).forEach(light => light.classList.remove('active'));

    // Criar a chave binária (exemplo: "010")
    const key = `${A}${B}${C}`;

    // Tabela de mapeamento de imagens
    const imageMap = {
        "000": "images/saida_000.png",
        "001": "images/saida_001.png",
        "010": "images/saida_010.png",
        "011": "images/saida_011.png",
        "100": "images/saida_100.png",
        "101": "images/saida_101.png",
        "110": "images/saida_110.png",
        "111": "images/saida_111.png"
    };

    // Atualiza a imagem do circuito
    circuitImage.src = imageMap[key];


    if (A === 0  && B===0 && C=== 0) {
        luzes.S0.classList.add('active')
        return;
    };

    // Calcular saídas
    const notA = A === 0 ? 1 : 0;
    const notB = B === 0 ? 1 : 0;
    const notC = C === 0 ? 1 : 0;

    const S0 = notA && notB && notC ? 1 : 0;
    const S1 = notA && notB && C ? 1 : 0;
    const S2 = notA && B && notC ? 1 : 0;
    const S3 = notA && B && C ? 1 : 0;
    const S4 = A && notB && notC ? 1 : 0;
    const S5 = A && notB && C ? 1: 0;
    const S6 = A && B && notC ? 1: 0;
    const S7= A && B && C ? 1: 0;

    // Atualizar luzes
    if (S0) luzes.S0.classList.add('active');
    if (S1) luzes.S1.classList.add('active');
    if (S2) luzes.S2.classList.add('active');
    if (S3) luzes.S3.classList.add('active');
    if (S4) luzes.S4.classList.add('active');
    if (S5) luzes.S5.classList.add('active');
    if (S6) luzes.S6.classList.add('active');
    if (S7) luzes.S7.classList.add('active');
}