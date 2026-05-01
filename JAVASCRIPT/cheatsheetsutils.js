//TARJETAS SECCION CHEATSHEETS
export const renderCheatsheets = (datos) => {
    const cheatsheetsContainer = document.getElementById("cheatsheets-container");
    cheatsheetsContainer.innerHTML = datos.map(sheet => `
      <a href="${sheet.link}" class="cheatsheets-card">
        <div class="cheatsheets-icon-wrapper">
          <img src="${sheet.icon}" alt="${sheet.titulo}" class="cheatsheets-icon">
        </div>
        <h4>${sheet.titulo}</h4>
        <p>${sheet.descripcion}</p>
      </a>
    `).join('');
}
