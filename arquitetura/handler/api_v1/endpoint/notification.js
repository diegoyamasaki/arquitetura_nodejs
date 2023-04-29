const notificationRouter = require('express').Router();
const notificationApplication = require('../../../application/notification');

notificationRouter.get('/', notificationApplication.getAll);
notificationRouter.post('/', notificationApplication.create);
notificationRouter.put('/:id', notificationApplication.update);
notificationRouter.delete('/:id', notificationApplication.delete);

module.exports = notificationRouter;