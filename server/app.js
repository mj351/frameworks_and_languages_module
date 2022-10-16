const express = require('express')
const app = express()
const port = 8000

const itemList = [];

app.get('/', (req, res) => {
  res.send('<html><body>Hello World! marwan</body></html>')
})

app.get('/items', (req, res) => {
    return res.send(itemList);
  })

app.get('/item/:id', (req, res) => {
    res.send('MJ')
  })

app.post('/item', (req, res) => {
    res.send('I Got a POST request')
  })
 

app.delete('/item/:id', (req, res) => {
    res.send('Got a DELETE request at /user')
   const itemList = this.itemList.filter(item => item.id !== id);
   return itemList;
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// Docker container exit handler - https://github.com/nodejs/node/issues/4182
process.on('SIGINT', function() {process.exit()})