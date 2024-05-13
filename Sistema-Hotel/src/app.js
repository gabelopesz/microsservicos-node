const express = require('express');
const app = express();
const path = require('path');
   
app.use(express.static(__dirname));

// Define a rota para a página inicial
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'PaginaInicial.html'));
});
app.get('/ProcurarHotel', (req, res) => {
    res.sendFile(path.join(__dirname, 'ProcurarHotel.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});