module.exports = (sequelize, type) => {
    return sequelize.define('login', {
        id_login: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_name: {
            type: type.STRING(50),
            allowNull: false
        },
        user_password: {
            type: type.STRING(255),
            allowNull: false
        },
        email: {
            type: type.STRING(100),
            allowNull: false
        }
    })
}