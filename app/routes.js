const express = require('express')
const routes = express.Router()

const NoteController = require('./controllers/NoteController')

routes.get('/', NoteController.index)
routes.get('/note', NoteController.index)
routes.get('/note/:id', NoteController.get)
routes.post('/note', NoteController.store)
routes.put('/note/:id', NoteController.update)
routes.delete('/note/:id', NoteController.delete)

module.exports = routes
