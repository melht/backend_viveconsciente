const mongoose = require('mongoose');

const EventoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
  fecha: { type: String, required: true },
  precio: { type: String, required: true }
});

module.exports = mongoose.model('Evento', EventoSchema);
