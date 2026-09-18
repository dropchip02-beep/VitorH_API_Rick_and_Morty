const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Configura o servidor para entregar seus arquivos HTML, CSS e JS estáticos
app.use(express.static(path.join(__dirname)));

// Rota de API criada por vocês (como sugerido nas regras do projeto)
app.get('/api/status', (req, res) => {
    res.json({ 
        mensagem: "Servidor Node.js rodando perfeitamente!", 
        projeto: "Sorteador Rick and Morty",
        status: "Online"
    });
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando! Acesse: http://localhost:${PORT}`);
    console.log(`👽 Rota da sua própria API: http://localhost:${PORT}/api/status`);
});
