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
const menuitems = require('./controler/menuitemshandler')
const shopcategory = require('./controler/shopcategoryhandler')
const userinformation = require('./controler/userinformtionhandler')
const payment = require('./controler/paymenthandler')
const updateCart = require('./controler/updatecarthandler')

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
app.get('/menuitems', (req,res) => {menuitems.menuitemshandler(req,res,db)})
app.get('/shopcategory', (req,res) => {shopcategory.shopcategoryhandler(req,res,db)})
app.get('/userinformation', (req, res) => {userinformation.userinformationhandler(req,res,db)})
app.post('/payment', (req, res) => {payment.paymenthandler(req,res,db)})
app.post('/updateCart', (req, res) => updateCart.updatecarthandler(req, res, db))

app.listen(5000, () => {
   console.log(`App runing on 5000 ports`)
})
