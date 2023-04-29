const v1Route = require('express').Router();

const userRouter = require('./endpoint/user');
const subscriptionRouter = require('./endpoint/subscription');
const notificationRouter = require('./endpoint/notification');

v1Route.use('/user', userRouter);
v1Route.use('/subscription', subscriptionRouter);
v1Route.use('/notification', notificationRouter);

module.exports = v1Route;