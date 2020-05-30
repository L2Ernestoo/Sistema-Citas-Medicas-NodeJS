const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DoctoresSchema =  new Schema({
    nombre: String,
    apellido: String,
    edad: Number,
    colegiado: String,
    direccion: String,
    telefono: Number
});

module.exports = mongoose.model('doctores', DoctoresSchema);
