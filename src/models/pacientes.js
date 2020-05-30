const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PacientesSchema =  new Schema({
    nombre: String,
    apellido: String,
    edad: Number,
    direccion: String,
    telefono: Number
});

module.exports = mongoose.model('pacientes', PacientesSchema);
