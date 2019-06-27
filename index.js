//importamos la libreria
const express = require('express');

//generamos la app de backend a partir de express
const app = express();

//importamos json web token
const jwt = require('jsonwebtoken');

//importamos las claves para jwt
var secret = require('./segurity.js');

//middleware
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, authenticate");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use(express.json());

app.get('/', (req, res) => {

    //crear el token con jwt
    const token = jwt.sign({ id: 587 }, secret.secretKey, { expiresIn: "7d" });

    // const token = jwt.sign( { id: 587, iat:Date.now()/1000, exp:Date.now()/1000+60*60*24*7}, "a5sd19d1sa98ds89aads8",  ) //generamos el token


    //extraemos el payload del token a partir del secreto
    // const payload = jwt.verify(token, secret.secretKey);

    res.send(token);
});

app.patch('/updateProfile/', (req, res) => {
    console.log(req.headers.authenticate);
    console.log(req.body)
});

//levantamos el servidor por el puerto 3001
app.listen(3001, () => console.log("Servidor levantado"));