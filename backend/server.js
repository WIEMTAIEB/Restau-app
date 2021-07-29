const express = require ('express')
const app = express()

const db = require('./config/db')
db();

//
const body = require('body-parser')
app.use(express.json())
const cors = require('cors')
app.use(cors())



//config server
const PORT = process.env.PORT || '4000'

app.listen(PORT,()=> {
    console.log('server y5dm brabbi');
})



// user
const AllUsers = require('./routes/userRoute')
app.use('/app',AllUsers)


//Produit
const AllProduct = require('./routes/produitRoute')
app.use('/app', AllProduct)

 //command
const AllCommand = require('./routes/commandeRoute')
app.use ('/app', AllCommand)


