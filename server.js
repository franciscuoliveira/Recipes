const express = require('express');
const logger = require('morgan');
const errorhandler = require('errorhandler');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var path = require('path');
require('dotenv/config');
let app = express();
app.use('/public', express.static('files'));
var urlencodedParser = bodyParser.urlencoded({ extended: true });
app.use(bodyParser.json())
app.use(logger('dev'))
app.use(errorhandler())

//Imports Routes
const postsRoute = require('./routes/posts');
const { stringify } = require('nodemon/lib/utils');
const { post } = require('./routes/posts')
const Veiculo = require('./models/Veiculo');
const { findOneAndUpdate } = require('./models/Veiculo');
const receitaModel =require('./models/receitas');

//Conects to DB
mongoose.connect('mongodb+srv://sictp:sictp@sictp.mlco8.mongodb.net/?retryWrites=true&w=majority', () =>
    console.log('Conected to DB!')
);

//express
app.get('/', async function(req, res) {
    res.render('pages/index');
});

app.get('/list', async function(req, res) {
  const emStock = await VehicleModel.find();
  string = "";
  if(emStock){
      for(let i = 0; i < emStock.length; i++) {

          
          string += "<li> <b>Matrícula: " + emStock[i]._id + "<><li>Marca: " + emStock[i].marca + " Modelo: " + emStock[i].modelo + " Ano: " + emStock[i].ano + " Tipo: " + emStock[i].tipo + " Preço de compra: " + emStock[i].precoCompra + " Data de compra:" + emStock[i].dataCompra + " Preço de restauro: " + emStock[i].restorationCost + " </li>";
          
      }
  }else{
    string = "Não há veículos em stock."
  }
  console.log(string)
  return res.send(string)
});

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/peqAlmoco', async function(req,res) {

  const receita = await receitaModel.find();
  rec = "";
  if(receita){
      for(let i = 0; i < receita.length; i++) {
        if(receita[i].tipo == "peqAlmoco"){
          nome = receita[i].nome;
          ingredientes = receita[i].ingredientes;
          preparacao = receita[i].preparacao;

          rec = "";
        }
      }
  }else{
    rec = "Não há receitas."
  }

  res.render('pages/peqAlmoco', { nome : nome , ingredientes : ingredientes, preparacao : preparacao});
})

app.get('/carne', async function(req,res) {

  const receita = await receitaModel.find();
  rec = "";
  if(receita){
      for(let i = 0; i < receita.length; i++) {
        if(receita[i].tipo == "carne"){
          nome = receita[i].nome;
          ingredientes = receita[i].ingredientes;
          preparacao = receita[i].preparacao;

          rec = "";
        }
      }
  }else{
    rec = "Não há receitas."
  }

  res.render('pages/carne', { nome : nome , ingredientes : ingredientes, preparacao : preparacao});
})

app.get('/peixe', async function(req,res) {

  const receita = await receitaModel.find();
  rec = "";
  if(receita){
      for(let i = 0; i < receita.length; i++) {
        if(receita[i].tipo == "peixe"){
          nome = receita[i].nome;
          ingredientes = receita[i].ingredientes;
          preparacao = receita[i].preparacao;

          rec = "";
        }
      }
  }else{
    rec = "Não há receitas."
  }

  res.render('pages/peixe', { nome : nome , ingredientes : ingredientes, preparacao : preparacao});
})

app.get('/sobremesa', async function(req,res) {

  const receita = await receitaModel.find();
  rec = "";
  if(receita){
      for(let i = 0; i < receita.length; i++) {
        if(receita[i].tipo == "sobremesa"){
          nome = receita[i].nome;
          ingredientes = receita[i].ingredientes;
          preparacao = receita[i].preparacao;

          rec = "";
        }
      }
  }else{
    rec = "Não há receitas."
  }

  res.render('pages/sobremesa', { nome : nome , ingredientes : ingredientes, preparacao : preparacao});
})

app.listen(3003, ()=> console.log('server ok http://localhost:3003'));




app.set('view engine', 'ejs')

 



















