const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const SubscriptionModel = sequelize.define('subscription', {
        user_document: DataTypes.STRING,
        subscription_id: DataTypes.STRING,
        purchase_at:  DataTypes.DATE,
        purchase_value:  DataTypes.STRING,
        order_number:  DataTypes.INTEGER
    });

    return SubscriptionModel;
}