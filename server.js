const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const { static } = require('express');
const nodemailer = require('nodemailer');

app.use(express.json())
app.use(cors())  
app.use(fileUpload({
    createParentPath: true
}));

app.use('/imagens/',express.static('uploads'))


app.use('/api',require('./src/routes'))

mongoose.connect('mongodb://root:rootpwd@localhost:27018/oat?authSource=admin',{useNewUrlParser: true, useUnifiedTopology: true});

app.listen(3000)
