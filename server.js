//dependências
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
require('dotenv').config()
app.use(cors())

const PORT = process.env.PORT || 5000

//rota
const Email = require('./src/Email/EmailController')
const Health = require('./src/Health/HealthController')


//BodyParser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false, limit: '5mb'}))
app.use('/email', Email)
app.use('/', Health)

//Servidor
app.listen(PORT, () => console.log(`Server running on port ${PORT}!`))