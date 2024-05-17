const asyncHandler = require('express-async-handler')
const Evento = require('../models/Evento')

// CREAR EVENTO
const createEvento = asyncHandler ( async (req, res) => {
    if(!req.body.nombre || !req.body.descripcion || !req.body.fecha || !req.body.precio){
        res.status(400)
        throw new Error('Falta informacion')
    }
    const evento = await Evento.create({
        nombre : req.body.nombre,
        descripcion : req.body.descripcion,
        fecha : req.body.fecha,
        precio : req.body.precio
    })
    res.status(201).json(evento)
})

// VER EVENTOS
const getEventos = asyncHandler ( async (req, res) => {
    const eventos = await Evento.find()
    res.status(200).json(eventos)
})

// ACTUALIZAR EVENTO
const updateEvento = asyncHandler ( async (req, res) => {
    const evento = await Evento.findById(req.params.id)

    if(!evento) {
        res.status(404)
        throw new Error('El evento no existe')
    }

    const eventoUpdated = await Evento.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json({message:`Evento modificado: ${req.params.id}` })
})

// ELIMINAR EVENTO
const deleteEvento = asyncHandler (async (req, res) => {
    const evento = await Evento.findById(req.params.id)
    
    if(!evento) {
        res.status(404)
        throw new Error('El evento no existe')
    }

    await Evento.deleteOne(evento)

    res.status(200).json({message:`Evento eliminado: ${req.params.id}`})
})


module.exports = {
    createEvento,
    getEventos,
    updateEvento,
    deleteEvento
}