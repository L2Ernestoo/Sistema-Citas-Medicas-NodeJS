const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();

// Conexion Base Datos
mongoose.connect('mongodb://localhost/sis_citas')
    .then(db => console.log('DB Conectada'))
    .catch(err => console.log(err));
//Importar Rutas
const indexRoutes = require('./routes/index');

//Configuraciones
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

//Rutas
app.use('/', indexRoutes);

// Iniciar Servidor
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
});
