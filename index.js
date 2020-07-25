const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const PORT = parseInt(process.env.PORT, 10) || 3001;
require('dotenv').config();

async function runServer() {

  await require('./db').connect();

  server.use(bodyParser.json());

  server.use('/api/v1', require('./routes/parcels'));
  server.use('/api/v1', require('./routes/tractors'));
  server.use('/api/v1', require('./routes/process'));

  server.get('', (req, res) => {
    res.status(200).send('<h1>Api Server Ready! Shoot to get data. (:</h1>');
  });

  server.listen(PORT, (err) => {
    if(err) { console.error(err);}
    console.log('Server ready on port:', PORT);
  })
}

runServer();
