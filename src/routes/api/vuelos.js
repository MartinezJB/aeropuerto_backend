const router = require('express').Router();

const { Vuelos } = require('../../db');

router.get('/:id', async (req, res) => {
    const clientes = await Vuelos.findByPk(req.params.id);
    res.json(clientes);
});

router.get('/', async (req, res) => {
    const clientes = await Vuelos.findAll();
    res.json(clientes);
});

router.post('/', async (req, res) => {
    const cliente = await Vuelos.create(req.body);
    res.json(cliente);
})

router.put('/:id', async (req, res) => {
    await Vuelos.update(req.body, {
        where: { id_vuelo: req.params.id }
    })
    res.json({success: true, message: "Se creo el cliente correctamente"})
});

router.delete('/:id', async (req, res) => {
    await Vuelos.destroy({
        where: { id_vuelo: req.params.id }
    })
    res.json({success: true, message: "Se elimino el cliente correctamente"})
})

module.exports = router;