const jwt = require('jwt-simple');
const moment = require('moment')

const checkToken = (req, res, next) => {
    
    if(!req.headers['user-token']) {
        return res.json({ error: "necesita incluir el token en la cabecera" });
    }
        const userToken = req.headers['user-token'];

        let playload = {};

        try {
            playload = jwt.decode(userToken, process.env.TOKEN)
        } catch(err) {
            return res.json({ error: "el token es incorrecto" })
        }

        if(playload.expiredAt < moment().unix()) {
            return res.json({ error: 'el token expiro' })
        }

        req.id_login = playload.id_login

    next()
}

module.exports = {
    checkToken: checkToken
}