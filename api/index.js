

const express = require('express');
const route = require('./src/routes.js');
const cors = require('cors');
const app = new express();

app.use(express.json());
app.use(cors());
app.use(route);
app.listen(3333);