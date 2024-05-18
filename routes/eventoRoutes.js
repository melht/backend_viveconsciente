const express = require('express')
const router = express.Router()

const {createEvento, getEventos, updateEvento, deleteEvento, getEventobyId} = require('../controllers/eventoController')

router.route('/').get(getEventos).post(createEvento)
router.route('/:id').put(updateEvento).delete(deleteEvento).get(getEventobyId)

module.exports = router