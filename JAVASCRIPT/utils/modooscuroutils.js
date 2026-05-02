// MODO OSCURO
export const initTheme = () => {
  const themeBtn = document.getElementById('theme-toggle'); //Selecciona el botón para el cambio de tema
  const themeIcon = document.getElementById('theme-icon'); //Selecciona contenedor del icono
  const body = document.body; //Selecciona el body para el cambio de tema

  if (localStorage.getItem('theme') === 'dark') { //Al cargar, revisar si el usuario ya tenía el modo oscuro activado
    body.classList.add('dark-mode'); //Si existe aplica el CSS para modo oscuro
    themeIcon.textContent = '☀️'; //Se pone un sol en el botón para volver al modo claro
  }

  
  themeBtn.addEventListener('click', () => { //Escuchar el click en el botón e inicia el evento
    body.classList.toggle('dark-mode'); //Cambia de clase
    
    if (body.classList.contains('dark-mode')) { //Comprueba si despúes del click se queda activo el modo oscuro
      localStorage.setItem('theme', 'dark'); //Guarda la elección y cambia el icono
      themeIcon.textContent = '☀️'; //Actualiza el icono a un sol
    } else { //Si no ...
      localStorage.setItem('theme', 'light'); //Si no tiene la calse se guarda como modo claro
      themeIcon.textContent = '🌙'; //Actializa el icono a una luna
    }
  });
};