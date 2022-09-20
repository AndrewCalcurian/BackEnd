const express = require('express');
const Trabajo = require('../database/models/trabajos.model');
var moment = require('moment'); // require
const { find } = require('underscore');


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
                                fechaI = moment(trabajoDB[y].fechaI).subtract(body.dias, 'day')
                                fechaI = moment(fechaI).format('yyyy-MM-DD')
                                fecha = moment(trabajoDB[y].fecha).subtract(body.dias, 'day')
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
                                fechaI = moment(trabajoDB[y].fechaI).add(body.dias, 'day')
                                fechaI = moment(fechaI).format('yyyy-MM-DD')
                                fecha = moment(trabajoDB[y].fecha).add(body.dias, 'day')
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

        Trabajo.find({orden:trabajoDB.orden})
                .sort('fechaI')
                .exec((err, trabajosDB)=>{
            if( err ){
                return res.status(400).json({
                    ok:false,
                    err
                });
            }

            let index  = trabajosDB.findIndex(x => x._id == body.id)

            let i_ = index +1;

            console.log(index,'/', i_)
            console.log(trabajosDB[i_],'trabajos +1');

            let difference = 0;

            if(trabajosDB[i_]){
                fechaMoment = moment(trabajosDB[i_].fechaI);
                let _id_ = trabajosDB[i_]._id;
                let diferencias = fechaMoment.diff(moment(), 'days')
                diferencias = diferencias +1;
                difference = diferencias
                console.log(trabajosDB[i_].fechaI,'fechaI')
                console.log(diferencias,'<== DIFERENCIAS')
                let fechaF = moment(trabajosDB[i_].fecha).subtract(diferencias, 'day')
                fechaF = moment(fechaF).format('yyyy-MM-DD')
                console.log(trabajosDB[i_].fecha,'fecha',fechaF)




                 Trabajo.findByIdAndUpdate(_id_, {fechaI:HOY,fecha:fechaF}, (err, final)=>{
                                 if( err ){
                                     return res.status(400).json({
                                         ok:false,
                                          err
                                     });
                                 }
                })
            }

        for(let i = index; i<trabajosDB.length; i++ ){
             Trabajo.find({status:true, maquina:trabajosDB[i].maquina})
                     .sort('fechaI')
                     .exec((err, works)=>{
                 if( err ){
                     return res.status(400).json({
                         ok:false,
                          err
                     });
                 }

                 console.log(i,')',works)

                for(let y = 0; y<works.length; y++){

                     let Inicio = moment(works[y].fechaI).subtract(difference, 'day')
                     Inicio = moment(Inicio).format('yyyy-MM-DD')

                     console.log(i,'-',y,')',works[y].fechaI,'-',Inicio)

                    let Final = moment(works[y].fecha).subtract(difference, 'day')
                    Final = moment(Final).format('yyyy-MM-DD')
                    
                    console.log(i,'-',y,')',works[y].fecha,'-',Final)


                     if(works[y].fechaI != HOY){
                         Trabajo.findByIdAndUpdate(works[y]._id, {fechaI:Inicio, fecha:Final}, (err, updated)=>{
                             if( err ){
                                 return res.status(400).json({
                                     ok:false,
                                     err
                                 });
                             }
    
                         })
                     }

                }
             })
        }

        res.json('done')

        

        // let i_ = i + 1;
        // let _i = i + 1;

        // console.log(trabajosDB)


            // console.log(i,'<->',trabajosDB[i++],'<>',body.id)
            
        //     for(let i = _i; i<trabajosDB.length; i++){
        //         for(let x = 0; x<1; x++){
        //         fechaMoment = moment(trabajosDB[i_].fechaI);
        //         let _id_ = trabajosDB[i_]._id;
        //         let diferencias = fechaMoment.diff(moment(), 'days')
        //         // diferencias = diferencias +1;
        //         console.log(diferencias)
        //         let fechaF = moment(trabajosDB[i_].fecha).subtract(diferencias, 'day')
        //         fechaF = moment(fechaF).format('yyyy-MM-DD')

        //         console.log(trabajosDB[i_].fecha,'/',fechaF)

        //         Trabajo.findByIdAndUpdate(_id_, {fechaI:HOY,fecha:fechaF}, (err, final)=>{
        //             if( err ){
        //                 return res.status(400).json({
        //                     ok:false,
        //                     err
        //                 });
        //             }
        //         })
        //     }

        // }

        // res.json('done')

            //  if(trabajosDB[i_]){
            //     console.log(i_);
            //      // console.log(trabajosDB[i++]._id,'trabajo id')
            //      fechaMoment = moment(trabajosDB[i_].fechaI);
            //      let _id_ = trabajosDB[i_]._id;

            //      let diferencias = fechaMoment.diff(moment(), 'days')
            //      diferencias = diferencias  +1;
            //      let fechaF = moment(trabajosDB[i_].fecha).subtract(diferencias, 'day')

            //      fechaF = moment(fechaF).format('yyyy-MM-DD')

            //      console.log(fechaF,'/',diferencias)

            //      Trabajo.findByIdAndUpdate(_id_, {fechaI:HOY,fecha:fechaF}, (err, final)=>{
            //          if( err ){
            //              return res.status(400).json({
            //                  ok:false,
            //                  err
            //              });
            //          }

            //          res.json('done')
            //      })
            //  }else{
            //      // console.log('no')
            //      res.json('done')
            // }
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