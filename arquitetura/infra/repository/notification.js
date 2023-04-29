const { sequelize } = require('../database');
const NotificationModel = require('../../domain/entity/notification');

class NotificationRepository{
    constructor(){
        this.model = NotificationModel(sequelize);
    }

    async getAll(){
        console.log('get all');
        let data = await this.model.findAll();
        return data;
    }

    async create(payload){
        console.log('create');
    }

    async update(id, payload){
        console.log('update');
    }

    async delete(id) {
        console.log('delete');
    }
}

module.exports = NotificationRepository;