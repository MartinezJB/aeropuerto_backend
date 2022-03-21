const router = require('express').Router();

const { Clientes } = require('../../db');

router.get('/:id', async (req, res) => {
    const clientes = await Clientes.findByPk(req.params.id);
    res.json(clientes);
});

router.get('/', async (req, res) => {
    const clientes = await Clientes.findAll();
    res.json(clientes);
});

router.post('/', async (req, res) => {
    const cliente = await Clientes.create(req.body);
    res.json(cliente);
})

router.put('/:id', async (req, res) => {
    await Clientes.update(req.body, {
        where: { id_cliente: req.params.id }
    })
    res.json({success: true, message: "Se creo el cliente correctamente"})
});

router.delete('/:id', async (req, res) => {
    await Clientes.destroy({
        where: { id_cliente: req.params.id }
    })
    res.json({success: true, message: "Se elimino el cliente correctamente"})
})

module.exports = router;