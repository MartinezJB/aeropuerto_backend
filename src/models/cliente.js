module.exports = (sequelize, type) => {
    return sequelize.define('cliente', {
        id_cliente: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: type.STRING(100),
            allowNull: false
        },
        apellido: {
            type: type.STRING(100),
            allowNull: false
        },
        email: {
            type: type.STRING(60),
            allowNull: false
        },
        telefono: {
            type: type.STRING(20),
            allowNull: false
        },
    }) 
}