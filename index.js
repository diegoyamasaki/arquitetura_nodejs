const express = require('express');
const v1Route = require('./arquitetura/handler/api_v1/api');
const { sequelize } = require('./arquitetura/infra/database');
require('./arquitetura/infra/database/__all_tables__');
const app = express();

app.use(express.json());

app.use('/v1', v1Route);


app.get('/', (req, res) => {
    res.json({message: 'arquitetura backend em nodejs'});
})

sequelize.sync().then(()=> {
    app.listen(3000, () => {
        console.log('started server port: 3000');
    });
});