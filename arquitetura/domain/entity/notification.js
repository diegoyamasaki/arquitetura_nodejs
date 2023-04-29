const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const NotificationModel = sequelize.define('notification', {
        notification_id: DataTypes.STRING,
        user_document: DataTypes.STRING,
        notification_message: DataTypes.STRING,
        sended: DataTypes.BOOLEAN,
        create_ad: DataTypes.DATE,
        deleted_at: DataTypes.DATE,
    });
    return NotificationModel;
}