const Joi = require ('joi') //(joi)//for data validation 
const { object } = require('joi')
const express = require('express')
const app = express()
const port = 8000
// const cors = require('cors')
// app.use(cors())
// //init Express

app.use(express.json()); //Enable json 

Items = []

app.get('/', (req, res) => {
  res.send('<html><body>Hello world</body></html>')
})

app.get('/items', (req, res) => {
  res.send(Items)
  })

//good
app.get('/item/:id', (req, res) => {
  const item = Items.find(c => c.id === parseFloat(req.params.id))
  if (!item) return res.status(404).send('The item with the given ID was not found')
  res.send(item)
})

 //good
 //fix assert 201==    405
app.post('/item', (req, res) => {
  // const {error} = validateItem(req.body) 
  // if (error){
  //   res.status(405).send(error.details[0].message)
  //   return
  // }

  const test = {
    id:Items.length + 1,
    user_id:req.body.user_id,
    keywords:req.body.keywords,
    description:req.body.description,
    lon:req.body.lon,
    lat:req.body.lat,
    date_from:"2022-10-01",
  }
  if( isNaN(test.lon)){
    res.status(405).send(test)
  }

  Items.push(test)
  res.status(201).send(test)

})

app.put('/items/:id', (req, res) => {
  const item = Items.find(c => c.id === parseFloat(req.params.id)) //look up at items
  if (!item) return res.status(404).send('The item with the given ID was not found') //if not existing, return 404

  const {error} = validateItem(req.body)
  if (error){
    res.status(400).send(error.details[0].message)
    return
  }

  item.keywords = req.body.item  //update item
  res.send(item); //return the updated item
  })
  
//validate 
function validateItem(item) {
  const schema = {
    keywords: joi.string().main(5).require()
  }
  return joi.validate(item, schema)
}

app.delete('/item/:id', (req, res) => {
  const item = Items.find(c => c.id === parseFloat(req.params.id)) //look up at items
  if (!item) return res.status(404).send('The item with the given ID was not found') //if not existing, return 404

  const index = Items.indexOf(item)
  Items.splice(index, 1)
  res.status(204).send(item)

})

// Serve................................................
app.listen(port, () => {
  console.log(`Example app listening on port 8000 ${port}`)
});

// Docker container exit handler - https://github.com/nodejs/node/issues/4182
process.on('SIGINT', function() {process.exit()})