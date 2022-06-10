const express = require('express');
const Trabajo = require('../database/models/trabajos.model');
var moment = require('moment'); // require


const app = express();

app.get('/api/maquina-orden/:id', (req, res)=>{
    let orden = req.params.id;

    Trabajo.find({orden})
                .populate('maquina')
                .exec((err, maquinasDB)=>{
                    if( err ){
                        return res.status(400).json({
                           ok:false,
                           err
                           });
                       }
                       
              
                       res.json({
                        maquinasDB
                       })
                })
});

app.get('/api/trabajos/:id', (req, res)=>{

    let id = req.params.id;

    Trabajo.find({maquina:id})
            .populate('maquina')
            .exec((err, trabajoDB)=>{
     if( err ){
          return res.status(400).json({
             ok:false,
             err
             });
         }
         

         res.json({
             trabajo:trabajoDB
         })
    })




    // // --CONSULTA A LA COLECCION DE GRUPOS--
    // Grupo.find((err, gruposBD)=>{

    //     // --EN CASO DE ERROR--
    //     if( err ){
    //         return res.status(400).json({
    //             ok:false,
    //             err
    //         });
    //     }

    //     // --MOSRAR LOS GRUPOS--
    //     res.json({
    //         grupos:gruposBD
    //     })

    // })

});

app.get('/api/orden/etapa/:id', (req, res)=>{
    Trabajo.find({orden:req.params.id})
            .exec((err, trabajosDB)=>{
                if( err ){
                    return res.status(400).json({
                        ok:false,
                        err
                    });
                }

                res.json(trabajosDB)
            }) 
});

app.get('/api/trabajos', (req, res)=>{
    Trabajo.find({status:true})
            .populate('maquina')
            .populate({path:'orden', populate:{path: 'producto', select:'producto ejemplares grupo'}})
            .exec((err, trabajosDB)=>{
                if( err ){
                    return res.status(400).json({
                        ok:false,
                        err
                    });
                }

                res.json(trabajosDB)
            });
});

app.post('/api/trabajos/acelerar', (req, res)=>{

    const body = req.body;
    // console.log(body)

    let _fecha = moment(body.fecha).subtract(1, 'day')
    _fecha = moment(_fecha).format('yyyy-MM-DD')

    Trabajo.findByIdAndUpdate(body.trabajo,{fecha:_fecha},(err, actual)=>{
            if( err ){
                return res.status(400).json({
                    ok:false,
                    err
                });
            }
    });

    Trabajo.find({orden:body.orden}, (err, ordens)=>{
        if( err ){
            return res.status(400).json({
                ok:false,
                err
            });
        }
        

        for(let i=0; i<ordens.length; i++){
            if(ordens[i].maquina == body.maquina._id){
                // console.log('_i_')
                for(let x = i; x<ordens.length; x++){
                    Trabajo.find({maquina:ordens[x].maquina, fechaI:{ $gte: body.fecha }},(err, trabajoDB)=>{
                        if( err ){
                            return res.status(400).json({
                                ok:false,
                                err
                            });
                        }
                        for(let y = 0; y<trabajoDB.length; y++){
                            let fechaI = trabajoDB[y].fechaI
                            let fecha = trabajoDB[y].fecha
                            // console.log(trabajoDB[y]._id,'/',body.orden)
                            if(trabajoDB[y]._id != body.trabajo){
                                fechaI = moment(trabajoDB[y].fechaI).subtract(1, 'day')
                                fechaI = moment(fechaI).format('yyyy-MM-DD')
                                fecha = moment(trabajoDB[y].fecha).subtract(1, 'day')
                                fecha = moment(fecha).format('yyyy-MM-DD')
                            }
                            Trabajo.findByIdAndUpdate(trabajoDB[y]._id,{fechaI,fecha},(err, updated)=>{
                                if( err ){
                                    return res.status(400).json({
                                        ok:false,
                                        err
                                    });
                                }
                                // console.log(updated)
                            })
                        }

                    });
                }
            }
        }
    })

    res.json('ok')

});

app.post('/api/trabajos/retrasar', (req, res)=>{

    const body = req.body;
    // console.log(body)

    let _fecha = moment(body.fecha).add(1, 'day')
    _fecha = moment(_fecha).format('yyyy-MM-DD')

    Trabajo.findByIdAndUpdate(body.trabajo,{fecha:_fecha},(err, actual)=>{
            if( err ){
                return res.status(400).json({
                    ok:false,
                    err
                });
            }
    });

    Trabajo.find({orden:body.orden}, (err, ordens)=>{
        if( err ){
            return res.status(400).json({
                ok:false,
                err
            });
        }
        

        for(let i=0; i<ordens.length; i++){
            if(ordens[i].maquina == body.maquina._id){
                // console.log('_i_')
                for(let x = i; x<ordens.length; x++){
                    Trabajo.find({maquina:ordens[x].maquina, fechaI:{ $gte: body.fecha }},(err, trabajoDB)=>{
                        if( err ){
                            return res.status(400).json({
                                ok:false,
                                err
                            });
                        }
                        for(let y = 0; y<trabajoDB.length; y++){
                            let fechaI = trabajoDB[y].fechaI
                            let fecha = trabajoDB[y].fecha
                            // console.log(trabajoDB[y]._id,'/',body.orden)
                            if(trabajoDB[y]._id != body.trabajo){
                                fechaI = moment(trabajoDB[y].fechaI).add(1, 'day')
                                fechaI = moment(fechaI).format('yyyy-MM-DD')
                                fecha = moment(trabajoDB[y].fecha).add(1, 'day')
                                fecha = moment(fecha).format('yyyy-MM-DD')
                            }
                            Trabajo.findByIdAndUpdate(trabajoDB[y]._id,{fechaI,fecha},(err, updated)=>{
                                if( err ){
                                    return res.status(400).json({
                                        ok:false,
                                        err
                                    });
                                }
                                // console.log(updated)
                            })
                        }

                    });
                }
            }
        }
    })

    res.json('ok')

});

app.post('/api/gestion', (req, res)=>{

    const body = req.body;



    Trabajo.find({fechaI: {$and:[{$gte:body.fecha}, {$lte:body.fecha}]}})
            .populate('maquina')
            .populate({path:'orden', populate:{path: 'orden.producto', select:'producto ejemplares'}})
            .exec((err, trabajosDB)=>{
                if( err ){
                    return res.status(400).json({
                        ok:false,
                        err
                    });
                }

                res.json(trabajosDB)
            });
});

app.post('/api/trabajos', (req, res)=>{
    // maquina:{
    //     type:Schema.Types.ObjectId,
    //     ref: 'maquina'
    // },
    // fecha:{
    //     type:String,
    // },
    // OrdenProduccion :{
    //     type:Schema.Types.ObjectId,
    //     ref: 'op'
    // },

    const body = req.body;

    const NewOrden = new Trabajo({
        maquina:body.maquina,
        fechaI:body.fechaI,
        fecha:body.fecha,
        orden:body.orden
    })

    NewOrden.save((err, maquinas)=>{

        // --EN CASO DE ERROR--
        if( err ){
            return res.status(400).json({
                ok:false,
                err
            });
        }

        // --MOSTRAR NUEVA MAQUINA AÑADIDA--
        res.json({
            maquinas:maquinas
        });

    });


});

app.put('/api/finalizar-trabajo', (req, res)=>{
    let body = req.body;
    HOY = moment().format('yyyy-MM-DD');

    Trabajo.findByIdAndUpdate(body.id, {status:false}, (err, trabajoDB)=>{
        if( err ){
            return res.status(400).json({
                ok:false,
                err
            });
        }

        Trabajo.find({orden:trabajoDB.orden}, (err, trabajosDB)=>{
            if( err ){
                return res.status(400).json({
                    ok:false,
                    err
                });
            }

            let i  = trabajosDB.findIndex(x => x._id == body.id)

            // console.log(i,'<->',trabajosDB[i++],'<>',body.id)

            if(trabajosDB[i++]){
                // console.log(trabajosDB[i++]._id,'trabajo id')
                let _id_ = trabajosDB[i++]._id
                Trabajo.findByIdAndUpdate(_id_, {fechaI:HOY}, (err, final)=>{
                    if( err ){
                        return res.status(400).json({
                            ok:false,
                            err
                        });
                    }

                    res.json('done')
                })
            }else{
                // console.log('no')
                res.json('done')
            }
        })
    })
})

app.post('/api/grupos', (req, res)=>{

    // --SE ACORTA EL REQUEST--
    let body = req.body;

// ----SE VACIA EL BODY EN UNA NUEVA CLASE DEL MODELO---
    const NewGrupo = new Grupo({
        nombre: body.nombre,
        tipos:body.tipos
    })

    // console.log('Esto llega:',body)
    // console.log('Esto se va:',NewGrupo)

// ----SE GUARDA LA INFORMACION EN LA BASE DE DATOS---
    NewGrupo.save((err, grupoDB)=>{

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