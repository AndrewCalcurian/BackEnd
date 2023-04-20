const express = require('express');
const app = express();
const Escala = require('../database/models/escala.model');
const Producto = require('../database/models/producto.model')
const consultaDolar = require('consulta-dolar-venezuela');
const Despacho = require('../database/models/despacho.model');
const Orden = require('../database/models/orden.model');


app.post('/api/cotizacion/intervalo', (req, res)=>{
    
    const body = req.body
    
    let Nueva_Escala = new Escala({
        producto:body.producto,
        cantidad:body.cantidad,
        descripcion:body.descripcion,
        montaje:body.montaje,
        escalas:body.escalas,
        precio:body.precio,
        cliente:body.cliente
    }).save((err, EscalaDB)=>{
        if( err ){
            return res.status(400).json({
                ok:false,
                err
            });
        }

        res.json(EscalaDB)
    })

})

app.get('/api/cotizacion/intervalo-todos/:cliente', (req, res)=>{
    let cliente = req.params.cliente;

    Escala.find({cliente})
        .populate('producto')
        .sort('escalas.cantidad')
        .exec((err, Escalas)=>{
        if( err ){
            return res.status(400).json({
                ok:false,
                err
                });
        }

        res.json(Escalas)
    })

})

app.get('/api/cotizacion/intervalo/:producto', (req, res)=>{
    let producto = req.params.producto;

    Escala.find({producto})
        .populate('producto')
        .exec((err, Escalas)=>{
        if( err ){
            return res.status(400).json({
                ok:false,
                err
                });
        }

        res.json(Escalas)
    })

})

app.delete('/api/cotizacion/intervalo/:id', (req, res)=>{
    let id = req.params.id

    Escala.findByIdAndDelete(id, (err, Escala)=>{
        if( err ){
            return res.status(400).json({
                ok:false,
                err
                });
        }

        res.json(Escala)
    })
})

app.put('/api/cotizacion/intervalos', (req, res)=>{
    let id = req.body._id
    let body = req.body

    console.log(body)

    Escala.findOneAndUpdate({_id:id}, body,(err, Escala)=>{
        if( err ){
            return res.status(400).json({
                ok:false,
                err
                });
        }

        console.log(Escala)
        res.json(Escala)

    })
})

app.post('/api/cotizacion/intervalo/producto/:producto', (req, res)=>{
    let producto = req.params.producto
    let cantidad = req.body.cantidad;
    let MonitorBCV
    
    
    
    Producto.findOne({producto}, (err, Producto)=>{
        if( err ){
            return res.status(400).json({
                ok:false,
                err
            });
        }
        
        Escala.find({producto:Producto._id,cantidad:{$lte: cantidad} }, (err, Escala)=>{
            if( err ){
                return res.status(400).json({
                    ok:false,
                    err
                });
            }

            console.log(Escala)
            
            
            consultaDolar.$monitor().then($=>{
                
                MonitorBCV = $['$bcv']
                res.json({Escala,MonitorBCV})
            })

        })
    })
})


app.get('/api/despachos/pre-facturacion', (req,res)=>{


    let preFacuracion = [];

    Despacho.find({estado:'pendiente'}, (err, despachos)=>{
        if( err ){
            return res.status(400).json({
                ok:false,
                err
            });
        }

        for(let i=0;i<despachos.length;i++){

            for(let x=0;x<despachos[i].despacho.length;x++){

                
                Orden.findOne({sort:despachos[i].despacho[x].op})
                .populate('cliente')
                .populate('producto.grupo')
                .populate('producto.cliente')
                .populate('producto.materiales')
                .populate({path:'producto', populate:{path:'materiales.producto'}})
                .populate({path:'producto.materiales.producto', populate:{path:'grupo'}})
                    .exec((err, ordensDB)=>{
                    if( err ){
                        return res.status(400).json({
                            ok:false,
                            err
                        });
                    }

                    Producto.findOne({producto:ordensDB.producto.producto})
                        .exec((err, ProductoDB)=>{
                            if( err ){
                                return res.status(400).json({
                                    ok:false,
                                    err
                                });
                            }

                            Escala.findOne({producto:ProductoDB._id})
                                .exec((err, EscalaDB)=>{
                                    if( err ){
                                        return res.status(400).json({
                                            ok:false,
                                            err
                                        });
                                    }
                                    preFacuracion.push({fecha:despachos[i].fecha,despacho:despachos[i].despacho[x], orden:ordensDB, escala:EscalaDB})
                                    if(i === despachos.length-1 && x === despachos[i].despacho.length-1){
                                        
                                        consultaDolar.$monitor().then($=>{
                
                                            MonitorBCV = $['$bcv']
                                            res.json({preFacuracion,MonitorBCV})
                                        })
                                    }
                                })
                        })
                    
                })
            }


        }


    })
})

module.exports = app;