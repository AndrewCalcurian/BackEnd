const express = require('express');
const app = express();

var moment = require('moment'); // require

const Despacho = require('../database/models/despacho.model')
const Orden = require('../database/models/orden.model');

const { _despacho_ } = require('../middlewares/emails/despacho.email')

app.get('/api/despacho', (req,res)=>{
    Despacho.find({estado:'pendiente'}, (err, DespachosDB)=>{
        if( err ){
            return res.status(400).json({
                ok:false,
                err
            });
        }

        res.json(DespachosDB)
    })
});

app.get('/api/despacho/:orden', (req, res)=>{
    let orden = req.params.orden

    //console.log(orden)

    Despacho.find({"estado":"despachado", "despacho.op":orden}, (err, DespachoDB)=>{
        if( err ){
            return res.status(400).json({
                ok:false,
                err
            });
        }
        res.json(DespachoDB)
    })
});

app.put('/api/despachos/:id', (req, res)=>{
    let id = req.params.id;
    let body = req.body;

    Despacho.findByIdAndUpdate(id, body, (err, edicion)=>{
        if( err ){
            return res.status(400).json({
                ok:false,
                err
            });
        }
        res.json('ok')
    })
})

app.put('/api/despacho/:id', (req, res)=>{
    let id = req.params.id;
    let body = req.body;
    let hoy = moment().format('DD-MM-yyyy')
    let limite  = 0

    // //console.log(body)

    let calculo = new Promise(function(menor, mayor){
        for(let i=0; i<body.despacho.length; i++)
        {

            Despacho.find({'despacho.op':body.despacho[i].op}, (err, despachos_)=>{
                let cantidad = 0;
                for(let x=0;x<despachos_.length;x++){
                    let _despacho = despachos_[x].despacho.filter(x=> x.op === body.despacho[i].op)

                        for(let y=0; y< _despacho.length; y++){
                            cantidad = cantidad + _despacho[y].cantidad                
                        }

                        let fin = despachos_.length - 1;

                        if(x === fin){
                            Orden.findOne({sort:body.despacho[i].op}, (err, ordenDB) =>{
                                let porcentaje = cantidad * 100 / ordenDB.cantidad
                                if(porcentaje > 110){
                                    limite  = body.despacho[i].op
                                    // //console.log(limite,'menor')

                                }
                                if(i === body.despacho.length-1){
                                    if(limite > 0){
                                        menor('menor')
                                    }else{
                                        mayor('mayor')
                                    }
                                }
                            })
                        }
                    

                }
            });
        }
    })

    calculo.then(
        function(value) {res.json({orden:limite});},
        function(error) {
            Despacho.findByIdAndUpdate(id,{estado:'despachado',fecha:hoy,despacho:body.despacho}, (err, DespachosDB)=>{
                    if( err ){
                        return res.status(400).json({
                            ok:false,
                            err
                        });
                    }
                    res.json('ok')
                    })
        }
    );

    // for(let i=0; i<body.despacho.length; i++)
    // {

    //     Despacho.find({'despacho.op':body.despacho[i].op}, (err, despachos_)=>{
    //         if( err ){
    //             return res.status(400).json({
    //                 ok:false,
    //                 err
    //             });
    //         }

    //         let cantidad = 0;
    //         for(let x=0;x<despachos_.length;x++){

    //             let _despacho = despachos_[x].despacho.filter(x=> x.op === body.despacho[i].op)

    //             for(let y=0; y< _despacho.length; y++){

    //                 cantidad = cantidad + _despacho[y].cantidad

                    
    //             }
                
    //             let fin = despachos_.length - 1;
    //             if(x === fin){
    //                 // //console.log(body.despacho[i].op)
    //                 // //console.log(cantidad)

    //                 Orden.findOne({sort:body.despacho[i].op}, (err, ordenDB) =>{

    //                     if( err ){
    //                         return res.status(400).json({
    //                             ok:false,
    //                             err
    //                         });
    //                     }
            
    //                     let porcentaje = cantidad * 100 / ordenDB.cantidad
            
    //                     //console.log(porcentaje)
    //                     //console.log(limite)
    //                     if(porcentaje > 110){ 
    //                         limite  = body.despacho[i].op
    //                         //console.log(limite,'despachado')
                            
                            
    //                         res.json({
    //                             orden:body.despacho[i].op
    //                         });
    //                         i = 100
    //                         x = 100
    //                         //  return
    //                         // return res.json({orden:body.despacho[i].op})  
    //                     }else{
    //                         if(i ===  body.despacho.length - 1)
    //                         {
    //                             Despacho.findByIdAndUpdate(id,{estado:'despachado',fecha:hoy,despacho:body.despacho}, (err, DespachosDB)=>{
    //                                 if( err ){
    //                                     return res.status(400).json({
    //                                         ok:false,
    //                                         err
    //                                     });
    //                                 }
                                    
                                    
                                    
    //                             })
    //                         }
    //                     }
    //                 })
    //             }
                

    //         }
            
    //         // let final = body.despacho.length - 1;
    //         // if( i === final){
    //         //     if( limite === 0){
//         //         Despacho.findByIdAndUpdate(id,{estado:'despachado',fecha:hoy,despacho:body.despacho}, (err, DespachosDB)=>{
//         //             if( err ){
//         //                 return res.status(400).json({
//         //                     ok:false,
//         //                     err
//         //                 });
//         //             }

//         //             res.json('ok')

//         //         })
                    
    //         //     }else{
    //         //         res.json({error:limite})
    //         //     }
                
    //         // }
    //     })
    // }

    // res.json('ok')


    // Despacho.findByIdAndUpdate(id,{estado:'despachado',fecha:hoy,despacho:body.despacho}, (err, DespachosDB)=>{
    //     if( err ){
    //          return res.status(400).json({
    //              ok:false,
    //              err
    //          });
    //      }

    //      res.json(DespachosDB)
    // })
})

app.post('/api/despacho', (req, res)=>{
    let body = req.body;

    //console.log(body)

    const NuevoDespacho = new Despacho({
        fecha:body.fecha,
        despacho:body.despacho
    })
    let data = '';
    let despacho_ = '';

    for(let i=0; i< body.despacho.length; i++){
        data = `<tr>
        <td>${body.despacho[i].op}</td>
        <td>${body.despacho[i].producto}</td>
        <td>${body.despacho[i].cantidad}</td>
        <td>${body.despacho[i].oc}</td>
        <td>${body.despacho[i].destino}</td>
        </tr>`
        despacho_ = despacho_ + data;
    }

    _despacho_(despacho_, body.fecha, 'logistica@poligraficaindustrial.com,luis.malave@poligraficaindustrial.com,raul.diaz@poligraficaindustrial.com,calcurianandres@gmail.com, jaime.sanjuan@poligraficaindustrial.com, zuleima.vela@poligraficaindustrial.com,calcurian.andrew@gmail.com,enida.aponte@poligraficaindustrial.com,carlos.mejias@poligraficaindustrial.com,freddy.burgos@poligraficaindustrial.com,yraida.baptista@poligraficaindustrial.com,attilio.granone@poligraficaindustrial.com')

    NuevoDespacho.save((err, DespachoDB)=>{
        if( err ){
            return res.status(400).json({
                ok:false,
                err
            });
        }

        res.json(DespachoDB)
    })
});

module.exports = app;