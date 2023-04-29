const notificationRouter = require('express').Router();

notificationRouter.get('/', (req, res) => {
    res.json({message: 'notification route get'});
});

notificationRouter.post('/', (req, res) => {
    res.json({message: 'notification route post'});
});


notificationRouter.put('/:id', (req, res) => {
    res.json({message: 'notification route put'});
});


notificationRouter.delete('/:id', (req, res) => {
    res.json({message: 'notification route delete'});
});

module.exports = notificationRouter;