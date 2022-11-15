const express = require('express');
const app = express();

const Orden = require('../database/models/orden.model')
const moment = require('moment')

app.post('/api/estadisticas/ordens', (req, res)=>{

    let body = req.body;
    
    // console.log(body.desde,'/',body.hasta);

    let desde = moment(body.desde)
    let hasta = moment(body.hasta)

    Orden.find({fecha:{
        $gte: desde,
        $lt: hasta
    }}, (err, orden)=>{
        if( err ){
            return res.status(400).json({
                ok:false,
                err
            });
        }
        
        res.json(orden)
    })

})

module.exports = app;