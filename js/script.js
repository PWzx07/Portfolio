document.addEventListener("DOMContentLoaded", () =>{
    fetch("./assets/data/data.json")
    .then(response => response.json())
    .then(data =>{
        const container = document.getElementById("skills-container");

        data.forEach(skill =>{
            const skillElement = document.createElement("article");
            skillElement.classList.add("skill");

            skillElement.innerHTML = `
                <img class="icons" src="${skill.icon}" alt="${skill.name}">
                <p>${skill.name} - ${skill.level}</p>
            `;

            container.appendChild(skillElement);
        });
    })
    .catch(error => console.error("Erro ao carregar habilidades: ", error));
});