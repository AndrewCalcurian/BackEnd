const mongoose = require('mongoose');

let Schema = mongoose.Schema;

var LoteSchema = new mongoose.Schema({
    orden: {type: String, required:true},
    material: [
        {
            material:{
                type:Schema.Types.ObjectId,
                ref: 'material'
            },
            lote: {type:String},
            codigo:{type:String},
            cantidad:{type:String}
        }
    ]
});

module.exports = mongoose.model('lote', LoteSchema)