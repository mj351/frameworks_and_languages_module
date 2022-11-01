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
  res.send(this.Items)
  })


app.get('/item/:id', (req, res) => {
  const item = this.Items.find(c => c.id === parseInt(req.params.id))
  if (!item) return res.status(404).send('The item with the given ID was not found')
  res.send(item)
})

app.post('/item', (req, res) => {
  Items.push(req.body)
  res.status(201).json(req.body)
})

app.post('/item', (req, res) => {
  const schema = {
    name: Joi.string().min(3).require()
  }

  const result = Joi.validate(req.body, schema)
  if (error) {return res.status(400).send(result.error.details[0].message) //400 bad Request
  }

  const item = {
    id: Items.length + 1,
    name:req.body.name
  }
  Items.push(item)
  res.send(item)
    //console.log(req.body)
    //Item.push(req.body)
    //res.send(201)
})
  
app.delete('/item/:id', (req, res) => {
  const item = item.find(c => c.id === parseInt(req.params.id))
  if (!item) return res.status(404).send('The item with the given ID was not found')
   //res.send('Got a DELETE request at /user')
   //const item = this.item.filter(item => item.id !== id);
   //return item;

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