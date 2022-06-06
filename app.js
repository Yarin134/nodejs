const express = require('express');

const bodyParser = require('body-parser');

const pageNotFoundController = require('../nodejs/controllers/404-page')

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin', adminRoutes.router);
app.use(shopRoutes);

app.use(pageNotFoundController.pageNotFount);

app.listen(3000);
