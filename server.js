const express = require('express');
const { json } = require('express/lib/response');
const app = express();
var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('./models/User');


app.use(express.json());


app.get("/", (req, res) => {
    res.send("Pagina Incial");
});

// Rota de cadastro
app.post('/cadastrar', async (req, res) => {
    /* console.log(req.body); */

    var dados = req.body;
     dados.password = await bcrypt.hash(dados.password, 8);

     /* console.log(dados); */
    
   await User.create(dados)
   .then(() => {
        return res.json({
            erro: false,
            mensagem: "Usuário cadastro com sucesso!"
        });
   }).catch(() => {
    return res.status(400).json({
        erro: true,
        mensagem: "Usuário NÃO cadastrado!"
    });
   });

    /* res.send("Cadastro realizado com sucesso!"); */
});

//Rota de Login
app.post('/login', async (req, res) => {
    /* console.log(req.body); */
    
        var dados = req.body;
       

   const user =  await User.findOne({
       attributes: ['id', 'name', 'login', 'password'],
       where: {
           login: dados.login
       }
    });
    if(user === null){
        return res.status(400).json({
            erro: true,
            mensagem: "ERROR LOGIN"
        });
    }
    if(!(await bcrypt.compare(dados.password, user.password))){
        return res.status(400).json({
            erro: true,
            mensagem: "ERROR SENHA"
        });
    }
    var token = jwt.sign({id: user.id}, "D62ST92Y7A6V7K5C6W9ZU6W8KS3", {
        //expiresIn: 600 //10 min
        //expiresIn: 60 //1 min
        expiresIn: '7d' // 7 dia
    });

    return res.json({
        erro: false,
        mensagem: "SUCCESS - SENHA OK",
        token
    });
});




app.listen(8080, () => {
    console.log( "Servidor rodando na porta 8080: http://localhost:8080");
});