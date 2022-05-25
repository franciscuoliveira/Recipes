const mongoose = require('mongoose');

const VeiculoSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.Mixed,
    marca: {
        type: String,
        require: true
    },
    modelo: {
        type: String,
        require: true
    },
    ano: {
        type: Number,
        require: true
    },
    tipo: {
        type: String,
        require: true
    },
    precoCompra: {
        type: Number,
        require: true
    },
    dataCompra: {
        type: String,
        require: true
    },
    
})

const VendaSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.Mixed,
    marca: {
        type: String,
        require: true
    },
    modelo: {
        type: String,
        require: true
    },
    ano: {
        type: Number,
        require: true
    },
    tipo: {
        type: String,
        require: true
    },
    precoVenda: {
        type: Number,
        require: true
    },
    dataVenda: {
        type: String,
        require: true
    },
})

module.exports = mongoose.model('Veiculos', VeiculoSchema);
module.exports = mongoose.model('Venda', VendaSchema);