document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll(".menu-item");
    const headerTitle = document.getElementById("header-title");
    const content = document.getElementById("content");

    menuItems.forEach(item => {
        item.addEventListener("click", function(event) {
            event.preventDefault();
            const page = event.target.getAttribute("data-page");
            updateContent(page);
        });
    });

    function updateContent(page) {
        switch(page) {
            case "home":
                headerTitle.textContent = "Página Inicial";
                content.innerHTML = "<h2>Bem-vindo à Página Inicial</h2><p>Conteúdo da página inicial.</p>";
                break;
            case "about":
                headerTitle.textContent = "Sobre";
                content.innerHTML = "<h2>Sobre nós</h2><p>Conteúdo sobre a empresa.</p>";
                break;
            case "services":
                headerTitle.textContent = "Serviços";
                content.innerHTML = "<h2>Serviços</h2><p>Conteúdo sobre os serviços oferecidos.</p>";
                break;
            case "contact":
                headerTitle.textContent = "Contato";
                content.innerHTML = "<h2>Entre em Contato</h2><p>Conteúdo de contato.</p>";
                break;
            default:
                headerTitle.textContent = "Página Inicial";
                content.innerHTML = "<h2>Bem-vindo à Página Inicial</h2><p>Conteúdo da página inicial.</p>";
        }
    }
});
