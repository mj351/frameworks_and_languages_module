const express = require('express');
const app = express();
const morgan = require ('morgan');
const bodyParser = require ('body-parser');
const mongoose = require ('mongoose');
const port = 8000;

const itemRouter = require ('./routes/item');
const itemsRouter = require ('./routes/items');

mongoose.connect('mongodb+srv://mj351:' + process.env.MONGO_ATLAS_PW + '@cluster0.jytfghq.mongodb.net/?retryWrites=true&w=majority',
{
  useMongoClient: true
});

//var cors = require('cors');

//app.use(express.json()) //Enable json

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.use((req, res, next)=> {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, content-Type, Accept, Authorization'
  );
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods','GET, POST, DELETE');
    return res.status(200).json({});
  }
  
});

// Routes which should handle requests
app.use('./item', itemRouter);
app.use('./items', itemsRouter);


app.use((req, res, next)=>{
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

app.use((error, res, next)=>{
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

//app.options('*', cors())

// Serve................................................
app.listen(port, () => {
  console.log(`Example app listening on port 8000 ${port}`)
});

// Docker container exit handler - https://github.com/nodejs/node/issues/4182
process.on('SIGINT', function() {process.exit()});

module.exports = app;