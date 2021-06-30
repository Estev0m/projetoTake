const express = require('express');
const app = express();
const axios = require('axios');
app.use("/blip", require('./src/routers/blip'))
app.use(express.json())

app.listen(process.env.PORT || 10000, console.log('Server Online'));

