const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  telefono: { type: String },
  interes: { type: String }
});

module.exports = mongoose.model('Usuario', UsuarioSchema);
