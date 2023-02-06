const express = require('express');
const app = express();

const Orden = require('../database/models/orden.model')
const Despacho = require('../database/models/despacho.model')
const Trabajo = require('../database/models/trabajos.model')
const Gestiones = require('../database/models/gestiones.model')
const Requisicion = require('../database/models/requisicion.model')
const Devolucion = require('../database/models/devolucion.model')
const Lotes = require('../database/models/lotes.model')
const moment = require('moment')

app.post('/api/estadisticas/ordens', (req, res)=>{

    let body = req.body;
    
    // console.log(body.desde,'/',body.hasta);

    let desde = moment(body.desde)
    let hasta = moment(body.hasta)
    let desde_f = moment(body.desde).format('DD-MM-yyyy')
    let hasta_f = moment(body.hasta).format('DD-MM-yyyy')

    let despachos = [];
    let requisiciones = [];
    let devoluciones = [];
    let trabajos = [];
    let gestiones = [];
    let lotes = [];
    let Adicionales = [];
    let x = 0;

    Lotes.find({fecha:{$gte: desde,$lt: hasta},orden:'#'})
    .populate('material.material')
    .exec((err, adcionalesDB)=>{

        if( err ){
            return res.status(400).json({
                ok:false,
                err
            });
        }
        
        x++
        for(let n = 0; n<adcionalesDB.length; n++){
            Adicionales.push(adcionalesDB[n])
        }
    })

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

        for(let i = 0; i<orden.length; i++){
            Despacho.find({"estado":"despachado", "despacho.op":orden[i].sort}, (err, DespachoDB)=>{
                if( err ){
                    return res.status(400).json({
                        ok:false,
                        err
                    });
                }
                for(let n = 0; n<DespachoDB.length; n++){
                    despachos.push(DespachoDB[n])
                }

                Trabajo.find({orden:orden[i]._id})
                        .populate('maquina')
                        .sort('pos')
                        .exec((err, Trabajos)=>{
                    if( err ){
                        return res.status(400).json({
                            ok:false,
                            err
                        });
                    }
                    for(let n = 0; n<Trabajos.length; n++){
                        trabajos.push(Trabajos[n])

                    }
                    
                    Gestiones.find({op:orden[i]._id}, (err, GestinesDB)=>{
                        if( err ){
                            return res.status(400).json({
                                ok:false,
                                err
                            });
                        }

                        for(let n = 0; n<GestinesDB.length; n++){
                            gestiones.push(GestinesDB[n])
                        }

                        Requisicion.find({sort:orden[i].sort}, (err, RequisicionsDB)=>{
                            if( err ){
                                return res.status(400).json({
                                    ok:false,
                                    err
                                });
                            }

                            for(let n = 0; n<RequisicionsDB.length; n++){
                                requisiciones.push(RequisicionsDB[n])
                            }

                            Devolucion.find({orden:orden[i].sort}, (err, DevolucionesDB)=>{
                                if( err ){
                                    return res.status(400).json({
                                        ok:false,
                                        err
                                    });
                                }

                                for(let n = 0; n<DevolucionesDB.length; n++){
                                    devoluciones.push(DevolucionesDB[n])
                                }

                                Lotes.find({orden:orden[i].sort})
                                    .populate('material.material')
                                    .exec((err, LotesDB)=>{
                                    if( err ){
                                        return res.status(400).json({
                                            ok:false,
                                            err
                                        });
                                    }

                                    x++
                                    for(let n = 0; n<LotesDB.length; n++){
                                        lotes.push(LotesDB[n])
                                    }

                                    

                                        if(x == orden.length){
                                            res.json({orden,despachos,trabajos,gestiones,requisiciones,devoluciones,lotes,Adicionales})
                                        }

                                    
                                })

                            })

                        })

                    })


                })

                
            })

        }

        // Despacho.find((err, despachos)=>{
        //     if( err ){
        //         return res.status(400).json({
        //             ok:false,
        //             err
        //         });
        //     }
        
            


        //     res.json({orden,despachos})
        // })
        
    })

})

module.exports = app;