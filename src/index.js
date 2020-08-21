const express = require('express');
const routes = require('./routes.js');

const app = express();
const port = 3000;

app.use(express.json());
app.use(routes);

app.get('/', (req, res) => res.json('Health check ok'));

app.listen(port, () => console.log('App running on port', port));