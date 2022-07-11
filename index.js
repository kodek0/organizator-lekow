const express = require('express');
const app = express();
const {port} = require('./config');
const apiRouter = require('./routes/api');
const bodyParser = require('body-parser');
const cors = require('cors');

// db
require('./db/mongoose');

//parser
app.use(bodyParser.json());

//cors
app.use(cors({
    origin: 'http://localhost:3000'
}));

//routing
app.use('/api/', apiRouter);

//server
app.listen(port, 'localhost', () => {
    console.log('Listening on http://localhost:' + port);
});