const express = require('express');

const app = express();


app.get('/', (req, res) => {
    res.json({message: 'arquitetura backend em nodejs'});
})

app.listen(3000, () => {
    console.log('started server port: 3000');
})