document.addEventListener("DOMContentLoaded", function () {
    const menuItemsSidebar = document.querySelectorAll(".menu-item");
    const content = document.getElementById("content");

    menuItemsSidebar.forEach((item) => {
        item.addEventListener("click", function (event) {
            event.preventDefault();
            const page = this.getAttribute("data-page");
            updateContent(page);
        });
    });

    const menuItemsHeader = document.querySelectorAll(".menu-item-header");

    menuItemsHeader.forEach((item) => {
        item.addEventListener("click", function (event) {
            event.preventDefault();
            const page = this.getAttribute("data-page");
            updateContent(page);
        });
    });

    async function updateContent(page) {
        removeExistingStylesAndScripts();

        switch (page) {
            case "decodificador2x4":
                loadStyle("/Decodificadores/components.css");
                content.innerHTML = `
                    <div class="container">
                        <h1>Decodificador 2 para 4 com Portas Lógicas</h1>
                        <div class="input_Output">
                            <div class="inputs">
                                <button id="inputA">A: 0</button>
                                <button id="inputB">B: 0</button>
                            </div>
                            <div class="outputs">
                                <div class="light" id="S0">S0</div>
                                <div class="light" id="S1">S1</div>
                                <div class="light" id="S2">S2</div>
                                <div class="light" id="S3">S3</div>
                            </div>
                        </div>
                    </div>
                `;
                attachEventListeners2x4();
                break;

            case "decodificador3x8":
                loadStyle("/Decodificadores/styles 2.css");
                content.innerHTML = `
                    <div class="container">
                        <h1>Decodificador 3 para 8 com Portas Lógicas</h1>
                        <div class="input_Output">
                            <div class="inputs">
                                <button id="inputA">A: 0</button>
                                <button id="inputB">B: 0</button>
                                <button id="inputC">C: 0</button>
                            </div>
                            <div class="outputs">
                                ${Array.from({ length: 8 }, (_, i) => `<div class="light" id="S${i}">S${i}</div>`).join('')}
                            </div>
                        </div>
                    </div>
                `;
                attachEventListeners3x8();
                break;

            case "decodificador":
                content.innerHTML = `
                    <h2>Bem-vindo à Página do Decodificador</h2>
                    <p>Selecione um decodificador na barra lateral.</p>
                `;
                break;

            default:
                content.innerHTML = `
                    <h2>Bem-vindo à Página Inicial</h2>
                    <p>Conteúdo da página inicial.</p>
                `;
                break;
        }
    }

    function attachEventListeners2x4() {
        const inputA = document.getElementById('inputA');
        const inputB = document.getElementById('inputB');

        const luzes = {
            S0: document.getElementById('S0'),
            S1: document.getElementById('S1'),
            S2: document.getElementById('S2'),
            S3: document.getElementById('S3')
        };

        let A = 0;
        let B = 0;

        updateCircuit2x4(A, B, luzes); // Atualiza a luz já na carga inicial

        inputA.addEventListener('click', () => {
            A = A === 0 ? 1 : 0;
            inputA.textContent = `A: ${A}`;
            updateCircuit2x4(A, B, luzes);
        });

        inputB.addEventListener('click', () => {
            B = B === 0 ? 1 : 0;
            inputB.textContent = `B: ${B}`;
            updateCircuit2x4(A, B, luzes);
        });
    }

    function attachEventListeners3x8() {
        const inputA = document.getElementById('inputA');
        const inputB = document.getElementById('inputB');
        const inputC = document.getElementById('inputC');

        const luzes = {};
        for (let i = 0; i < 8; i++) {
            luzes[`S${i}`] = document.getElementById(`S${i}`);
        }

        let A = 0;
        let B = 0;
        let C = 0;

        updateCircuit3x8(A, B, C, luzes); // Atualiza a luz já na carga inicial

        inputA.addEventListener('click', () => {
            A = A === 0 ? 1 : 0;
            inputA.textContent = `A: ${A}`;
            updateCircuit3x8(A, B, C, luzes);
        });

        inputB.addEventListener('click', () => {
            B = B === 0 ? 1 : 0;
            inputB.textContent = `B: ${B}`;
            updateCircuit3x8(A, B, C, luzes);
        });

        inputC.addEventListener('click', () => {
            C = C === 0 ? 1 : 0;
            inputC.textContent = `C: ${C}`;
            updateCircuit3x8(A, B, C, luzes);
        });
    }

    function updateCircuit2x4(A, B, luzes) {
        Object.values(luzes).forEach(light => light.classList.remove('active'));

        const index = (A << 1) | B;
        if (luzes[`S${index}`]) luzes[`S${index}`].classList.add('active');
    }

    function updateCircuit3x8(A, B, C, luzes) {
        Object.values(luzes).forEach(light => light.classList.remove('active'));

        const index = (A << 2) | (B << 1) | C;
        if (luzes[`S${index}`]) luzes[`S${index}`].classList.add('active');
    }

    function loadStyle(href) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = href;
        link.className = "dynamic-style";
        document.head.appendChild(link);
    }

    function removeExistingStylesAndScripts() {
        document.querySelectorAll(".dynamic-style").forEach(e => e.remove());
    }
});
