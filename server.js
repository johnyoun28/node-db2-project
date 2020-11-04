require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')

const server = express()

const carRouter = require('./cars/cars-router')


server.use(helmet())
server.use(morgan())
server.use(express.json())
server.use('/api/cars', carRouter)

server.get('/', (req, res) => {
    res.json('server is up!!!!!!!!!!!')
})

module.exports = server