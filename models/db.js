const Sequelize = require('sequelize');

const sequelize = new Sequelize("login", "root", "root", {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
.then(function(){
    console.log("SUCESS - CONEXAO COM BANCO OK");
}).catch(function(){
    console.log("ERROR - CONEXAO COM BANCO");
})

module.exports = sequelize;