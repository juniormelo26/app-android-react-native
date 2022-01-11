const Sequelize = require('sequelize');
const db = require('./db');


const User = db.define('users', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,

    },
    login: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,

    }
});

//cria a tabela no BD
//User.sync();

module.exports = User;
