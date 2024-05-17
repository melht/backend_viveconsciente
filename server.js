const express = require('express')
const colors = require('colors')
const connectDB = require('./config/db')
const cors = require('cors')
const dotenv = require('dotenv').config()
const {errorHandler} = require ('./middleware/errorMiddleware')

connectDB()

const port = process.env.PORT || 8000
const app = express()
app.use(cors())

//Middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/eventos', require('./routes/eventoRoutes'))
app.use('/usuarios', require('./routes/usuarioRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Servidor iniciado en el puerto: ${port}`))