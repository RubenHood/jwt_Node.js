//importamos la libreria
const express = require('express');

//generamos la app de backend a partir de express
const app = express();

//importamos json web token
const jwt = require('jsonwebtoken');

app.get('/', (rqe, res) => {
    const token = jwt.sign({ id: 587 }, "rN53GDyHHuyjH+bb", { expiresIn: "7d" });
});

//levantamos el servidor por el puerto 3001
app.listen(3001, () => console.log("Servidor levantado"));