// Aguarda o carregamento completo do DOM antes de executar o código
document.addEventListener("DOMContentLoaded", () => {

    // Faz uma requisição para buscar o arquivo JSON com os dados das habilidades
    fetch("./assets/data/data.json")
        .then(response => response.json()) // Converte a resposta para formato JSON
        .then(data => {
            // Seleciona o container onde as habilidades serão adicionadas
            const container = document.getElementById("skills-container");

            // Itera sobre cada item (habilidade) do array de dados
            data.forEach(skill => {
                // Cria um novo elemento <article> para cada habilidade
                const skillElement = document.createElement("article");

                // Adiciona a classe "skill" ao elemento criado (pode ser usada para estilização no CSS)
                skillElement.classList.add("skill");

                // Define o conteúdo HTML da habilidade com imagem e texto
                skillElement.innerHTML = `
                    <img class="icons" src="${skill.icon}" alt="${skill.name}">
                    <p>${skill.name} - ${skill.level}</p>
                `;

                // Adiciona o elemento da habilidade ao container principal na página
                container.appendChild(skillElement);
            });
        })
        // Captura e exibe erros no console caso haja falha ao carregar os dados
        .catch(error => console.error("Erro ao carregar habilidades: ", error));
});
