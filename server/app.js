const express = require('express')
const app = express()
const port = 8000
const ITEMS = require('./items');
const cors = require('cors')
const bodyParser = require('body-parser');

app.use(express.json());//Enable json
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors({
}));

app.get('/',(req, res) => {
  res.status(200).send('<html><body>Hello World</body></html>')
})

// POST
app.post('/item',(req, res) => {

  const newItem = Object.keys(ITEMS).length +1
  const newDate = new Date().toJSON().slice(0,10)
  
  if(ITEMS.hasOwnProperty(newItem)){
    newItem = newItem + 1
  }
  if(req.body.user_id && req.body.keywords && req.body.description && req.body.lat && req.body.lon !==""){
    ITEMS[newItem] = {
      id:newItem,
      user_id:req.body.user_id,
      keywords:req.body.keywords,
      description:req.body.description,
      image:req.body.image,
      lon:req.body.lon,
      lat:req.body.lat,
      date_from: newDate,
      date_to: newDate
    }
    res.status(201).json(ITEMS[newItem])
  } 
  else {
    res.status(405).json('The item with the given ID was not found')
  }
})

// GET
app.get('item/:id', (req, res) => {
  const id = req.params.id;
  const item = ITEMS.find((item) => item.id === id);
  if (item) {
    res.json(item);
  } else{
    res.status(404).send('The item with the given ID was not found')
  }
})

//Get Items 
app.get('/items', (req, res) => {
  const id = req.params.user_id;
  if (req.query.user_id) {
    res.status(200).json(
      Object.values(ITEMS).filter(u => u.user_id == req.query.user_id))
   return
    }
    res.status(200).json(
      Object.values(ITEMS))
})

// DELETE 
app.delete('item/:id', (req, res) => {
  const id = parseFloat(req.params.id)
  ITEMS = [...ITEMS.find((item) => item.id !=id)]
  res.status(204).json({})
})

// Serve................................................
app.listen(port, () => {
  console.log(`Example app listening on port 8000 ${port}`)
});

// Docker container exit handler - https://github.com/nodejs/node/issues/4182
process.on('SIGINT', function() {process.exit()})