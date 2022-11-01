const Joi = require ('express') //(joi)//for data validation 
const { object } = require('joi')
const express = require('express')
const app = express()
const port = 8000

//init Express

app.use(express.json()); //Enable json 

//const cors = req ('cors')
//app.use(cors())
// class items{
//   id;

// }

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
  
  const test = {
    id:Items.length + 1,
    user_id:req.body.user_id,
    keywords:req.body.keywords,
    description:req.body.description,
    lon:req.body.lon,
    lat:req.body.lat,
    date_from:"2022-10-01",
  }

  //if(isNaN(req.body.lon)){
    //res.status(405)
 // } else {
    
   Items.push(test)
    res.status(201).json(test)
  
})

// app.post('/item', (req, res) => {
//   const schema = {
//     name: Joi.string().min(3).require()
//   }

//   const result = Joi.validate(req.body, schema)
//   if (error) {return res.status(400).send(result.error.details[0].message) //400 bad Request
//   }

//   const item = {
//     id: Items.length + 1,
//     name:req.body.name
//   }
//   Items.push(item)
//   res.send(item)
//     //console.log(req.body)
//     //Item.push(req.body)
//     //res.send(201)
// })
  
app.delete('/item/:id', (req, res) => {
  //const item = Items.filter(c => c.id !== parseFloat(req.params.id))
  //if (!item) return res.status(404).send('The item with the given ID was not found')
   res.send('Got a DELETE request at /user')
   Items = Items.filter(item => item.id !== id);
   res.status(204)
   return item;

   //Delete
   const index = Items.indexOf(item)
   Items.splice(index, 1);

   res.send(item)

})

// Serve................................................
app.listen(port, () => {
  console.log(`Example app listening on port 8000 ${port}`)
});

// Docker container exit handler - https://github.com/nodejs/node/issues/4182
process.on('SIGINT', function() {process.exit()})