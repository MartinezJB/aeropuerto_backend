module.exports = (sequelize, type) => {
    return sequelize.define('pasaje', {
        id_pasaje: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        costo: {
            type: type.DOUBLE,
            allowNull: false
        },
        nro_asiento: {
            type: type.STRING(4),
            allowNull: false
        },
        clase: {
            type: type.ENUM('economica', 'ejecutiva', 'alta'),
            allowNull: false
        },
    })
}