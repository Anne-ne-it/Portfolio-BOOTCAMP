// MENU NAVEGACION Y FOOTER
import { menuNavegacion, footer } from "./templates/template.js"; //Importa la información desde template, en la carpeta templates

document.addEventListener("DOMContentLoaded", () => { //Espera a que cargue el HTML para insertar el contenido
  //Selecciona los contenedores vacíos donde se pintará
  const mimenu = document.getElementById("menuNavegacion");
  const mifooter = document.getElementById("pie-de-pagina");

    if (mimenu) { //Si existe el contenedor inserta el HTML y activa las funciones 
        mimenu.innerHTML = menuNavegacion(); //Inserta el HTML del menú
        initMenu(); //Activa el botón del modo hamburguesa
    }
    
    if (mifooter) { //si existe contenedor inserta el HTML y activa las funciones
        mifooter.innerHTML = footer(); //Inserta el HTML del footer
    }
});

//LOGICA PARA EL MENÚ HAMBURGUESA
const initMenu = () => {
  const botonHamb = document.getElementById('hamburguesa'); //El icono de las rayas
  const menuLista = document.querySelector('.menuNavegacion ul'); //La lista de enlaces para la navegación

  if (botonHamb && menuLista) { //Solo se ejecuta si ambos elementos existen en la página
    botonHamb.addEventListener('click', () => { //Al hacer click se abre o se cierra
      menuLista.classList.toggle('open'); //CSS para mostar/ocultar la lista
      botonHamb.classList.toggle('active'); //CSS para el icono
    });

    //Cierrar el menú al hacer clic en un enlace útil en móviles
    const enlaces = menuLista.querySelectorAll('a'); //Para seleccionar los links del menú
    enlaces.forEach(enlace => { //Recorre (itera) todos los enlaces que encuentra en la lista
      enlace.addEventListener('click', () => { //Para detectar el click
        menuLista.classList.remove('open'); //Cambia la clase, el menú se oculta
        botonHamb.classList.remove('active'); //Quita el estado activo del menú hamburguesa
      });
    });
  }
};


//MODO OSCURO
import { initTheme } from "./utils/modooscuroutils.js"; //Importa la configuración desde utils

document.addEventListener("DOMContentLoaded", () => { //Inicia el tema cuando el DOM está listo
    initTheme(); //Revisa el localStorage y aplica el tema guardado
});




//SKILLS 
import { skills } from "./data/skillsdata.js"; //Importa los datos de recursos desde data
import { renderSkills } from "./utils/skillsutils.js"; //Importa la función que crea las tarjetas

document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("skills")) { //Solo empieza si encuentra un id:skills, evita errores
        renderSkills(skills); //Hace que las tarjetas se vean en la pantalla
    }
});




//CHEATSHEETS
import { cheatsheets } from "./data/cheatsheetsdata.js"; //Importa la información desde el archivo de data
import { renderCheatsheets } from "./utils/cheatsheetsutils.js"; //Importa la función para pintar el HTML desde utils

document.addEventListener("DOMContentLoaded", () => { //Empieza al cargar HTML por el navegador
    if (document.getElementById("cheatsheets")) { //Solo empieza si encuentra un id:cheatsheets, evita errores
        renderCheatsheets(cheatsheets); //Hace que las tarjetas se vean en la pantalla
    }
});




//RECURSOS
import { recursos } from "./data/recursosdata.js"; //Importa los datos de recursos desde data
import { renderRecursosTabs } from "./utils/recursosutils.js"; //Importa la función que crea las tabs

document.addEventListener("DOMContentLoaded", () => { //Empieza al cargar HTML por el navegador
    if (document.getElementById("recursosTabs")) { //Solo empieza si encuentra un id:recursosTabs, evita errores
        renderRecursosTabs(recursos); //Hace que se vean en la pantalla
    }
});




//CLIMA API
import getWeather from "./utils/weather.js"; //Importa la función para obtener el clima desde utils

document.addEventListener("DOMContentLoaded", () => { //Empieza al cargar HTML por el navegador
    getWeather(); //Hace que se muestre el clima en la pantalla
});
