# Sorteador Rick and Morty API

Uma aplicação Web dinâmica e interativa desenvolvida para consumir a API REST pública do universo **Rick and Morty**. O projeto consolida conceitos de JavaScript assíncrono, manipulação do DOM e consumo de APIs.

## Funcionalidades
- **Sorteio Aleatório:** Sorteia um personagem entre os 825 disponíveis na API.
- **Sistema Anti-Repetição:** Um algoritmo garante que o mesmo personagem não seja sorteado duas vezes durante a sessão.
- **Busca por ID:** Permite ao usuário buscar um personagem específico pelo número.
- **Feedback Visual:** Indicações de carregamento ("Buscando...") e tratamento de erros (IDs inválidos ou fim dos sorteios).

## Tecnologias Utilizadas
- **HTML5 & CSS3:** Estruturação e estilização da interface (design responsivo e centralizado).
- **JavaScript (ES6+):** Lógica de programação e regras de negócio.
- **Fetch API:** Para realizar requisições HTTP (método GET) à API REST.
- **Async/Await:** Para gerenciar a programação assíncrona de forma limpa e legível.
- **JSON:** Formato de conversão e leitura dos dados recebidos.

## Detalhes da Implementação
1. **Controle de Estado:** Utilizamos um *array* global (`idsSorteados`) para armazenar o histórico de IDs.
2. **Lógica de Sorteio:** Um laço `do...while` em conjunto com o método `.includes()` verifica se o número gerado já existe no array, garantindo a exclusividade de cada sorteio.
3. **Manipulação do DOM:** Uso intensivo de `document.getElementById`, `addEventListener` e `innerHTML` para injetar os dados (imagem, nome, status, espécie e origem) diretamente na página sem necessidade de recarregamento.

## Como executar
Basta clonar este repositório e abrir o arquivo `index.html` em qualquer navegador moderno.
