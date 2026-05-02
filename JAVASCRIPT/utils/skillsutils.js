//TARJETAS SECCION SKILLS
export const renderSkills = (datos) => { //Función encargada de pintar las habilidades en el DOM
    const container = document.getElementById("skills-container"); //Selecciona el contenedor donde se pinta

    //Inyecta el contenido generado dentro del contenedor
    //.map() recorre cada objeto del array y devuelve un bloque de HTML
    container.innerHTML = datos.map(skill => `
        <div class="skill-card" style="border-left: 4px solid ${skill.color};">
          <img src="${skill.icon}" alt="${skill.titulo}" class="skill-icon">
          <h4>${skill.titulo}</h4>
          <span class="skill-nivel">${skill.nivel}</span>
          <p class="skill-descripcion">${skill.descripcion}</p>
          <div class="skill-tags">
            ${skill.tags.map(tag => `<span class="tags">${tag}</span>`).join('')}
           </div>
        </div>
    `).join('');
};

//El segundo .map() Recorre el array de tags dentro de cada skill
//.join('') es fundamental para que no aparezcan comas separando los elementos en el HTML