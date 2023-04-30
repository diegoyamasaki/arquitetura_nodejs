const SubscriptionRepository = require('../../infra/repository/subscription');

exports.getAll = async (req, res) => {
    const subscriptionRepository = new SubscriptionRepository();
    let data = await subscriptionRepository.getAll();
    res.status(200).json(data);
};

exports.create = async (req, res) => {
    let payload = req.body;
    const subscriptionRepository = new SubscriptionRepository();
    let data = await subscriptionRepository.create(payload);
    res.status(200).json(data);
}

exports.update = async (req, res) => {
    let {id} = req.params;
    let payload = req.body;
    const subscriptionRepository = new SubscriptionRepository();
    let data = await subscriptionRepository.update(id, payload);
    res.status(200).json(data);
}

exports.delete = async (req, res) => {
    let {id} = req.params;
    const subscriptionRepository = new SubscriptionRepository();
    await subscriptionRepository.delete(id);
    res.status(200).json({messge: 'delete one'});
}