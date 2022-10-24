const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let DespachoSchema = new Schema(
    {   
        estado:{
            type:String,
            default:'pendiente'
        },
        fecha:{
            type:String
        },
        despacho:[{

            op:{
                type:String
            },
            producto:{
                type:String
            },
            cantidad:{
                type:Number
            },
            oc:{
                type:String
            },
            destino:{
                type:String
            }
        }]
    }
);

module.exports = mongoose.model('despacho', DespachoSchema)
            
            // op:select.sort,
            // producto:select.producto.producto,
            // cantidad:select.cantidad_o,
            // oc:select.orden,
            // destino:select.almacen