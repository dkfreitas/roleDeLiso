const express = require('express') 
const app = express() 
const cors = require ('cors')

const db = require('./ProjetoFinal/src/data.config/database')
db.connect()


app.use(express.json())
app.use(cors())

const roleRoutes = require('./ProjetoFinal/src/routes/roleRoutes')
app.use('/roles',roleRoutes) 

app.listen(8088, ()=> console.log('Servidor rodando')) 

