const express = require('express');
const bcrypt = require('bcrypt-nodejs')
const cors = require('cors')
const app = express();

//Middleware
app.use(express.json());
app.use(cors());
//File Resourse
const signin = require('./controler/signinhandler')
const register = require('./controler/registerhandler')

//Connection
var db = require('knex')({
  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    user : 'root',
    password : 'root',
    database : 'DBProject'
  }
});

//Routes
app.get('/' , (req,res) => {res.send(database.user)})
app.post('/signin' , (req,res) => {signin.signinhandler(req,res,db,bcrypt)})
app.post('/register' , (req,res) => {register.registerhandler(req,res,db,bcrypt)})

app.listen(3001, () => {
   console.log(`App runing on 3001 ports`)
})
