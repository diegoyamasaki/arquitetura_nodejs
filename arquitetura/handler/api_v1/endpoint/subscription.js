const subscriptionRouter = require('express').Router();

subscriptionRouter.get('/', (req, res) => {
    res.json({message: 'subscription route'});
});

subscriptionRouter.post('/', (req, res) => {
    res.json({message: 'subscription route'});
});


subscriptionRouter.put('/:id', (req, res) => {
    res.json({message: 'subscription route'});
});


subscriptionRouter.delete('/:id', (req, res) => {
    res.json({message: 'subscription route'});
});

module.exports = subscriptionRouter;