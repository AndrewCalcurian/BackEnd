const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let AlmacenadoSchema = new Schema([{

    material:{
        type:Schema.Types.ObjectId,
        ref: 'material'
    },
    codigo:{
        type:String,
        required:true
    },
    lote:{
        type:String,
        required:true
    },
    cantidad:{
        type:String,
        required:true
    }

}]);


module.exports = mongoose.model('almacenado', AlmacenadoSchema)