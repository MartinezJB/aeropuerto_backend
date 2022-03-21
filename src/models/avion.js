module.exports = (sequelize, type) => {
    return sequelize.define('avion', {
        id_avion: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        prefijo_pais: {
            type: type.STRING(10),
            allowNull: false
        },
        sufijo: {
            type: type.STRING(3),
            allowNull: false
        }
    })
}