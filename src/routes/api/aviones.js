const router = require('express').Router();

const { Aviones } = require('../../db');

router.get('/:id', async (req, res) => {
    const aviones = await Aviones.findByPk(req.params.id);
    res.json(aviones);
})

router.get('/', async (req, res) => {
    const aviones = await Aviones.findAll();
    res.json(aviones);
})

router.post('/', async (req, res) => {
    const avion = await Aviones.create(req.body);
    req.json(avion);
})

router.put('/', async (req, res) => {
    await Aviones.update(req.body, {
        where: { id_avion: req.params.id }
    })
    res.json({succes: true, message: "avion actualizado con exito"})
});

router.delete('/', async (req, res) => {
    await Aviones.destroy({
        where: { id_avion: req.params.id }
    })
    res.json({succes: true, message: "avion borrado con exito"})
});

module.exports = router