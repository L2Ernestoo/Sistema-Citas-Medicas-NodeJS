const express = require('express');
const router = express.Router();

const Doctor = require('../models/doctores');
const Paciente = require('../models/pacientes');

//Doctores
router.get('/', async  (req, res) => {
    const doctores = await Doctor.find();
    res.render('index', {
        doctores
    });
});

router.post('/ingresar_doctor', async (req, res) =>{
    const doctor = new Doctor(req.body);
    await doctor.save();
    res.redirect('/');
});


//Pacientes
router.get('/pacientes', async  (req, res) => {
    const pacientes = await Paciente.find();
    res.render('pacientes', {
        pacientes
    });
});

router.post('/ingresar_paciente', async (req, res) =>{
    const paciente = new Paciente(req.body);
    await paciente.save();
    res.redirect('/pacientes');
});


module.exports = router;