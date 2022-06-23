const express = require('express');


const app = express();

//rutas que se utilizaran en el sistema
app.use ( require('./uploads.routes'));
app.use ( require('./maquinaria.routes'));
app.use ( require('./grupos.routes'));
app.use ( require('./clientes.routes'));
app.use ( require('./productos.routes'));
app.use ( require('./trabajos.routes'));
app.use ( require('./materiales.routes'));
app.use ( require('./orden.routes'));
app.use ( require('./gestiones.routes'));
app.use ( require('./sustratos.routes'));
app.use ( require('./usuarios.routes'));
app.use ( require('./login.routes'));
app.use ( require('./imagenes.routes'));
app.use ( require('./requisicion.routes'));



module.exports = app;