const { sequelize } = require('../database');
const UserModel = require('../../domain/entity/user');

class UserRepoistory {
    constructor(){
        this.model = UserModel(sequelize);
    }

    async getAll()  {
        console.log('get all');
        let data = await this.model.findAll();
        return data;
    }

    async create(payload){
        console.log('create', payload);
    }

    async update(id, payload) {
        console.log('update', id, payload);
    }

    async delete(id) {
        console.log('delete', id);
    }
}

module.exports = UserRepoistory;