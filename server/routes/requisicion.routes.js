const express = require('express');

const Requisicion = require('../database/models/requisicion.model');

const app = express();

app.post('/api/requi',(req, res)=>{

    const body = req.body;

    let requi = new Requisicion({
        sort:body.sort,
        producto:body.producto
    })
    
    requi.save((err, resp)=>{
        if( err ){
            return res.status(400).json({
                ok:false,
                err
            });
        }

        console.log(resp)
        res.json('ok')
    });
        

});

app.get('/api/requi', (req, res)=>{
    Requisicion.find({estado:{$ne: 'Espera'}})
                .populate('producto.materiales.producto')
                .populate({path: 'producto', populate:{path:'materiales.producto', populate:{path:'grupo'}}})
                .exec((err, requi)=>{
                    if( err ){
                        return res.status(400).json({
                            ok:false,
                            err
                        });
                    }

                    res.json(requi)
                })
})

app.get('/api/requi/espera', (req, res)=>{
    Requisicion.find({estado:'Espera'})
                .populate('producto.materiales.producto')
                .populate({path: 'producto', populate:{path:'materiales.producto', populate:{path:'grupo'}}})
                .exec((err, requi)=>{
                    if( err ){
                        return res.status(400).json({
                            ok:false,
                            err
                        });
                    }

                    res.json(requi)
                })
})

app.delete('/api/requi/:id', (req, res)=>{
    let id = req.params.id;

    Requisicion.findByIdAndDelete(id, (err, requi)=>{
        if( err ){
            return res.status(400).json({
                ok:false,
                err
            });
        }

        res.json(requi)
    })
})

app.put('/api/requi/:id', (req,res)=>{
    let id = req.params.id;

    Requisicion.findByIdAndUpdate(id, {estado:'lista'}, (err, requi)=>{
        if( err ){
            return res.status(400).json({
                ok:false,
                err
            });
        }

        res.json(requi)
    })
})

module.exports = app;