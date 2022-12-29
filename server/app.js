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

//Routes -----------------------------------------------------

//GET method route
app.get('/',(req, res) => {
  res.status(200).send('<html><body>Hello World</body></html>')
})


//POST Item request
app.post('/item',(req, res) => {
  // Create a new item with a unique ID
  const newItem = Object.keys(items).length +1
  const newDate = new Date().toJSON().slice(0,10)
  
  // Check if the new item ID is already used
  if(items.hasOwnProperty(newItem)){
    newItem = newItem + 1
  }

  // Check if all required fields are present in the request
  if(req.body.user_id && req.body.keywords && req.body.description && req.body.lat && req.body.lon !==""){

    // If all required fields are present, create a new item
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

    // Return the newly created item
    res.status(201).json(items[newItem])
  } 
  else {
    // If any required fields are missing, return an error
    res.status(405).json('error')
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
    res.status(404).send("error")
  }
})

// Serve -----------https://stackoverflow.com/questions/4840879/nodejs-how-to-get-the-servers-port
app.listen(port, () => {
  console.log(`Example app listening on port 8000 ${port}`)
});

// Docker container exit handler - https://github.com/nodejs/node/issues/4182
process.on('SIGINT', function() {process.exit()})

/*References
github.com/calaldees/frameworks_and_languages_module
https://github.com/NathanSmallcalder/frameworks_and_languages_module/blob/main/server/server.js
https://github.com/Reem-313/frameworks_and_languages_module/blob/main/server/server.js
*/
