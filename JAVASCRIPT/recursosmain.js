//RECURSOS
import { recursos } from "./recursosdata.js";
import { renderRecursosTabs } from "./recursosutils.js";

document.addEventListener("DOMContentLoaded", () => {
    // Solo ejecutamos si el contenedor existe en el HTML actual
    if (document.getElementById("recursosTabs")) {
        renderRecursosTabs(recursos); // Pasamos el array importado de data.js
    }
});
