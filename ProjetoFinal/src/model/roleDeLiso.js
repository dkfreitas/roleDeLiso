const mongoose = require('mongoose')

const roleSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    
    nome: {
        type: String,
        required: true,
    },
        
    funcionamento: {
        type: String,
        required: true,
    },
    
    custo: {
        type: String,
        required: true
    },
    
    descricao: {
        type: String,
        required: true
    },
    
    tipo: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model('role', roleSchema)