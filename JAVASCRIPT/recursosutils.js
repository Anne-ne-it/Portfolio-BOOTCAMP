//TARJETAS SECCION RECURSOS
//GRID/TARJETAS
const renderRecursosGrid = (items) => {
    const gridContainer = document.getElementById("recursosGrid");
    if (!gridContainer) return;

    gridContainer.innerHTML = ""; // Limpia el contenido anterior

    items.forEach(item => {
        const card = `
            <a href="${item.link}" target="_blank" class="recursos-link">
                <div class="recursos-card">
                    <h3>${item.titulo}</h3>
                    <p>${item.descripcion}</p>
                </div>
            </a>
        `;
        gridContainer.innerHTML += card;
    });
};

//TABS
export const renderRecursosTabs = (datos) => {
    const tabsContainer = document.getElementById("recursosTabs");
    const gridContainer = document.getElementById("recursosGrid");

    if (!tabsContainer || !gridContainer) return;

    tabsContainer.innerHTML = ""; // Limpia botones anteriores

    // Usamos 'datos' que es el parámetro que recibe la función
    datos.forEach((recurso, index) => {
        const tabBoton = document.createElement("button");
        tabBoton.textContent = recurso.categoria;
        tabBoton.classList.add("recursos-tab");

        // Configuración inicial: Activa la primera pestaña por defecto
        if (index === 0) {
            tabBoton.classList.add("active");
            renderRecursosGrid(recurso.items); // CORREGIDO: antes decía 'items'
        }

        tabBoton.addEventListener("click", () => {
            // Quitar clase activa de otros botones
            document.querySelectorAll(".recursos-tab").forEach(btn => btn.classList.remove("active"));
            // Añadir clase activa al actual
            tabBoton.classList.add("active");
            // Renderizar tarjetas de la categoría seleccionada
            renderRecursosGrid(recurso.items); // CORREGIDO: antes decía 'items'
        });

        tabsContainer.appendChild(tabBoton);
    });
};