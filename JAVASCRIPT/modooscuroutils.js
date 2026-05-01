// MODO OSCURO
export const initTheme = () => {
  const themeBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const body = document.body;

  // Al cargar, revisar si el usuario ya tenía el modo oscuro activado
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    themeIcon.textContent = '☀️'; // Sol para volver al claro
  }

  //Escuchar el click en el botón
  themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Guardar la elección y cambiar el icono
    if (body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
      themeIcon.textContent = '☀️';
    } else {
      localStorage.setItem('theme', 'light');
      themeIcon.textContent = '🌙';
    }
  });
};