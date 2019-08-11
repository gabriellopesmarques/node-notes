const express = require('express')
const routes = require('./routes')
const server = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const fs = require('fs')


if (!fs.existsSync('./.env')) {
    throw Error('file .env doenst exits')
}

dotenv.config()
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true })

server.use(express.json())
server.use(routes)
server.listen(process.env.PORT)


console.log('                   ')
console.log(' ╔╗╔╔═╗╔╦╗╔═╗  ┬┌─┐')
console.log(' ║║║║ ║ ║║║╣   │└─┐')
console.log(' ╝╚╝╚═╝═╩╝╚═╝o└┘└─┘')
console.log(' ===================')
console.log(` Your app is running in http://localhost:${process.env.PORT}`)
