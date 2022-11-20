const express = require('express')
const app = express()
const port = 8000
const ITEMS = require('./ITEMS');
const cors = require('cors')
const bodyParser = require('body-parser');
const { object, date } = require('joi');

app.use(express.json());//Enable json
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors({
}));

app.get('/', (req, res) => {
  res.send('<html><body>Hello world</body></html>')
})

// POST
app.post('/item', (req, res) => {
  const newItem = {
    id:ITEMS.length + 1,
    user_id:req.body.user_id,
    keywords:req.body.keywords,
    description:req.body.description,
    lon:req.body.lon,
    lat:req.body.lat,
    date_from:"2022-10-01",
    date_from: new Date,
    date_to: new Date
  }
  if(!newItem.user_id || !newItem.keywords || !newItem.description || !newItem.lat || !newItem.lon){
    return res.status(405).json({message: 'The item with the given ID was not found'})
  }
  ITEMS[newItem.id] = newItem;
  res.status(201).json(ITEMS)
})
// GET
/*app.get('item/:id', (req, res) => {
  const id = re.params.itemId;
  if (id === 'special') {
    res.status(200).json({
      message: 'You discovered the special ID',
      id: id
    });
  } else {
     res.status(200).json({
      message: 'You passed an ID'
     });
  }
});*/

app.get('/item/:id', (req, res) => {
   const item = ITEMS.find(c => c.id === parseFloat(req.params.user_id))
   if (!item) return res.status(404).send('The item with the given ID was not found')
   res.send(item)
})

//Get Items 
app.get('/items', (req, res) => {
  const items = ITEMS.find(c => c.id === parseFloat(req.params.user_id))
   if (!items) return res.status(404).send('The item with the given ID was not found')
   res.send(items)
})
// DELETE 

app.delete('item/:id', (req, res) => {
  const item = ITEMS.find(c => c.id === parseFloat(req.params.user_id))//look up at items
  ITEMS.remove({ id: item })
  .exec()
  .then(result => {
    res.status(204).json(result);
  })
  .catch(err =>{
    console.log(err);
    res.status(404).json({
      error: err
    });
  });
});

/*
app.delete('/item/:id', (req, res) => {
  const item = ITEMS.find(c => c.id === parseFloat(req.params.id)) //look up at items
  if (!item) return res.status(404).send('The item with the given ID was not found') //if not existing, return 404

  const index = ITEMS.indexOf(item)
  ITEMS.splice(index, 1)
  res.status(204).send(item)
})*/

/*
app.use((req, res,  ) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
})

app.use((error, res, next)=>{
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
})*/

// Serve................................................
app.listen(port, () => {
  console.log(`Example app listening on port 8000 ${port}`)
});

// Docker container exit handler - https://github.com/nodejs/node/issues/4182
process.on('SIGINT', function() {process.exit()})