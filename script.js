document.addEventListener("DOMContentLoaded", function() {
    // Sidebar
    const menuItemsSidebar = document.querySelectorAll(".menu-item");
    const contentSidebar = document.getElementById("content");

    menuItemsSidebar.forEach(item => {
        item.addEventListener("click", function(event) {
            event.preventDefault();
            const page = event.target.getAttribute("data-page");
            updateContentSidebar(page);
        });
    });

    function updateContentSidebar(page) {
        switch(page) {
            case "decodificador2x4":
                contentSidebar.innerHTML = "<h2>Bem-vindo à Página do Decodificador 2:4</h2>";
                break;
            case "decodificador3x8":
                contentSidebar.innerHTML = "<h2>Bem-vindo à Página do Decodificador 3:8</h2>";
                break;
            default:
                contentSidebar.innerHTML = "<h2>Bem-vindo à Página Inicial</h2><p>Conteúdo da página inicial.</p>";
        }
    }

    // Header
    const menuItemsHeader = document.querySelectorAll(".menu-item-header");
    const contentHeader = document.getElementById("menu-item-header");

    menuItemsHeader.forEach(item => {
        item.addEventListener("click", function(event) {
            event.preventDefault();
            const page = event.target.getAttribute("data-page");
            updateContentHeader(page);
        });
    });

    function updateContentHeader(page) {
        switch(page) {
            case "decodificador":
                contentHeader.innerHTML = "<h2>Bem-vindo à Página do Decodificador 2:4</h2>";
                break;
            default:
                contentHeader.innerHTML = "<h2>Bem-vindo à Página do Decodificador 2:4</h2>";
        }
    }
});
