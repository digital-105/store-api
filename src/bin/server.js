require('dotenv').config();
require('../db/connection');

const express = require('express');

const routes = require('../routes');

const PORT = 5001;
const VERSION = 'v1';

const app = express();

app.use(express.json());

app.use(`/api/${VERSION}`, routes);

app.use((req, res) => {
  res.statusCode = 404;
  return res.json({
    message: 'NOT_FOUND'
  })
});

app.listen(PORT, () => {
  console.log('server listens to port: ', PORT);
})