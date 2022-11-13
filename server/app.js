const express = require('express')      //require express library 
const app = express()                  //create an application 
const port = 8000
const itemRouter = require ('./routes/item.js')
const ITEM = require('./itemsD')
//const { body } = require('express-validator')
var cors = require('cors')

app.use(express.json()) //Enable json
app.use('./item.js', itemRouter)

/*app.get('/', (req, res) => {
  return res.status(200).send('<html><body>Hello world</body></html>')
})*/

app.options('*', cors())

// Serve................................................
app.listen(port, () => {
  console.log(`Example app listening on port 8000 ${port}`)
});

module.exports = app;

// Docker container exit handler - https://github.com/nodejs/node/issues/4182
process.on('SIGINT', function() {process.exit()})