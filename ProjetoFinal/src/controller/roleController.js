const Role = require ('../model/roleDeLiso')
const mongoose = require('mongoose')

const criaRole = async (req,res) =>{
     const role = new Role ({
        
        _id: new mongoose.Types.ObjectId(),
        nome: req.body.nome,
        funcionamento: req.body.funcionamento,
        descricao: req.body.descricao,
        custo: req.body.custo,
        tipo:req.body.tipo
    })
   
    const cadastroJaExiste = await Role.findOne({nome: req.body.nome})

    if(cadastroJaExiste){
        return res.status(409).json({error:"Estabelecimento já cadastrado"})
    }
    
    try{
        const novoRole = await role.save()
        res.status(201).json(novoRole)
    } catch(err){
        res.status(500).json({message:err.message})
    }
}
const listaRole = async(req,res) =>{
    const role = await Role.find()
    res.status(200).json(role)
}
const atualizaRole = async(req,res)=>{
    try{
        const role = await Role.findById(req.params.id)
        if (role == null){
            return res.status(404).json({mensage:"rolê não disponivel"})
        }
        if (req.body.nome != null) {
            role.nome = req.body.nome
        }

        if (req.body.funcionamento != null) {
            role.funcionamento = req.body.funcionamento
        }

        if (req.body.custo != null) {
            role.custo = req.body.custo
        }

        if (req.body.descricao != null) {
            role.descricao = req.body.descricao
        }
        if (req.body.tipo != null) {
            role.tipo = req.body.tipo
        }
        const roleAtualizado = await role.save()
        res.json(roleAtualizado)
    }  catch (err) {
        res.status(500).json({ message: err.message})
    }
}
const deletaRole = async (req, res)=>{
    try {
        const role = await Role.findById(req.params.id)
        if (role == null) {
        return res.status(404).json({ message: 'rolê não encontrado!'})
        }
    
        await role.remove()
        res.json({ message: 'Rolê deletado com sucesso!'})
    } catch (err) {
        return res.status(500).json({ message: err.message})
    }
}
const listaUmRole = async (req, res ) => {
    const role = await Role.findById(req.params.id)

    if (role == null) {
        return res.status(404).json({ message: 'rolê não encontrado!'})
    }

    res.json(livro)
}
module.exports = { 
    criaRole,
    listaRole,
    atualizaRole,
    deletaRole,
    listaUmRole

}