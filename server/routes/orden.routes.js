const express = require('express');

const Orden = require('../database/models/orden.model');
const Trabajo = require('../database/models/trabajos.model');
const iasignacion = require('../database/models/iasignacion.modal')
const Producto = require('../database/models/producto.model');
const Gestiones = require('../database/models/gestiones.model')
const Lotes = require('../database/models/lotes.model')
const Grupo = require('../database/models/grupos.model')
const Cancelacion = require('../database/models/cancelaciones.model')
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

app.get('/api/orden-cliente/:cliente', (req, res)=>{
    let cliente = req.params.cliente

    Orden.find({cliente:cliente, estado:'activo'})
        .exec((err, ordenes)=>{
            if( err ){
                return res.status(400).json({
                    ok:false,
                    err
                });
            }
    
            // console.log(orden)
            res.json(ordenes)
        })
})

app.get('/api/orden-todo', (req, res)=>{

    // Lotes.find()
    // .populate('material.material')
    // .exec((err, adcionalesDB)=>{
    //     for(let n = 0; n<adcionalesDB.length; n++){
    //         for(let n_i = 0; n_i<adcionalesDB[n].material.length; n_i++){
    //             if(!adcionalesDB[n].material[n_i].EA_Cantidad){
    //                 let add = adcionalesDB[n].material[n_i].push({EA_Cantidad:0})
    //                 console.log(adcionalesDB[n].material[n_i])
    //             }else{
    //                 console.log('work')
    //             }
    //         }
    //     }
    // })

    Orden.find()
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
})

app.get('/api/orden', (req, res)=>{

    const id = req.params.id;

    Orden.find({$or:[{estado:'activo'},{estado:'Espera'}]})
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

app.get('/api/orden/cancelar/:orden/:motivo', (req, res)=>{




    Orden.findByIdAndUpdate(req.params.orden, {estado:'CANCELADA'}, (err, orden)=>{
         if( err ){
             return res.status(400).json({
                 ok:false,
                err
             });
         }
    
         let NewCancelacion = new Cancelacion({
             orden:req.params.orden,
             Motivo:req.params.motivo
         }).save((err, resp)=>{
             if( err ){
                 return res.status(400).json({
                     ok:false,
                     err
                 });
             }
             
             res.json('¡Orden Cancelada!')
         })
    
    })




})
app.get('/api/orden/cancelar/:orden/', (req, res)=>{



    return res.status(400).json({
        ok:false,
        err
    });


})

app.put('/api/orden/:id', (req, res)=>{
    const id = req.params.id;
    const data = req.body

    Orden.findByIdAndUpdate(id, data, (err, ordenEdited)=>{
        if( err ){
            return res.status(400).json({
                ok:false,
                err
            });
        }

        res.json(ordenEdited)
    })
})

app.get('/api/etiquetar/:id', (req, res)=>{
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

        Trabajo.find({orden:id}, (err, trabajos)=>{

            let ultimo = trabajos.filter(x => x.pos == trabajos.length - 1)

            Gestiones.find({maquina:ultimo[0].maquina, op:id}, (err, gestiones)=>{


                let splitted = gestiones[0].fecha.split('-')
                
                console.log(
                    {
                        ordenes:orden,
                        trabajos:`${splitted[1]}/${splitted[0]}`
                    }
                )
                res.json({
                    ordenes:orden,
                    trabajos:`${splitted[1]}/${splitted[0]}`
                })
            })


        })
    });

})

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