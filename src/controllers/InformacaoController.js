const Informacao = require('../models/Informacao');
const EmailController = require('./EmailController');

module.exports = {

    async list(req,res){
        let informacoes = await Informacao.find()
        informacoes.forEach(informacoes =>{
            informacoes.imagem = 'http://localhost:3000/imagens/' + informacoes.imagem
        })
        
        res.json(informacoes);
    },
    async create(req,res){
        
        const dados = req.body
        const imagem = req.files.imagem
        const novainformacao = {...dados,'imagem':imagem.name}
        const infocriada = await Informacao.create(novainformacao)
        if(infocriada)
            imagem.mv('./uploads/'+ imagem.name)
        res.json(infocriada)
    },
    async opiniao(req,res){
        const sugestao = await EmailController.sendMail(req.body)
        res.json({message:'Opiniao Enviado',sugestao : sugestao})
    }   
}