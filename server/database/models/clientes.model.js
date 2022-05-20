const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let ClienteSchema = new Schema([{

    nombre:{
        type:String,
        required:true
    },
    codigo:{
        type:String,
        required:true
    },
    almacenes:{
        type:Array,
    }

}]);


module.exports = mongoose.model('cliente', ClienteSchema)