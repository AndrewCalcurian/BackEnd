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
    let sort;
    let orden__;
    
    // console.log(body.desde,'/',body.hasta);

    let desde = moment(body.desde)
    let hasta = moment(body.hasta)


    if(body.op){
        sort = {sort:body.op}
        orden__ = {orden:body.op}

    }else{
        sort = {fecha:{$gte:desde,$lt:hasta}}
        orden__ = {fecha:{$gte:desde,$lt:hasta}}
        // Orden.find({fecha:{
    //     $gte:desde,
    //     $lt: hasta
    // }}, 
    }

    if(body.cliente){
        sort = {cliente:body.cliente.cliente}
    }

    let desde_f = moment(body.desde).format('DD-MM-yyyy')
    let hasta_f = moment(body.hasta).format('DD-MM-yyyy')

    let despachos = [];
    let requisiciones = [];
    let devoluciones = [];
    let trabajos = [];
    let gestiones = [];
    let lotes = [];
    let Adicionales = [];
    let Tintas = [];
    let Sustratos = [];
    let Papel_Asignado = 0;
    let Carton_Asignado = 0;
    let Ordenes = []
    let Sustratos_adicionales = []
    let x = 0;

    let Caja = []

    let Pega = [];
    let Total_Pega = 0;

    let Barniz = []
    let Barniz_acuoso = []
    let Total_barniz = 0;
    let Total_barniz_acuoso = 0;

    let adicional_Amarillo = 0;
    let adicional_Cyan = 0;
    let adicional_Magenta = 0;
    let adicional_Negro = 0;
    let adicional_Pantone = 0;

    let Devolucion_Amarillo = 0;
    let Devolucion_Cyan = 0;
    let Devolucion_Magenta = 0;
    let Devolucion_Negro = 0;
    let Devolucion_Pantone = 0;

    let Amarillo = 0;
    let Cyan = 0;
    let Magenta = 0;
    let Negro = 0;
    let Pantone = 0;

    let Total_Tintas_Adicionales = 0;
    let Total_Tintas = 0;
    let total_tintas_devueltas = 0;

    let data = []
    let orderss = []

    let devoluciones_totales = [];

    // Orden.find({fecha:{
    //     $gte:desde,
    //     $lt: hasta
    // }}, 
    Orden.find(sort, 
    (err, orden)=>{
        if( err ){
            return res.status(400).json({
                ok:false,
                err
                });
            }
    
            Ordenes= orden;
    if(orden.length < 1){
        res.json({mensaje:'No se encontró orden de producción'})
        return
    }
    for(let i=0;i<orden.length;i++){
        Devolucion.find({orden:orden[i].sort})
        .populate('filtrado.material')
        .exec((err, DevolucionesDB)=>{
            if( err ){
                return res.status(400).json({
                    ok:false,
                    err
                });
            }
            // for(let x=0; x<DevolucionesDB.length; x++){
            //     devoluciones.push(DevolucionesDB[x])
            // }
        })
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

        })
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
                // console.log(Trabajos[n])
                trabajos.push(Trabajos[n])
            }

        })

        
        if(body.cliente){
            orderss.push(orden[i].sort)
            orden__ = {orden:{$in:orderss}}
        }
    }

    Devolucion.find(orden__)
    // Devolucion.find({fecha:{$gte: desde,$lt: hasta}})
    .populate('filtrado.material')
    .exec((err, DevolucionesDB)=>{
        if( err ){
            return res.status(400).json({
                ok:false,
                err
            });
        }

        for(let i=0;i<DevolucionesDB.length;i++){
            devoluciones.push(DevolucionesDB[i])
            for(let x = 0;x<DevolucionesDB[i].filtrado.length;x++){
                let material = DevolucionesDB[i].filtrado[x].material
                let cantidad = DevolucionesDB[i].filtrado[x].cantidad
                if(material.grupo == '61fd54e2d9115415a4416f17'){
                    total_tintas_devueltas = Number(total_tintas_devueltas) + cantidad;
                    total_tintas_devueltas = total_tintas_devueltas.toFixed(2)
                    switch(material.color){
                        case 'Amarillo':
                            Devolucion_Amarillo = Devolucion_Amarillo + cantidad
                        break;
                        case 'Cyan':
                            Devolucion_Cyan = Devolucion_Cyan + cantidad
                        break;
                        case 'Magenta':
                            Devolucion_Magenta = Devolucion_Magenta + cantidad
                        break;
                        case 'Negro':
                            Devolucion_Negro = Devolucion_Negro + cantidad
                        break;
                        default:
                            Devolucion_Pantone = Devolucion_Pantone + cantidad
                        break;
                    }
                }else{
                    let index = devoluciones_totales.findIndex(x=>x.id === material._id)
                    if(index == -1){
                        devoluciones_totales.push({Nombre:material.nombre,Marca:material.marca,Cantidad:cantidad,id:material._id,Ancho:material.ancho,Largo:material.largo,Calibre:material.calibre,Gramaje:material.gramaje})
                    }else{
                        devoluciones_totales[index].Cantidad  = Number(devoluciones_totales[index].Cantidad)+Number(cantidad);
                        devoluciones_totales[index].Cantidad = Number(devoluciones_totales[index].Cantidad).toFixed(2)
                    }
                }
                // DEVOLUCIONES TOTALES
                // console.log(devoluciones_totales)
                // DEVOLUCIONES TOTALES
            }
        }
    })

Lotes.find(orden__)
// Lotes.find({fecha:{$gte: desde,$lt: hasta}})
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
            for(let n_i = 0; n_i<adcionalesDB[n].material.length; n_i++){
                let orden = adcionalesDB[n].orden
                let material_adicional = adcionalesDB[n].material[n_i].material
                let cantidad = Number((adcionalesDB[n].material[n_i].EA_Cantidad).toFixed(2))
                if(material_adicional.grupo == '61fd54e2d9115415a4416f17'){ 
                    if(orden === '#'){
                        switch(material_adicional.color){
                            case 'Amarillo':
                                adicional_Amarillo = adicional_Amarillo + cantidad
                            break;
                            case 'Cyan':
                                adicional_Cyan = adicional_Cyan + cantidad
                            break;
                            case 'Magenta':
                                adicional_Magenta = adicional_Magenta + cantidad
                            break;
                            case 'Negro':
                                adicional_Negro = adicional_Negro + cantidad
                            break;
                            default:
                                adicional_Pantone = adicional_Pantone + cantidad
                            break;
                        }
                        Total_Tintas_Adicionales = Total_Tintas_Adicionales + cantidad
                        let Existencia = Adicionales.findIndex(x=> x.Nombre === material_adicional.nombre && x.Marca === material_adicional.marca)
                        if(Existencia != -1){
                            Adicionales[Existencia].Cantidad = Number(Adicionales[Existencia].Cantidad)+Number(cantidad)
                            Adicionales[Existencia].Cantidad = (Adicionales[Existencia].Cantidad).toFixed(2)
                        }else{
                            Adicionales.push({Nombre:material_adicional.nombre,
                                             Marca:material_adicional.marca,
                                             Cantidad:cantidad})
                        }
                    }else{
                        switch(material_adicional.color){
                            case 'Amarillo':
                                Amarillo = Amarillo + cantidad
                            break;
                            case 'Cyan':
                                Cyan = Cyan + cantidad
                            break;
                            case 'Magenta':
                                Magenta = Magenta + cantidad
                            break;
                            case 'Negro':
                                Negro = Negro + cantidad
                            break;
                            default:
                                Pantone = Pantone + cantidad
                            break;
                        }
                        Total_Tintas = Total_Tintas + cantidad
                        let Existencia = Tintas.findIndex(x=> x.Nombre === material_adicional.nombre && x.Marca === material_adicional.marca)
                        if(Existencia != -1){
                            Tintas[Existencia].Cantidad = Number(Tintas[Existencia].Cantidad)+Number(cantidad)
                            Tintas[Existencia].Cantidad = (Tintas[Existencia].Cantidad).toFixed(2)
                        }else{
                            Tintas.push({Nombre:material_adicional.nombre,
                                             Marca:material_adicional.marca,
                                             Cantidad:cantidad})
                        }
                    }
                }
                if(material_adicional.grupo == '61f92a1f2126d717f004cca6'){
                        let cantidad = (Number(adcionalesDB[n].material[n_i].cantidad)).toFixed(2)
                        let Existencia = Sustratos.findIndex(x=> x.Nombre === material_adicional.nombre && x.Marca === material_adicional.marca && x.Ancho === material_adicional.ancho && x.Largo === material_adicional.largo && x.Calibre === material_adicional.calibre && x.Gramaje === material_adicional.gramaje)
                        let Peso = cantidad*material_adicional.gramaje*material_adicional.ancho*material_adicional.largo;
                        Peso = Peso/ 10000000000;
                        Peso = Peso.toFixed(2);
                        
                        if(Number(material_adicional.gramaje) < 100){
                            Papel_Asignado = Number(Papel_Asignado) + Number(Peso)
                            Papel_Asignado = Papel_Asignado.toFixed(2)
                        }
                        else{
                            Carton_Asignado = Number(Carton_Asignado) + Number(Peso)
                            Carton_Asignado = Carton_Asignado.toFixed(2)
                        }
                        if(Existencia != -1){
                            Sustratos[Existencia].Cantidad = Number(Sustratos[Existencia].Cantidad)+Number(cantidad)
                            Sustratos[Existencia].Cantidad = (Sustratos[Existencia].Cantidad).toFixed(2)
                            Sustratos[Existencia].Peso = Number(Sustratos[Existencia].Peso) + Number(Peso)
                            Sustratos[Existencia].Peso = Sustratos[Existencia].Peso.toFixed(2)
                        }else{
                            Sustratos.push({Nombre:material_adicional.nombre,
                                             Marca:material_adicional.marca,
                                             Ancho:material_adicional.ancho,
                                             Largo:material_adicional.largo,
                                             Gramaje:material_adicional.gramaje,
                                             Calibre:material_adicional.calibre,
                                             Cantidad:cantidad,
                                             Peso})
                        }
                    
                }
                if(material_adicional.grupo == '61fd6300d9115415a4416f60'){
                    let material_adicional = adcionalesDB[n].material[n_i].material
                    let cantidad = Number((adcionalesDB[n].material[n_i].EA_Cantidad).toFixed(2))

                    let Existencia = Barniz.findIndex(x=> x.Nombre === material_adicional.nombre && x.Marca === material_adicional.marca)
                        if(Existencia != -1){
                            Barniz[Existencia].Cantidad = Number(Barniz[Existencia].Cantidad)+Number(cantidad)
                            Barniz[Existencia].Cantidad = (Barniz[Existencia].Cantidad).toFixed(2)
                        }else{
                            Barniz.push({Nombre:material_adicional.nombre,
                                             Marca:material_adicional.marca,
                                             Cantidad:cantidad})
                        }
                    Total_barniz = Number(Total_barniz) + Number(cantidad);

                }
                if(material_adicional.grupo == '63625feecd436f1a90a1ea7d'){
                    let material_adicional = adcionalesDB[n].material[n_i].material
                    let cantidad = Number((adcionalesDB[n].material[n_i].EA_Cantidad).toFixed(2))
                    let Existencia = Barniz_acuoso.findIndex(x=> x.Nombre === material_adicional.nombre && x.Marca === material_adicional.marca)
                        if(Existencia != -1){
                            Barniz_acuoso[Existencia].Cantidad = Number(Barniz_acuoso[Existencia].Cantidad)+Number(cantidad * 217.72)
                            Barniz_acuoso[Existencia].Cantidad = Barniz_acuoso[Existencia].Cantidad
                        }else{
                            Barniz_acuoso.push({Nombre:material_adicional.nombre,
                                             Marca:material_adicional.marca,
                                             Cantidad:Number(cantidad * 217.72)})
                        }
                    Total_barniz_acuoso = Number(Total_barniz_acuoso) + Number(cantidad * 217.72);
                    Total_barniz_acuoso = (Total_barniz_acuoso)

                }
                if(material_adicional.grupo == '61fd72ecd9115415a4416f68'){
                    let material_adicional = adcionalesDB[n].material[n_i].material
                    let cantidad = (Number(adcionalesDB[n].material[n_i].cantidad)).toFixed(2)
                    // console.log(adcionalesDB[n].material[n_i])
                    // console.log(material_adicional.nombre,'-',material_adicional.neto)
                    let Existencia = Pega.findIndex(x=> x.Nombre === material_adicional.nombre && x.Marca === material_adicional.marca)
                        if(Existencia != -1){
                            Pega[Existencia].Cantidad = Number(Pega[Existencia].Cantidad)+Number(cantidad*20)
                            Pega[Existencia].Cantidad = Pega[Existencia].Cantidad
                        }else{
                            Pega.push({Nombre:material_adicional.nombre,
                                             Marca:material_adicional.marca,
                                             Cantidad:Number(cantidad*20)})
                        }
                    Total_Pega = Number(Total_Pega) + Number(cantidad*20);
                    Total_Pega = (Total_Pega)

                }
                if(material_adicional.grupo == '61fd7a8ed9115415a4416f74'){
                    let material_adicional = adcionalesDB[n].material[n_i].material
                    // console.log(adcionalesDB[n].material[n_i])
                    let cantidad = (Number(adcionalesDB[n].material[n_i].cantidad)).toFixed(2)
                    // console.log(material_adicional.nombre,'-',material_adicional.neto)
                    let Existencia = Caja.findIndex(x=> x.Nombre === material_adicional.nombre)
                        if(Existencia != -1){
                            Caja[Existencia].Cantidad = Number(Caja[Existencia].Cantidad)+Number(cantidad)
                            Caja[Existencia].Cantidad = Caja[Existencia].Cantidad
                        }else{
                            Caja.push({Nombre:material_adicional.nombre,
                                             Cantidad:Number(cantidad)})
                        }

                }
            }
        // if(adcionalesDB[n].material.material.grupo == '61fd54e2d9115415a4416f17'){
        //         console.log('yes')
        //     }
        Tintas = Tintas.sort(function(a, b) {
            if(a.Nombre.toLowerCase() < b.Nombre.toLowerCase()) return -1
            if(a.Nombre.toLowerCase() > b.Nombre.toLowerCase()) return 1
            return 0
    
          })
        Adicionales = Adicionales.sort(function(a, b) {
            if(a.Nombre.toLowerCase() < b.Nombre.toLowerCase()) return -1
            if(a.Nombre.toLowerCase() > b.Nombre.toLowerCase()) return 1
            return 0
    
          })

          Caja = Caja.sort(function(a, b) {
            if(a.Nombre.toLowerCase() < b.Nombre.toLowerCase()) return -1
            if(a.Nombre.toLowerCase() > b.Nombre.toLowerCase()) return 1
            return 0
    
          })
        data = {
            Ordenes,
            devoluciones,
            devoluciones_totales,
            Lotes:adcionalesDB,
            Gestiones:gestiones,
            Trabajos:trabajos,
            Caja:{
                Caja
            },
            Pega:{
                Pega,
                Total_Pega
            },
            Barniz:{
                Barniz,
                Total_Barniz:(Total_barniz).toFixed(2),
                Barniz_acuoso,
                Total_barniz_acuoso:(Total_barniz_acuoso).toFixed(2)
            },
            Suma_de_tintas:(Number(Total_Tintas_Adicionales.toFixed(2)) + Number(Total_Tintas.toFixed(2))).toFixed(2),
            Colores_devueltos:{
                Amarillo:(Devolucion_Amarillo).toFixed(2),
                Cyan:(Devolucion_Cyan).toFixed(2),
                Magenta:(Devolucion_Magenta).toFixed(2),
                Negro:(Devolucion_Negro).toFixed(2),
                Pantone:(Devolucion_Pantone).toFixed(2)
            },
            total_tintas_devueltas,
            adicionales:{
            Tintas:Adicionales,
            detalle_tintas:{
                Amarillo:(adicional_Amarillo).toFixed(2),
                Cyan:(adicional_Cyan).toFixed(2),
                Magenta:(adicional_Magenta).toFixed(2),
                Negro:(adicional_Negro).toFixed(2),
                Pantone:(adicional_Pantone).toFixed(2)
            },
            Total:Total_Tintas_Adicionales.toFixed(2),
            },
            asignados:{
            Tintas,
            detalle_tintas:{
                Amarillo:(Amarillo).toFixed(2),
                Cyan:(Cyan).toFixed(2),
                Magenta:(Magenta).toFixed(2),
                Negro:(Negro).toFixed(2),
                Pantone:(Pantone).toFixed(2)
            },
            Total:Total_Tintas.toFixed(2),
            Sustratos,
            Papel:Papel_Asignado,
            Carton:Carton_Asignado
            }
        }
}

res.json(data)
})
})

    // Orden.find({fecha:{
    //     $gte: desde,
    //     $lt: hasta
    // }}, (err, orden)=>{
    //     if( err ){
    //         return res.status(400).json({
    //             ok:false,
    //             err
    //         });
    //     }

    //     for(let i = 0; i<orden.length; i++){
    //         Despacho.find({"estado":"despachado", "despacho.op":orden[i].sort}, (err, DespachoDB)=>{
    //             if( err ){
    //                 return res.status(400).json({
    //                     ok:false,
    //                     err
    //                 });
    //             }
    //             for(let n = 0; n<DespachoDB.length; n++){
    //                 despachos.push(DespachoDB[n])
    //             }

    //             Trabajo.find({orden:orden[i]._id})
    //                     .populate('maquina')
    //                     .sort('pos')
    //                     .exec((err, Trabajos)=>{
    //                 if( err ){
    //                     return res.status(400).json({
    //                         ok:false,
    //                         err
    //                     });
    //                 }
    //                 for(let n = 0; n<Trabajos.length; n++){
    //                     trabajos.push(Trabajos[n])

    //                 }
                    
    //                 Gestiones.find({op:orden[i]._id}, (err, GestinesDB)=>{
    //                     if( err ){
    //                         return res.status(400).json({
    //                             ok:false,
    //                             err
    //                         });
    //                     }

    //                     for(let n = 0; n<GestinesDB.length; n++){
    //                         gestiones.push(GestinesDB[n])
    //                     }

    //                     Requisicion.find({sort:orden[i].sort}, (err, RequisicionsDB)=>{
    //                         if( err ){
    //                             return res.status(400).json({
    //                                 ok:false,
    //                                 err
    //                             });
    //                         }

    //                         for(let n = 0; n<RequisicionsDB.length; n++){
    //                             requisiciones.push(RequisicionsDB[n])
    //                         }

    //                         Devolucion.find({orden:orden[i].sort})
    //                             .populate('filtrado.material')
    //                             .exec((err, DevolucionesDB)=>{
    //                             if( err ){
    //                                 return res.status(400).json({
    //                                     ok:false,
    //                                     err
    //                                 });
    //                             }

    //                             for(let n = 0; n<DevolucionesDB.length; n++){
    //                                 devoluciones.push(DevolucionesDB[n])
    //                             }

    //                             Lotes.find({orden:orden[i].sort})
    //                                 .populate('material.material')
    //                                 .exec((err, LotesDB)=>{
    //                                 if( err ){
    //                                     return res.status(400).json({
    //                                         ok:false,
    //                                         err
    //                                     });
    //                                 }

    //                                 x++
    //                                 for(let n = 0; n<LotesDB.length; n++){
    //                                     lotes.push(LotesDB[n])
    //                                 }

                                    

    //                                     if(x == orden.length){
    //                                         res.json({orden,despachos,trabajos,gestiones,requisiciones,devoluciones,lotes,Adicionales})
    //                                     }

                                    
    //                             })

    //                         })

    //                     })

    //                 })


    //             })

                
    //         })

    //     }

        // Despacho.find((err, despachos)=>{
        //     if( err ){
        //         return res.status(400).json({
        //             ok:false,
        //             err
        //         });
        //     }
        
            


        //     res.json({orden,despachos})
        // })
        
    // })

})

module.exports = app;