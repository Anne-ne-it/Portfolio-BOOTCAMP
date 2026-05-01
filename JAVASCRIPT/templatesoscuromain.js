// MENU NAVEGACION Y FOOTER
import { menuNavegacion, footer } from "./templates/template.js";

document.addEventListener("DOMContentLoaded", () => {
    const mimenu = document.getElementById("menuNavegacion");
    const mifooter = document.getElementById("pie-de-pagina");

    if (mimenu) {
        mimenu.innerHTML = menuNavegacion();
        //Llamamos a la lógica justo después de pintar el menú
        initMenu(); 
    }
    
    if (mifooter) {
        mifooter.innerHTML = footer();
    }
});

// definimos la lógica para el menú hamburguesa
const initMenu = () => {
  const botonHamb = document.getElementById('hamburguesa');
  const menuLista = document.querySelector('.menuNavegacion ul');

  if (botonHamb && menuLista) {
    botonHamb.addEventListener('click', () => {
      // Añadimos/quitamos la clase
      menuLista.classList.toggle('open');
      botonHamb.classList.toggle('active');
    });

    // Cerrar el menú al hacer clic en un enlace útil en móviles
    const enlaces = menuLista.querySelectorAll('a');
    enlaces.forEach(enlace => {
      enlace.addEventListener('click', () => {
        menuLista.classList.remove('open');
        botonHamb.classList.remove('active');
      });
    });
  }
};

// Llama a esta función después de insertar el menú en el DOM
initMenu();




//MODO OSCURO
import { initTheme } from "./modooscuroutils.js";

document.addEventListener("DOMContentLoaded", () => {
    initTheme();
});