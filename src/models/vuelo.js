module.exports = (sequelize, type) => {
    return sequelize.define('vuelo', {
        id_vuelo: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        origen: {
            type: type.STRING(60),
            allowNull: false
        },
        destino: {
            type: type.STRING(60),
            allowNull: false
        },
    })
}