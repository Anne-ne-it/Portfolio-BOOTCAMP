//TARJETAS SECCION RECURSOS
//GRID/TARJETAS
const renderRecursosGrid = (items) => { //Renderiza la cuadrícula de las tarjetas segun la categoría
    const gridContainer = document.getElementById("recursosGrid"); //Contenedor del DOM donde se mostrarán las tarjetas

    if (!gridContainer) return; //Evita errores, solo funciona si encuentra el contenedor

    gridContainer.innerHTML = ""; //Limpia el contenido anterior antes de implementar las nuevas tarjetas

    items.forEach(item => { //Recorre cada objeto dentro del array items
        //Estructura HTML de la tarjeta usando un Template Literal
        const card = `
            <a href="${item.link}" target="_blank" class="recursos-link">
                <div class="recursos-card">
                    <h3>${item.titulo}</h3>
                    <p>${item.descripcion}</p>
                </div>
            </a>
        `;
        gridContainer.innerHTML += card; //Agrega la tarjeta creada al final del contenido del contenedor
    });
};

//TABS
export const renderRecursosTabs = (datos) => { //Para crear los botones tabs y gestionar los eventos
    const tabsContainer = document.getElementById("recursosTabs"); //Contenedor seleccionado
    const gridContainer = document.getElementById("recursosGrid"); //Contenedor seleccionado

    if (!tabsContainer || !gridContainer) return; //Comprueba que existen los dos contenedores para eviatr errores

    tabsContainer.innerHTML = ""; //Limpia botones anteriores para evitar duplicados

    datos.forEach((recurso, index) => { //Recorre el array de datos para crear una pestaña por cada categoría
        const tabBoton = document.createElement("button"); //Crea el elemento botón en el DOM
        tabBoton.textContent = recurso.categoria; //Nombre/texto del botón
        tabBoton.classList.add("recursos-tab"); //CSS para dar estilos

        if (index === 0) { // Configuración inicial
            tabBoton.classList.add("active"); //Marca el primer elemento como activo
            renderRecursosGrid(recurso.items); //Muestra los recursos de la categoría
        }

        tabBoton.addEventListener("click", () => { //Escucha el evento click en cada botón de cada pestaña
            document.querySelectorAll(".recursos-tab").forEach(btn => btn.classList.remove("active")); //Busca todos los botones restantes y les quita la clase active
            tabBoton.classList.add("active"); //Pone activo el botón donde se hace click
            renderRecursosGrid(recurso.items); //Actualiza los datos de recursos que muestra la cuadrícula
        });

        tabsContainer.appendChild(tabBoton); //Inserta el botón generado
    });
};