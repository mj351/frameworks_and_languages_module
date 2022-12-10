const express = require('express')
const app = express()
const port = 8000
const items = require('./items')
const cors = require('cors')
const bodyParser = require('body-parser')

// Init Express ---------------------- 

// To parse json data
app.use(express.json());
// To parse URL encoded data
app.use(express.urlencoded({ extended: false }));

//CORS - https://expressjs.com/en/resources/middleware/cors.html
app.use(cors({
}))

//Routes ----------------------
//GET method route
app.get('/',(req, res) => {
  res.status(200).send('<html><body>Hello World</body></html>')
})

//POST Item req
app.post('/item',(req, res) => {

  const newItem = Object.keys(items).length +1
  const newDate = new Date().toJSON().slice(0,10)
  
  if(items.hasOwnProperty(newItem)){
    newItem = newItem + 1
  }
  if(req.body.user_id && req.body.keywords && req.body.description && req.body.lat && req.body.lon !==""){
    items[newItem] = {
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
    res.status(201).json(items[newItem])
  } 
  else {
    res.status(405).json('The item with the given Id was not found')
  }
})

//GET itemId req
app.get('/item/:id', (req, res) => {
  itemId = parseFloat(req.params.id)
  if(items.hasOwnProperty(itemId)){
    res.json(items[itemId])
  }
  else{
    res.status(404).send("The item with the given Id was not found")
  }
})
 
//GET items req
app.get('/items/', (req, res) => {
  if (req.query.user_id) {
    res.status(200).json(
      Object.values(items).filter(i => i.user_id == req.query.user_id))
   return;
    }
    res.status(200).json(
      Object.values(items))
})

// DELETE item by ID req
app.delete('/item/:id', (req, res) => {
  itemId = parseFloat(req.params.id)
  if(items.hasOwnProperty(itemId)){
    delete items[itemId]
    res.status(204).send("")
  }
  else{
    res.status(404).send("The item with the given Id was not found")
  }
})

// Serve ----------------------
app.listen(port, () => {
  console.log(`Example app listening on port 8000 ${port}`)
});

// Docker container exit handler - https://github.com/nodejs/node/issues/4182
process.on('SIGINT', function() {process.exit()})