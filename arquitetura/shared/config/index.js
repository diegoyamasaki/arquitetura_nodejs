const dotenv = require('dotenv');

dotenv.config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});

exports.module = {
    database: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PWD,
        base: process.env.DB_BASE,
    }
}