import express from 'express';
import './database';

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta: http://localhost:${PORT}`);
});

app.get('/', (req, res) => res.send('Olá'));
