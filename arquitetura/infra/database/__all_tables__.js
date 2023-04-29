const { sequelize } = require('../database');
const UserModel = require('../../domain/entity/user');
const SubscriptionModel = require('../../domain/entity/subscription');
const NotificationModel = require('../../domain/entity/notification');

const userModel = UserModel(sequelize);
const subscriptionModel = SubscriptionModel(sequelize);
const notificationModel = NotificationModel(sequelize);

module.exports = {
    userModel,
    subscriptionModel,
    notificationModel
}