const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  telefono: { type: String },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
  eventos: { type: String, required: false }
});

module.exports = mongoose.model('Usuario', UsuarioSchema);
