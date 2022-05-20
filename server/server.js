require('./config/.env');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const Counter = require('../server/database/models/orden.model');
const convCount = require('../server/database/models/conversiones.model');
const { SolicitudMateria } = require('../server/middlewares/emails/nuevo.email');
const {NuevaOrden, NuevaOrden2} = require('../server/middlewares/emails/nuevo.email');



const Usuario = require('../server/database/models/usuarios.model')
const bcrypt = require('bcrypt')

//server
const app = express();

//Middlewares
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use(cors())

app.use(express.static(__dirname + '/public'));


//rutas
app.use ( require('./routes/index.routes'));
app.use ('**', (req,res)=>{
    res.sendFile(__dirname + '/public/index.html')
});

//Base de datos
require('./database/connection');

// SolicitudMateria('002022','test')

// let usuario = new Usuario({
//          Nombre: 'administrado',
//          Apellido: ' ',
//          Correo: 'admin',
//          Password: bcrypt.hashSync('1234567', 10),
//          Role: 'Desarrollador',
//         Departamento:'Desarrollo'
//    }).save();

//   let contador = new convCount({
//       _id:'test',
//      seq:21000
//   }).save();



//correr app
app.listen(process.env.PORT, ()=>{
    console.log('Escuchando Puerto:', process.env.PORT)
});