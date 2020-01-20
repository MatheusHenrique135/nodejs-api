const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Iniciando o App
const app = express();

//Enviando informações no formato json (padrão das api's rest)
app.use(express.json());

//Permitindo o acesso a api atráves de outros locais (publicamente)
app.use(cors());

//Iniciando o DB
mongoose
    .connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('connected to database...'))
    .catch(err => console.log(err));

//Chamando o modelo
requireDir('./src/models');

//Rotas
app.use('/api', require('./src/routes'))


app.listen(3001);