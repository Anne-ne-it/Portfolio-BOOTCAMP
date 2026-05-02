//TARJETAS SECCION CHEATSHEETS
export const renderCheatsheets = (datos) => { //Función encargada de pintar los datos en el DOM
    const cheatsheetsContainer = document.getElementById("cheatsheets-container"); //Selecciona el contenedor donde se pinta
    
    //Inyecta el contenido generado dentro del contenedor
    //.map() recorre cada objeto del array y devuelve un bloque de HTML
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

//.join('') es fundamental para que no aparezcan comas separando los elementos en el HTML