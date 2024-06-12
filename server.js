import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import obras from './routes/obras.js';

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));

// Conexão com o MongoDB
mongoose.connect('mongodb://localhost:27017/urbaniza', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB conectado'))
    .catch(err => console.log(err));

// Rotas
app.use('/api/obras', obras);

// Inicia o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
