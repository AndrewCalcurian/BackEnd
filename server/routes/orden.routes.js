const express = require('express');

const Orden = require('../database/models/orden.model');
const iasignacion = require('../database/models/iasignacion.modal')
const { SolicitudMateria, NuevaOrden } = require('../middlewares/emails/nuevo.email');

const app = express();

app.post('/api/orden', (req, res)=>{

    const body = req.body;

    iasignacion.findByIdAndUpdate({_id: 'iterator'}, {$inc: {seq: 1}}, {new: true, upset:true})
                                .exec((err, asignacion)=>{
                                    if( err ){
                                        return res.status(400).json({
                                            ok:false,
                                            err
                                        });
                                    }

                                    let NewOrden = new Orden({
                                        fecha_o:body.fecha_o,
                                        montaje:body.montaje,
                                        cantidad:body.cantidad,
                                        cliente:body.cliente,
                                        orden:body.orden_compra,
                                        paginas:body.paginas,
                                        producto:body.producto,
                                        demasia:body.demasia,
                                        fecha_s:body.fecha_s,
                                        e_c:body.e_c,
                                        i_ancho:body.i_ancho,
                                        i_largo:body.i_largo,
                                        observacion:body.observacion,
                                        solicitud:asignacion.seq
                                    })

                                    NewOrden.save((err, resp)=>{
                                        if( err ){
                                            return res.status(400).json({
                                                ok:false,
                                                err
                                            });
                                        }
                                                SolicitudMateria(resp.sort,'test')
                                                NuevaOrden(resp.sort,'Luis','luis.malave@poligraficaindustrial.com')
                                                NuevaOrden(resp.sort,'Raul', 'raul.diaz@poligraficaindustrial.com')
                                                NuevaOrden(resp.sort,'Carlos','carlos.mejias@poligraficaindustrial.com')
                                                NuevaOrden(resp.sort,'Enida', 'enida.aponte@poligraficaindustrial.com')
                                                NuevaOrden(resp.sort,'Freddy', 'freddy.burgos@poligraficaindustrial.com')
                                
                                        res.json(resp._id)
                                    })


                                })
    

});

app.get('/api/orden', (req, res)=>{

    const id = req.params.id;

    Orden.find({estado:{$ne: 'Espera'}})
        .populate('cliente producto producto.grupo')
        .populate({path: 'producto', populate:{path:'materiales.producto', populate:{path:'grupo'}}})
        .exec((err, orden)=>{
        if( err ){
            return res.status(400).json({
                ok:false,
                err
            });
        }

        res.json(orden)
    });

});

app.get('/api/orden_material', (req, res)=>{

    const id = req.params.id;

    Orden.find({estado:'Espera'})
        .populate('cliente producto')
        .populate({path:'producto', populate:{path:'materiales.producto', populate:{path:'grupo'}}})
        .exec((err, orden)=>{
        if( err ){
            return res.status(400).json({
                ok:false,
                err
            });
        }

        res.json(orden)
    });

});

app.get('/api/orden/:id', (req, res)=>{

    const id = req.params.id;

    Orden.findOne({_id:id})
        .populate('cliente')
        .populate({path:'producto', populate:{path:'grupo materiales.producto', populate:{path:'grupo'}}})
        .exec((err, orden)=>{
        if( err ){
            return res.status(400).json({
                ok:false,
                err
            });
        }

        res.json(orden)
    });

});


module.exports = app;