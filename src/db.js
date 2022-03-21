const Sequelize = require('sequelize');

const Login = require('./models/login');
const Cliente = require('./models/cliente');
const Avion = require('./models/avion');
const Vuelo = require('./models/vuelo');
const Pasaje = require('./models/pasaje');


const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: "mysql",
})

const login = Login(sequelize, Sequelize);
const cliente = Cliente(sequelize, Sequelize);
const avion = Avion(sequelize, Sequelize);
const vuelo = Vuelo(sequelize, Sequelize);
const pasaje = Pasaje(sequelize, Sequelize);

cliente.hasOne(login);
avion.hasMany(vuelo);
cliente.hasMany(pasaje);
vuelo.hasOne(pasaje);

(async ()=>{
    // const avion1 = await avion.create({
    //     prefijo_pais: "ARG",
    //     sufijo: "830"
    // });
    // avion1.destroy()
    // await avion.create({
    //     prefijo_pais: "UK",
    //     sufijo: "942"
    // });

    // const aviones = await avion.findAll();
    // aviones.map(e => console.log(e))
})();

sequelize.sync({ force: false })
.then(()=>{
    console.log("Tabla sincronizadas")
})

module.exports = {
    Logins: login,
    Clientes: cliente,
    Aviones: avion,
    Vuelos: vuelo,
    Pasajes: pasaje
}