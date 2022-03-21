const router = require('express').Router();
const apiClienteRouter = require('./api/clientes');
// const apiAvionRouter = require('./api/aviones');
// const apiPasajeRouter = require('./api/pasajes');
const apiLoginRouter = require('./api/logins')

const middlewares = require('./middlwares');
// const apiVueloRouter = require('./api/vuelos');

router.use('/cliente', middlewares.checkToken, apiClienteRouter);
router.use('/user', apiLoginRouter);

// router.use('/avion', apiAvionRouter);
// router.use('/pasaje', apiPasajeRouter);
// router.use('/vuelo', apiVueloRouter);

module.exports = router;