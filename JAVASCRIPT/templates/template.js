//MENU NAVEGACION
export const menuNavegacion = () => {
    //Detectamos si estamos en la raíz o dentro de la carpeta HTML
    //Esto evita que las rutas se rompan al navegar
    const isRoot = window.location.pathname.endsWith('index.html') || window.location.pathname === '/';
    const pathPrefix = isRoot ? './HTML/' : './';
    const indexPrefix = isRoot ? './' : '../';

    return `
    <nav class="menuNavegacion">
        <a href="${indexPrefix}index.html" class="logo"><strong>AA</strong></a>
          <ul>
            <li><a href="${pathPrefix}about.html">About</a></li>
            <li><a href="${indexPrefix}index.html#skills">Skills</a></li>
            <li><a href="${indexPrefix}index.html#cheatsheets">Cheatsheets</a></li>
            <li><a href="${pathPrefix}recuersos.html">Recursos</a></li>
            <li><a href="${pathPrefix}contacto.html">Contacto</a></li>
          </ul>

        <button class="hamburguesa" id="hamburguesa" aria-label="hamburguesa">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <button id="theme-toggle" class="theme-btn">
        <span id="theme-icon">🌙</span>
        </button>
    </nav>`;
}
    
//FOOTER
export const footer = () => {
    return `
               <ul class="botones-pie">
          <li><a href="https://www.instagram.com/    annemoo_/?utm_source=ig_embed&ig_rid=f74d52cc-d276-4a1f-a97a-43123a3be1d2&ig_mid=ECF20A95-5C0A-47FB-A9F1-EBD770145E6B" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a href="https://www.linkedin.com/in/ane-amiano-ibero-b6231528b/?isSelfProfile=true" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://github.com/Anne-ne-it" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        </ul>
        <p>Hecho con <span class="corazon">❤</span> por Nemo</p>
        <p>2026&copy; Ane Amiano Ibero - The Bridge student</p>
    `;
};
