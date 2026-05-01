//TARJETAS SECCION SKILLS
export const renderSkills = (datos) => {
    const container = document.getElementById("skills-container");
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
