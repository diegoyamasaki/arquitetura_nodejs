const subscriptionRouter = require('express').Router();
const subscriptionApplication = require('../../../application/subscription');

subscriptionRouter.get('/', subscriptionApplication.getAll);
subscriptionRouter.post('/', subscriptionApplication.create);
subscriptionRouter.put('/:id', subscriptionApplication.update);
subscriptionRouter.delete('/:id', subscriptionApplication.delete);

module.exports = subscriptionRouter;