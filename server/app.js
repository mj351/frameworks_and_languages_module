const express = require('express');
var cors = require('cors');

const app = express();
const port = 8000;

const morgan = require ('morgan');

/*const mongoose = require ('mongoose');
mongoose.connect('mongodb+srv://mj351:' + process.env.MONGO_ATLAS_PW + '@cluster0.jytfghq.mongodb.net/?retryWrites=true&w=majority',
{
  useMongoClient: true
});*/

const itemRouter = require ('./routes/item');
const itemsRouter = require ('./routes/items');
const bodyParser = require('body-parser');

app.use(morgan('dev'));

/*app.use(cors({
  origin: '*',
  methods: ['GET','POST','DELETE', 'OPTIONS']
}));*/

app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json()) //Enable json
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

app.use((req, res, next )=>{
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



// Serve................................................
app.listen(port, () => {
  console.log(`Example app listening on port 8000 ${port}`)
});

// Docker container exit handler - https://github.com/nodejs/node/issues/4182
process.on('SIGINT', function() {process.exit()});

module.exports = app