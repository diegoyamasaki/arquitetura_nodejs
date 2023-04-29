const userRouter = require('express').Router();
const userApplication = require('../../../application/user');

userRouter.get('/', userApplication.getAll);
userRouter.post('/', userApplication.create);
userRouter.put('/:id', userApplication.update);
userRouter.delete('/:id', userApplication.delete);

module.exports = userRouter;