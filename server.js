const express = require('express');
const logger = require('morgan');
const errorhandler = require('errorhandler');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
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

const VeiculoSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.Mixed,
    marca: {
        type: String,
        require: true
    },
    modelo: {
        type: String,
        require: true
    },
    ano: {
        type: Number,
        require: true
    },
    tipo: {
        type: String,
        require: true
    },
    precoCompra: {
        type: Number,
        require: true
    },
    dataCompra: {
        type: String,
        require: true
    },
    precoRestauro: {
        type: Number,
        require: true
    },
})

const VendaSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.Mixed,
    precoVenda: {
        type: Number,
        require: true
    },
    dataVenda: {
        type: String,
        require: true
    },
})

const VehicleModel = mongoose.model('veiculos', VeiculoSchema);
const VendaModel = mongoose.model('vendas', VendaSchema);
//Conects to DB
mongoose.connect('mongodb+srv://sictp:sictp@sictp.mlco8.mongodb.net/?retryWrites=true&w=majority', () =>
    console.log('Conected to DB!')
);

app.post("/compra", urlencodedParser, async function(req, res) {
    let veiculo = {
      _id: req.body._id,
      marca: req.body.marca,
      modelo: req.body.modelo,
      ano: req.body.ano,
      tipo: req.body.tipo,
      precoCompra: req.body.precoCompra,
      dataCompra: req.body.dataCompra,
      precoRestauro: req.body.precoRestauro
    };
   
VehicleModel.findOne(veiculo, function(err, result) {
  if (err) {
    return res.send(err)
  }

  if (result) {
    return res.send("Este veículo já existe!")
  }

  VehicleModel.create(veiculo, function(err, result) {
    if (err) {
      return res.send(err)
    }

    if (result) {
      return res.send("Veículo adicionado com sucesso!")
    }
  });
});
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


app.listen(3003, ()=> console.log('server ok http://localhost:3000'));


//express
app.get('/', (req, res) => {
    res.render('pages/index')
})
app.set('view engine', 'ejs')

 



















