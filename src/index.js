if(process.env.NODE_ENV != 'production'){
    require('dotenv').config();
}
console.log(process.env['DB_NAME'])
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

const apiRouter = require('./routes/apiRouter');

const { Logins, Clientes, Aviones, Vuelos, Pasajes } = require('./db')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extend: true }));

app.use('/api', apiRouter);

app.get("/", (req, res) => {
    res.json({
        respuesta: true,
        mensaje: "hola mundo"
    });
})

app.listen(PORT, () => {
    // console.log(process.env.DB_NAME);

    console.log("Escuchando...")
});