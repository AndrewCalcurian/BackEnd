const express = require('express');
const Cliente = require('../database/models/clientes.model');
const QRCode = require('qrcode');
// var printer = require('printer');
var util = require('util');
const app = express();


// app.get('/printers', (req, res)=>{

//     let printers = printer.getPrinters();

//     console.log('default printer name: ' + (printer.getDefaultPrinterName() || 'is not defined on your computer'));
// //         util = require('util');
// //         console.log("installed printers:\n"+util.inspect(printer.getPrinters(), {colors:true, depth:10}));
//     res.send('test')
// })

app.get('/api/clientes', (req, res)=>{


    // --CONSULTA A LA COLECCION DE CLIENTES--
    Cliente.find((err, clientesDB)=>{

        // --EN CASO DE ERROR--
        if( err ){
            return res.status(400).json({
                ok:false,
                err
            });
        }

        // --MOSRAR LOS CLIENTES--
        res.json({
            clientes:clientesDB
        })

    })

});

app.put('/api/cliente/:id', (req, res)=>{


    let id = req.params.id
    let data = req.body

    console.log(data)

    Cliente.findByIdAndUpdate(id, data, (err, ClienteDB)=>{
        if( err ){
            return res.status(400).json({
                ok:false,
                err
            });
        }

        res.json(ClienteDB)

    })

})

app.get('/api/qr/:info', (req, res)=>{

    let info = req.params.info

    QRCode.toString(info,{type:'terminal'}, function (err, url) {
        console.log(url)
        res.json('ok')
      })
})

app.post('/api/clientes', (req, res)=>{

    // --SE ACORTA EL REQUEST--
    let body = req.body;

// ----SE VACIA EL BODY EN UNA NUEVA CLASE DEL MODELO---
    const NewCliente = new Cliente({
        nombre: body.nombre,
        codigo:body.codigo,
        rif:body.rif,
        direccion:body.direccion,
        contactos:body.contactos,
        almacenes:body.almacenes
    })

// ----SE GUARDA LA INFORMACION EN LA BASE DE DATOS---
    NewCliente.save((err, grupoDB)=>{

        // --EN CASO DE ERROR--
        if( err ){
            return res.status(400).json({
                ok:false,
                err
            });
        }

        // --MOSTRAR NUEVA MAQUINA AÑADIDA--
        res.json({
            NuevoGrupo:grupoDB
        });

    });

});

module.exports = app;