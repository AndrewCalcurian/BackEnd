require('./config/.env');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const Counter = require('../server/database/models/orden.model');
const convCount = require('../server/database/models/conversiones.model');


const Usuario = require('../server/database/models/usuarios.model')
const bcrypt = require('bcrypt');

const {FAL005} = require('./middlewares/docs/FAL-005.pdf')

const isolicitud = require('./database/models/isolicitud.modal')
const iasignacion = require('./database/models/iasignacion.modal')

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

//  const materiales = ['test','test','test']
//  const lotes = ['test','test','test'];
//  const cantidades = ['test','test','test']
//  FAL005(001,001, materiales, lotes, cantidades);

//correr app
app.listen(process.env.PORT, ()=>{
    console.log('Escuchando Puerto:', process.env.PORT)
});