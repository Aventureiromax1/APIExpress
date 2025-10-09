const express = require('express');
const app = express();
const port = 3000;


app.get('/', (request, response)=> response.status(200).send('Olá Mundo') )
app.listen(3333, ()=> {console.log('SEVER RUNING ON PORT 3333')});