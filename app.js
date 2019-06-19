const http    = require('http');
const express = require('express');

const app = express();

const servr = http.createServer(app);

servr.listen(3000);
