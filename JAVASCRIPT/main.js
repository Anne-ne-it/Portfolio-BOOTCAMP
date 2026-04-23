//MENU NAVEGACION Y FOOTER

import { menuNavegacion, footer } from "./templates/template.js";

document.addEventListener("DOMContentLoaded", () => {
    const mimenu = document.getElementById("menuNavegacion");
    const mifooter = document.getElementById("pie-de-pagina");

    if (mimenu) {
        mimenu.innerHTML = menuNavegacion();
    }
    if (mifooter) {
        mifooter.innerHTML = footer();
    }
});


//SKILLS 
import { skills } from "./data.js";
import { renderSkills } from "./utils.js";

document.addEventListener("DOMContentLoaded", () => {
    renderSkills(skills);
});



//MODO OSCURO
import { initTheme } from "./utils.js";

document.addEventListener("DOMContentLoaded", () => {
    initTheme();
});