require('dotenv').config()
const mongoose = require('mongoose') 

const connect = async() => {try{
    await mongoose.connect(process.env.DATA_URL, {
    
    useNewUrlParser: true,
    useUnifiedTopology: true
}) 
    console.log('Mongo db conectado')}
    catch(error)

    {console.log(error.menssage)}
}

module.exports = { connect }