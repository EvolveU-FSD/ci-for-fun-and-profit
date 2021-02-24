const express = require('express')
const sum = require('./sum')

const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/jsonTest', (req, res) => {
  try {
    let jsonText = req.query.object || '{}'
    let parsedObject = JSON.parse(jsonText)     
    res.send(parsedObject)
  }
  catch(error) {
    res.sendStatus(400)
  }

})

app.get('/sum', (req, res) => {
  let q = req.query

  let result = sum(q.a, q.b, q.c, q.d, q.e, q.f)
  res.send({ sum: result })
})

app.listen(port, () => {
  console.log(`Example app listening at ${port}`)
})
