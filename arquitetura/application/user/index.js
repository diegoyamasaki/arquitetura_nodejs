const UserRepository = require('../../infra/repository/user');

exports.getAll = async (req, res) => {
    let userRepository = new UserRepository();
    let data = await userRepository.getAll();
    
    res.status(200).json(data);
};

exports.create = async (req, res) => {
    let payload = req.body;
    let userRepository = new UserRepository();
    let data = await userRepository.create(payload);
    res.status(200).json(data);
}

exports.update = async (req, res) => {
    let {id} = req.params;
    let payload = req.body;
    let userRepository = new UserRepository();
    let data = await userRepository.update(id, payload);
    res.status(200).json(data);
}

exports.delete = async (req, res) => {
    let {id} = req.params;
    let userRepository = new UserRepository();
    await userRepository.delete(id);
    res.status(200).json({messge: 'delete one'});
}