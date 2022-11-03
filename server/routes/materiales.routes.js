const express = require('express');

const Material = require('../database/models/material.model');
const Materia = require('../database/models/mp.model');
const Sustrato = require('../database/models/sustrato.model');
const Orden = require('../database/models/orden.model');
const Descuentos = require('../database/models/descuentos.model');
const Ingresos = require('../database/models/ingresos.model');
const Almacenado = require('../database/models/almacenado.model');
const Requisicion = require('../database/models/requisicion.model');
const Lote = require('../database/models/lotes.model');
const idevolucion = require('../database/models/idevolucion.model');
const Devolucion = require('../database/models/devolucion.model');

const {FAL005} = require('../middlewares/docs/FAL-005.pdf');
const {FAL006} = require('../middlewares/docs/FAL-006.pdf');
const app = express();

app.get('/api/lotes/:orden', (req, res)=>{
    let orden = req.params.orden;

    Lote.find({orden:orden})
        .populate('material.material')
        .exec((err, lotes)=>{
            //console.log(lotes)
            res.json(lotes)
        })
})

app.post('/api/almacenado', (req, res)=>{

    let body = req.body;

    const NewAlmacenado = new Almacenado(
        {
            material:body.material,
            codigo:body.codigo,
            lote:body.lote,
            cantidad:body.cantidad
        }
    )

    NewAlmacenado.save((err, almacenDB)=>{
        if( err ){
            return res.status(400).json({
                ok:false,
                err
            });
        }

        res.json({
            almacen:almacenDB
        })
    })

});

app.get('/api/almacenado/:id', (req, res)=>{

    const id = req.params.id;

    Almacenado.findById(id)
                .populate({
                    path: 'material',
                    populate: {
                        path: 'grupo'
                    }
                })
                .exec((err, Almacen)=>{
        if( err ){
            return res.status(400).json({
                ok:false,
                err
            });
        }

        res.json(Almacen)
    })

});

app.put('/api/almacenado/:id', (req, res)=>{
    const id = req.params.id;
    const body = req.body;

    Almacenado.findByIdAndUpdate(id, body)
                .exec((err, AlmacenadoDB)=>{
                    if( err ){
                        return res.status(400).json({
                            ok:false,
                            err
                        });
                    }

                    res.json(AlmacenadoDB)
                })

})

app.get('/api/almacenado', (req, res)=>{

    const options = { sort: ['material.nombre'] };

    Almacenado.find({cantidad:{ $gt:0}})
                .populate({
                    path: 'material',
                    populate: {
                        path: 'grupo'
                    }
                })
                .exec((err, Almacen)=>{
        if( err ){
            return res.status(400).json({
                ok:false,
                err
            });
        }

        res.json(Almacen)
    })
})

//VER TODOS LOS MATERIALES EXISTENTES
app.get('/api/tipo-materia-prima', (req, res)=>{
    Materia.find((err, Grupos)=>{
        if( err ){
            return res.status(400).json({
                ok:false,
                err
            });
        }

        res.json(Grupos);
    });
});


app.get('/api/materiales', (req, res)=>{

    Material.find({eliminado:false})
            .populate('grupo')
            .sort('grupo.nombre')
            .sort('nombre')
            .exec((err, materialesDB)=>{

                if( err ){
                    return res.status(400).json({
                        ok:false,
                        err
                    });
                }

                res.json({
                    ok:true,
                    materiales:materialesDB
                })
            })

});

app.get('/api/materiales/:id', (req, res)=>{

    let id = req.params.id

    Material.findById(id)
            .populate('grupo')
            .exec((err, materialesDB)=>{

                if( err ){
                    return res.status(400).json({
                        ok:false,
                        err
                    });
                }

                res.json(materialesDB)
            })

});

//AGREGAR NUEVO MATERIAL
app.post('/api/nuevo-material', async (req, res)=>{

    let body = req.body;
    let ready = false;

    function definirGrupo(){
        return new Promise(resolve =>{
            if(body.nuevo){
                let NuevoGrupo = new Materia({
                    nombre:body.grupo
                })

                NuevoGrupo.save((err, grupoDB)=>{

                    if( err ){
                        return res.status(400).json({
                            ok:false,
                            err
                        });
                    }

                    body.grupo = grupoDB._id;
                    resolve(body.grupo)
                })
            }else{
                if(body.grupo == 'sustrato'){
                    let newSustrato = new Sustrato({
                        cantidad:body.cantidad,
                        material:body.producto
                    }).save((err, sustrato)=>{
                        if( err ){
                            return res.status(400).json({
                                ok:false,
                                err
                            });
                        }

                        return res.json(sustrato);
                    })
                }else{
                    resolve(body.grupo)
                }
            }
        })
    }



    const material = new Material({
        grupo:await definirGrupo(),
        nombre:body.producto,
        marca:body.marca,
        ancho:body.ancho,
        largo:body.largo,
        gramaje:body.gramaje,
        calibre:body.calibre,
        cantidad:body.cantidad,
        unidad:body.unidad,
        presentacion:body.presentacion,
        color:body.color,
        neto:body.neto,
        cinta:body.cinta,

    });

    material.save((err, materialDB) => {

        if( err ){
            return res.status(400).json({
                ok:false,
                err
            });
        }

        const NewIngreso = new Ingresos({
            material:materialDB._id
        }).save((err, IngresoNuevo)=>{

            if(err) {
                return res.status(400).json({
                    ok:false,
                    err
                });
            }

            res.json({
                ok:true,
                material: IngresoNuevo
            })
        })


    });

});

//MODIFICAR UN MATERIAL
app.put('/api/material/:id', (req, res)=>{

    const id = req.params.id;
    let body = req.body;

    Material.findByIdAndUpdate(id, body, (err, materialDB) =>{
        if( err ){
            return res.status(400).json({
                ok:false,
                err
            });
        }

        res.json('exito')
    })
})

//ELIMINAR MATERIAL
app.delete('/api/material/:id', (req, res)=>{

    const id = req.params.id;

    Material.findByIdAndUpdate(id, {activo:false}, (err, modificacion)=>{
        if( err ){
            return res.status(400).json({
                ok:false,
                err
            });
        }

        res.json({
            ok:true,
            material: modificacion
        })
    })
})

app.post('/api/material/devolucion', (req, res)=>{

    let body = req.body;



    let lotes = []
    let materiales = []
    let cantidades = []
    let final = body.filtrado.length -1;
    for(let i = 0; i<body.filtrado.length; i++){
        lotes.push(body.filtrado[i].lote)
        Material.findById(body.filtrado[i].material, (err, material)=>{
            if( err ){
                return res.status(400).json({
                    ok:false,
                    err
                });
            }

            // //console.log(material.nombre)

        cantidades.push(`${body.filtrado[i].cantidad} ${material.unidad}`)

        if(!material.ancho){
            materiales.push(`${material.nombre} (${material.marca})`)
        }else{
            materiales.push(`${material.nombre} ${material.ancho}x${material.largo} (${material.marca}) - Paleta:${body.filtrado[i].codigo}`)
        }


        if(i === final){

            idevolucion.findByIdAndUpdate({_id: 'test'}, {$inc: {seq: 1}}, {new: true, upset:true})
                .exec((err, devolucion)=>{
                    if( err ){
                        return res.status(400).json({
                            ok:false,
                            err
                        });
                    }

                    num_solicitud = devolucion.seq;
                    FAL006(body.orden,num_solicitud,materiales,lotes, cantidades, body.motivo, body.usuario)
                    let newDEvolucion = new Devolucion({
                        orden:body.orden,
                        filtrado:body.filtrado,
                        motivo:body.motivo
                    }).save();
                    res.json('done');
                })
        }

        })

    }


})

app.post('/api/material/descuento', (req, res)=>{

    let body = req.body;


    let lotes_ = '';
    let names;
    // console.log(body.lotes);

    let set = new Set( body.lotes.map( JSON.stringify ) )
    body.lotes = Array.from( set ).map( JSON.parse );

    let x = 0;

    let materiales = [];
    let lotes = [];
    let solicitados = [];

    let orden = []
    let material__ = []

    // let EA_Cantidad = body.EA_Cantidad

    // console.log(body)

    if(body.requi){
        // console.log('si')
        Requisicion.findOneAndUpdate({_id:body.requi},{estado:'Finalizado'}, (err, requi)=>{
            if( err ){
                return res.status(400).json({
                    ok:false,
                    err
                });
            }
        })
    }



    Orden.findOneAndUpdate({sort:body.orden}, {estado:'activo'}, (err, modificado)=>{
        if( err ){
            return res.status(400).json({
                ok:false,
                err
            });
    }
    })

    for(let i= 0; i<body.lotes.length; i++){

        body.lotes[i].solicitado = (Number(body.lotes[i].solicitado)).toFixed(2)

        Almacenado.findOne({material:body.lotes[i].Mname,lote:body.lotes[i].lote,codigo:body.lotes[i].codigo,cantidad:{$gt:0}})
                .populate({
                    path: 'material',
                    populate: {
                        path: 'grupo'
                    }
                })
                .exec((err, resp)=>{
                    console.log
                        if(resp.material.grupo.nombre === "Tinta" || resp.material.grupo.nombre === "Barniz"){
                            body.lotes[i].resta = 0;
                        }

                             Almacenado.findOneAndUpdate({material:body.lotes[i].Mname,lote:body.lotes[i].lote,codigo:body.lotes[i].codigo,cantidad:{$gt:0}},{cantidad:body.lotes[i].resta}, (err, MaterialDB)=>{
                            // Almacenado.findOneAndUpdate({material:body.lotes[i].Mname,lote:body.lotes[i].lote,codigo:body.lotes[i].codigo,cantidad:{$gt:0}},{codigo:body.lotes[i].codigo}, (err, MaterialDB)=>{
                            if( err ){
                             return res.status(400).json({
                                     ok:false,
                                     err
                                 });
                             }


                             Material.findById(MaterialDB.material, (err, material)=>{
                                if( err ){
                                 return res.status(400).json({
                                         ok:false,
                                         err
                                     });
                                 }

                                 names = `${material.nombre} (${material.marca})`;
                                 if(material.ancho){
                                    names = `${material.nombre} ${material.ancho} x ${material.largo} (${material.marca}) - Paleta: ${body.lotes[i].codigo}`;
                                 }
                                 if(material.grupo == "61fd54e2d9115415a4416f17" || material.grupo == "61fd6300d9115415a4416f60"){
                                 names = `${material.nombre} (${material.marca}) - Lata: ${body.lotes[i].codigo}`;
                                 }

                                

                                //  materiales.push(names);
                                 materiales[i] = names;
                                //  console.log(materiales)
                                 lotes[i] = body.lotes[i].lote;
                                // lotes.push(body.lotes[i].lote)
                                //  console.log(lotes)
                                if(material.unidad == 'Und'){
                                    body.lotes[i].solicitado = Math.ceil(body.lotes[i].solicitado);
                                }
                                if(body.lotes[i].unidad === "PALETA" || body.lotes[i].unidad === "Paleta"){
                                    solicitados[i] = `${body.lotes[i].solicitado} Und`
                                    // solicitados.push(`${body.lotes[i].solicitado} Und - ${material.neto}${material.unidad}`)
                                    body.lotes[i].unidad = 'Und'
                                }else{
                                    if(material.grupo == "61fd54e2d9115415a4416f17" || material.grupo == "61fd6300d9115415a4416f60"){
                                        solicitados[i]= `${body.lotes[i].unidad} - ${body.lotes[i].EA_Cantidad} ${material.unidad}`
                                        body.lotes[i].solicitado = body.lotes[i].EA_Cantidad
                                        // console.log(body.lotes[i].EA_Cantidad)
                                    }else{
                                        solicitados[i] = `${body.lotes[i].unidad} - ${body.lotes[i].solicitado} ${material.unidad}`
                                    }
                                }
                                x++
                                
                               

                                data = `<tr><td>${names}</td>
                                <td>${body.lotes[i].lote}</td>
                                <td>${body.lotes[i].unidad} - ${body.lotes[i].solicitado} ${material.unidad}</td></tr>`
                                lotes_ = lotes_ + data;

                                // data = `<tr><td>${names}</td>
                                // <td>${body.lotes[i].lote}</td>
                                // <td>${body.lotes[i].solicitado} ${body.lotes[i].unidad} - ${material.neto}${material.unidad}</td></tr>`
                                // lotes_ = lotes_ + data;

                                

                        //         // //console.log({
                        //         //     material:material._id,
                        //         //     lote: body.lotes[i].lote,
                        //         //     codigo: body.lote[i].codigo,
                        //         //     cantidad: body.lotes[i].solicitado
                        //         // })

                                material__.push({
                                   material:material._id,
                                   lote: body.lotes[i].lote,
                                   codigo: body.lotes[i].codigo,
                                   cantidad: body.lotes[i].solicitado,
                                   EA_Cantidad:body.lotes[i].EA_Cantidad
                                })

                        //         // //console.log(material__)

                                 let final = body.lotes.length;
                                 if(materiales.length == body.lotes.length && lotes.length == body.lotes.length && solicitados.length == body.lotes.length){

                                    // console.log(lotes_)
                                    // console.log(lotes_)

                                    // let nulos = materiales.find(null)
                                    if(x == final){
                                        // console.log(solicitados)
                                        const data = new Lote({
                                            orden:body.orden,
                                            material:material__
                                        }).save();
                                        orden.push(data)
                                        //console.log(orden)
                                        FAL005(body.orden,body.solicitud, lotes_, materiales,lotes,solicitados)
                                        res.json('ok')
                                    }
                                    
                                    // console.log(materiales,'_' ,lotes)

                                }
                             })
                        })


        })


        // //console.log(i)
    }

})

app.post('/api/materiales/:id', (req, res)=>{
    const id = req.params.id;
    const body = req.body

    Material.findByIdAndUpdate(id, {eliminado:true}, (err, eliminado)=>{
        if( err ){
            return res.status(400).json({
                ok:false,
                err
            });
        }

        const NuevoDescuento = new Descuentos({
            material:id,
            descuento:eliminado.cantidad,
            razon: body.motivo
        }).save((err, modificacion) =>{

            if( err ){
                return res.status(400).json({
                    ok:false,
                    err
                });
            }

            res.json({
                ok:'eliminado'
            })
        });

    })
})

app.get('/api/devoluciones', (req, res)=>{
    Lote .find({})
         .populate('material.material')
         .exec((err, lotes)=>{
            if( err ){
                return res.status(400).json({
                    ok:false,
                    err
                });
            }

            res.json(lotes)
         })
})

app.post('/api/materialess/reporte', (req, res)=>{

    const body = req.body;

    const fechaInicio = body.desde;

    const fechaInicial = body.hasta;
    const fechaFinal = fechaInicial.substring(0,8).concat(Number(fechaInicial.substring(8)));

    Descuentos.find({$and: [{fecha: {$gte: new Date(fechaInicio)}},{fecha: {$lt: new Date(fechaFinal)}}]})
                .populate('material')
                .exec((err, descuentosDB) => {
                    if( err ){
                        return res.status(400).json({
                            ok:false,
                            err
                        });
                    }

                    Ingresos.find({$and: [{fecha: {$gte: new Date(fechaInicio)}},{fecha: {$lt: new Date(fechaFinal)}}]})
                                .populate('material')
                                .exec((err, ingresosDB)=>{
                                    if( err ){
                                        return res.status(400).json({
                                            ok:false,
                                            err
                                        });
                                    }

                                    Material.find({eliminado:false})
                                                .populate('grupo')
                                                .sort('grupo.nombre')
                                                .exec((err, materialesDB)=>{

                                                    if( err ){
                                                        return res.status(400).json({
                                                            ok:false,
                                                            err
                                                        });
                                                    }

                                                    const total = {
                                                        descuentos:descuentosDB,
                                                        ingresos:ingresosDB,
                                                        almacen:materialesDB
                                                    }

                                                    res.json(total)
                                                })


                                })

                })
})




module.exports = app;