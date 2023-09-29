// const express = require('express');
// const axios = require('axios');

// const app = express();

// const instance = axios.create({
//     baseURL: 'https://viacep.com.br/ws/',
// });

// app.get('/:cep', async (req, res) => {
//     const { cep } = req.params;

//     try {
//         const resultado = await instance.get(`${cep}/json`);
//         console.log(resultado.data);
//         res.json(resultado.data);
//     } catch (error) {
//         res.status(500).json({ error: 'Ocorreu um erro ao buscar o CEP.' });
//     }
// });

// app.listen(3000, () => {
//     console.log('Servidor rodando na porta 3000');
// });
