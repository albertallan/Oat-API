const mongoose = require('mongoose')

const InformacaoSchema = new mongoose.Schema({

    titulo:{
        type: 'string'
    },
    imagem:{
        type: 'string'
    },
    descricao:{
        type: 'string'
    }

})

const Informacao = mongoose.model('Informacao', InformacaoSchema)

module.exports = Informacao