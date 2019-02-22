require ('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
const ctrl = require('./controller')

const {SERVER_PORT, CONNECTION_STRING} = process.env

const app = express()

app.use(bodyParser.json())

app.use(bodyParser.json())

massive( process.env.CONNECTION_STRING).then (db => {
    app.set('db', db)
    console.log(`database connected`)
    }).catch(err => console.log(err))

app.get('/api/houses', ctrl.getAllHouses)
app.post('/api/house', ctrl.addHouse)
app.delete(`/api/house/:id`, ctrl.deleteHouse)






app.listen(SERVER_PORT, () => console.log(`002 Server ready on port ${SERVER_PORT}`))