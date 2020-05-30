const express = require('express');
const router = express.Router();

const Doctor = require('../models/doctores');

router.get('/doctores', async  (req, res) => {
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

router.get('/pacientes', async  (req, res) => {
    const doctores = await Doctor.find();
    res.render('index', {
        doctores
    });
});

router.post('/ingreso_pacientes', async (req, res) =>{
    const doctor = new Doctor(req.body);
    await doctor.save();
    res.redirect('/');
});

module.exports = router;