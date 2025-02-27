document.addEventListener("DOMContentLoaded", function () {
    // Sidebar
    const menuItemsSidebar = document.querySelectorAll(".menu-item");
    const content = document.getElementById("content");

    menuItemsSidebar.forEach((item) => {
        item.addEventListener("click", function (event) {
            event.preventDefault();
            const page = this.getAttribute("data-page"); // Usando "this" em vez de "event.target"
            updateContent(page);
        });
    });

    // Header
    const menuItemsHeader = document.querySelectorAll(".menu-item-header");

    menuItemsHeader.forEach((item) => {
        item.addEventListener("click", function (event) {
            event.preventDefault();
            const page = this.getAttribute("data-page"); // Usando "this" em vez de "event.target"
            updateContent(page);
        });
    });

    // Função para atualizar o conteúdo com base na página selecionada
    function updateContent(page) {
        switch (page) {
            case "decodificador2x4":
                content.innerHTML = `
                    <!DOCTYPE html>
                    <html lang="pt-BR">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Decodificador 2 para 4 com Portas Lógicas</title>
                        <link rel="stylesheet" href="/Decodificadores/components.css">
                    </head>
                    <body>
                        <div class="container">
                            <h1>Decodificador 2 para 4 com Portas Lógicas</h1>
                            
                            <div class="input_Output">
                                <!-- Entradas -->
                                <div class="inputs">
                                    <button id="inputA">A: 0</button>
                                    <button id="inputB">B: 0</button>
                                </div>
    
                                <!-- Saídas (Luzes) -->
                                <div class="outputs">
                                    <div class="light" id="S0">S0</div>
                                    <div class="light" id="S1">S1</div>
                                    <div class="light" id="S2">S2</div>
                                    <div class="light" id="S3">S3</div>
                                </div>
                            </div>
                        </div>
                    </body>
                    </html>
                `;
                loadScript("Decodificadores/script 1.js"); // Carrega o script 1.js
                break;
    
            case "decodificador3x8":
                content.innerHTML = `
                    <!DOCTYPE html>
                    <html lang="pt-BR">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Decodificador 3 para 8 com Portas Lógicas</title>
                        <link rel="stylesheet" href="/Decodificadores/styles 2.css">
                    </head>
                    <body>
                        <div class="container">
                            <h1>Decodificador 3 para 8 com Portas Lógicas</h1>
                            
                            <div class="input_Output">
                                <!-- Entradas -->
                                <div class="inputs">
                                    <button id="inputA">A: 0</button>
                                    <button id="inputB">B: 0</button>
                                    <button id="inputC">C: 0</button>
                                </div>
    
                                <!-- Saídas (Luzes) -->
                                <div class="outputs">
                                    <div class="light" id="S0">S0</div>
                                    <div class="light" id="S1">S1</div>
                                    <div class="light" id="S2">S2</div>
                                    <div class="light" id="S3">S3</div>
                                    <div class="light" id="S4">S4</div>
                                    <div class="light" id="S5">S5</div>
                                    <div class="light" id="S6">S6</div>
                                    <div class="light" id="S7">S7</div>
                                </div>
                            </div>
                        </div>
                    </body>
                    </html>
                `;
                loadScript("/Decodificadores/script 2.js"); // Carrega o script 2.js
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
    
    // Função para carregar scripts dinamicamente
    function loadScript(src) {
        return new Promise((resolve, reject) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = resolve;
            script.onerror = reject;
            document.body.appendChild(script);
        });
    }
})