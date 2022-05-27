const mongoose = require('mongoose');

const receitaSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.Mixed,
    nome: {
        type: String,
        require: true
    },
    ingredientes: {
        type: String,
        require: true
    },
    preparacao: {
        type: String,
        require: true
    },
    tipo: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('receitas', receitaSchema);