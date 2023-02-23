const express = require('express');

const Orden = require('../database/models/orden.model');
const iasignacion = require('../database/models/iasignacion.modal')
const Producto = require('../database/models/producto.model');
const Grupo = require('../database/models/grupos.model')
const {NuevaOrden } = require('../middlewares/emails/nuevo.email');
const {SolicitudMateria} = require('../middlewares/emails/solicitudMaterial.email')

const app = express();

app.get('/api/orden-cerrar/:id', (req, res)=>{
    let id = req.params.id;

    Orden.findByIdAndUpdate(id,{estado:'cerrada'}, (err, cerrada)=>{
        if( err ){
            return res.status(400).json({
                ok:false,
                err
            });
        }

        res.json(cerrada)
    })
})

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
                                        usuario:body.usuario,
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
                                        solicitud:asignacion.seq,
                                        almacen:body.almacen,
                                        paginas_o:body.paginas,
                                        cantidad_o:body.cantidad
                                    })

                                    Producto.findOne({_id:body.producto})
                                            .populate('cliente')
                                            .populate('materiales.producto')
                                            .exec((err, resp)=>{
                                                if( err ){
                                                    return res.status(400).json({
                                                        ok:false,
                                                        err
                                                    });
                                                }

                                                NewOrden.producto = resp;

                                                // console.log(resp)

                                                res.json(NewOrden)

                                                NewOrden.save((err, resp)=>{
                                                    if( err ){
                                                        return res.status(400).json({
                                                            ok:false,
                                                            err
                                                        });
                                                    }          
                                                                
                                                            NuevaOrden(resp.sort,'Andres','calcurianandres@gmail.com')
                                                            SolicitudMateria(resp.sort,'test')
                                                            NuevaOrden(resp.sort,'Luis','luis.malave@poligraficaindustrial.com')
                                                            NuevaOrden(resp.sort,'Raul', 'raul.diaz@poligraficaindustrial.com')
                                                            NuevaOrden(resp.sort,'Carlos','carlos.mejias@poligraficaindustrial.com')
                                                            NuevaOrden(resp.sort,'Enida', 'enida.aponte@poligraficaindustrial.com')
                                                            NuevaOrden(resp.sort,'Freddy', 'freddy.burgos@poligraficaindustrial.com')
            
                                            
                                                    res.json(resp._id)
                                                })


                                            })



                                })
    

});

app.get('/api/orden', (req, res)=>{

    const id = req.params.id;

    Orden.find({estado:'activo'})
    .populate('cliente')
    .populate('producto.grupo')
    .populate('producto.cliente')
    .populate('producto.materiales')
    .populate({path:'producto', populate:{path:'materiales.producto'}})
    .populate({path:'producto.materiales.producto', populate:{path:'grupo'}})
        // .populate('cliente producto producto.grupo')
        .exec((err, orden)=>{
        if( err ){
            return res.status(400).json({
                ok:false,
                err
            });
        }

        // console.log(orden)
        res.json(orden)
    });

});

app.get('/api/orden_material', (req, res)=>{

    const id = req.params.id;

    Orden.find({estado:'Espera'})
        .populate('cliente')
        .populate('producto.grupo')
        .populate('producto.cliente')
        .populate('producto.materiales')
        .populate({path:'producto', populate:{path:'materiales.producto'}})
        .populate({path:'producto.materiales.producto', populate:{path:'grupo'}})
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
    .populate('producto.grupo')
    .populate('producto.cliente')
    .populate('producto.materiales')
    .populate({path:'producto', populate:{path:'materiales.producto'}})
    .populate({path:'producto.materiales.producto', populate:{path:'grupo'}})
        // .populate({path:'producto', populate:{path:'grupo materiales.producto', populate:{path:'grupo'}}})
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