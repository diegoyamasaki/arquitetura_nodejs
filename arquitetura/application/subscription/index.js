const subscriptionRepository = require('../../infra/repository/subscription');

exports.getAll = async (req, res) => {
    let data = await subscriptionRepository.getAll();
    res.status(200).json({messge: 'get all'});
};

exports.create = async (req, res) => {
    let payload = req.body;
    let data = await subscriptionRepository.create(payload);
    res.status(200).json({messge: 'create one'});
}

exports.update = async (req, res) => {
    let {id} = req.params;
    let payload = req.body;
    let data = await subscriptionRepository.update(id, payload);
    res.status(200).json({messge: 'update one'});
}

exports.delete = async (req, res) => {
    let {id} = req.params;
    await subscriptionRepository.delete(id);
    res.status(200).json({messge: 'delete one'});
}