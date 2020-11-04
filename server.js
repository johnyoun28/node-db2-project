require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')

const server = express()


server.use(helmet())
server.use(morgan())
server.use(express.json())

server.get('/', (req, res) => {
    res.json('server is up!!!!!!!!!!!')
})

module.exports = server