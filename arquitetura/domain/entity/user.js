const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const UserModel = sequelize.define('user', {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING
    });
    
    return UserModel;
}