const express = require('express');

const Material = require('../database/models/material.model');
const Materia = require('../database/models/mp.model');
const Sustrato = require('../database/models/sustrato.model');
const Orden = require('../database/models/orden.model');
const Descuentos = require('../database/models/descuentos.model');
const Ingresos = require('../database/models/ingresos.model');
const Almacenado = require('../database/models/almacenado.model');
const Requisicion = require('../database/models/requisicion.model');

const {FAL005} = require('../middlewares/docs/FAL-005.pdf');
const app = express();

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

app.post('/api/material/descuento', (req, res)=>{

    let body = req.body;

    let lotes_ = '';
    let names;

    let set = new Set( body.lotes.map( JSON.stringify ) )
    body.lotes = Array.from( set ).map( JSON.parse );

    let materiales = [];
    let lotes = [];
    let solicitados = [];

    for(let i= 0; i<body.lotes.length; i++){

        Almacenado.findOneAndUpdate({lote:body.lotes[i].lote,codigo:body.lotes[i].codigo},{cantidad:body.lotes[i].resta}, (err, MaterialDB)=>{
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
                    names = `${material.nombre} ${material.ancho} x ${material.largo} (${material.marca})`;
                 }

                 materiales.push(names);
                 lotes.push(body.lotes[i].lote);
                 solicitados.push(`${body.lotes[i].solicitado}${body.lotes[i].unidad}`)

                 data = `<tr><td>${names}</td>
                 <td>${body.lotes[i].lote}</td>
                 <td>${body.lotes[i].solicitado}${body.lotes[i].unidad}</td></tr>`
                 lotes_ = lotes_ + data;

                
     
                 let final = body.lotes.length - 1;
                 if(i == final){
                     FAL005(body.orden,body.solicitud, lotes_, materiales,lotes,solicitados)      
                 }
             })
        })
        }
        Orden.findOneAndUpdate({sort:body.orden}, {estado:'activo'}, (err, modificado)=>{
            if( err ){
            return res.status(400).json({
                    ok:false,
                    err
                });
            }

            console.log(body)

            Requisicion.findOneAndDelete({sort:body.orden}, (err, requi)=>{
                if( err ){
                    return res.status(400).json({
                            ok:false,
                            err
                        });
                    }
            })

            res.json({ok:'ok'})
            return
            
            
    });
    return
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