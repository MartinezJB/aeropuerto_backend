const router = require('express').Router();

const { Pasajes } = require('../../db');

router.get('/:id', async (req, res) => {
    const clientes = await Pasajes.findByPk(req.params.id);
    res.json(clientes);
});

router.get('/', async (req, res) => {
    const clientes = await Pasajes.findAll();
    res.json(clientes);
});

router.post('/', async (req, res) => {
    const cliente = await Pasajes.create(req.body);
    res.json(cliente);
})

router.put('/:id', async (req, res) => {
    await Pasajes.update(req.body, {
        where: { id_pasaje: req.params.id }
    })
    res.json({success: true, message: "Se creo el cliente correctamente"})
});

router.delete('/:id', async (req, res) => {
    await Pasajes.destroy({
        where: { id_pasaje: req.params.id }
    })
    res.json({success: true, message: "Se elimino el cliente correctamente"})
})

module.exports = router;