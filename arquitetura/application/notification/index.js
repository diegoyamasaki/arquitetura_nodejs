const NotificationRepository = require('../../infra/repository/notification');

exports.getAll = async (req, res) => {
    const notificationRepository = new NotificationRepository();
    let data = await notificationRepository.getAll();
    res.status(200).json({messge: 'get all'});
};

exports.create = async (req, res) => {
    let payload = req.body;
    const notificationRepository = new NotificationRepository();
    let data = await notificationRepository.create(payload);
    res.status(200).json({messge: 'create one'});
}

exports.update = async (req, res) => {
    let {id} = req.params;
    let payload = req.body;
    const notificationRepository = new NotificationRepository();
    let data = await notificationRepository.update(id, payload);
    res.status(200).json({messge: 'update one'});
}

exports.delete = async (req, res) => {
    let {id} = req.params;
    const notificationRepository = new NotificationRepository();
    await notificationRepository.delete(id);
    res.status(200).json({messge: 'delete one'});
}