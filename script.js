// Seleção de elementos do DOM
const idInput = document.getElementById('idInput');
const drawBtn = document.getElementById('drawBtn');
const feedback = document.getElementById('feedback');
const resultContainer = document.getElementById('result');

// Array para guardar os IDs que já saíram
const idsSorteados = [];

// Requisito 3: Interação por eventos do DOM
drawBtn.addEventListener('click', () => {
    // Pega o valor do input, caso o usuário tenha digitado um ID específico
    const inputVal = idInput.value.trim();
    buscarPersonagem(inputVal);
});

// Requisito 5: Utilização de async/await
async function buscarPersonagem(idDigitado) {
    let idFinal = idDigitado;

    // Se o usuário não digitou nada, a gente sorteia um número
    if (!idFinal) {
        // Verifica se já sorteamos todos os 825 personagens
        if (idsSorteados.length >= 826) {
            mostrarErro("Todos os 825 personagens já foram sorteados!");
            return;
        }

        // Gera um ID aleatório entre 1 e 825 que não esteja na lista
        do {
            idFinal = Math.floor(Math.random() * 826) + 1;
        } while (idsSorteados.includes(idFinal));
    }

    // Adiciona o ID na lista de sorteados para não repetir mais
    if (!idsSorteados.includes(Number(idFinal))) {
        idsSorteados.push(Number(idFinal));
    }

    // Requisito 9: Feedback visual
    feedback.textContent = "Buscando...";
    feedback.className = "feedback"; 
    resultContainer.classList.add('hidden');

    try {
        // Requisito 4: Consulta à API REST utilizando fetch()
        const url = `https://rickandmortyapi.com/api/character/${idFinal}`;
        const response = await fetch(url);
        
        // Requisito 8: Tratar erro de requisição (ID inexistente)
        if (!response.ok) {
            throw new Error("Personagem não encontrado. Tente um ID válido (1 a 826).");
        }

        // Requisito 6: Converter dados JSON
        const personagem = await response.json();

        // Mostrar na tela
        mostrarResultado(personagem);

    } catch (error) {
        mostrarErro(error.message);
    }
}

// Requisito 7 e 10: Apresentar dinamicamente na página
function mostrarResultado(personagem) {
    feedback.classList.add('hidden');

    // Limpa e preenche o container com os dados novos
    resultContainer.innerHTML = `
        <img src="${personagem.image}" alt="Foto de ${personagem.name}">
        <div class="result-info">
            <h2>${personagem.name} (ID: ${personagem.id})</h2>
            <p><strong>Espécie:</strong> ${personagem.species}</p>
            <p><strong>Status:</strong> ${personagem.status}</p>
            <p><strong>Origem:</strong> ${personagem.origin.name}</p>
        </div>
    `;
    
    resultContainer.classList.remove('hidden');
}

// Função para exibir erros
function mostrarErro(mensagem) {
    feedback.textContent = mensagem;
    feedback.className = "feedback error"; 
    resultContainer.classList.add('hidden');
}
