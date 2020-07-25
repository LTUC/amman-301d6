'use strict';

// Load Environment Variables from the .env file
require('dotenv').config();

// Application Dependencies
const express = require('express');

// 1- require the postgres (pg)
const pg = require('pg');
const { request, response } = require('express');
// 2- what should we do after requiring? correct! install (npm i pg)

// Application Setup
const PORT = process.env.PORT;
const app = express();

// 3-  first create the client to enable us to connect to server - add the database_url to the .env!
const client = new pg.Client(process.env.DATABASE_URL);
// windows: postgresql://username:password@localhost:5432/databasename
// mac: postgresql://localhost:5432/databasename
// 5432 -> the reserved port number for postgres

// 4- add a table to our database using schema.sql ! 
// -> create a schema.sql file and fill it ... Add schema (create table) and queries! (insert)


// Routes
app.get('/', (request, response) => {
  response.status(200).send('ok');
});

// 6- add a route to get all people, /people
//define the query in the callback function
//execute the query using client.query, pay attention! it's a psomise !

app.get('/students', (request, response) => {
  let SQL = 'SELECT * FROM student;';
  client.query(SQL).then((result) =>{
    response.status(200).send(result.rows);
  });
});

app.get('/addStudent', (request,response) => {
  let firstName = request.query.fname;
  let address = request.query.address;

  let SQL = `INSERT INTO student (first_name,student_address) VALUES ($1,$2)`;
  let values = [firstName,address];

  client.query(SQL,values).then(() => {
    response.status(200).send('Student inserted');
  });

});

// Error Handler Routes
app.use('*', notFoundHandler);

function notFoundHandler(request,response) {
  response.status(404).send('huh?');
}



// 5 - connect to the databse, and start listening to the port(turn on our server) only if we get a databsae connection
client.connect().then( () => {
  app.listen(PORT, () => {
    console.log('Server up on', PORT);
  });
});

