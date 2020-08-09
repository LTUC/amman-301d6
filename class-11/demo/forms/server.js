'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

app.use(cors());
app.use(express.static('./public'));
app.use(express.urlencoded({extended: true}));


const PORT = process.env.PORT || 3000;

app.post('/submit-form', (req,res)=>{
  res.sendfile('public/thanks.html');
});

app.listen(PORT, ()=>{
  console.log(`Listening to Port ${PORT}`);
});

