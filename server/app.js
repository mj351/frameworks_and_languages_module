const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
  res.send('<html><body> your HTML text</body></html>')
})

app.get('/thing', (req, res) => {
    res.send('MJ')
  })

app.post('/attendee', (req, res) => {
    res.send('I Got a POST request')
  })

app.put('/user', (req, res) => {
    res.send('Got a PUT request at /user')
  })  

app.delete('/user', (req, res) => {
    res.send('Got a DELETE request at /user')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// Docker container exit handler - https://github.com/nodejs/node/issues/4182
process.on('SIGINT', function() {process.exit()})