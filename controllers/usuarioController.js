const asyncHandler = require('express-async-handler')
const Usuario = require('../models/Usuario')

// CREAR USUARIO
const createUsuario = asyncHandler ( async (req, res) => {
    if(!req.body.nombre || !req.body.email || !req.body.telefono){
        res.status(400)
        throw new Error('Falta informacion')
    }
    const usuario = await Usuario.create({
        nombre : req.body.nombre,
        email : req.body.email,
        telefono : req.body.telefono,
        interes: req.body.interes
    })
    res.status(201).json(usuario)
})

// VER USUARIOS
const getUsuarios = asyncHandler ( async (req, res) => {
    const usuarios = await Usuario.find()
    res.status(200).json(usuarios)
})

// ACTUALIZAR USUARIO
const updateUsuario = asyncHandler ( async (req, res) => {
    const usuario = await Usuario.findById(req.params.id)

    if(!usuario) {
        res.status(404)
        throw new Error('El usuario no existe')
    }

    const usuarioUpdated = await Usuario.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json({message:`Usuario modificado: ${req.params.id}` })
})

// ELIMINAR USUARIO
const deleteUsuario = asyncHandler (async (req, res) => {
    const usuario = await Usuario.findById(req.params.id)
    
    if(!usuario) {
        res.status(404)
        throw new Error('El usuario no existe')
    }

    await Usuario.deleteOne(usuario)

    res.status(200).json({message:`Usuario eliminado: ${req.params.id}`})
})


module.exports = {
    createUsuario,
    getUsuarios,
    updateUsuario,
    deleteUsuario
}