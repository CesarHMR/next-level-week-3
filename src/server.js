//importar pacotes
const express = require('express')
const path = require('path');
const pages = require('./pages.js')
//inciando o express
const server = express()
//criando rota
server
.use(express.urlencoded({extended: true}))
.use(express.static('_public'))
.set('views',path.join(__dirname, 'views'))
.set('view engine', 'hbs')
.get('/', pages.index)
.get('/form', pages.form)
.get('/orphanages', pages.orphanages)
.get('/orphanage', pages.orphanage)
.post('/save-orphanage', pages.saveOrphanage)
//ligando servidor
server.listen(5500)