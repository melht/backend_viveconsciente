const express = require('express')
const router = express.Router()

const {createEvento, getEventos, updateEvento, deleteEvento} = require('../controllers/eventoController')

router.route('/').get(getEventos).post(createEvento)
router.route('/:id').put(updateEvento).delete(deleteEvento)

module.exports = router