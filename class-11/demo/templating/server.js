'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

app.set('view engine','ejs');

app.use(cors());
app.use(express.urlencoded({extended: true}));

const PORT = process.env.PORT || 3000;

app.get('/', (req,res)=>{
  res.render('index');
});

let people = [
  {name:'Ahmad', age: 20},
  {name:'Rania', age: 25},
  {name:'Adnan', age: 27}
];

app.get('/items', (req,res) =>{
  res.render('people',{peopleList : people});
});

app.listen(PORT, ()=>{
  console.log(`Listening to Port ${PORT}`);
});