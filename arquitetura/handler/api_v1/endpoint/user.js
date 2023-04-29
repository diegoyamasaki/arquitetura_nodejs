const userRouter = require('express').Router();

userRouter.get('/', (req, res) => {
    res.json({message: 'user route'});
});

userRouter.post('/', (req, res) => {
    res.json({message: 'user route post'});
});


userRouter.put('/:id', (req, res) => {
    res.json({message: 'user route put'});
});


userRouter.delete('/:id', (req, res) => {
    res.json({message: 'user route delete'});
});

module.exports = userRouter;