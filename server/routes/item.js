const express = require('express')
const router = express.Router()
//const cors = require('cors')
//const app = require('../app')



/*router.use(cors({
    origin: '*',
    methods: ['GET','POST','DELETE', 'OPTIONS']
  }))*/

router.get('/', (req, res) => {
  return res.status(200).send('<html><body>Hello world</body></html>')
})

//POST ITEM
router.post('/item', (req,res) => {
  var newId = Object.keys(ITEM).length  + 1
  var date = new Date().toJSON().slice(0,10)
  if(ITEM.hasOwnProperty(newId)){
    newId = newId + 1
  }
  if(req.body.user_id && req.body.keywords && req.body.description 
    && req.body.lat && req.body.lon !== ""){
    ITEM[newId] = {
      id: newId,
      user_id: req.body.user_id,
      keywords: req.body.keywords,
      description: req.body.description,
      image: req.body.image,
      lat: req.body.lat,
      lon: req.body.lon,
      date_from: date ,
      date_to: date
    }
    res.status(201).json(ITEM[newId])
  }
    else {   
      res.status(405).send("input fields missing")
    }
})

router.post('/item', (req,res) => {
    var newId = Object.keys(ITEM).length  + 1
    var date = new Date().toJSON().slice(0,10)
    
    if(ITEM.hasOwnProperty(newId)){
      newId = newId + 1
    }
    if(req.body.user_id && req.body.keywords && req.body.description 
      && req.body.lat && req.body.lon !== ""){
      ITEM[newId] = {
        id: newId,
        user_id: req.body.user_id,
        keywords: req.body.keywords,
        description: req.body.description,
        image: req.body.image,
        lat: req.body.latitude,
        lon: req.body.longitude,
        date_from: date ,
        date_to: date
      }
      res.status(201).json(ITEM[newId])
    }
      else {   
        res.status(405).send("input fields missing")
      }
})

//fix assert 201==    405
router.post('/item', (req, res) => {
  const test = {
    id:Items.length + 1,
    user_id:req.body.user_id,
    keywords:req.body.keywords,
    description:req.body.description,
    lon:req.body.lon,
    lat:req.body.lat,
    date_from:new Date().toISOString().slice(0, 10),
  }
  if( isNaN(test.lon)){
    res.status(405).send(test)
  }
  
  Items.push(test)
  res.status(201).send(test)
  
})

// GET ITEM_ID pass
router.get('/item/:id', (req, res) => {
    const item = Items.find(c => c.id === parseFloat(req.params.id))
    if (!item) return res.status(404).send('The item with the given ID was not found')
    res.send(item)
})

/*//pass item/:idd get and delete
router
.route('/item/:id')
.get((req, res) => {const item = Items.find(c => c.id === parseFloat(req.params.id))
  if (!item) return res.status(404).send('The item with the given ID was not found')
  res.send(item)
})
.delete((req, res) => {const item = Items.find(c => c.id === parseFloat(req.params.id)) //look up at items
  if (!item) return res.status(404).send('The item with the given ID was not found') //if not existing, return 404

  const index = Items.indexOf(item)
  Items.splice(index, 1)
  res.status(204).send(item)
})

//pass item/:id get and delete
router.route('/item/:id')
.get((req, res) => {
    var itemID = parseInt(req.params.id)
    if(ITEM.hasOwnProperty(itemID)){
      res.json(ITEM[itemID])
    }
    else{
      res.status(404).send("Item not found")
    }
  })
.delete((req, res) => {
    var itemID = parseInt(req.params.id)
    if(ITEM.hasOwnProperty(itemID)){
      delete ITEM[itemID]
      res.status(204).send("Ok")
    }
    else{
      res.status(404).send("Item not found")
    }  
})

router.get('/items', (req,res) => {
  var id = req.query.user_id;
  var obj;
  console.log(id)
  ItemList = []
  for (const value of Object.values(ITEM)) {
    ItemList.push(value)
  }
  if(req.query.user_id){
    ItemList=[]
    for (const value of Object.values(ITEM))
    {
      if (value.user_id == id) 
      {
        obj = value;
        ItemList.push(obj)
      }
    }
    }
    res.status(200).json(ItemList)
})*/

//GET ITEMS
router.get('/items', (req, res) => {
  const items = Items.find(c => c.id === parseFloat(req.params.id))
  if (!items) return res.status(404).send('The items with the given ID was not found')
  res.send(items)
})

//DELETE ITEM_ID
router.delete('/item/:id', (req, res) => {
  const item = Items.find(c => c.id === parseFloat(req.params.id)) //look up at items
  if (!item) return res.status(404).send('The item with the given ID was not found') //if not existing, return 404
  
  const index = Items.indexOf(item)
  Items.splice(index, 1)
  res.status(204).send(item)
})

/*
router.get('/item/:user_id', (req, res) => {
  const item = Items.find(c => c.user_id === parseFloat(req.params.user_id))
  if (!item) return res.status(404).send('The item with the given ID was not found')
  res.send(item)
})
*/
module.exports = router