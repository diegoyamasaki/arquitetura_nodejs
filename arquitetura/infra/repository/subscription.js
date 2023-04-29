const { sequelize } = require('../database');
const SubscriptionModel = require('../../domain/entity/subscription');

class SubscriptionRepository{
    constructor(){
        this.model = SubscriptionModel(sequelize);
    }

    async getAll(){
        console.log('get all');
        let data = await this.model.findAll();
        return data;
    }

    async create(payload) {
        console.log('create');
    }

    async update(id, payload){
        console.log('update');
    }

    async delete(id){
        console.log('delete');
    }
}

module.exports = SubscriptionRepository;