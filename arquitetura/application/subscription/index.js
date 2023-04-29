exports.getAll = (req, res) => {
    res.status(200).json({messge: 'get all'});
};

exports.create = (req, res) => {
    res.status(200).json({messge: 'create one'});
}

exports.update = (req, res) => {
    res.status(200).json({messge: 'update one'});
}

exports.delete = (req, res) => {
    res.status(200).json({messge: 'delete one'});
}