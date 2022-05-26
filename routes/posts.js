const express = require('express');
const router = express.Router();
const Post = require('../models/Veiculo');
const res = require('express/lib/response');

router.get('/', (req, res) => {
    res.send('Veiculos');
});
router.get('/compra', (req, res) => {
    res.render('/pages/compra');
});
router.get('/peqAlmoco', (req, res) => {
    res.render('/pages/peqAlmoco');
});
router.post('/', (req, res) => {
    console.log(req.body);
});


module.exports = router;