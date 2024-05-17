const express = require('express')
const router = express.Router()

const {createUsuario, getUsuarios, updateUsuario, deleteUsuario} = require('../controllers/usuarioController')

router.route('/').get(getUsuarios).post(createUsuario)
router.route('/:id').put(updateUsuario).delete(deleteUsuario)

module.exports = router