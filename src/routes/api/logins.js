const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { Logins } = require('../../db');
const { check, validationResult } = require('express-validator');
const moment = require('moment')
const jwt = require('jwt-simple')

router.post('/register', [
    check('user_name', 'el nombre de usuario es obligatorio').not().isEmpty(),
    check('user_password', 'la contraseña es obligatoria').not().isEmpty(),
    check('email', "el email es obligatorio").not().isEmpty()
], async (req, res) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(422).json({ errores: errors.array() })
    }

    req.body.user_password = bcrypt.hashSync(req.body.user_password, 10);
    const login = await Logins.create(req.body);
    res.json(login)
})

router.post('/login', async (req, res) => {
    const user = await Logins.findOne({ where: {email: req.body.email} });
    if (user) {
        const iguales = bcrypt.compareSync(req.body.user_password, user.user_password)
        if(iguales) {
            res.json({success: createToken(user)})
        }else{
            res.json({error: "error en usuario y/o contraseña"})    
        }
    }else {
        res.json({error: "error en usuario y/o contraseña"})
    }
}) 

const createToken = (user) => {
    const payload = {
        usuarioId: user.id,
        createdId: moment().unix(),
        expiredAt: moment().add(5, 'minutes').unix()
    }
    return jwt.encode(payload, process.env.TOKEN)
}

module.exports = router;